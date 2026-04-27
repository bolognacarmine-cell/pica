import { createError, defineEventHandler, getHeader } from 'h3'

type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

const now = () => Date.now()

const getClientIp = (event): string => {
  const xff = (getHeader(event, 'x-forwarded-for') || '').toString()
  if (xff) return xff.split(',')[0]?.trim() || 'unknown'
  return event.node?.req?.socket?.remoteAddress || 'unknown'
}

const take = (key: string, windowMs: number, limit: number) => {
  const t = now()
  const existing = buckets.get(key)
  if (!existing || existing.resetAt <= t) {
    buckets.set(key, { count: 1, resetAt: t + windowMs })
    return { allowed: true, remaining: limit - 1 }
  }

  if (existing.count >= limit) return { allowed: false, remaining: 0 }

  existing.count += 1
  return { allowed: true, remaining: limit - existing.count }
}

export default defineEventHandler((event) => {
  const path = event.path || event.node?.req?.url || ''
  const method = (event.node?.req?.method || '').toUpperCase()

  if (method !== 'POST') return

  const isLeads = path.startsWith('/api/leads')
  const isTradeIns = path.startsWith('/api/trade-ins')
  if (!isLeads && !isTradeIns) return

  const ip = getClientIp(event)
  const windowMs = 60_000
  const limit = isTradeIns ? 3 : 6
  const key = `${ip}:${isLeads ? 'leads' : 'trade-ins'}`
  const res = take(key, windowMs, limit)

  if (!res.allowed) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too Many Requests'
    })
  }
})
