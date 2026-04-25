import { c as defineEventHandler, u as useRuntimeConfig, r as readBody, e as createError, l as libExports } from '../../_/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  if (!config.mongodbUri) {
    throw createError({ statusCode: 500, statusMessage: "Database non configurato." });
  }
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName);
    const collection = db.collection("blog_posts");
    if (!body.title || !body.slug || !body.content) {
      throw createError({ statusCode: 400, statusMessage: "Titolo, slug e contenuto sono obbligatori." });
    }
    const existing = await collection.findOne({ slug: body.slug });
    if (existing) {
      throw createError({ statusCode: 409, statusMessage: "Esiste gi\xE0 un articolo con questo slug." });
    }
    const newPost = {
      ...body,
      date: /* @__PURE__ */ new Date(),
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      views: 0,
      comments: []
    };
    const result = await collection.insertOne(newPost);
    return {
      success: true,
      id: result.insertedId
    };
  } catch (error) {
    console.error("ERRORE BLOG POST:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Errore durante la creazione dell'articolo."
    });
  } finally {
    await client.close();
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
