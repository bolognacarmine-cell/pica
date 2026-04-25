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

const portalData_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  if (!config.mongodbUri) {
    throw createError({ statusCode: 500, statusMessage: "Database non configurato." });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const users = await db.collection("portal_users").find({}).sort({ createdAt: -1 }).toArray();
    const vehicles = await db.collection("portal_vehicles").find({}).toArray();
    return {
      success: true,
      users,
      vehicles
    };
  } catch (error) {
    console.error("ERRORE PORTAL ADMIN GET:", error);
    throw createError({ statusCode: 500, statusMessage: "Errore recupero dati admin portale." });
  } finally {
    await client.close();
  }
});

export { portalData_get as default };
//# sourceMappingURL=portal-data.get.mjs.map
