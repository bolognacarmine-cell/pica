import { c as defineEventHandler, u as useRuntimeConfig, g as getQuery, e as createError, l as libExports } from '../../../_/nitro.mjs';
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

const data_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const query = getQuery(event);
  const targa = query.targa;
  if (!targa) {
    throw createError({
      statusCode: 400,
      statusMessage: "Targa mancante."
    });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const vehicle = await db.collection("portal_vehicles").findOne({ targa: targa.toUpperCase() });
    const maintenance = await db.collection("portal_maintenance").find({ targa: targa.toUpperCase() }).sort({ date: -1 }).toArray();
    const documents = await db.collection("portal_documents").find({ targa: targa.toUpperCase() }).sort({ date: -1 }).toArray();
    return {
      success: true,
      vehicle: vehicle || null,
      maintenance: maintenance || [],
      documents: documents || []
    };
  } catch (error) {
    console.error("ERRORE PORTAL DATA:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Errore recupero dati portale."
    });
  } finally {
    await client.close();
  }
});

export { data_get as default };
//# sourceMappingURL=data.get.mjs.map
