import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const demoPosts = [
  {
    title: "Notizie Camper: Nuovi Modelli e Innovazioni Tecnologiche 2026",
    slug: "notizie-camper-nuovi-modelli-2026",
    category: "Nuovi Veicoli",
    imageCover: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Scopri le ultime tendenze del settore camper: dai motori Euro 5+ alle innovazioni su sicurezza e connettività.",
    content: `# Notizie Camper: Nuovi Modelli e Innovazioni Tecnologiche

Il mondo dei viaggi itineranti sta attraversando una fase di trasformazione senza precedenti. Nel 2026, l'attenzione dei costruttori è focalizzata su un equilibrio perfetto tra prestazioni pure, sostenibilità ambientale e sicurezza proattiva. Che tu sia un amante dei van agili, un viaggiatore instancabile in sella a un motorhome o un amante delle roulotte, le novità di quest'anno promettono di rivoluzionare la tua esperienza di viaggio.

## Tendenze e Nuovi Modelli in Arrivo

I listini dei principali produttori si arricchiscono di modelli sempre più sofisticati. Vediamo una forte spinta verso i motori **Euro 5+**, che non solo riducono le emissioni ma ottimizzano l'erogazione grazie a una gestione elettronica affinata. I van compatti continuano a dominare il mercato, ma assistiamo a un ritorno prepotente dei profilati, spaziosi e confortevoli, ideali per chi cerca il massimo piacere di viaggio senza compromessi.

## Elettronica, Sicurezza e Comfort: La Nuova Frontiera

La vera rivoluzione avviene sotto la carrozzeria. Le innovazioni tecnologiche oggi riguardano principalmente:
- **Sistemi di assistenza alla guida (ADAS):** Radar anteriori e posteriori per il cruise control adattivo e il monitoraggio dell'angolo cieco.
- **Domotica Integrata:** Gestione remota di riscaldamento, livelli acqua e batterie tramite app dedicata.
- **Connettività Satellitare:** Sistemi Starlink integrati per avere internet ovunque, anche nei luoghi più remoti.
- **Sospensioni Autolivellanti:** Regolazione automatica per un comfort massimo durante la sosta e la marcia.

## Perché queste novità interessano chi vuole comprare un camper oggi

Investire in un modello di ultima generazione significa non solo avere un mezzo più performante, ma soprattutto più sicuro e confortevole. Le nuove tecnologie riducono drasticamente lo stress da guida e aumentano il comfort durante la sosta, rendendo il camper una vera e propria casa su ruote godibile in ogni condizione.

Passa a trovarci da **Pica Caravan** per scoprire dal vivo queste innovazioni e prenotare una visita sui nuovi modelli 2026!

*Ti è piaciuto questo articolo? Leggi anche le nostre guide sulla manutenzione o scopri i prossimi raduni nella sezione Mondo Pica Caravan.*`,
    date: new Date(),
    autore: "Pica Caravan Team",
    relatedMotos: []
  },
  {
    title: "Codice della Strada: Aggiornamenti Normativi per Caravan e Camper",
    slug: "aggiornamenti-codice-strada-camper",
    category: "Codice della Strada",
    imageCover: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Guida aggiornata sulle nuove regole del Codice della Strada: pesi, patenti e sanzioni per chi guida un veicolo ricreazionale.",
    content: `# Codice della Strada: Cosa Cambia per chi Guida un Camper o Caravan

Rimanere aggiornati sulle normative è fondamentale per ogni viaggiatore, non solo per evitare sanzioni, ma soprattutto per garantire la propria sicurezza e quella degli altri utenti della strada. In questo articolo analizziamo le ultime novità legislative che interessano il mondo dei veicoli ricreazionali.

## Cosa Cambia: Le Nuove Regole

Le recenti modifiche al Codice della Strada hanno introdotto norme più stringenti per la circolazione dei mezzi pesanti e ingombranti. L'obiettivo è chiaro: ridurre il numero di sinistri che coinvolgono utenti vulnerabili. Particolare attenzione è stata posta alla gestione dei pesi e alle patenti necessarie per i mezzi oltre le 3.5 tonnellate.

## Le Regole che Riguardano i Camperisti

Ecco i punti chiave da tenere a mente:
- **Limiti di Peso:** Maggiore rigore nelle pesate autostradali. Assicurati che il tuo mezzo rientri nei limiti della tua patente (B o C1).
- **Comportamento nel Traffico:** Rispetto delle distanze di sicurezza e dei limiti di velocità specifici per i mezzi oltre le 3.5t o con rimorchio.
- **Documentazione:** Assicurati di avere sempre con te patente, libretto di circolazione e certificato di assicurazione (anche in formato digitale).

## Sanzioni e Controlli

Le sanzioni per il sovraccarico sono state inasprite. Anche la revisione periodica del veicolo è monitorata con maggiore rigore attraverso sistemi elettronici di lettura targa.

## Come Evitare Errori alla Guida

La conoscenza della norma è il primo passo per una guida serena. Rispetta sempre le precedenze, mantieni la distanza di sicurezza e adegua la velocità alle dimensioni del tuo veicolo.

### 5 Consigli Pratici per Guidare in Regola:
1. Controlla sempre la scadenza di revisione e assicurazione.
2. Pesa il tuo camper a pieno carico prima di ogni lungo viaggio.
3. Segnala ogni manovra con gli indicatori di direzione in anticipo.
4. Non sostare mai dove espressamente vietato ai veicoli ricreazionali.
5. Mantieni la calma anche nei tratti stradali più stretti.

*Nota: Le normative possono subire ulteriori variazioni. Ti invitiamo a consultare sempre i canali ufficiali del Ministero delle Infrastrutture e dei Trasporti per gli aggiornamenti in tempo reale.*`,
    date: new Date(Date.now() - 86400000),
    autore: "Pica Caravan Team",
    relatedMotos: []
  },
  {
    title: "Sicurezza in Camper: Consigli di Viaggio e Manutenzione Essenziale",
    slug: "sicurezza-e-manutenzione-camper-guida",
    category: "Sicurezza e Manutenzione",
    imageCover: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2000&auto=format&fit=crop",
    excerpt: "La sicurezza inizia dal rimessaggio. Scopri i controlli pre-partenza e le abitudini di viaggio che garantiscono una vacanza serena.",
    content: `# Sicurezza in Camper: La Tua Guida Pratica

Essere un camperista consapevole significa sapere che la sicurezza dipende da tre fattori: lo stato del mezzo, l'attrezzatura e lo stile di guida. In questa guida pratica, esploriamo come minimizzare i rischi e massimizzare il piacere di ogni viaggio.

## Controlli da Fare Prima di Partire

Non metterti mai in viaggio senza aver dato un'occhiata veloce ma attenta al tuo camper. Bastano pochi minuti per prevenire problemi seri:
- **Pneumatici:** Controlla la pressione (a freddo) e l'usura del battistrada. Gomme sgonfie o vecchie su mezzi pesanti sono pericolosissime.
- **Impianto Gas:** Verifica che le bombole siano chiuse correttamente durante la marcia e che non ci siano perdite.
- **Liquidi:** Un rapido controllo al livello dell'olio e del liquido di raffreddamento, oltre ai livelli delle acque.

## Manutenzione che Aiuta a Prevenire Problemi

Oltre ai controlli quotidiani, la manutenzione regolare è la tua migliore alleata:
- **Freni e Sospensioni:** Monitora lo stato delle pastiglie e la risposta degli ammortizzatori. Un mezzo carico necessita di freni al top.
- **Sigillature:** Controlla annualmente le sigillature del tetto e delle finestre per evitare infiltrazioni dannose.
- **Batterie Servizi:** Verifica lo stato di carica e l'efficienza dei pannelli solari.

## Abitudini di Guida che Aumentano la Sicurezza

La strada richiede attenzione. Adottare uno stile di guida prudente è fondamentale:
- **Distanza di Sicurezza:** Ricorda che lo spazio di frenata di un camper è molto superiore a quello di un'auto.
- **Vento Laterale:** Presta attenzione quando esci dalle gallerie o sorpassi mezzi pesanti.
- **Stivaggio Carico:** Assicurati che tutto sia ben fissato all'interno per evitare spostamenti pericolosi in curva.

### Checklist Essenziale Pre-Partenza:
- [ ] Pressione pneumatici corretta (inclusa scorta)
- [ ] Chiusura sicura di tutti i gavoni e finestre
- [ ] Controllo impianto gas e acqua
- [ ] Fissaggio oggetti interni
- [ ] Controllo luci e segnaletica rimorchio

La prevenzione è il segreto per godersi il viaggio per molti anni. Ti aspettiamo da **Pica Caravan** per un check-up completo del tuo veicolo!`,
    date: new Date(Date.now() - 86400000 * 2),
    autore: "Pica Caravan Team",
    relatedMotos: []
  },
  {
    title: "Guide per Viaggiatori: Come Scegliere l'Attrezzatura da Campeggio",
    slug: "guide-per-camperisti-attrezzatura",
    category: "Guide per Viaggiatori",
    imageCover: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Veranda o tendalino? Litio o AGM? La nostra guida alla scelta degli accessori perfetti per il tuo camper.",
    content: `# Guida all'Attrezzatura: Comfort in Ogni Sosta

Scegliere gli accessori giusti non è solo una questione di estetica, ma di comfort e autonomia energetica. La tecnologia degli accessori ha fatto passi da gigante, offrendo oggi soluzioni leggere, efficienti e facili da usare.

## L'Energia: Il Cuore dell'Autonomia

Le batterie al **Litio (LiFePO4)** sono ormai lo standard per chi cerca vera autonomia. Abbinate a pannelli solari ad alta efficienza e inverter a onda pura, ti permettono di usare macchine del caffè e phon come a casa.

## Comfort Esterno

- **Verande e Tendalini:** Essenziali per creare una zona d'ombra. La scelta dipende dal tipo di vacanza (stanziale o itinerante).
- **Arredo da Esterno:** Tavoli e sedie leggeri in alluminio sono la scelta migliore per non appesantire il veicolo.

## Sicurezza e Livellamento

Non sottovalutare l'importanza di buoni cunei di livellamento o, per il massimo comfort, dei piedini idraulici autolivellanti. Anche un buon antifurto perimetrale e volumetrico è fondamentale per dormire sonni tranquilli.

Passa nel nostro store per scoprire le ultime novità e farti consigliare dai nostri esperti!`,
    date: new Date(Date.now() - 86400000 * 3),
    autore: "Pica Caravan Team",
    relatedMotos: []
  },
  {
    title: "Viaggi Itineranti: Perché Scegliere un Van nel 2026",
    slug: "viaggi-van-life-2026",
    category: "Van Life",
    imageCover: "https://images.unsplash.com/photo-1515777315835-281b94c9589f?q=80&w=2024&auto=format&fit=crop",
    excerpt: "Agilità, parcheggio e libertà: tutto quello che devi sapere sulla rivoluzione dei camper puri.",
    content: `# La Rivoluzione dei Camper Puri (Van)

Il modo di viaggiare sta cambiando. Sempre più viaggiatori scelgono la libertà dei van per la loro incredibile agilità e versatilità.

## I Vantaggi del Van

I van di ultima generazione offrono tutti i comfort di un camper tradizionale in dimensioni ridotte. Sono facili da guidare, si parcheggiano quasi ovunque e permettono di raggiungere luoghi inaccessibili ai mezzi più grandi.

## Tecnologia e Spazi Ottimizzati

Grazie a letti basculanti, bagni a scomparsa e cucine compatte, i van moderni sfruttano ogni centimetro quadrato. L'isolamento termico migliorato li rende perfetti anche per il campeggio invernale.

## Stile di Vita Libero

Il van non è solo un mezzo di trasporto, è uno stile di vita. Ti permette di cambiare panorama ogni mattina e di vivere a stretto contatto con la natura senza rinunciare alle comodità di base.

Scopri la nostra gamma di van da **Pica Caravan** e inizia la tua prossima avventura!`,
    date: new Date(Date.now() - 86400000 * 4),
    autore: "Pica Caravan Team",
    relatedMotos: []
  },
  {
    title: "Evento: Raduno Pica Caravan 2026",
    slug: "raduno-pica-caravan-2026",
    category: "Eventi",
    imageCover: "https://images.unsplash.com/photo-1515777315835-281b94c9589f?q=80&w=2024&auto=format&fit=crop",
    excerpt: "Torna l'appuntamento più atteso dell'anno. Unisciti a noi per una giornata di condivisione e passione per il viaggio.",
    content: "# Raduno Pica Caravan 2026\n\nSiete pronti a partire? Il raduno annuale si terrà il prossimo 15 Maggio.\n\n## Il Percorso\n\nPartiremo dalla nostra sede per un tour panoramico che ci porterà tra i borghi più belli della nostra regione.\n\n## Programma:\n- 09:00 Ritrovo e colazione in sede\n- 10:30 Partenza carovana\n- 13:30 Pranzo in agriturismo convenzionato\n- 16:00 Premiazioni e saluti",
    date: new Date(Date.now() - 86400000 * 5),
    autore: "Pica Caravan Team",
    relatedMotos: []
  }
];

async function seedBlog() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI non trovata nel .env');
    return;
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(process.env.MONGODB_DB_NAME || 'picacaravan_db');
    const collection = db.collection('blog_posts');

    // Svuota collezione esistente (opzionale)
    // await collection.deleteMany({});

    // Inserisci solo se vuoto o aggiungi nuovi
    for (const post of demoPosts) {
      // Usiamo il titolo come chiave per trovare se esiste, ma aggiorniamo sempre lo slug
      const exists = await collection.findOne({ title: post.title });
      if (!exists) {
        await collection.insertOne(post);
        console.log(`✅ Articolo inserito: ${post.title}`);
      } else {
        await collection.updateOne(
          { title: post.title }, 
          { $set: { slug: post.slug, content: post.content, imageCover: post.imageCover } }
        );
        console.log(`ℹ️ Articolo aggiornato (slug & content): ${post.title}`);
      }
    }

    console.log('\n--- SEED BLOG COMPLETATO ---');
  } catch (err) {
    console.error('Errore durante il seed:', err);
  } finally {
    await client.close();
  }
}

seedBlog();
