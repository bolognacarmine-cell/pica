import { c as defineEventHandler, f as getRouterParam, h as useDb, l as libExports, e as createError } from '../../../_/nitro.mjs';
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

const _id__get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  try {
    const { db, error } = await useDb();
    if (error || !db) {
      console.warn("Connessione database fallita (Veicolo Single), restituisco dati demo:", error);
      return {
        vehicle: getDemoVehicle(id),
        warning: "Utilizzo dati demo a causa di un problema di connessione."
      };
    }
    const collection = db.collection("veicoli");
    let vehicle = null;
    if (id && libExports.ObjectId.isValid(id)) {
      vehicle = await collection.findOne({ _id: new libExports.ObjectId(id) });
    }
    if (!vehicle) {
      vehicle = await collection.findOne({ slug: id });
    }
    if (!vehicle) {
      vehicle = getDemoVehicle(id);
    }
    if (!vehicle) {
      throw createError({
        statusCode: 404,
        statusMessage: "Veicolo non trovato"
      });
    }
    return {
      vehicle
    };
  } catch (error) {
    console.error("ERRORE MONGODB (SINGLE GET):", error.message);
    const demo = getDemoVehicle(id);
    if (demo) {
      console.log("Restituisco dati demo per fallback:", id);
      return { vehicle: demo };
    }
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Errore durante il recupero del veicolo."
    });
  }
});
function getDemoVehicle(identifier) {
  if (!identifier) return null;
  const demoVehicles = [
    {
      _id: "demo1",
      marca: "Hymer",
      modello: "B-Class ModernComfort",
      categoria: "Motorhome",
      anno: 2023,
      prezzo: 95e3,
      chilometri: 12e3,
      nuovaUsata: "Usato Garantito",
      stato: "Ottime condizioni",
      descrizione: "Motorhome di lusso con ampi spazi e finiture premium.",
      immagini: ["https://images.unsplash.com/photo-1513313778780-9ae4807465f0?auto=format&fit=crop&q=80&w=800"],
      slug: "hymer-b-class-modern-comfort"
    },
    {
      _id: "demo2",
      marca: "Knaus",
      modello: "Sport 500 QDK",
      categoria: "Roulotte",
      anno: 2024,
      prezzo: 28500,
      nuovaUsata: "Nuovo",
      stato: "In pronta consegna",
      descrizione: "Roulotte familiare spaziosa con letti a castello e garage.",
      immagini: ["https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800"],
      slug: "knaus-sport-500-qdk"
    },
    {
      _id: "demo3",
      marca: "Adria",
      modello: "Twin Supreme 640 SLB",
      categoria: "Van",
      anno: 2022,
      prezzo: 62e3,
      chilometri: 25e3,
      nuovaUsata: "Usato",
      stato: "Unico proprietario",
      descrizione: "Van compatto e maneggevole, perfetto per la coppia.",
      immagini: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"],
      slug: "adria-twin-supreme-640-slb"
    }
  ];
  return demoVehicles.find((v) => v._id === identifier || v.slug === identifier);
}

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
