import { createError, defineEventHandler, getHeader } from 'h3'

export default defineEventHandler((event) => {
  const path = event.path || event.node?.req?.url || ''
  if (!path.startsWith('/api/admin')) return

  const config = useRuntimeConfig(event)
  const expectedKey = config.adminApiKey || process.env.ADMIN_API_KEY || process.env.NUXT_ADMIN_API_KEY

  if (process.dev && !expectedKey) {
    console.warn('🚀 [DEV MODE] ADMIN_API_KEY non impostata → middleware admin completamente bypassato (nessuna protezione su /api/admin/*)')
    return
  }

  if (!expectedKey) {
    throw createError({ statusCode: 500, statusMessage: 'ADMIN_API_KEY non configurata.' })
  }

  const providedKey = getHeader(event, 'x-admin-key')
  if (!providedKey || providedKey !== expectedKey) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized: Invalid or missing admin API key' })
  }
})
