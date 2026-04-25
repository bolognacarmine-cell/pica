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

const deletePortalUser_delete = defineEventHandler(async (event) => {
  var _a;
  const config = useRuntimeConfig(event);
  const query = getQuery(event);
  const { id } = query;
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "ID utente mancante." });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const user = await db.collection("portal_users").findOne({ _id: new libExports.ObjectId(id) });
    if (user) {
      const targa = (_a = user.targa) == null ? void 0 : _a.toUpperCase();
      if (targa) {
        await db.collection("portal_vehicles").deleteOne({ targa });
        await db.collection("portal_maintenance").deleteMany({ targa });
      }
      await db.collection("portal_users").deleteOne({ _id: new libExports.ObjectId(id) });
    }
    return { success: true, message: "Cliente rimosso dal portale con successo." };
  } catch (error) {
    console.error("ERRORE DELETE PORTAL USER:", error);
    if (error.statusCode) throw error;
    throw createError({ statusCode: 500, statusMessage: "Errore durante l'eliminazione dell'utente." });
  } finally {
    await client.close();
  }
});

export { deletePortalUser_delete as default };
//# sourceMappingURL=delete-portal-user.delete.mjs.map
