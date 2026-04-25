import { c as defineEventHandler, u as useRuntimeConfig, r as readBody, e as createError, l as libExports } from '../../../_/nitro.mjs';
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

const uploadPortalDocument_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  const { targa, title, type, fileBase64 } = body;
  if (!targa || !fileBase64) {
    throw createError({ statusCode: 400, statusMessage: "Targa e file sono obbligatori." });
  }
  v2.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret
  });
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    const uploadRes = await v2.uploader.upload(fileBase64, {
      folder: "portal-docs",
      resource_type: "auto"
    });
    await client.connect();
    const db = client.db(config.mongodbDbName);
    await db.collection("portal_documents").insertOne({
      targa: targa.toUpperCase(),
      title: title || "Documento senza titolo",
      type: type || "Altro",
      url: uploadRes.secure_url,
      cloudinary_id: uploadRes.public_id,
      createdAt: /* @__PURE__ */ new Date()
    });
    return { success: true, url: uploadRes.secure_url };
  } catch (error) {
    console.error("ERRORE UPLOAD DOC:", error);
    throw createError({ statusCode: 500, statusMessage: "Errore caricamento documento." });
  } finally {
    await client.close();
  }
});

export { uploadPortalDocument_post as default };
//# sourceMappingURL=upload-portal-document.post.mjs.map
