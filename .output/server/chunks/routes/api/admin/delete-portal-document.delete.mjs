import { c as defineEventHandler, u as useRuntimeConfig, g as getQuery, e as createError, l as libExports } from '../../../_/nitro.mjs';
import { v2 } from 'cloudinary';
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

const deletePortalDocument_delete = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const query = getQuery(event);
  const { id } = query;
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "ID documento mancante." });
  }
  v2.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret
  });
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const doc = await db.collection("portal_documents").findOne({ _id: new libExports.ObjectId(id) });
    if (!doc) {
      throw createError({ statusCode: 404, statusMessage: "Documento non trovato." });
    }
    if (doc.cloudinary_id) {
      try {
        await v2.uploader.destroy(doc.cloudinary_id);
      } catch (cloudinaryErr) {
        console.warn("Errore rimozione da Cloudinary (ignorabile):", cloudinaryErr);
      }
    }
    await db.collection("portal_documents").deleteOne({ _id: new libExports.ObjectId(id) });
    return { success: true, message: "Documento eliminato." };
  } catch (error) {
    console.error("ERRORE DELETE PORTAL DOC:", error);
    if (error.statusCode) throw error;
    throw createError({ statusCode: 500, statusMessage: "Errore durante l'eliminazione." });
  } finally {
    await client.close();
  }
});

export { deletePortalDocument_delete as default };
//# sourceMappingURL=delete-portal-document.delete.mjs.map
