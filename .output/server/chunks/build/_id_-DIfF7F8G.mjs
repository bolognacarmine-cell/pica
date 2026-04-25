import { _ as __nuxt_component_0 } from './nuxt-link-Bp6FFQQI.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { V as VehicleCarousel } from './VehicleCarousel-CBCNczIc.mjs';
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
import '@vue/shared';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const vehicle = ref(null);
    ref([]);
    ref([]);
    const loading = ref(true);
    const error = ref(null);
    const formatPrice = (price) => {
      if (!price) return "Prezzo su richiesta";
      return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(price);
    };
    const formatImages = (images) => {
      if (images && Array.isArray(images) && images.length > 0) {
        return images.map((img) => {
          const url = typeof img === "string" ? img : img?.url || "/logo-pica-caravan.jpg";
          return url.replace("/upload/", "/upload/f_auto,q_auto/");
        });
      }
      return ["https://placehold.co/1200x800/141414/white?text=Pica+Caravan"];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "moto-detail-page" }, _attrs))} data-v-2a39927a><div class="container py-5" data-v-2a39927a><div class="back-nav mb-5" data-v-2a39927a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/veicoli",
        class: "btn-back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="arrow" data-v-2a39927a${_scopeId}>←</span> Torna al parco veicoli `);
          } else {
            return [
              createVNode("span", { class: "arrow" }, "←"),
              createTextVNode(" Torna al parco veicoli ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (loading.value) {
        _push(`<div class="loading-box" data-v-2a39927a><p data-v-2a39927a>Caricamento dettagli...</p></div>`);
      } else if (error.value) {
        _push(`<div class="error-box" data-v-2a39927a><p data-v-2a39927a>${ssrInterpolate(error.value)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "btn-primary-custom"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Torna alla Home`);
            } else {
              return [
                createTextVNode("Torna alla Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (vehicle.value) {
        _push(`<div class="moto-detail-grid" data-v-2a39927a><div class="moto-visuals" data-v-2a39927a>`);
        _push(ssrRenderComponent(VehicleCarousel, {
          images: formatImages(vehicle.value.immagini),
          altText: `${vehicle.value.marca} ${vehicle.value.modello}`,
          height: "500px"
        }, null, _parent));
        _push(`<div class="moto-description-section mt-5" data-v-2a39927a><h3 data-v-2a39927a>Descrizione</h3><div class="description-text" data-v-2a39927a>${ssrInterpolate(vehicle.value.descrizione || "Nessuna descrizione disponibile per questo veicolo.")}</div></div></div><div class="moto-info-panel" data-v-2a39927a><div class="sticky-panel" data-v-2a39927a><span class="type-badge" data-v-2a39927a>${ssrInterpolate(vehicle.value.categoria)}</span><h1 class="moto-title" data-v-2a39927a>${ssrInterpolate(vehicle.value.marca)} ${ssrInterpolate(vehicle.value.modello)}</h1><p class="price-tag" data-v-2a39927a>${ssrInterpolate(formatPrice(vehicle.value.prezzo))}</p><div class="spec-grid" data-v-2a39927a><div class="spec-item" data-v-2a39927a><span class="label" data-v-2a39927a>Anno</span><span class="value" data-v-2a39927a>${ssrInterpolate(vehicle.value.anno || "N/D")}</span></div><div class="spec-item" data-v-2a39927a><span class="label" data-v-2a39927a>Stato</span><span class="value" data-v-2a39927a>${ssrInterpolate(vehicle.value.nuovaUsata || "N/D")}</span></div><div class="spec-item" data-v-2a39927a><span class="label" data-v-2a39927a>Condizioni</span><span class="value" data-v-2a39927a>${ssrInterpolate(vehicle.value.stato || "Ottime")}</span></div></div><div class="cta-actions" data-v-2a39927a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: "/", hash: "#contatti" },
          class: "btn-quote"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Richiedi Informazioni `);
            } else {
              return [
                createTextVNode(" Richiedi Informazioni ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<a${ssrRenderAttr("href", `https://wa.me/390823224038?text=Ciao, vorrei informazioni su ${vehicle.value.marca} ${vehicle.value.modello}`)} target="_blank" class="btn-whatsapp" data-v-2a39927a> Chiedi su WhatsApp </a><a href="tel:+390823224038" class="btn-call" data-v-2a39927a> Chiama ora 0823 224038 </a></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/veicoli/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a39927a"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DIfF7F8G.mjs.map
