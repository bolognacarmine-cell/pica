import { defineEventHandler, createError } from 'h3'
import { MongoClient } from 'mongodb'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event) // Auto-importato in Nuxt 3 server
  
  if (!config.mongodbUri) {
    console.error('ERRORE: MONGODB_URI non definita nelle variabili d\'ambiente!')
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
    console.log('Tentativo di connessione a MongoDB...')
    await client.connect()
    console.log('Connesso con successo al database:', config.mongodbDbName)
    
    const db = client.db(config.mongodbDbName)
    const collection = db.collection('veicoli')

    // Recupera tutti i veicoli ordinati per data di creazione (più recenti prima)
    const vehicles = await collection.find({}).sort({ createdAt: -1 }).toArray()
    console.log(`Recuperati ${vehicles.length} veicoli dal database.`)

    // Se non ci sono veicoli, restituiamo dati demo realistici
    if (vehicles.length === 0) {
      return {
        vehicles: [
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
            descrizione: 'Motorhome di lusso con ampi spazi e finiture premium.',
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
            descrizione: 'Roulotte familiare spaziosa con letti a castello e garage.',
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
            descrizione: 'Van compatto e maneggevole, perfetto per la coppia.',
            immagini: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'],
            slug: 'adria-twin-supreme-640-slb'
          }
        ]
      }
    }

    return {
      vehicles
    }

  } catch (error: any) {
    const errorMessage = error?.message || 'Errore sconosciuto'
    console.error('ERRORE CRITICO MONGODB (GET):', errorMessage)
    
    let userFriendlyMessage = errorMessage
    if (errorMessage.includes('querySrv')) {
      userFriendlyMessage = 'Problema DNS locale: Non riesco a risolvere l\'indirizzo di MongoDB Atlas. Prova a cambiare i DNS del tuo PC in 8.8.8.8 o 1.1.1.1.'
    } else if (errorMessage.includes('Authentication failed')) {
      userFriendlyMessage = 'ERRORE DI AUTENTICAZIONE: La password o lo username del Database User in Atlas sono errati. Controlla il file .env.'
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Errore di connessione al database.',
      message: userFriendlyMessage
    })
  } finally {
    await client.close()
  }
})
