import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "legal-notes",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Note Legali | Pica Caravan",
      meta: [
        { name: "description", content: "Informazioni sulla proprietà intellettuale, marchi e termini d'uso del sito Pica Caravan." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "legal-page" }, _attrs))} data-v-afc1c6f7><div class="legal-hero" data-v-afc1c6f7><div class="container" data-v-afc1c6f7><span class="legal-badge" data-v-afc1c6f7>Termini &amp; Condizioni</span><h1 class="legal-title" data-v-afc1c6f7>Note Legali</h1><p class="legal-subtitle" data-v-afc1c6f7>Informazioni sulla proprietà intellettuale e termini d&#39;uso del sito.</p></div><div class="hero-glow" data-v-afc1c6f7></div></div><div class="container legal-container" data-v-afc1c6f7><div class="legal-layout" data-v-afc1c6f7><aside class="legal-sidebar" data-v-afc1c6f7><div class="index-card" data-v-afc1c6f7><h3 data-v-afc1c6f7>Indice</h3><ul data-v-afc1c6f7><li data-v-afc1c6f7><a href="#proprieta" data-v-afc1c6f7>1. Proprietà Intellettuale</a></li><li data-v-afc1c6f7><a href="#limitazioni" data-v-afc1c6f7>2. Limitazione di Responsabilità</a></li><li data-v-afc1c6f7><a href="#link" data-v-afc1c6f7>3. Link Esterni</a></li></ul></div></aside><main class="legal-content" data-v-afc1c6f7><div class="update-info" data-v-afc1c6f7><span data-v-afc1c6f7>Ultimo aggiornamento: 22 Marzo 2026</span></div><section id="proprieta" class="legal-section" data-v-afc1c6f7><div class="section-number" data-v-afc1c6f7>01</div><h2 data-v-afc1c6f7>Proprietà Intellettuale e Marchi</h2><div class="section-body" data-v-afc1c6f7><p data-v-afc1c6f7>Tutti i contenuti presenti sul sito (testi, grafiche, loghi, icone, immagini, clip audio, video, software) sono di proprietà di <strong data-v-afc1c6f7>PICA CARAVAN</strong> o dei rispettivi proprietari dei marchi citati (es. marchi motociclistici come Yamaha, Honda, Ducati, ecc.).</p><p data-v-afc1c6f7>È vietata la riproduzione, distribuzione, modifica o utilizzo di tali materiali senza espressa autorizzazione scritta dal Titolare o dai legittimi proprietari.</p></div></section><section id="limitazioni" class="legal-section" data-v-afc1c6f7><div class="section-number" data-v-afc1c6f7>02</div><h2 data-v-afc1c6f7>Limitazione di Responsabilità</h2><div class="section-body" data-v-afc1c6f7><p data-v-afc1c6f7>Le informazioni riportate su questo sito, inclusi prezzi, schede tecniche e disponibilità dei veicoli, hanno scopo puramente informativo e non costituiscono proposta contrattuale.</p><p data-v-afc1c6f7>Pica Caravan si riserva il diritto di modificare i contenuti in qualsiasi momento senza preavviso e non risponde di eventuali errori tipografici o imprecisioni.</p></div></section><section id="link" class="legal-section" data-v-afc1c6f7><div class="section-number" data-v-afc1c6f7>03</div><h2 data-v-afc1c6f7>Link Esterni</h2><div class="section-body" data-v-afc1c6f7><p data-v-afc1c6f7>Il sito può contenere collegamenti a siti web di terze parti. Pica Caravan non ha alcun controllo su tali siti e non assume alcuna responsabilità per i contenuti, la privacy o le pratiche di tali piattaforme.</p></div></section></main></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal-notes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const legalNotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-afc1c6f7"]]);

export { legalNotes as default };
//# sourceMappingURL=legal-notes-CGm_fzvX.mjs.map
