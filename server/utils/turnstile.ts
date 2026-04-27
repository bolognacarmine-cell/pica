import { createError, getHeader } from 'h3'

const getClientIp = (event): string => {
  const xff = (getHeader(event, 'x-forwarded-for') || '').toString()
  if (xff) return xff.split(',')[0]?.trim() || 'unknown'
  return event.node?.req?.socket?.remoteAddress || 'unknown'
}

export const verifyTurnstile = async (event, token: string | undefined) => {
  const config = useRuntimeConfig(event)
  const secretKey = (config.turnstileSecretKey as string) || process.env.TURNSTILE_SECRET_KEY

  if (process.dev && !secretKey) return

  if (!secretKey) {
    throw createError({ statusCode: 500, statusMessage: 'TURNSTILE_SECRET_KEY non configurata.' })
  }

  if (!token) {
    throw createError({ statusCode: 400, statusMessage: 'Turnstile token mancante.' })
  }

  const testSecretAlwaysPass = '1x0000000000000000000000000000000AA'
  const testDummyToken = 'XXXX.DUMMY.TOKEN.XXXX'
  if (secretKey === testSecretAlwaysPass) {
    if (token === testDummyToken) return
    throw createError({ statusCode: 403, statusMessage: 'Turnstile verification failed.' })
  }

  const ip = getClientIp(event)
  const form = new URLSearchParams()
  form.set('secret', secretKey)
  form.set('response', token)
  form.set('remoteip', ip)

  let res: Response
  try {
    res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: form,
      signal: AbortSignal.timeout(5000)
    })
  } catch {
    throw createError({ statusCode: 503, statusMessage: 'Turnstile verification unavailable.' })
  }

  const data = await res.json().catch(() => null)
  if (!data?.success) {
    throw createError({ statusCode: 403, statusMessage: 'Turnstile verification failed.' })
  }
}
