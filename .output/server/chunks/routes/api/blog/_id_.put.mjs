import { c as defineEventHandler, u as useRuntimeConfig, f as getRouterParam, r as readBody, e as createError, l as libExports } from '../../../_/nitro.mjs';
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

const _id__put = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  if (!config.mongodbUri) {
    throw createError({ statusCode: 500, statusMessage: "Database non configurato." });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const collection = db.collection("blog_posts");
    const updateData = {
      ...body,
      updatedAt: /* @__PURE__ */ new Date()
    };
    delete updateData._id;
    const result = await collection.updateOne(
      { _id: new libExports.ObjectId(id) },
      { $set: updateData }
    );
    if (result.matchedCount === 0) {
      throw createError({ statusCode: 404, statusMessage: "Articolo non trovato." });
    }
    return { success: true };
  } catch (error) {
    console.error("ERRORE BLOG PUT:", error);
    throw createError({ statusCode: 500, statusMessage: "Errore durante l'aggiornamento." });
  } finally {
    await client.close();
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
