import { c as defineEventHandler, u as useRuntimeConfig, e as createError, l as libExports } from '../../../_/nitro.mjs';
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

const maintenance_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  if (!config.mongodbUri) {
    throw createError({ statusCode: 500, statusMessage: "Database non configurato." });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const collection = db.collection("blog_posts");
    const posts = await collection.find({
      category: "Manutenzione"
    }).sort({ date: -1 }).limit(5).toArray();
    return {
      posts
    };
  } catch (error) {
    console.error("ERRORE BLOG MAINTENANCE GET:", error);
    throw createError({ statusCode: 500, statusMessage: "Errore durante il recupero degli articoli di manutenzione." });
  } finally {
    await client.close();
  }
});

export { maintenance_get as default };
//# sourceMappingURL=maintenance.get.mjs.map
