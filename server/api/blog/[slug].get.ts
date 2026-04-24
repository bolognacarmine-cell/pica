import { defineEventHandler, createError, getRouterParam } from 'h3'
import { MongoClient } from 'mongodb'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug mancante.' })
  }

  try {
    const { db, error } = await useDb()

    if (error || !db) {
      console.warn('Connessione database fallita (Blog Single), restituisco dati demo:', error)
      return {
        post: getDemoPost(slug),
        relatedVehicles: [],
        warning: 'Utilizzo dati demo a causa di un problema di connessione.'
      }
    }

    const collection = db.collection('blog_posts')

    console.log('RICERCA POST PER SLUG:', slug)
    // Cerchiamo l'articolo per slug (case-insensitive)
    let post = await collection.findOne({ 
      slug: { $regex: new RegExp(`^${slug}$`, 'i') } 
    })

    // Fallback: se lo slug è un ID MongoDB valido, prova a cercare per ID
    if (!post && slug.length === 24) {
      const { ObjectId } = await import('mongodb')
      try {
        post = await collection.findOne({ _id: new ObjectId(slug) })
      } catch (e) {
        // Non un ObjectId valido
      }
    }
    
    if (!post) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Articolo non trovato.'
      })
    }

    // Normalizzazione post
    if (!post.imageCover && post.image) {
      post.imageCover = post.image
    }
    if (!post.slug && post.title) {
      post.slug = post.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')
    }

    // Recupera veicoli correlati
    let relatedVehicles = []
    // Supporto sia per relatedVehicles che per relatedMotos (visto nel seed)
    const vehicleIdsRaw = post.relatedVehicles || post.relatedMotos || []
    
    if (vehicleIdsRaw.length > 0) {
      const veicoliCollection = db.collection('veicoli')
      const { ObjectId } = await import('mongodb')
      
      const ids = vehicleIdsRaw.map((id: string) => {
        try { return new ObjectId(id) } catch (e) { return null }
      }).filter((id: any) => id !== null)
      
      if (ids.length > 0) {
        relatedVehicles = await veicoliCollection.find({ _id: { $in: ids } }).toArray()
      }
    }

    return {
      post,
      relatedVehicles
    }

  } catch (error: any) {
    console.error('ERRORE BLOG GET:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Errore durante il recupero dell\'articolo.'
    })
  }
})

function getDemoPost(slug: string) {
  const demoPosts = [
    {
      title: 'Nuovi Modelli Camper 2026: Tutte le Anteprime',
      slug: 'nuovi-modelli-camper-2026',
      category: 'Nuovi Veicoli',
      imageCover: 'https://images.unsplash.com/photo-1517030330234-94c4fa948ec3?q=80&w=2070',
      excerpt: 'Le ultime tendenze del settore...',
      content: 'Contenuto demo per i nuovi modelli 2026.',
      date: new Date(),
      autore: 'Antimo Pica'
    },
    {
      title: 'Guida al Rimessaggio Invernale: Proteggi il tuo Investimento',
      slug: 'guida-rimessaggio-invernale',
      category: 'Sicurezza e Manutenzione',
      imageCover: 'https://images.unsplash.com/photo-1548680165-200543940191?q=80&w=2070',
      excerpt: 'Consigli pratici per mantenere...',
      content: 'Contenuto demo per il rimessaggio invernale.',
      date: new Date(Date.now() - 86400000 * 3),
      autore: 'Staff Pica Caravan'
    }
  ]
  return demoPosts.find(p => p.slug === slug)
}
