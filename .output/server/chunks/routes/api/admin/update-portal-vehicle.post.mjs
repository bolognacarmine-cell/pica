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

const updatePortalVehicle_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  const {
    marca,
    modello,
    targa,
    photoUrl,
    dataAcquisto,
    kmIniziali,
    kmAttuali,
    prossimaManutenzione,
    scadenzaRevisione,
    scadenzaAssicurazione,
    scadenzaBollo,
    avvisi
  } = body;
  if (!targa) {
    throw createError({ statusCode: 400, statusMessage: "Targa obbligatoria." });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    console.log("UPDATING VEHICLE FOR TARGA:", targa.toUpperCase());
    console.log("DATA:", { marca, modello, dataAcquisto, kmIniziali, kmAttuali, prossimaManutenzione, avvisi });
    const result = await db.collection("portal_vehicles").updateOne(
      { targa: targa.toUpperCase() },
      {
        $set: {
          marca: marca || "",
          modello: modello || "",
          photoUrl: photoUrl || "",
          dataAcquisto: dataAcquisto || null,
          kmIniziali: Number(kmIniziali) || 0,
          kmAttuali: Number(kmAttuali) || 0,
          prossimaManutenzione: prossimaManutenzione || "",
          scadenzaRevisione: scadenzaRevisione || null,
          scadenzaAssicurazione: scadenzaAssicurazione || null,
          scadenzaBollo: scadenzaBollo || null,
          avvisi: avvisi || "",
          updatedAt: /* @__PURE__ */ new Date()
        }
      },
      { upsert: true }
    );
    console.log("UPDATE RESULT:", result);
    return { success: true, message: "Veicolo salvato." };
  } catch (error) {
    console.error("ERRORE DETTAGLIATO UPDATE PORTAL VEHICLE:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Errore salvataggio veicolo.",
      message: error.message
    });
  } finally {
    await client.close();
  }
});

export { updatePortalVehicle_post as default };
//# sourceMappingURL=update-portal-vehicle.post.mjs.map
