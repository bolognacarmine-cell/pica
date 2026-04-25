import { c as defineEventHandler, g as getQuery, h as useDb } from '../../_/nitro.mjs';
import 'bson';
import 'timers/promises';
import 'timers';
import 'fs';
import 'http';
import 'process';
import 'stream';
import 'events';
import 'util';
import 'dns';
import 'mongodb-connection-string-url';
import 'url';
import 'zlib';
import 'net';
import 'fs/promises';
import 'tls';
import 'child_process';
import '@mongodb-js/saslprep';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'node:fs';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'ipx';
import 'node:path';
import 'node:crypto';

const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const category = query.category;
  const search = query.search;
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 9;
  const skip = (page - 1) * limit;
  try {
    const { db, error } = await useDb();
    if (error || !db) {
      console.warn("Connessione database fallita (Blog), restituisco dati demo:", error);
      const demoPosts = getDemoPosts();
      return {
        posts: demoPosts,
        total: demoPosts.length,
        page: 1,
        totalPages: 1,
        warning: "Utilizzo dati demo a causa di un problema di connessione."
      };
    }
    const collection = db.collection("blog_posts");
    const filter = {};
    if (category && category !== "Tutti") filter.category = category;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } }
      ];
    }
    const total = await collection.countDocuments(filter);
    const rawPosts = await collection.find(filter).sort({ date: -1 }).skip(skip).limit(limit).toArray();
    let posts = rawPosts.map((post) => {
      const normalized = { ...post };
      if (!normalized.slug && normalized.title) {
        normalized.slug = normalized.title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
      }
      if (!normalized.imageCover && normalized.image) {
        normalized.imageCover = normalized.image;
      }
      return normalized;
    });
    if (posts.length === 0 && !category && !search) {
      console.log("Nessun articolo trovato nel blog, restituisco dati demo.");
      posts = getDemoPosts();
      return {
        posts,
        total: posts.length,
        page: 1,
        totalPages: 1,
        warning: "Visualizzazione dati demo."
      };
    }
    return {
      posts,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    };
  } catch (error) {
    console.error("ERRORE BLOG GET:", error);
    return {
      posts: getDemoPosts(),
      total: getDemoPosts().length,
      page: 1,
      totalPages: 1,
      warning: "Errore DB, visualizzazione dati demo."
    };
  }
});
function getDemoPosts() {
  const commonContent = `
## L'eccellenza nei viaggi itineranti

Il mondo dei camper e delle roulotte sta attraversando una fase di profonda trasformazione. Non si tratta pi\xF9 solo di mezzi di trasporto, ma di vere e proprie estensioni della nostra casa, dotate di ogni comfort e tecnologia.

### Comfort e Tecnologia al primo posto:
- **Domotica Integrata**: Controllo di luci, riscaldamento e livelli tramite app dedicata.
- **Efficienza Energetica**: Nuovi isolamenti termici che permettono l'uso del camper anche a -20\xB0C.
- **Design Ergonomico**: Spazi ottimizzati millimetricamente per massimizzare la vivibilit\xE0 interna.

> "Viaggiare in camper significa portare la propria casa nel mondo, senza mai rinunciare alla propria libert\xE0."

### Perch\xE9 scegliere un veicolo certificato:
Acquistare da un concessionario ufficiale come **Pica Caravan** garantisce non solo la qualit\xE0 del mezzo, ma anche un'assistenza post-vendita d'eccellenza. Ogni veicolo usato viene sottoposto a oltre 50 controlli tecnici prima della consegna.

1. Verifica impianti gas e acqua
2. Controllo infiltrazioni con igrometro professionale
3. Tagliando meccanico completo
4. Sanificazione professionale degli interni
  `;
  return [
    {
      _id: "demo1",
      title: "Nuovi Modelli Camper 2026: Tutte le Anteprime del Salone del Camper",
      slug: "nuovi-modelli-camper-2026",
      category: "Nuovi Veicoli",
      imageCover: "https://images.unsplash.com/photo-1517030330234-94c4fa948ec3?q=80&w=2070",
      excerpt: "Scopri in anteprima le novit\xE0 tecnologiche e i design rivoluzionari dei camper che vedremo sulle strade nel 2026. Dalle batterie al litio di serie alla connettivit\xE0 satellitare.",
      content: commonContent,
      date: /* @__PURE__ */ new Date(),
      autore: "Antimo Pica",
      readingTime: "5 min"
    },
    {
      _id: "demo2",
      title: "Guida Definitiva al Rimessaggio Invernale: Evita Danni da Gelo",
      slug: "guida-rimessaggio-invernale",
      category: "Sicurezza e Manutenzione",
      imageCover: "https://images.unsplash.com/photo-1548680165-200543940191?q=80&w=2070",
      excerpt: "Il gelo pu\xF2 essere il peggior nemico del tuo camper. Segui i nostri consigli esperti per svuotare gli impianti e proteggere le guarnizioni durante la sosta invernale.",
      content: commonContent,
      date: new Date(Date.now() - 864e5 * 3),
      autore: "Staff Tecnico Pica",
      readingTime: "8 min"
    },
    {
      _id: "demo3",
      title: "Van Life in Campania: I 5 Itinerari Segreti tra Mare e Montagna",
      slug: "itinerari-van-life-campania",
      category: "Guide per Viaggiatori",
      imageCover: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2000",
      excerpt: "Dalla Costiera Cilentana ai borghi dell'Irpinia: una guida pratica su dove sostare in sicurezza e godersi panorami mozzafiato con il proprio van.",
      content: commonContent,
      date: new Date(Date.now() - 864e5 * 7),
      autore: "Antimo Pica",
      readingTime: "6 min"
    },
    {
      _id: "demo4",
      title: "Sicurezza Stradale in Camper: Consigli per la Guida di Mezzi Ingombranti",
      slug: "sicurezza-stradale-camper",
      category: "Codice della Strada",
      imageCover: "https://images.unsplash.com/photo-1513313778780-9ae4807465f0?q=80&w=2070",
      excerpt: "Guidare un camper richiede attenzione e tecnica. Scopri come gestire gli angoli ciechi, le manovre in retromarcia e la stabilit\xE0 in caso di vento forte.",
      content: commonContent,
      date: new Date(Date.now() - 864e5 * 10),
      autore: "Staff Pica Caravan",
      readingTime: "7 min"
    },
    {
      _id: "demo5",
      title: "Finanziamento Camper: Come Scegliere la Soluzione su Misura",
      slug: "finanziamento-camper-guida",
      category: "Eventi",
      imageCover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011",
      excerpt: "Sogni un nuovo camper ma non sai come affrontare l'investimento? Analizziamo le opzioni di finanziamento, tassi d'interesse e piani di ammortamento flessibili.",
      content: commonContent,
      date: new Date(Date.now() - 864e5 * 14),
      autore: "Ufficio Vendite Pica",
      readingTime: "5 min"
    },
    {
      _id: "demo6",
      title: "Pannelli Solari per Camper: Conviene Davvero l'Investimento?",
      slug: "pannelli-solari-camper-conviene",
      category: "Sicurezza e Manutenzione",
      imageCover: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070",
      excerpt: "Autonomia energetica totale: scopri come scegliere il kit solare giusto per il tuo camper e quali sono i reali vantaggi in termini di indipendenza.",
      content: commonContent,
      date: new Date(Date.now() - 864e5 * 20),
      autore: "Staff Tecnico Pica",
      readingTime: "9 min"
    }
  ];
}

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
