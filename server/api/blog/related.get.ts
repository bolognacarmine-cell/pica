import { defineEventHandler, createError, getQuery } from 'h3'
import { MongoClient } from 'mongodb'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const query = getQuery(event)
  const vehicleId = (query.vehicleId || query.motoId) as string

  if (!vehicleId) {
    throw createError({ statusCode: 400, statusMessage: 'Identificativo veicolo mancante.' })
  }

  if (!config.mongodbUri) {
    throw createError({ statusCode: 500, statusMessage: 'Database non configurato.' })
  }

  const client = new MongoClient(config.mongodbUri as string)

  try {
    await client.connect()
    const db = client.db(config.mongodbDbName || 'Pica')
    const collection = db.collection('blog_posts')

    // Trova articoli che hanno questo vehicleId nell'array relatedVehicles o relatedMotos
    const posts = await collection.find({ 
      $or: [
        { relatedVehicles: { $in: [vehicleId] } },
        { relatedMotos: { $in: [vehicleId] } }
      ]
    }).sort({ date: -1 }).limit(3).toArray()

    return {
      posts
    }

  } catch (error: any) {
    console.error('ERRORE BLOG RELATED GET:', error)
    throw createError({ statusCode: 500, statusMessage: 'Errore durante il recupero degli articoli correlati.' })
  } finally {
    await client.close()
  }
})
