import { c as defineEventHandler, u as useRuntimeConfig, r as readBody, e as createError } from '../../_/nitro.mjs';
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

const leads_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  if (!config.mongodbUri) {
    throw createError({ statusCode: 500, statusMessage: "Database non configurato." });
  }
  const { MongoClient } = await import('../../_/nitro.mjs').then(function (n) { return n.i; });
  const client = new MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const collection = db.collection("leads");
    if (!body.nome || !body.email || !body.telefono) {
      throw createError({ statusCode: 400, statusMessage: "Dati obbligatori mancanti." });
    }
    const newLead = {
      ...body,
      status: "nuovo",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    const result = await collection.insertOne(newLead);
    return {
      success: true,
      message: "Richiesta ricevuta con successo!",
      id: result.insertedId
    };
  } catch (error) {
    console.error("ERRORE LEADS POST:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Errore durante l'invio della richiesta.",
      data: error.message
    });
  } finally {
    await client.close();
  }
});

export { leads_post as default };
//# sourceMappingURL=leads.post.mjs.map
