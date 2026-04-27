import { createError, defineEventHandler, getHeader } from 'h3'

export default defineEventHandler((event) => {
  const path = event.path || event.node?.req?.url || ''
  const method = (event.node?.req?.method || '').toUpperCase()

  const isWrite = method === 'POST' || method === 'PUT' || method === 'PATCH' || method === 'DELETE'
  const needsAuth =
    (path.startsWith('/api/veicoli') && isWrite) ||
    (path.startsWith('/api/blog') && isWrite) ||
    (path.startsWith('/api/leads') && method === 'GET')

  if (!needsAuth) return

  const config = useRuntimeConfig(event)
  const expectedKey = config.adminApiKey || process.env.ADMIN_API_KEY || process.env.NUXT_ADMIN_API_KEY

  if (process.dev && !expectedKey) {
    console.warn('🚀 [DEV MODE] ADMIN_API_KEY non impostata → protezione write bypassata (nessuna protezione su /api/blog/*, /api/veicoli/*, /api/leads GET)')
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
