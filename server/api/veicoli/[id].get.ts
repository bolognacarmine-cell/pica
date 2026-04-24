
import { defineEventHandler, getRouterParam, createError } from 'h3'
import { MongoClient, ObjectId } from 'mongodb'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  try {
    const { db, error } = await useDb()

    if (error || !db) {
      console.warn('Connessione database fallita (Veicolo Single), restituisco dati demo:', error)
      return {
        vehicle: getDemoVehicle(id),
        warning: 'Utilizzo dati demo a causa di un problema di connessione.'
      }
    }

    const collection = db.collection('veicoli')

    let vehicle = null

    if (id && ObjectId.isValid(id)) {
      vehicle = await collection.findOne({ _id: new ObjectId(id) })
    }
    
    // 2. Se non trovato o ID non valido, cerca per slug
    if (!vehicle) {
      vehicle = await collection.findOne({ slug: id })
    }

    // 3. Se ancora non trovato, cerca nei dati demo
    if (!vehicle) {
      vehicle = getDemoVehicle(id)
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
    
    // Fallback ai dati demo in caso di errore DB
    const demo = getDemoVehicle(id)
    if (demo) {
      console.log('Restituisco dati demo per fallback:', id)
      return { vehicle: demo }
    }

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Errore durante il recupero del veicolo.'
    })
  }
})

// Funzione helper per dati demo
function getDemoVehicle(identifier: string | undefined) {
  if (!identifier) return null
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
  return demoVehicles.find(v => v._id === identifier || v.slug === identifier)
}
