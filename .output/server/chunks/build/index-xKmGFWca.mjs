import { _ as __nuxt_component_0 } from './nuxt-link-Bp6FFQQI.mjs';
import { ref, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { F as FeaturedVehicles } from './FeaturedVehicles-DAVJWXhh.mjs';
import { u as useHead } from './composables-DN9wRs3j.mjs';
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
import './VehicleCarousel-CBCNczIc.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@vue/shared';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const vehicles = ref([]);
    const loading = ref(true);
    const error = ref(false);
    useHead({
      title: "Parco Veicoli | Pica Caravan",
      meta: [
        { name: "description", content: "Sfoglia il nostro catalogo completo di camper e roulotte nuovi e usati a San Nicola la Strada (CE)." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vehicles-page section" }, _attrs))} data-v-4bd02548><div class="vehicles-hero" data-v-4bd02548><div class="container" data-v-4bd02548><div class="hero-content" data-v-4bd02548><h1 class="hero-title" data-v-4bd02548>Parco Veicoli Premium</h1><p class="hero-subtitle" data-v-4bd02548>Scopri la nostra selezione esclusiva di camper e roulotte nuovi e usati</p><div class="hero-stats" data-v-4bd02548><div class="stat-item" data-v-4bd02548><span class="stat-number" data-v-4bd02548>${ssrInterpolate(vehicles.value.length)}+</span><span class="stat-label" data-v-4bd02548>Veicoli Disponibili</span></div><div class="stat-item" data-v-4bd02548><span class="stat-number" data-v-4bd02548>20+</span><span class="stat-label" data-v-4bd02548>Anni Esperienza</span></div><div class="stat-item" data-v-4bd02548><span class="stat-number" data-v-4bd02548>100%</span><span class="stat-label" data-v-4bd02548>Garanzia Qualità</span></div></div></div></div></div><div class="container" data-v-4bd02548>`);
      if (loading.value) {
        _push(`<div class="loading-state" data-v-4bd02548><p data-v-4bd02548>Caricamento veicoli...</p></div>`);
      } else if (error.value) {
        _push(`<div class="error-state" data-v-4bd02548><div class="error-icon" data-v-4bd02548><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-4bd02548><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-4bd02548></path><path d="M12 12v.01" data-v-4bd02548></path></svg></div><h3 data-v-4bd02548>Errore nel caricamento</h3><p data-v-4bd02548>Impossibile caricare il catalogo veicoli. Riprova più tardi.</p><button class="btn btn-primary" data-v-4bd02548> Riprova </button></div>`);
      } else {
        _push(ssrRenderComponent(FeaturedVehicles, { vehicles: vehicles.value }, null, _parent));
      }
      if (!loading.value && !error.value && vehicles.value.length) {
        _push(`<div class="vehicles-cta" data-v-4bd02548><div class="cta-content" data-v-4bd02548><h2 class="cta-title" data-v-4bd02548>Non trovi quello che cerchi?</h2><p class="cta-subtitle" data-v-4bd02548>Contattaci per trovare il veicolo perfetto per le tue esigenze</p><div class="cta-actions" data-v-4bd02548><a href="tel:3332327592" class="btn btn-primary btn-lg" data-v-4bd02548><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-4bd02548><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" data-v-4bd02548></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18" data-v-4bd02548></path></svg> Chiama Ora </a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#contatti",
          class: "btn btn-secondary btn-lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-4bd02548${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0l7.89 5.26v9.48L12 20l-7.89-5.26V8z" data-v-4bd02548${_scopeId}></path></svg> Richiedi Consulenza `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 8l7.89 5.26a2 2 0 002.22 0l7.89 5.26v9.48L12 20l-7.89-5.26V8z"
                  })
                ])),
                createTextVNode(" Richiedi Consulenza ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/veicoli/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4bd02548"]]);

export { index as default };
//# sourceMappingURL=index-xKmGFWca.mjs.map
