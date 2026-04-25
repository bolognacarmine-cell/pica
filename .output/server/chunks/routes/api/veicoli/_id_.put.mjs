import { c as defineEventHandler, u as useRuntimeConfig, f as getRouterParam, r as readBody, e as createError, l as libExports } from '../../../_/nitro.mjs';
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

const _id__put = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID mancante"
    });
  }
  if (config.cloudinaryCloudName && config.cloudinaryApiKey && config.cloudinaryApiSecret) {
    v2.config({
      cloud_name: config.cloudinaryCloudName,
      api_key: config.cloudinaryApiKey,
      api_secret: config.cloudinaryApiSecret
    });
  }
  const mongodbUri = config.mongodbUri;
  const client = new libExports.MongoClient(mongodbUri, {
    connectTimeoutMS: 1e4,
    serverSelectionTimeoutMS: 1e4
  });
  try {
    const newImageUrls = [];
    if (body.imagesBase64 && Array.isArray(body.imagesBase64)) {
      console.log(`Aggiornamento moto ${id}: upload di ${body.imagesBase64.length} nuove immagini...`);
      for (const base64 of body.imagesBase64) {
        const uploadResponse = await v2.uploader.upload(base64, {
          folder: "road-runner-motos"
        });
        newImageUrls.push(uploadResponse.secure_url);
      }
    }
    console.log("Tentativo di connessione a MongoDB (PUT)...");
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const collection = db.collection("motos");
    const updatedImages = [...body.immagini || [], ...newImageUrls];
    const { _id, imagesBase64, immagini, ...updateData } = body;
    const result = await collection.updateOne(
      { _id: new libExports.ObjectId(id) },
      {
        $set: {
          ...updateData,
          immagini: updatedImages,
          updatedAt: /* @__PURE__ */ new Date()
        }
      }
    );
    if (result.matchedCount === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: "Moto non trovata"
      });
    }
    return {
      message: "Moto aggiornata con successo!",
      urls: updatedImages
    };
  } catch (error) {
    console.error("Errore durante l'aggiornamento:", error);
    if (error.statusCode) throw error;
    throw createError({
      statusCode: 500,
      statusMessage: "Errore durante l'aggiornamento",
      message: error.message
    });
  } finally {
    await client.close();
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
