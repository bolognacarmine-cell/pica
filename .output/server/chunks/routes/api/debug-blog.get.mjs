import { c as defineEventHandler, u as useRuntimeConfig, l as libExports } from '../../_/nitro.mjs';
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

const debugBlog_get = defineEventHandler(async (event) => {
  var _a;
  const config = useRuntimeConfig(event);
  const client = new libExports.MongoClient(config.mongodbUri);
  try {
    await client.connect();
    const db = client.db(config.mongodbDbName || "roadrunner_db");
    const collection = db.collection("blog_posts");
    const posts = await collection.find({}).project({ title: 1, slug: 1 }).toArray();
    const dbName = config.mongodbDbName || "roadrunner_db";
    const uri = (_a = config.mongodbUri) == null ? void 0 : _a.replace(/:[^:@]+@/, ":***@");
    const collections = await db.listCollections().toArray();
    return {
      dbName,
      uri,
      collections: collections.map((c) => c.name),
      postsCount: posts.length,
      posts
    };
  } catch (error) {
    return { error: error.message };
  } finally {
    await client.close();
  }
});

export { debugBlog_get as default };
//# sourceMappingURL=debug-blog.get.mjs.map
