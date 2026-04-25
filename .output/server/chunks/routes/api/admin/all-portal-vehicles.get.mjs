import { c as defineEventHandler, u as useRuntimeConfig, l as libExports, e as createError } from '../../../_/nitro.mjs';
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

const allPortalVehicles_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const vehicles = await db.collection("portal_vehicles").find({}).toArray();
    return {
      success: true,
      vehicles: vehicles || []
    };
  } catch (error) {
    console.error("ERRORE ALL PORTAL VEHICLES:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Errore recupero veicoli portale."
    });
  } finally {
    await client.close();
  }
});

export { allPortalVehicles_get as default };
//# sourceMappingURL=all-portal-vehicles.get.mjs.map
