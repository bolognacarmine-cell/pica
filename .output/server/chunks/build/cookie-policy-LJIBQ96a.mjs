import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { u as useHead } from './composables-Cjh2Fp2X.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@vue/shared';

const _sfc_main = {
  __name: "cookie-policy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Cookie Policy | Pica Caravan",
      meta: [
        { name: "description", content: "Informativa sui cookie di Pica Caravan. Gestione del consenso e tipologie di cookie utilizzati." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "legal-page" }, _attrs))} data-v-b077fe57><div class="legal-hero" data-v-b077fe57><div class="container" data-v-b077fe57><span class="legal-badge" data-v-b077fe57>Cookie &amp; Preferenze</span><h1 class="legal-title" data-v-b077fe57>Cookie Policy</h1><p class="legal-subtitle" data-v-b077fe57>Gestione del consenso e dettagli sulle tecnologie di tracciamento.</p></div><div class="hero-glow" data-v-b077fe57></div></div><div class="container legal-container" data-v-b077fe57><div class="legal-layout" data-v-b077fe57><aside class="legal-sidebar" data-v-b077fe57><div class="index-card" data-v-b077fe57><h3 data-v-b077fe57>Indice</h3><ul data-v-b077fe57><li data-v-b077fe57><a href="#cosa-sono" data-v-b077fe57>1. Cosa sono i Cookie</a></li><li data-v-b077fe57><a href="#tipologia" data-v-b077fe57>2. Tipologie Utilizzate</a></li><li data-v-b077fe57><a href="#gestione" data-v-b077fe57>3. Gestione Consenso</a></li><li data-v-b077fe57><a href="#disabilitare" data-v-b077fe57>4. Come Disabilitare</a></li><li data-v-b077fe57><a href="#titolare" data-v-b077fe57>5. Titolare</a></li></ul></div></aside><main class="legal-content" data-v-b077fe57><div class="update-info" data-v-b077fe57><span data-v-b077fe57>Ultimo aggiornamento: 22 Marzo 2026</span></div><section id="cosa-sono" class="legal-section" data-v-b077fe57><div class="section-number" data-v-b077fe57>01</div><h2 data-v-b077fe57>Cosa sono i cookie</h2><div class="section-body" data-v-b077fe57><p data-v-b077fe57>I cookie sono piccoli file di testo che i siti visitati dall&#39;utente inviano al suo terminale, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente.</p></div></section><section id="tipologia" class="legal-section" data-v-b077fe57><div class="section-number" data-v-b077fe57>02</div><h2 data-v-b077fe57>Tipologia di cookie utilizzati</h2><div class="section-body" data-v-b077fe57><p data-v-b077fe57>In conformità alle Linee Guida Garante Privacy 2021, utilizziamo cookie granulari:</p><div class="table-container" data-v-b077fe57><table class="legal-table" data-v-b077fe57><thead data-v-b077fe57><tr data-v-b077fe57><th data-v-b077fe57>Nome Cookie</th><th data-v-b077fe57>Fornitore</th><th data-v-b077fe57>Finalità</th><th data-v-b077fe57>Durata</th></tr></thead><tbody data-v-b077fe57><tr data-v-b077fe57><td data-v-b077fe57>cookie-consent</td><td data-v-b077fe57>Proprio</td><td data-v-b077fe57>Preferenze consenso</td><td data-v-b077fe57>1 anno</td></tr><tr data-v-b077fe57><td data-v-b077fe57>_ga, _gid</td><td data-v-b077fe57>Google Analytics</td><td data-v-b077fe57>Analitici (Anonimi)</td><td data-v-b077fe57>2 anni / 24h</td></tr><tr data-v-b077fe57><td data-v-b077fe57>NID, CONSENT</td><td data-v-b077fe57>Google</td><td data-v-b077fe57>Preferenze (previo consenso)</td><td data-v-b077fe57>6 mesi</td></tr></tbody></table></div><div class="cookie-types-grid" data-v-b077fe57><div class="cookie-type-card" data-v-b077fe57><strong data-v-b077fe57>Cookie Tecnici</strong><p data-v-b077fe57>Strettamente necessari per il funzionamento del sito (login, sicurezza).</p></div><div class="cookie-type-card" data-v-b077fe57><strong data-v-b077fe57>Cookie Analitici</strong><p data-v-b077fe57>Utilizzati per statistiche aggregate con IP Masking attivo.</p></div><div class="cookie-type-card" data-v-b077fe57><strong data-v-b077fe57>Terze Parti</strong><p data-v-b077fe57>Installati solo dopo il tuo consenso esplicito per mappe o video.</p></div></div></div></section><section id="gestione" class="legal-section" data-v-b077fe57><div class="section-number" data-v-b077fe57>03</div><h2 data-v-b077fe57>Gestione del consenso</h2><div class="section-body" data-v-b077fe57><p data-v-b077fe57>Tramite il banner presente al primo accesso, puoi scegliere quali categorie accettare. Puoi resettare le tue scelte in ogni momento tramite il pulsante delle preferenze o cancellando i cookie del browser.</p><div class="consent-box" style="${ssrRenderStyle({ "margin-top": "24px" })}" data-v-b077fe57><button class="browser-link" style="${ssrRenderStyle({ "cursor": "pointer", "width": "auto", "padding": "12px 24px" })}" data-v-b077fe57> Gestisci Preferenze Cookie </button></div></div></section><section id="disabilitare" class="legal-section" data-v-b077fe57><div class="section-number" data-v-b077fe57>04</div><h2 data-v-b077fe57>Come disabilitare i cookie dal browser</h2><div class="section-body" data-v-b077fe57><p data-v-b077fe57>Puoi configurare il tuo browser per rifiutare i cookie seguendo le guide ufficiali:</p><div class="browser-links" data-v-b077fe57><a href="#" class="browser-link" data-v-b077fe57>Google Chrome</a><a href="#" class="browser-link" data-v-b077fe57>Mozilla Firefox</a><a href="#" class="browser-link" data-v-b077fe57>Apple Safari</a><a href="#" class="browser-link" data-v-b077fe57>Microsoft Edge</a></div></div></section><section id="titolare" class="legal-section" data-v-b077fe57><div class="section-number" data-v-b077fe57>05</div><h2 data-v-b077fe57>Titolare del Trattamento</h2><div class="section-body" data-v-b077fe57><p data-v-b077fe57>Il Titolare del Trattamento è <strong data-v-b077fe57>ROAD RUNNER DI TARTAGLIONE PASQUALE</strong>.</p><div class="fiscal-card" data-v-b077fe57><div class="fiscal-item" data-v-b077fe57><span data-v-b077fe57>Sede Legale</span><strong data-v-b077fe57>Via San Francesco 13, Capodrise (CE)</strong></div><div class="fiscal-item" data-v-b077fe57><span data-v-b077fe57>P.IVA</span><strong data-v-b077fe57>04335610616</strong></div><div class="fiscal-item" data-v-b077fe57><span data-v-b077fe57>Email</span><strong data-v-b077fe57>inforoadrunner@libero.it</strong></div></div></div></section></main></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cookie-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cookiePolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b077fe57"]]);

export { cookiePolicy as default };
//# sourceMappingURL=cookie-policy-LJIBQ96a.mjs.map
