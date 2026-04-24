import { MongoClient, Db } from 'mongodb'

let client: MongoClient | null = null
let db: Db | null = null

export const useDb = async () => {
  const config = useRuntimeConfig()
  const mongodbUri = config.mongodbUri as string
  const mongodbDbName = (config.mongodbDbName as string) || 'Pica'

  if (!mongodbUri) {
    // Invece di lanciare un errore, restituiamo un oggetto che indica la mancanza di config
    // per permettere agli endpoint di gestire il fallback demo
    return { db: null, client: null, error: 'MONGODB_URI non configurata' }
  }

  if (db) return { db, client, error: null }

  if (!client) {
    client = new MongoClient(mongodbUri)
  }

  try {
    await client.connect()
    db = client.db(mongodbDbName)
    console.log('--- Connessione MongoDB stabilita con successo ---')
    return { db, client, error: null }
  } catch (error: any) {
    const msg = error?.message || ''
    
    // Se l'errore è un SSL alert internal error, è quasi certamente un problema di IP Whitelist su Atlas
    if (msg.includes('SSL routines') || msg.includes('alert internal error')) {
      console.error('--- ERRORE CRITICO: Accesso MongoDB negato (SSL Alert 80). ---')
      console.error('--- Suggerimento: Verifica che l\'indirizzo IP corrente sia in Whitelist su MongoDB Atlas. ---')
      console.error('--- Per Render: Aggiungi 0.0.0.0/0 alla whitelist o usa IP specifici del servizio ---')
    } else {
      console.error('--- Errore connessione MongoDB:', msg)
    }

    // Reset del client per permettere tentativi puliti successivi
    if (client) {
      try {
        await client.close()
      } catch (e) {
        console.error('Errore chiusura client:', e)
      }
    }
    client = null
    db = null
    
    return { db: null, client: null, error: msg }
  }
}
