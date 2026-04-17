
import { defineEventHandler, getRouterParam, createError } from 'h3'
import { MongoClient, ObjectId } from 'mongodb'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID mancante'
    })
  }

  if (!config.mongodbUri) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Configurazione database mancante.'
    })
  }

  const mongodbUri = config.mongodbUri as string
  const client = new MongoClient(mongodbUri, {
    connectTimeoutMS: 10000,
    serverSelectionTimeoutMS: 10000
  })

  try {
    await client.connect()
    const db = client.db(config.mongodbDbName)
    const collection = db.collection('veicoli')

    let vehicle = null
    
    // Gestione ID demo
    if (id.startsWith('demo')) {
      const demoVehicles = [
        {
          _id: 'demo1',
          marca: 'Hymer',
          modello: 'B-Class ModernComfort',
          categoria: 'Motorhome',
          anno: 2023,
          prezzo: 95000,
          chilometri: 12000,
          nuovaUsata: 'Usato Garantito',
          stato: 'Ottime condizioni',
          descrizione: 'Motorhome di lusso con ampi spazi e finiture premium. Equipaggiato con pannelli solari, clima cellula e antenna satellitare.',
          immagini: ['https://images.unsplash.com/photo-1513313778780-9ae4807465f0?auto=format&fit=crop&q=80&w=800'],
          slug: 'hymer-b-class-modern-comfort'
        },
        {
          _id: 'demo2',
          marca: 'Knaus',
          modello: 'Sport 500 QDK',
          categoria: 'Roulotte',
          anno: 2024,
          prezzo: 28500,
          nuovaUsata: 'Nuovo',
          stato: 'In pronta consegna',
          descrizione: 'Roulotte familiare spaziosa con letti a castello e garage. Perfetta per vacanze in famiglia in totale libertà.',
          immagini: ['https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800'],
          slug: 'knaus-sport-500-qdk'
        },
        {
          _id: 'demo3',
          marca: 'Adria',
          modello: 'Twin Supreme 640 SLB',
          categoria: 'Van',
          anno: 2022,
          prezzo: 62000,
          chilometri: 25000,
          nuovaUsata: 'Usato',
          stato: 'Unico proprietario',
          descrizione: 'Van compatto e maneggevole, perfetto per la coppia. Allestimento Supreme con tetto panoramico.',
          immagini: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'],
          slug: 'adria-twin-supreme-640-slb'
        }
      ]
      vehicle = demoVehicles.find(v => v._id === id)
    } else {
      vehicle = await collection.findOne({ _id: new ObjectId(id) })
    }

    if (!vehicle) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Veicolo non trovato'
      })
    }

    return {
      vehicle
    }

  } catch (error: any) {
    console.error('ERRORE MONGODB (SINGLE GET):', error.message)
    if (error.statusCode) throw error
    throw createError({
      statusCode: 500,
      statusMessage: 'Errore durante il recupero del veicolo.',
      message: error.message
    })
  } finally {
    await client.close()
  }
})
