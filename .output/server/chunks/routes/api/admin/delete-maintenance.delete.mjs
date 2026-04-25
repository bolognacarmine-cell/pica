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

const deleteMaintenance_delete = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const query = getQuery(event);
  const { id } = query;
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "ID intervento mancante." });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    await db.collection("portal_maintenance").deleteOne({ _id: new libExports.ObjectId(id) });
    return { success: true };
  } catch (error) {
    console.error("ERRORE DELETE MAINTENANCE:", error);
    throw createError({ statusCode: 500, statusMessage: "Errore durante l'eliminazione." });
  } finally {
    await client.close();
  }
});

export { deleteMaintenance_delete as default };
//# sourceMappingURL=delete-maintenance.delete.mjs.map
