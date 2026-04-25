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

const portalLogin_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  const { username, targa, password } = body;
  if (username !== "roadrunner") {
    throw createError({
      statusCode: 401,
      statusMessage: "Username non valido."
    });
  }
  if (!targa || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Targa e Password sono obbligatorie."
    });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const usersCollection = db.collection("portal_users");
    const user = await usersCollection.findOne({ targa: targa.toUpperCase() });
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: "Veicolo non trovato o non registrato nel portale."
      });
    }
    if (user.password !== password) {
      throw createError({
        statusCode: 401,
        statusMessage: "Password errata."
      });
    }
    const { password: _, ...userSafe } = user;
    return {
      success: true,
      user: userSafe,
      token: "mock-jwt-token-" + Math.random().toString(36).substring(7)
      // Mock token
    };
  } catch (error) {
    console.error("ERRORE PORTAL LOGIN:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Errore durante l'accesso."
    });
  } finally {
    await client.close();
  }
});

export { portalLogin_post as default };
//# sourceMappingURL=portal-login.post.mjs.map
