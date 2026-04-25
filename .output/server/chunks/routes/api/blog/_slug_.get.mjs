import { c as defineEventHandler, f as getRouterParam, e as createError, h as useDb } from '../../../_/nitro.mjs';
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

const _slug__get = defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: "Slug mancante." });
  }
  try {
    const { db, error } = await useDb();
    if (error || !db) {
      console.warn("Connessione database fallita (Blog Single), restituisco dati demo:", error);
      return {
        post: getDemoPost(slug),
        relatedVehicles: [],
        warning: "Utilizzo dati demo a causa di un problema di connessione."
      };
    }
    const collection = db.collection("blog_posts");
    console.log("RICERCA POST PER SLUG:", slug);
    let post = await collection.findOne({
      slug: { $regex: new RegExp(`^${slug}$`, "i") }
    });
    if (!post && slug.length === 24) {
      const { ObjectId } = await import('../../../_/nitro.mjs').then(function (n) { return n.i; });
      try {
        post = await collection.findOne({ _id: new ObjectId(slug) });
      } catch (e) {
      }
    }
    if (!post) {
      throw createError({
        statusCode: 404,
        statusMessage: "Articolo non trovato."
      });
    }
    if (!post.imageCover && post.image) {
      post.imageCover = post.image;
    }
    if (!post.slug && post.title) {
      post.slug = post.title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
    }
    let relatedVehicles = [];
    const vehicleIdsRaw = post.relatedVehicles || post.relatedMotos || [];
    if (vehicleIdsRaw.length > 0) {
      const veicoliCollection = db.collection("veicoli");
      const { ObjectId } = await import('../../../_/nitro.mjs').then(function (n) { return n.i; });
      const ids = vehicleIdsRaw.map((id) => {
        try {
          return new ObjectId(id);
        } catch (e) {
          return null;
        }
      }).filter((id) => id !== null);
      if (ids.length > 0) {
        relatedVehicles = await veicoliCollection.find({ _id: { $in: ids } }).toArray();
      }
    }
    return {
      post,
      relatedVehicles
    };
  } catch (error) {
    console.error("ERRORE BLOG GET:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Errore durante il recupero dell'articolo."
    });
  }
});
function getDemoPost(slug) {
  const demoPosts = [
    {
      title: "Nuovi Modelli Camper 2026: Tutte le Anteprime",
      slug: "nuovi-modelli-camper-2026",
      category: "Nuovi Veicoli",
      imageCover: "https://images.unsplash.com/photo-1517030330234-94c4fa948ec3?q=80&w=2070",
      excerpt: "Le ultime tendenze del settore...",
      content: "Contenuto demo per i nuovi modelli 2026.",
      date: /* @__PURE__ */ new Date(),
      autore: "Antimo Pica"
    },
    {
      title: "Guida al Rimessaggio Invernale: Proteggi il tuo Investimento",
      slug: "guida-rimessaggio-invernale",
      category: "Sicurezza e Manutenzione",
      imageCover: "https://images.unsplash.com/photo-1548680165-200543940191?q=80&w=2070",
      excerpt: "Consigli pratici per mantenere...",
      content: "Contenuto demo per il rimessaggio invernale.",
      date: new Date(Date.now() - 864e5 * 3),
      autore: "Staff Pica Caravan"
    }
  ];
  return demoPosts.find((p) => p.slug === slug);
}

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
