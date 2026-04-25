import { ref, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-Bp6FFQQI.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc, c as useRuntimeConfig } from './server.mjs';
import { F as FeaturedVehicles } from './FeaturedVehicles-DAVJWXhh.mjs';
import { _ as __nuxt_component_0$1 } from './NuxtImg-BsIlcfH2.mjs';
import { u as useHead } from './composables-DN9wRs3j.mjs';
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
import 'vue-router';
import '@vue/shared';
import './VehicleCarousel-CBCNczIc.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _imports_0 = publicAssetsURL("/video/hero-video.mp4");
const _sfc_main$8 = {
  __name: "HomeHeroSection",
  __ssrInlineRender: true,
  props: {
    badge: { type: String, default: "Vendita e Rimessaggio a San Nicola la Strada" },
    title: { type: String, default: "Camper e roulotte per partire senza pensieri" },
    subtitle: { type: String, default: "Vendita nuovo e usato garantito, assistenza e rimessaggio sicuro." }
  },
  setup(__props) {
    const isMuted = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-bf35cba0><div class="hero-video-wrapper" data-v-bf35cba0><video class="hero-video" autoplay loop muted playsinline preload="auto" data-v-bf35cba0><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-bf35cba0></video><button class="video-audio-toggle"${ssrRenderAttr("aria-label", isMuted.value ? "Attiva audio" : "Disattiva audio")} data-v-bf35cba0>`);
      if (isMuted.value) {
        _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bf35cba0><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" data-v-bf35cba0></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" data-v-bf35cba0></path></svg>`);
      } else {
        _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bf35cba0><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" data-v-bf35cba0></path></svg>`);
      }
      _push(`<span class="text-xs font-black uppercase tracking-widest hidden md:block" data-v-bf35cba0>${ssrInterpolate(isMuted.value ? "Senti Audio" : "Muto")}</span></button></div><div class="container hero-container" data-v-bf35cba0><div class="hero-content" data-v-bf35cba0><div class="hero-text-wrapper" data-v-bf35cba0><div class="hero-badge-wrapper" data-v-bf35cba0><span class="hero-badge" data-v-bf35cba0>${ssrInterpolate(__props.badge)}</span></div><h1 class="hero-title" data-v-bf35cba0>${ssrInterpolate(__props.title)}</h1><p class="hero-subtitle" data-v-bf35cba0>${ssrInterpolate(__props.subtitle)}</p><div class="hero-actions" data-v-bf35cba0><a href="#contatti" class="btn-premium" data-v-bf35cba0> Richiedi informazioni <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bf35cba0><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-bf35cba0></path></svg></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/veicoli",
        class: "btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Scopri i veicoli `);
          } else {
            return [
              createTextVNode(" Scopri i veicoli ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-bf35cba0"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "azienda",
    class: "about-section"
  }, _attrs))} data-v-a074b554><div class="container about-container" data-v-a074b554><div class="about-grid" data-v-a074b554><div class="about-content" data-v-a074b554><div class="about-header" data-v-a074b554><p class="section-kicker" data-v-a074b554>La nostra realtà</p><h2 class="about-title" data-v-a074b554>PICA CARAVAN: La tua casa in movimento</h2><p class="about-subtitle" data-v-a074b554>Esperienza e professionalità nel mondo del plein air a San Nicola la Strada.</p></div><div class="about-text" data-v-a074b554><p data-v-a074b554> Situata strategicamente a <strong data-v-a074b554>San Nicola la Strada (CE)</strong>, Pica Caravan è l&#39;azienda leader per chi ama viaggiare in libertà. Guidata dall&#39;esperienza di <strong data-v-a074b554>Antimo Pica</strong>, la nostra realtà è specializzata nella <strong data-v-a074b554>vendita di articoli da campeggio, riparazione e ristrutturazione di camper, roulotte e container</strong>. </p><p data-v-a074b554> Siamo orgogliosi di essere <strong data-v-a074b554>Concessionario Across Car</strong>, produttore europeo d&#39;eccellenza per Camper e Roulotte. Inoltre, realizziamo <strong data-v-a074b554>allestimenti Street-Food</strong> personalizzati, trasformando la nostra competenza tecnica in soluzioni professionali per il tuo business su ruote. </p><p data-v-a074b554> Qualità e sicurezza sono i nostri pilastri: siamo <strong data-v-a074b554>Service Center autorizzato VIESA, THETFORD e WEBASTO</strong>, garantendo interventi certificati e ricambi di altissimo livello per ogni esigenza di climatizzazione e comfort. </p></div><div class="about-values" data-v-a074b554><div class="value-card glass-panel" data-v-a074b554><div class="value-icon" data-v-a074b554><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-a074b554><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-v-a074b554></path></svg></div><div class="value-info" data-v-a074b554><strong data-v-a074b554>Soluzioni Su Misura</strong><p data-v-a074b554>Dal primo camper alla roulotte per tutta la famiglia, ti guidiamo nella scelta migliore.</p></div></div><div class="value-card glass-panel" data-v-a074b554><div class="value-icon" data-v-a074b554><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-a074b554><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-v-a074b554></path></svg></div><div class="value-info" data-v-a074b554><strong data-v-a074b554>Affidabilità Locale</strong><p data-v-a074b554>Un nome storico sul territorio casertano, sinonimo di fiducia e assistenza continua.</p></div></div></div><div class="about-actions" data-v-a074b554>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/veicoli",
    class: "btn-premium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Scopri il parco veicoli <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-a074b554${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-a074b554${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" Scopri il parco veicoli "),
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
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="#contatti" class="btn-secondary-glass" data-v-a074b554>Richiedi informazioni</a></div></div><div class="about-visual-container" data-v-a074b554><div class="visual-wrapper" data-v-a074b554><div class="visual-layer layer-bg" data-v-a074b554></div><div class="visual-layer layer-frame" data-v-a074b554></div><div class="visual-layer layer-main" data-v-a074b554><img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000" alt="Pica Caravan - Vendita e Assistenza" class="founder-img" data-v-a074b554></div><div class="visual-layer layer-badge" data-v-a074b554><div class="experience-badge-content" data-v-a074b554><span class="years" data-v-a074b554>Expert</span><span class="label" data-v-a074b554>Plein Air</span></div></div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/AboutSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AboutSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a074b554"]]), { __name: "HomeAboutSection" });
const _sfc_main$6 = {
  __name: "HomeServiceSection",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        title: "Vendita Veicoli",
        desc: "Ampia scelta di camper e roulotte nuovi e usati dei migliori brand, garantiti e controllati.",
        icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
        type: "sales"
      },
      {
        title: "Officina Specializzata",
        desc: "Affida il tuo mezzo a mani esperte: eseguiamo manutenzioni, riparazioni scocche, controlli infiltrazioni e installazione accessori. Un servizio professionale per viaggiare sempre in sicurezza.",
        icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
        type: "service"
      },
      {
        title: "Accessori e Ricambi",
        desc: "Utilizziamo solo componenti di qualità e accessori delle migliori marche per personalizzare il tuo camper.",
        icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>',
        type: "parts"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "assistenza",
        class: "combined-services-section"
      }, _attrs))} data-v-1400de14><div class="container" data-v-1400de14><div class="services-header" data-v-1400de14><p class="section-kicker" data-v-1400de14>Service &amp; Support</p><h2 class="section-title" data-v-1400de14>Soluzioni complete per il tuo viaggio</h2><p class="section-subtitle" data-v-1400de14> Dall&#39;acquisto alla manutenzione, ti accompagniamo in ogni chilometro delle tue vacanze. </p></div><div class="services-grid" data-v-1400de14><!--[-->`);
      ssrRenderList(services, (s) => {
        _push(`<div class="service-card glass-panel" data-v-1400de14><div class="card-top" data-v-1400de14><div class="service-icon-box" data-v-1400de14>${s.icon ?? ""}</div><div class="service-tag status-badge primary" data-v-1400de14>${ssrInterpolate(s.type)}</div></div><div class="card-body" data-v-1400de14><h3 data-v-1400de14>${ssrInterpolate(s.title)}</h3><p data-v-1400de14>${ssrInterpolate(s.desc)}</p></div><div class="card-footer" data-v-1400de14>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#contatti",
          class: "service-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Richiedi Info <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-1400de14${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-1400de14${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Richiedi Info "),
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="support-cta-box glass-panel" data-v-1400de14><div class="cta-content" data-v-1400de14><div class="cta-text" data-v-1400de14><h3 data-v-1400de14>Hai bisogno di assistenza o accessori?</h3><p data-v-1400de14>Il nostro team tecnico è a tua disposizione per appuntamenti e consulenze veloci.</p></div><div class="cta-actions" data-v-1400de14><a href="tel:0823224038" class="btn-premium" data-v-1400de14><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-1400de14><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-v-1400de14></path></svg> Chiama Officina </a><a href="https://wa.me/390823224038" target="_blank" class="btn-whatsapp" data-v-1400de14><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-1400de14><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-v-1400de14></path></svg> WhatsApp </a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ServiceSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ServiceSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-1400de14"]]);
const _sfc_main$5 = {
  __name: "HomeBrandsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const brands = ["Across Car", "Viesa", "Thetford", "Webasto", "Hymer", "Knaus"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "marchi",
        class: "brands-section"
      }, _attrs))} data-v-416497ea><div class="container" data-v-416497ea><div class="section-heading" data-v-416497ea><p class="section-kicker" data-v-416497ea>Partnership &amp; Qualità</p><h2 data-v-416497ea>Service Center &amp; Concessionario</h2><p data-v-416497ea>Siamo centro autorizzato per i migliori sistemi di bordo e rivenditori ufficiali Across Car.</p></div><div class="brands-grid" data-v-416497ea><!--[-->`);
      ssrRenderList(brands, (brand) => {
        _push(`<div class="brand-pill" data-v-416497ea>${ssrInterpolate(brand)}</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/BrandsSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const BrandsSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-416497ea"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-band" }, _attrs))} data-v-170f932d><div class="container" data-v-170f932d><div class="cta-band-shell" data-v-170f932d><div class="cta-content" data-v-170f932d><p class="section-kicker" data-v-170f932d>Pica Caravan</p><h2 data-v-170f932d>Passione e professionalità <br class="desktop-only" data-v-170f932d> al tuo servizio</h2><p class="cta-desc" data-v-170f932d>Vieni a trovarci a San Nicola la Strada per scoprire il nostro parco veicoli e i servizi di rimessaggio. Il nostro team è pronto a guidarti nella scelta migliore.</p></div><div class="cta-actions" data-v-170f932d><a href="#contatti" class="btn-premium" data-v-170f932d> Richiedi Informazioni </a><div class="secondary-actions" data-v-170f932d><a href="tel:0823224038" class="btn-secondary-glass" data-v-170f932d><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon" data-v-170f932d><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-v-170f932d></path></svg> 0823 224038 </a><a href="https://wa.me/390823224038" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" data-v-170f932d><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon" data-v-170f932d><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3.5Z" data-v-170f932d></path></svg> WhatsApp </a></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/CTABand.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CTABand = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-170f932d"]]), { __name: "HomeCTABand" });
const _sfc_main$3 = {
  __name: "HomePreventivoSection",
  __ssrInlineRender: true,
  setup(__props) {
    const showGdpr = ref(false);
    const showInfo = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "preventivo",
        class: "py-24 md:py-32 bg-gray-50 dark:bg-[#030303] overflow-hidden relative"
      }, _attrs))} data-v-5b216d16><div class="container mx-auto px-4 relative z-10" data-v-5b216d16><div class="max-w-6xl mx-auto" data-v-5b216d16><div class="preventivo-header text-center mb-16 md:mb-24" data-v-5b216d16><div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white dark:bg-white/5 border border-primary/20 shadow-sm" data-v-5b216d16><span class="relative flex h-2 w-2" data-v-5b216d16><span class="inline-flex rounded-full h-2 w-2 bg-primary" data-v-5b216d16></span></span><span class="text-primary text-[10px] font-black uppercase tracking-[0.3em]" data-v-5b216d16>Consulenza Personalizzata</span></div><h2 class="text-4xl md:text-6xl lg:text-7xl font-black mb-8 dark:text-white uppercase tracking-tighter leading-none" data-v-5b216d16> Pronto a <br data-v-5b216d16><span class="text-primary italic" data-v-5b216d16>Partire?</span></h2><p class="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed font-medium" data-v-5b216d16> Scegli il modo più rapido per dare forma al tuo prossimo viaggio. I nostri esperti sono a tua disposizione per consulenze personalizzate. </p></div><div class="action-cards-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24" data-v-5b216d16><div class="action-card p-10 md:p-12 bg-white dark:bg-white/5 rounded-[40px] border border-primary/20 relative" data-v-5b216d16><div class="flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-primary/10 text-primary" data-v-5b216d16><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-5b216d16><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-5b216d16></path></svg></div><h3 class="text-2xl md:text-3xl font-black mb-4 dark:text-white uppercase tracking-tighter" data-v-5b216d16>Richiesta <span class="text-primary" data-v-5b216d16>Online</span></h3><p class="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed text-sm" data-v-5b216d16>Ricevi una quotazione o informazioni tecniche entro 24 ore compilando il modulo.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#contatti",
        class: "inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-black rounded-xl no-underline uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` VAI AL MODULO <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" data-v-5b216d16${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-5b216d16${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" VAI AL MODULO "),
              (openBlock(), createBlock("svg", {
                width: "14",
                height: "14",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "3",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="action-card p-10 md:p-12 bg-primary rounded-[40px] shadow-xl shadow-primary/20 relative" data-v-5b216d16><div class="flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-white/20 text-white" data-v-5b216d16><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-v-5b216d16><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-v-5b216d16></path></svg></div><h3 class="text-2xl md:text-3xl font-black mb-4 text-white uppercase tracking-tighter" data-v-5b216d16>Parla con Noi</h3><p class="text-white/80 mb-10 leading-relaxed text-sm" data-v-5b216d16>Chiamaci direttamente per parlare con un consulente esperto e ricevere assistenza immediata.</p><a href="tel:3332327592" class="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-black rounded-xl no-underline uppercase tracking-widest text-lg md:text-xl shadow-lg shadow-black/10" data-v-5b216d16><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" data-v-5b216d16><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-v-5b216d16></path></svg> 333 2327592 </a></div></div><div class="max-w-4xl mx-auto border-t border-gray-200 dark:border-white/10 pt-16" data-v-5b216d16><div class="grid md:grid-cols-2 gap-8 md:gap-16" data-v-5b216d16><div class="relative" data-v-5b216d16><button class="flex items-center justify-between w-full py-6 text-left group" data-v-5b216d16><span class="text-sm font-black uppercase tracking-widest dark:text-white" data-v-5b216d16>Perché Pica Caravan?</span><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5b216d16><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-5b216d16></path></svg></button>`);
      if (showInfo.value) {
        _push(`<div class="overflow-hidden" data-v-5b216d16><p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pb-6" data-v-5b216d16> Siamo un punto di riferimento per il caravanning in Campania. Offriamo vendita garantita, assistenza tecnica certificata e rimessaggio h24. La nostra missione è rendere ogni tuo viaggio indimenticabile. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative" data-v-5b216d16><button class="flex items-center justify-between w-full py-6 text-left group" data-v-5b216d16><span class="text-sm font-black uppercase tracking-widest dark:text-white" data-v-5b216d16>Trattamento Dati</span><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-5b216d16><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-5b216d16></path></svg></button>`);
      if (showGdpr.value) {
        _push(`<div class="overflow-hidden" data-v-5b216d16><p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pb-6" data-v-5b216d16> I tuoi dati sono protetti secondo il GDPR. Verranno utilizzati esclusivamente per gestire la tua richiesta e non saranno ceduti a terzi. Puoi richiedere la cancellazione in qualsiasi momento scrivendo a info@picacaravan.it. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/PreventivoSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PreventivoSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5b216d16"]]);
const _sfc_main$2 = {
  __name: "HomeContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      name: "",
      phone: "",
      email: "",
      interest: "camper",
      message: "",
      privacy: false
    });
    const isSubmitting = ref(false);
    const submitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contatti",
        class: "contact-section py-24 md:py-32 bg-gray-50 dark:bg-[#030303] overflow-hidden relative"
      }, _attrs))} data-v-4ccd8e82><div class="container relative z-10" data-v-4ccd8e82><div class="contact-grid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20" data-v-4ccd8e82><div class="lg:col-span-5 flex flex-col justify-center" data-v-4ccd8e82><div class="mb-12" data-v-4ccd8e82><span class="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 inline-block" data-v-4ccd8e82>Contatti &amp; Sede</span><h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-8 dark:text-white uppercase tracking-tighter leading-none" data-v-4ccd8e82> Vieni a <br data-v-4ccd8e82><span class="text-primary italic" data-v-4ccd8e82>Trovarci</span></h2><p class="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-medium" data-v-4ccd8e82> Siamo a San Nicola la Strada, pronti ad accoglierti e guidarti nella scelta del tuo prossimo camper o roulotte. </p></div><div class="space-y-6" data-v-4ccd8e82><div class="p-6 bg-white dark:bg-[#0b0b0b] rounded-xl border border-primary/20 flex items-start gap-6" data-v-4ccd8e82><div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0" data-v-4ccd8e82><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-4ccd8e82><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-v-4ccd8e82></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-v-4ccd8e82></path></svg></div><div data-v-4ccd8e82><h4 class="text-sm font-black dark:text-white uppercase tracking-widest mb-2" data-v-4ccd8e82>Sede Operativa</h4><p class="text-sm text-gray-400 leading-relaxed" data-v-4ccd8e82>Via Retella / Pizzo Pilato 2ª Traversa n. 2<br data-v-4ccd8e82>81020 San Nicola la Strada (CE)</p></div></div><div class="p-6 bg-white dark:bg-[#0b0b0b] rounded-xl border border-primary/20 flex items-start gap-6" data-v-4ccd8e82><div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0" data-v-4ccd8e82><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-4ccd8e82><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493-1.498A1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" data-v-4ccd8e82></path></svg></div><div data-v-4ccd8e82><h4 class="text-sm font-black dark:text-white uppercase tracking-widest mb-2" data-v-4ccd8e82>Supporto Diretto</h4><p class="text-sm text-gray-400 leading-relaxed" data-v-4ccd8e82>333 2327592 (Antimo Pica)<br data-v-4ccd8e82>0823 224038 (Showroom)</p></div></div><div class="p-6 bg-white dark:bg-[#0b0b0b] rounded-xl border border-primary/20 flex items-start gap-6" data-v-4ccd8e82><div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0" data-v-4ccd8e82><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-4ccd8e82><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-4ccd8e82></path></svg></div><div data-v-4ccd8e82><h4 class="text-sm font-black dark:text-white uppercase tracking-widest mb-2" data-v-4ccd8e82>Orari di Apertura</h4><p class="text-sm text-gray-400 leading-relaxed" data-v-4ccd8e82>Lun - Ven: 09:00-13:00 / 15:30-19:30<br data-v-4ccd8e82>Sabato: 09:00-13:30</p></div></div></div></div><div class="lg:col-span-7" data-v-4ccd8e82><div class="contact-form-card bg-white dark:bg-[#0b0b0b] rounded-2xl p-8 md:p-12 border border-primary/20 relative" data-v-4ccd8e82>`);
      if (!unref(submitted)) {
        _push(`<div class="relative z-10" data-v-4ccd8e82><h3 class="text-3xl font-black mb-10 dark:text-white uppercase tracking-tighter" data-v-4ccd8e82>Inviaci un <span class="text-primary" data-v-4ccd8e82>Messaggio</span></h3><form class="space-y-6" data-v-4ccd8e82><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-4ccd8e82><input${ssrRenderAttr("value", unref(formData).name)} type="text" placeholder="Nome Completo" class="w-full bg-gray-50 dark:bg-[#111] border border-primary/20 focus:border-primary rounded-xl py-4 px-6 text-sm text-gray-900 dark:text-white outline-none" required data-v-4ccd8e82><input${ssrRenderAttr("value", unref(formData).phone)} type="tel" placeholder="Telefono" class="w-full bg-gray-50 dark:bg-[#111] border border-primary/20 focus:border-primary rounded-2xl py-4 px-6 text-sm text-gray-900 dark:text-white outline-none" required data-v-4ccd8e82></div><input${ssrRenderAttr("value", unref(formData).email)} type="email" placeholder="Email" class="w-full bg-gray-50 dark:bg-[#111] border border-primary/20 focus:border-primary rounded-2xl py-4 px-6 text-sm text-gray-900 dark:text-white outline-none" required data-v-4ccd8e82><div class="relative" data-v-4ccd8e82><select class="w-full bg-gray-50 dark:bg-[#111] border border-primary/20 focus:border-primary rounded-2xl py-4 px-6 text-sm text-gray-900 dark:text-white outline-none appearance-none" data-v-4ccd8e82><option value="camper" data-v-4ccd8e82${ssrIncludeBooleanAttr(Array.isArray(unref(formData).interest) ? ssrLooseContain(unref(formData).interest, "camper") : ssrLooseEqual(unref(formData).interest, "camper")) ? " selected" : ""}>Interesse: Camper</option><option value="roulotte" data-v-4ccd8e82${ssrIncludeBooleanAttr(Array.isArray(unref(formData).interest) ? ssrLooseContain(unref(formData).interest, "roulotte") : ssrLooseEqual(unref(formData).interest, "roulotte")) ? " selected" : ""}>Interesse: Roulotte</option><option value="rimessaggio" data-v-4ccd8e82${ssrIncludeBooleanAttr(Array.isArray(unref(formData).interest) ? ssrLooseContain(unref(formData).interest, "rimessaggio") : ssrLooseEqual(unref(formData).interest, "rimessaggio")) ? " selected" : ""}>Interesse: Rimessaggio</option><option value="assistenza" data-v-4ccd8e82${ssrIncludeBooleanAttr(Array.isArray(unref(formData).interest) ? ssrLooseContain(unref(formData).interest, "assistenza") : ssrLooseEqual(unref(formData).interest, "assistenza")) ? " selected" : ""}>Interesse: Assistenza</option></select><svg class="absolute right-6 top-1/2 -mt-2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-4ccd8e82><path d="M19 9l-7 7-7-7" data-v-4ccd8e82></path></svg></div><textarea placeholder="Come possiamo aiutarti?" rows="4" class="w-full bg-gray-50 dark:bg-[#111] border border-primary/20 focus:border-primary rounded-2xl py-4 px-6 text-sm text-gray-900 dark:text-white outline-none resize-none" data-v-4ccd8e82>${ssrInterpolate(unref(formData).message)}</textarea><div class="flex items-center gap-3" data-v-4ccd8e82><input type="checkbox" id="privacy"${ssrIncludeBooleanAttr(Array.isArray(unref(formData).privacy) ? ssrLooseContain(unref(formData).privacy, null) : unref(formData).privacy) ? " checked" : ""} class="w-4 h-4 accent-primary" required data-v-4ccd8e82><label for="privacy" class="text-xs text-gray-400" data-v-4ccd8e82>Accetto il trattamento dei dati personali secondo la `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/privacy-policy",
          class: "text-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Privacy Policy`);
            } else {
              return [
                createTextVNode("Privacy Policy")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</label></div><button type="submit" class="w-full py-5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-2xl"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-4ccd8e82>${ssrInterpolate(unref(isSubmitting) ? "Invio in corso..." : "Invia Messaggio")}</button></form></div>`);
      } else {
        _push(`<div class="relative z-10 text-center py-20" data-v-4ccd8e82><div class="w-20 h-20 bg-gray-100 dark:bg-[#111] text-primary rounded-full flex items-center justify-center mx-auto mb-8" data-v-4ccd8e82><svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" data-v-4ccd8e82><path d="M5 13l4 4L19 7" data-v-4ccd8e82></path></svg></div><h3 class="text-3xl font-black mb-4 dark:text-white uppercase tracking-tighter" data-v-4ccd8e82>Messaggio <span class="text-primary" data-v-4ccd8e82>Inviato</span></h3><p class="text-gray-400 mb-10" data-v-4ccd8e82>Grazie! Ti risponderemo entro 24 ore lavorative.</p><button class="text-xs font-black text-primary uppercase tracking-widest" data-v-4ccd8e82>Invia un altro messaggio</button></div>`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ContactSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContactSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4ccd8e82"]]);
const _sfc_main$1 = {
  __name: "HomeTestimonialsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = ref([
      {
        id: 1,
        name: "Marco Rossi",
        location: "San Nicola la Strada, CE",
        rating: 5,
        date: "Marzo 2024",
        vehicle: "Camper Adria 670",
        image: "https://images.unsplash.com/photo-1507003211169-0a1f7a1a85e?auto=format&fit=crop&q=85&w=400",
        text: "Servizio impeccabile e professionalità. Ho trovato il camper perfetto per la mia famiglia. Consigliatissimo!"
      },
      {
        id: 2,
        name: "Laura Bianchi",
        location: "Caserta, CE",
        rating: 5,
        date: "Febbraio 2024",
        vehicle: "Roulotte Knaus Tabbert",
        image: "https://images.unsplash.com/photo-1573497029040-73c8850b966?auto=format&fit=crop&q=85&w=400",
        text: "Personale gentile e competente. Mi hanno guidato nella scelta della mia prima roulotte con pazienza e consigli preziosi."
      },
      {
        id: 3,
        name: "Giuseppe Verdi",
        location: "Napoli, NA",
        rating: 5,
        date: "Gennaio 2024",
        vehicle: "Camper Hymer B-Class Modern",
        image: "https://images.unsplash.com/photo-1542282086-f6ff940b6c6c?auto=format&fit=crop&q=85&w=400",
        text: "Assistenza post-vendita eccellente. Anche per piccoli interventi, sono sempre disponibili e rapidi."
      },
      {
        id: 4,
        name: "Anna Esposito",
        location: "Aversa, CE",
        rating: 5,
        date: "Dicembre 2023",
        vehicle: "Camper Dethleff T7",
        image: "https://images.unsplash.com/photo-1558618037-3c8c5bf5b1c?auto=format&fit=crop&q=85&w=400",
        text: "Qualità premium e attenzione ai dettagli. Il camper era perfetto e il servizio di consegna è stato puntuale."
      },
      {
        id: 5,
        name: "Roberto Romano",
        location: "Benevento, CE",
        rating: 5,
        date: "Novembre 2023",
        vehicle: "Camper Laika Ecovip",
        image: "https://images.unsplash.com/photo-1618668123933-0b4a2f5b6b2c?auto=format&fit=crop&q=85&w=400",
        text: "Prezzo competitivo e trasparenza. Nessuna sorpresa, tutto come descritto. Venditore affidabile!"
      },
      {
        id: 6,
        name: "Francesca Neri",
        location: "Santa Maria Capua Vetere, CE",
        rating: 5,
        date: "Ottobre 2023",
        vehicle: "Roulotte Fendt Saphir",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=85&w=400",
        text: "Esperienza pluriennale nel settore. Conoscono il mondo camper e offrono consulenza esperta."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section section" }, _attrs))} data-v-bc8c9346><div class="container" data-v-bc8c9346><div class="section-header" data-v-bc8c9346><div class="section-content" data-v-bc8c9346><span class="section-kicker" data-v-bc8c9346>Testimonianze</span><h2 class="section-title" data-v-bc8c9346>Cosa Dicono i Nostri Clienti</h2><p class="section-subtitle" data-v-bc8c9346>Scopri le esperienze reali di chi ha scelto Pica Caravan per i propri viaggi.</p></div></div><div class="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-bc8c9346><!--[-->`);
      ssrRenderList(testimonials.value, (testimonial) => {
        _push(`<article class="testimonial-card flex flex-col justify-between" data-v-bc8c9346><div data-v-bc8c9346><div class="flex items-center gap-4 mb-6" data-v-bc8c9346><div class="w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg" data-v-bc8c9346>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: testimonial.image,
          alt: testimonial.name,
          class: "w-full h-full object-cover",
          format: "webp",
          width: "56",
          height: "56"
        }, null, _parent));
        _push(`</div><div class="flex flex-col" data-v-bc8c9346><h3 class="text-lg font-black dark:text-white uppercase tracking-tighter" data-v-bc8c9346>${ssrInterpolate(testimonial.name)}</h3><span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest" data-v-bc8c9346>${ssrInterpolate(testimonial.location)}</span></div></div><div class="flex gap-1 mb-4 text-primary" data-v-bc8c9346><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-v-bc8c9346><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-bc8c9346></path></svg>`);
        });
        _push(`<!--]--></div><div class="testimonial-content mb-6" data-v-bc8c9346><p class="text-sm text-gray-500 dark:text-gray-400 italic leading-relaxed" data-v-bc8c9346>&quot;${ssrInterpolate(testimonial.text)}&quot;</p></div></div><div class="pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between" data-v-bc8c9346><div class="flex flex-col" data-v-bc8c9346><span class="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em]" data-v-bc8c9346>Veicolo</span><span class="text-[10px] font-black text-primary uppercase tracking-tighter" data-v-bc8c9346>${ssrInterpolate(testimonial.vehicle)}</span></div><span class="text-[9px] font-bold text-gray-400 uppercase" data-v-bc8c9346>${ssrInterpolate(testimonial.date)}</span></div></article>`);
      });
      _push(`<!--]--></div><div class="testimonials-cta" data-v-bc8c9346><div class="cta-content" data-v-bc8c9346><h3 class="cta-title" data-v-bc8c9346>Condividi la Tua Esperienza</h3><p class="cta-subtitle" data-v-bc8c9346>Hai acquistato un veicolo da Pica Caravan? Raccontaci la tua storia!</p><div class="cta-actions" data-v-bc8c9346><a href="tel:3332327592" class="btn btn-primary btn-lg" data-v-bc8c9346><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bc8c9346><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" data-v-bc8c9346></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18" data-v-bc8c9346></path></svg> Lascia una Recensione </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#contatti",
        class: "btn btn-secondary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bc8c9346${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0l7.89 5.26v9.48L12 20l-7.89-5.26V8z" data-v-bc8c9346${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" data-v-bc8c9346${_scopeId}></path></svg> Contatta Esperto `);
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
                }),
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                })
              ])),
              createTextVNode(" Contatta Esperto ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/TestimonialsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TestimonialsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bc8c9346"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const siteUrl = config.public.siteUrl || "http://localhost:3000";
    config.public.apiBase || "http://localhost:3001";
    useHead({
      htmlAttrs: { lang: "it" },
      title: "Pica Caravan | Vendita Camper e Roulotte a San Nicola la Strada (CE)",
      meta: [
        { name: "description", content: "Pica Caravan di Antimo Pica: vendita camper e roulotte nuovi e usati, assistenza tecnica, riparazioni e rimessaggio sicuro a San Nicola la Strada (CE)." },
        { name: "keywords", content: "vendita camper caserta, camper usati caserta, roulotte caserta, rimessaggio camper caserta, assistenza camper caserta, ricambi caravan" },
        { name: "robots", content: "index,follow" },
        { name: "author", content: "Pica Caravan" },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Pica Caravan | Camper, Roulotte e Rimessaggio a Caserta" },
        { property: "og:description", content: "Scopri la nostra selezione di camper e roulotte. Offriamo servizi completi di assistenza, riparazione e rimessaggio." },
        { property: "og:url", content: siteUrl },
        { property: "og:image", content: `${siteUrl}/logo-pica-caravan.jpg` },
        { property: "og:site_name", content: "Pica Caravan" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Pica Caravan | Vendita e Assistenza Camper" },
        { name: "twitter:description", content: "Camper e roulotte nuovi e usati a San Nicola la Strada. Rimessaggio e assistenza specializzata." },
        { name: "twitter:image", content: `${siteUrl}/logo-pica-caravan.jpg` }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoDealer",
            "name": "Pica Caravan",
            "image": `${siteUrl}/logo-pica-caravan.jpg`,
            "@id": siteUrl,
            "url": siteUrl,
            "telephone": "+390823224038",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via Retella / Pizzo Pilato 2ª Traversa n. 2",
              "addressLocality": "San Nicola la Strada",
              "postalCode": "81020",
              "addressRegion": "CE",
              "addressCountry": "IT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.0312,
              "longitude": 14.3312
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "13:00"
              }
            ]
          })
        }
      ]
    });
    const vehicles = ref([]);
    const loading = ref(true);
    const error = ref(false);
    const fetchVehicles = async () => {
      try {
        const res = await $fetch("/api/veicoli");
        vehicles.value = Array.isArray(res.vehicles) ? res.vehicles : [];
      } catch (e) {
        console.error("Errore nel caricamento:", e);
        error.value = true;
      } finally {
        loading.value = false;
      }
    };
    fetchVehicles();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homepage" }, _attrs))} data-v-3ac2be86>`);
      _push(ssrRenderComponent(HeroSection, {
        badge: "Vendita e Rimessaggio a San Nicola la Strada",
        title: "Camper e roulotte per partire senza pensieri",
        subtitle: "Vendita nuovo e usato garantito, assistenza specializzata e rimessaggio sicuro a Caserta"
      }, null, _parent));
      _push(ssrRenderComponent(AboutSection, null, null, _parent));
      if (loading.value) {
        _push(`<div class="state-box" data-v-3ac2be86>Caricamento veicoli...</div>`);
      } else if (error.value) {
        _push(`<div class="state-box error" data-v-3ac2be86>Impossibile caricare i veicoli.</div>`);
      } else {
        _push(ssrRenderComponent(FeaturedVehicles, { vehicles: vehicles.value }, null, _parent));
      }
      _push(ssrRenderComponent(ServiceSection, null, null, _parent));
      _push(ssrRenderComponent(BrandsSection, null, null, _parent));
      _push(ssrRenderComponent(CTABand, null, null, _parent));
      _push(ssrRenderComponent(PreventivoSection, null, null, _parent));
      _push(ssrRenderComponent(TestimonialsSection, null, null, _parent));
      _push(ssrRenderComponent(ContactSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ac2be86"]]);

export { index as default };
//# sourceMappingURL=index-I-FVtfoB.mjs.map
