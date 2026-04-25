import { _ as __nuxt_component_0$1 } from './nuxt-link-Bp6FFQQI.mjs';
import { computed, mergeProps, ref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _imports_0 } from './virtual_public-3A5mrv-4.mjs';
import { useRoute } from 'vue-router';
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

const _sfc_main$2 = {
  __name: "LayoutAppHeader",
  __ssrInlineRender: true,
  props: {
    logo: { type: String, default: "/logo-pica.png" },
    menuItems: {
      type: Array,
      default: () => [
        { name: "Home", link: "/" },
        { name: "Veicoli", link: "/veicoli" },
        { name: "Blog", link: "/blog" },
        { name: "Contatti", link: "/#contatti" }
      ]
    },
    ctaText: { type: String, default: "Info: 333 2327592" }
  },
  setup(__props) {
    const props = __props;
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header-fixed",
        role: "banner"
      }, _attrs))} data-v-5410d4d8><div class="header-content" data-v-5410d4d8>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo-link",
        "aria-label": "Pica Caravan - Home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-shell" data-v-5410d4d8${_scopeId}><img${ssrRenderAttr("src", props.logo)} alt="Logo Pica Caravan" class="logo-visible" data-v-5410d4d8${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "logo-shell" }, [
                createVNode("img", {
                  src: props.logo,
                  alt: "Logo Pica Caravan",
                  class: "logo-visible"
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="nav-desktop" role="navigation" aria-label="Menu principale" data-v-5410d4d8><!--[-->`);
      ssrRenderList(props.menuItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.link,
          class: "nav-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="actions" data-v-5410d4d8><a href="tel:3332327592" class="cta" data-v-5410d4d8>${ssrInterpolate(props.ctaText)}</a><button class="menu-toggle" type="button" data-v-5410d4d8> Menu </button></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="mobile-menu" data-v-5410d4d8><nav class="mobile-nav" role="navigation" aria-label="Menu mobile" data-v-5410d4d8><!--[-->`);
        ssrRenderList(props.menuItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.name,
            to: item.link,
            class: "mobile-link",
            onClick: ($event) => mobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5410d4d8"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))} data-v-490be011><div class="container py-20" data-v-490be011><div class="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-10" data-v-490be011><div class="lg:col-span-2 max-w-md" data-v-490be011>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center gap-4 group no-underline mb-8"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative w-16 h-16 flex items-center justify-center" data-v-490be011${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Logo Pica Caravan" class="w-full h-full object-contain" data-v-490be011${_scopeId}></div><div class="flex flex-col" data-v-490be011${_scopeId}><span class="text-2xl font-black tracking-tighter text-white uppercase leading-none group-hover:text-primary transition-colors" data-v-490be011${_scopeId}>PICA CARAVAN</span><span class="text-[10px] font-black tracking-[0.2em] text-primary uppercase opacity-90 mt-1" data-v-490be011${_scopeId}>Vendita &amp; Rimessaggio</span></div>`);
      } else {
        return [
          createVNode("div", { class: "relative w-16 h-16 flex items-center justify-center" }, [
            createVNode("img", {
              src: _imports_0,
              alt: "Logo Pica Caravan",
              class: "w-full h-full object-contain"
            })
          ]),
          createVNode("div", { class: "flex flex-col" }, [
            createVNode("span", { class: "text-2xl font-black tracking-tighter text-white uppercase leading-none group-hover:text-primary transition-colors" }, "PICA CARAVAN"),
            createVNode("span", { class: "text-[10px] font-black tracking-[0.2em] text-primary uppercase opacity-90 mt-1" }, "Vendita & Rimessaggio")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="text-[var(--text-dim)] text-sm leading-relaxed mb-8" data-v-490be011> Pica Caravan di Antimo Pica. La tua concessionaria di riferimento a San Nicola la Strada per la vendita di camper, roulotte e rimessaggio sicuro. Oltre 20 anni di esperienza al servizio dei viaggiatori. </p><div class="flex gap-4" data-v-490be011><a href="#" class="w-10 h-10 rounded-full bg-[var(--line)] flex items-center justify-center text-[var(--text-dim)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300" data-v-490be011><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" data-v-490be011><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-v-490be011></path></svg></a><a href="#" class="w-10 h-10 rounded-full bg-[var(--line)] flex items-center justify-center text-[var(--text-dim)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300" data-v-490be011><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" data-v-490be011><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.242 3.608-1.308 1.266-.058-1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759-6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-v-490be011></path></svg></a></div></div><div data-v-490be011><h4 class="text-white text-xs font-black uppercase tracking-[0.2em] mb-8" data-v-490be011>Navigazione</h4><ul class="flex flex-col gap-4 p-0 list-none" data-v-490be011><!--[-->`);
  ssrRenderList(["Home", "Veicoli", "Blog", "Azienda", "Contatti"], (link) => {
    _push(`<li data-v-490be011>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: link === "Home" ? "/" : `/${link.toLowerCase()}`,
      class: "text-[var(--text-dim)] hover:text-[var(--primary)] text-sm font-bold transition-colors no-underline uppercase tracking-wider"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div><div data-v-490be011><h4 class="text-white text-xs font-black uppercase tracking-[0.2em] mb-8" data-v-490be011>Contatti</h4><ul class="flex flex-col gap-6 p-0 list-none" data-v-490be011><li class="flex items-start gap-4" data-v-490be011><div class="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--line)] flex items-center justify-center shrink-0" data-v-490be011><svg class="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-490be011><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-v-490be011></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-v-490be011></path></svg></div><span class="text-[var(--text-dim)] text-xs leading-relaxed" data-v-490be011>Via Retella / Pizzo Pilato<br data-v-490be011>San Nicola la Strada (CE)</span></li><li class="flex items-start gap-4" data-v-490be011><div class="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--line)] flex items-center justify-center shrink-0" data-v-490be011><svg class="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-490be011><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-v-490be011></path></svg></div><span class="text-[var(--text-dim)] text-xs leading-relaxed" data-v-490be011>0823 224038<br data-v-490be011>333 2327592</span></li></ul></div></div></div><div class="border-t border-[var(--line)] py-10" data-v-490be011><div class="container flex flex-col md:flex-row justify-between items-center gap-6" data-v-490be011><p class="text-[var(--text-dim)] opacity-40 text-[10px] font-bold uppercase tracking-widest" data-v-490be011> © 2026 PICA CARAVAN. TUTTI I DIRITTI RISERVATI. P.IVA 02741910613 </p><div class="flex gap-8" data-v-490be011>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacy-policy",
    class: "text-[var(--text-dim)] opacity-40 hover:opacity-100 hover:text-white text-[10px] font-bold uppercase tracking-widest no-underline transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy`);
      } else {
        return [
          createTextVNode("Privacy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/cookie-policy",
    class: "text-[var(--text-dim)] opacity-40 hover:opacity-100 hover:text-white text-[10px] font-bold uppercase tracking-widest no-underline transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cookies`);
      } else {
        return [
          createTextVNode("Cookies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-490be011"]]), { __name: "LayoutFooter" });
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isAdmin = computed(() => route.path.startsWith("/admin"));
    const isPortal = computed(() => route.path.startsWith("/portale"));
    const hideHeaderFooter = computed(() => isAdmin.value || isPortal.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutAppHeader = __nuxt_component_0;
      const _component_LayoutFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-layout" }, _attrs))} data-v-dbd35626>`);
      if (!hideHeaderFooter.value) {
        _push(ssrRenderComponent(_component_LayoutAppHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="${ssrRenderClass({ "admin-main": isAdmin.value, "no-site-header": hideHeaderFooter.value })}" data-v-dbd35626><div class="page-container" data-v-dbd35626>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
      if (!hideHeaderFooter.value) {
        _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dbd35626"]]);

export { _default as default };
//# sourceMappingURL=default-mHaFfU6w.mjs.map
