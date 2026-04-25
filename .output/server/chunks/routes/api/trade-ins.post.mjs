import { c as defineEventHandler, u as useRuntimeConfig, r as readBody, e as createError, l as libExports } from '../../_/nitro.mjs';
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

const tradeIns_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  if (!config.mongodbUri) {
    throw createError({ statusCode: 500, statusMessage: "Database non configurato." });
  }
  if (config.cloudinaryCloudName && config.cloudinaryApiKey && config.cloudinaryApiSecret) {
    v2.config({
      cloud_name: config.cloudinaryCloudName,
      api_key: config.cloudinaryApiKey,
      api_secret: config.cloudinaryApiSecret
    });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    const imageUrls = [];
    if (body.imagesBase64 && Array.isArray(body.imagesBase64)) {
      for (const base64 of body.imagesBase64) {
        const uploadResponse = await v2.uploader.upload(base64, {
          folder: "road-runner-tradeins",
          resource_type: "auto"
        });
        imageUrls.push(uploadResponse.secure_url);
      }
    }
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const collection = db.collection("tradeins");
    const newTradeIn = {
      ...body,
      images: imageUrls,
      createdAt: /* @__PURE__ */ new Date(),
      status: "penden"
      // penden, in_progress, completed, rejected
    };
    delete newTradeIn.imagesBase64;
    const result = await collection.insertOne(newTradeIn);
    return {
      success: true,
      message: "Richiesta di permuta inviata con successo!",
      id: result.insertedId
    };
  } catch (error) {
    console.error("ERRORE TRADE-IN POST:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Errore durante l'invio della richiesta.",
      message: error.message
    });
  } finally {
    await client.close();
  }
});

export { tradeIns_post as default };
//# sourceMappingURL=trade-ins.post.mjs.map
