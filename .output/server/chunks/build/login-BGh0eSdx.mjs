import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-u0fwKHEW.mjs';
import { useRouter } from 'vue-router';
import { u as useHead } from './composables-Cjh2Fp2X.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
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
import 'node:fs';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'ipx';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@vue/shared';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const username = ref("pica");
    const targa = ref("");
    const password = ref("");
    const loading = ref(false);
    const errorMsg = ref("");
    useHead({
      title: "Accedi al tuo Veicolo | Pica Caravan",
      meta: [{ name: "description", content: "Portale privato clienti Pica Caravan." }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "portal-login-page" }, _attrs))} data-v-7ca9db3f><div class="login-container" data-v-7ca9db3f><div class="glass-panel p-10 shadow-2xl" data-v-7ca9db3f><div class="login-header" data-v-7ca9db3f><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="portal-logo mx-auto" data-v-7ca9db3f><h1 class="text-3xl font-black mb-2" data-v-7ca9db3f>Portale Cliente</h1><p class="text-white/50 text-sm uppercase tracking-widest" data-v-7ca9db3f>Inserisci i dati del tuo veicolo</p></div><form class="login-form mt-8" data-v-7ca9db3f><div class="form-group mb-6" data-v-7ca9db3f><label class="premium-label" data-v-7ca9db3f>Username</label><input${ssrRenderAttr("value", username.value)} type="text" readonly class="premium-input opacity-50 cursor-not-allowed" data-v-7ca9db3f></div><div class="form-group mb-6" data-v-7ca9db3f><label class="premium-label" data-v-7ca9db3f>Targa Veicolo</label><input${ssrRenderAttr("value", targa.value)} type="text" placeholder="ES: AA123BB" required maxlength="7" class="premium-input uppercase font-black tracking-widest text-center text-lg" data-v-7ca9db3f></div><div class="form-group mb-8" data-v-7ca9db3f><label class="premium-label" data-v-7ca9db3f>Password Personale</label><input${ssrRenderAttr("value", password.value)} type="password" placeholder="••••••••" required class="premium-input" data-v-7ca9db3f></div>`);
      if (errorMsg.value) {
        _push(`<div class="error-banner mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center" data-v-7ca9db3f>${ssrInterpolate(errorMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="btn-premium w-full justify-center"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-7ca9db3f>${ssrInterpolate(loading.value ? "Verifica in corso..." : "Accedi al tuo veicolo")}</button><div class="login-footer mt-8 text-center" data-v-7ca9db3f><p class="text-white/30 text-xs" data-v-7ca9db3f>Hai dimenticato la password? <a href="#" class="text-primary font-bold hover:underline" data-v-7ca9db3f>Contatta la concessionaria</a></p></div></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portale/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ca9db3f"]]);

export { login as default };
//# sourceMappingURL=login-BGh0eSdx.mjs.map
