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

const veicoli_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  if (!config.mongodbUri) {
    console.error("ERRORE POST: MONGODB_URI non definita!");
    throw createError({ statusCode: 500, statusMessage: "Database non configurato." });
  }
  if (config.cloudinaryCloudName && config.cloudinaryApiKey && config.cloudinaryApiSecret) {
    v2.config({
      cloud_name: config.cloudinaryCloudName,
      api_key: config.cloudinaryApiKey,
      api_secret: config.cloudinaryApiSecret
    });
  } else {
    console.warn("ATTENZIONE: Cloudinary non configurato. L'upload delle immagini fallir\xE0.");
  }
  const mongodbUri = config.mongodbUri;
  const client = new libExports.MongoClient(mongodbUri, {
    connectTimeoutMS: 1e4,
    serverSelectionTimeoutMS: 1e4
  });
  try {
    const imageUrls = [];
    if (body.imagesBase64 && Array.isArray(body.imagesBase64)) {
      console.log(`Tentativo di upload di ${body.imagesBase64.length} immagini su Cloudinary...`);
      for (const [index, base64] of body.imagesBase64.entries()) {
        try {
          const uploadResponse = await v2.uploader.upload(base64, {
            folder: "road-runner-motos",
            resource_type: "auto"
          });
          imageUrls.push(uploadResponse.secure_url);
          console.log(`Immagine ${index + 1} caricata: ${uploadResponse.secure_url}`);
        } catch (cloudinaryError) {
          console.error(`Errore Cloudinary sull'immagine ${index + 1}:`, cloudinaryError.message);
          throw createError({
            statusCode: 500,
            statusMessage: "Errore durante l'upload su Cloudinary.",
            message: cloudinaryError.message
          });
        }
      }
    }
    console.log("Tentativo di connessione a MongoDB (POST)...");
    await client.connect();
    console.log("Connesso con successo al database:", config.mongodbDbName);
    const db = client.db(config.mongodbDbName);
    const collection = db.collection("motos");
    const { imagesBase64, ...motoData } = body;
    const newMoto = {
      ...motoData,
      immagini: imageUrls.length > 0 ? imageUrls : body.immagini,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    const result = await collection.insertOne(newMoto);
    console.log("Moto inserita con successo, ID:", result.insertedId);
    return {
      message: "Moto e immagini caricate con successo!",
      id: result.insertedId,
      urls: imageUrls
    };
  } catch (error) {
    const errorMessage = (error == null ? void 0 : error.message) || "Errore sconosciuto";
    console.error("ERRORE CRITICO MONGODB (POST):", errorMessage);
    let userFriendlyMessage = errorMessage;
    if (errorMessage.includes("querySrv")) {
      userFriendlyMessage = "Problema DNS locale: Non riesco a risolvere l'indirizzo di MongoDB Atlas. Prova a cambiare i DNS del tuo PC in 8.8.8.8 o 1.1.1.1.";
    } else if (errorMessage.includes("Authentication failed")) {
      userFriendlyMessage = "ERRORE DI AUTENTICAZIONE: La password o lo username del Database User in Atlas sono errati. Controlla il file .env.";
    }
    if (error.statusCode) throw error;
    throw createError({
      statusCode: 500,
      statusMessage: "Errore di connessione al database.",
      message: userFriendlyMessage
    });
  } finally {
    await client.close();
  }
});

export { veicoli_post as default };
//# sourceMappingURL=veicoli.post.mjs.map
