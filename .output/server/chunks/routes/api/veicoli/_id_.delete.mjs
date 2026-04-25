import { c as defineEventHandler, u as useRuntimeConfig, f as getRouterParam, e as createError, l as libExports } from '../../../_/nitro.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID mancante"
    });
  }
  const mongodbUri = config.mongodbUri;
  const client = new libExports.MongoClient(mongodbUri, {
    connectTimeoutMS: 1e4,
    serverSelectionTimeoutMS: 1e4
  });
  try {
    console.log(`Tentativo di eliminazione moto ${id}...`);
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const collection = db.collection("motos");
    const result = await collection.deleteOne({ _id: new libExports.ObjectId(id) });
    if (result.deletedCount === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: "Moto non trovata"
      });
    }
    return {
      message: "Moto eliminata con successo"
    };
  } catch (error) {
    console.error("Errore MongoDB (DELETE):", error);
    if (error.statusCode) throw error;
    throw createError({
      statusCode: 500,
      statusMessage: "Errore durante l'eliminazione",
      message: error.message
    });
  } finally {
    await client.close();
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
