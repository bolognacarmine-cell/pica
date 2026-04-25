import { c as defineEventHandler, u as useRuntimeConfig, r as readBody, e as createError, l as libExports } from '../../../_/nitro.mjs';
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

const createPortalUser_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  const { nome, cognome, targa, password } = body;
  if (!nome || !cognome || !targa || !password) {
    throw createError({ statusCode: 400, statusMessage: "Tutti i campi sono obbligatori." });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const existing = await db.collection("portal_users").findOne({ targa: targa.toUpperCase() });
    if (existing) {
      throw createError({ statusCode: 409, statusMessage: "Targa gi\xE0 registrata nel portale." });
    }
    const newUser = {
      nome,
      cognome,
      targa: targa.toUpperCase(),
      password,
      // In produzione: bcrypt.hash
      role: "customer",
      createdAt: /* @__PURE__ */ new Date()
    };
    await db.collection("portal_users").insertOne(newUser);
    return { success: true };
  } catch (error) {
    console.error("ERRORE CREATE PORTAL USER:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Errore salvataggio utente."
    });
  } finally {
    await client.close();
  }
});

export { createPortalUser_post as default };
//# sourceMappingURL=create-portal-user.post.mjs.map
