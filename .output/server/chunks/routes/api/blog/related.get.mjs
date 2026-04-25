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

const related_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const query = getQuery(event);
  const vehicleId = query.vehicleId || query.motoId;
  if (!vehicleId) {
    throw createError({ statusCode: 400, statusMessage: "Identificativo veicolo mancante." });
  }
  if (!config.mongodbUri) {
    throw createError({ statusCode: 500, statusMessage: "Database non configurato." });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName || "Pica");
    const collection = db.collection("blog_posts");
    const posts = await collection.find({
      $or: [
        { relatedVehicles: { $in: [vehicleId] } },
        { relatedMotos: { $in: [vehicleId] } }
      ]
    }).sort({ date: -1 }).limit(3).toArray();
    return {
      posts
    };
  } catch (error) {
    console.error("ERRORE BLOG RELATED GET:", error);
    throw createError({ statusCode: 500, statusMessage: "Errore durante il recupero degli articoli correlati." });
  } finally {
    await client.close();
  }
});

export { related_get as default };
//# sourceMappingURL=related.get.mjs.map
