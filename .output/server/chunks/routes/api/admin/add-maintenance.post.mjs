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

const addMaintenance_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  const { targa, data, km, descrizione, partiSostituite, costo } = body;
  if (!targa || !descrizione) {
    throw createError({ statusCode: 400, statusMessage: "Targa e descrizione obbligatorie." });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    await db.collection("portal_maintenance").insertOne({
      targa: targa.toUpperCase(),
      data: data || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      km: Number(km) || 0,
      descrizione,
      partiSostituite: partiSostituite || "",
      costo: Number(costo) || 0,
      createdAt: /* @__PURE__ */ new Date()
    });
    return { success: true };
  } catch (error) {
    console.error("ERRORE ADD MAINTENANCE:", error);
    throw createError({ statusCode: 500, statusMessage: "Errore salvataggio intervento." });
  } finally {
    await client.close();
  }
});

export { addMaintenance_post as default };
//# sourceMappingURL=add-maintenance.post.mjs.map
