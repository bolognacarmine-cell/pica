import { _ as __nuxt_component_0$1 } from './nuxt-link-CnjllpwB.mjs';
import { _ as __nuxt_component_1$1 } from './NuxtImg-CuGAG3SO.mjs';
import { computed, mergeProps, ref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { g as gsapWithCSS } from '../_/index.mjs';
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
import './composables-Cjh2Fp2X.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
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
    const isScrolled = ref(false);
    const mobileMenuOpen = ref(false);
    const isDarkMode = ref(true);
    const searchQuery = ref("");
    ref("IT");
    ref(false);
    const isLoaded = ref(false);
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
      if (mobileMenuOpen.value) {
        gsapWithCSS.from(".mobile-drawer-link", { x: 50, opacity: 0, stagger: 0.1, delay: 0.3, ease: "back.out(1.7)" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_nuxt_img = __nuxt_component_1$1;
      if (!isLoaded.value) {
        _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-[100] h-[80px] bg-[var(--line)] backdrop-blur-md animate-pulse" }, _attrs))} data-v-0b8a9529><div class="container mx-auto px-8 flex items-center justify-between h-full" data-v-0b8a9529><div class="w-40 h-8 bg-[var(--line)] rounded-full" data-v-0b8a9529></div><div class="hidden lg:flex gap-8" data-v-0b8a9529><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<div class="w-16 h-4 bg-[var(--line)] rounded-full" data-v-0b8a9529></div>`);
        });
        _push(`<!--]--></div><div class="w-28 h-8 bg-[var(--line)] rounded-full" data-v-0b8a9529></div></div></header>`);
      } else {
        _push(`<header${ssrRenderAttrs(mergeProps({
          role: "banner",
          class: ["fixed top-0 left-0 right-0 z-[100] transition-all duration-500 will-change-transform border-b border-transparent flex items-center", [isScrolled.value ? "h-[70px] shadow-2xl" : "h-[90px]"]]
        }, _attrs))} data-v-0b8a9529><div class="custom-cursor hidden lg:block fixed w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-300" data-v-0b8a9529></div><div class="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-full" data-v-0b8a9529>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "nav-logo flex items-center gap-2 md:gap-4 group no-underline shrink-0 py-2",
          "aria-label": "Pica Caravan - Home"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="nav-logo-parallax relative w-12 h-12 md:w-16 md:h-16 overflow-hidden transition-all duration-700 flex items-center justify-center" data-v-0b8a9529${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: "/logo-pica.png",
                alt: "Logo Pica Caravan",
                class: "w-full h-full object-contain",
                format: "webp",
                width: "64",
                height: "64"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-col justify-center" data-v-0b8a9529${_scopeId}><span class="text-xl md:text-2xl font-black tracking-tighter dark:text-white text-black leading-none uppercase group-hover:text-primary transition-colors duration-500" data-v-0b8a9529${_scopeId}>PICA CARAVAN</span><div class="flex items-center gap-1.5 mt-1" data-v-0b8a9529${_scopeId}><div class="h-[1.5px] w-4 bg-primary hidden md:block" data-v-0b8a9529${_scopeId}></div><span class="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-primary uppercase opacity-90" data-v-0b8a9529${_scopeId}>Vendita &amp; Rimessaggio</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "nav-logo-parallax relative w-12 h-12 md:w-16 md:h-16 overflow-hidden transition-all duration-700 flex items-center justify-center" }, [
                  createVNode(_component_nuxt_img, {
                    src: "/logo-pica.png",
                    alt: "Logo Pica Caravan",
                    class: "w-full h-full object-contain",
                    format: "webp",
                    width: "64",
                    height: "64"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-center" }, [
                  createVNode("span", { class: "text-xl md:text-2xl font-black tracking-tighter dark:text-white text-black leading-none uppercase group-hover:text-primary transition-colors duration-500" }, "PICA CARAVAN"),
                  createVNode("div", { class: "flex items-center gap-1.5 mt-1" }, [
                    createVNode("div", { class: "h-[1.5px] w-4 bg-primary hidden md:block" }),
                    createVNode("span", { class: "text-[9px] md:text-[10px] font-black tracking-[0.2em] text-primary uppercase opacity-90" }, "Vendita & Rimessaggio")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<nav class="hidden lg:flex items-center gap-6 xl:gap-8" role="navigation" data-v-0b8a9529><!--[-->`);
        ssrRenderList(__props.menuItems, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.name,
            to: item.link,
            class: "nav-link text-[12px] font-black uppercase tracking-[0.1em] text-[var(--text-dim)] hover:text-primary transition-all duration-500 relative group py-2",
            "active-class": "active-nav-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)} <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 ease-expo group-hover:w-full group-[.active-nav-link]:w-full rounded-full" data-v-0b8a9529${_scopeId}></span>`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name) + " ", 1),
                  createVNode("span", { class: "absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 ease-expo group-hover:w-full group-[.active-nav-link]:w-full rounded-full" })
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav><div class="nav-actions flex items-center gap-3 md:gap-4 lg:gap-6" data-v-0b8a9529><div class="relative hidden lg:block group/search" data-v-0b8a9529><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Cerca..." class="bg-[var(--line)] border border-[var(--line)] focus:border-primary/50 rounded-full py-2 px-5 pl-10 text-[11px] font-medium outline-none transition-all duration-500 w-28 xl:w-36 focus:w-48 xl:focus:w-56 shadow-inner text-white placeholder:text-white/30" data-v-0b8a9529><svg width="14" height="14" class="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within/search:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0b8a9529><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-0b8a9529></path></svg></div><div class="hidden xl:flex items-center gap-5 border-l border-[var(--line)] pl-6 h-6" data-v-0b8a9529><a href="https://facebook.com" target="_blank" aria-label="Facebook" class="text-white/40 hover:text-primary transition-all hover:scale-110" data-v-0b8a9529><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" data-v-0b8a9529><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-v-0b8a9529></path></svg></a><a href="https://instagram.com" target="_blank" aria-label="Instagram" class="text-white/40 hover:text-primary transition-all hover:scale-110" data-v-0b8a9529><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" data-v-0b8a9529><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.242 3.608-1.308 1.266-.058-1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759-6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-v-0b8a9529></path></svg></a></div><button aria-label="Cambia tema" class="p-2.5 rounded-full bg-[var(--line)] hover:bg-primary/20 transition-all duration-300 text-white/60 hover:text-white" data-v-0b8a9529>`);
        if (isDarkMode.value) {
          _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-v-0b8a9529><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" data-v-0b8a9529></path></svg>`);
        } else {
          _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-v-0b8a9529><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" data-v-0b8a9529></path></svg>`);
        }
        _push(`</button><a href="tel:3332327592" class="nav-cta hidden md:flex px-7 py-3 bg-[var(--primary)] text-white text-[11px] font-black rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-0.5 active:scale-95 no-underline uppercase tracking-widest border border-[var(--line)]" data-v-0b8a9529>${ssrInterpolate(__props.ctaText)}</a><button aria-label="Menu" class="lg:hidden p-2.5 text-gray-700 dark:text-gray-200 focus:outline-none bg-[var(--line)] rounded-xl border border-transparent active:scale-95 transition-all" data-v-0b8a9529><div class="w-6 h-5 flex flex-col justify-between relative" data-v-0b8a9529><span class="${ssrRenderClass([mobileMenuOpen.value ? "rotate-45 translate-y-[9px] w-full" : "w-full", "h-0.5 bg-current transition-all duration-500 rounded-full"])}" data-v-0b8a9529></span><span class="${ssrRenderClass([mobileMenuOpen.value ? "opacity-0 -translate-x-5" : "w-full", "h-0.5 bg-current transition-all duration-500 rounded-full"])}" data-v-0b8a9529></span><span class="${ssrRenderClass([mobileMenuOpen.value ? "-rotate-45 -translate-y-[9px] w-full" : "w-full", "h-0.5 bg-current transition-all duration-500 rounded-full"])}" data-v-0b8a9529></span></div></button></div></div>`);
        if (mobileMenuOpen.value) {
          _push(`<div class="fixed inset-0 z-[110] lg:hidden" data-v-0b8a9529><div class="absolute inset-0 bg-black/70 backdrop-blur-xl" data-v-0b8a9529></div><div class="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.5)] p-10 flex flex-col border-l border-white/5" data-v-0b8a9529><div class="flex justify-between items-center mb-16" data-v-0b8a9529><div class="flex flex-col" data-v-0b8a9529><span class="text-3xl font-black text-primary italic" data-v-0b8a9529>MENU</span><div class="w-12 h-1 bg-primary mt-1 rounded-full" data-v-0b8a9529></div></div><button class="p-3 bg-gray-100 dark:bg-white/5 rounded-full" data-v-0b8a9529><svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0b8a9529><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-0b8a9529></path></svg></button></div><nav class="flex flex-col gap-8" role="navigation" data-v-0b8a9529><!--[-->`);
          ssrRenderList(__props.menuItems, (item, idx) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: item.name,
              to: item.link,
              class: "mobile-drawer-link text-3xl font-black dark:text-white text-black hover:text-primary transition-all flex items-center gap-4 no-underline group",
              onClick: toggleMobileMenu
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="text-sm text-primary/40 group-hover:text-primary transition-colors" data-v-0b8a9529${_scopeId}>0${ssrInterpolate(idx + 1)}.</span> ${ssrInterpolate(item.name)}`);
                } else {
                  return [
                    createVNode("span", { class: "text-sm text-primary/40 group-hover:text-primary transition-colors" }, "0" + toDisplayString(idx + 1) + ".", 1),
                    createTextVNode(" " + toDisplayString(item.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></nav><div class="mt-auto pt-12" data-v-0b8a9529><div class="flex gap-8 mb-10 justify-center" data-v-0b8a9529><a href="https://wa.me/393391581997" class="text-gray-400 hover:text-[#25D366] transition-transform hover:scale-125" data-v-0b8a9529><svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" data-v-0b8a9529><path d="M12.31 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.41 1.26 4.85l-1.33 4.86 4.98-1.31c1.4.74 2.99 1.17 4.67 1.17 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.79 14.16c-.25.7-1.46 1.34-2.01 1.43-.5.08-1.15.15-3.32-.74-2.78-1.14-4.57-3.97-4.71-4.16-.14-.19-1.13-1.5-1.13-2.86s.71-2.03.96-2.3c.25-.27.54-.34.72-.34.18 0 .36.01.52.02.17.01.4.04.62.55.23.54.79 1.93.86 2.07.07.14.12.3.02.49-.1.19-.15.3-.3.47-.15.17-.31.38-.44.51-.15.15-.31.31-.13.62.18.31.79 1.3 1.7 2.11.7.63 1.29.83 1.6.96.31.13.49.11.67-.1.18-.21.79-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.15 1.02.32.16.53.24.6.38.08.13.08.77-.17 1.47z" data-v-0b8a9529></path></svg></a><a href="#" class="text-gray-400 hover:text-[#E4405F] transition-transform hover:scale-125" data-v-0b8a9529><svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" data-v-0b8a9529><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.242 3.608-1.308 1.266-.058-1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072z" data-v-0b8a9529></path></svg></a></div><a href="tel:3332327592" class="block w-full text-center py-5 bg-primary text-white font-black rounded-2xl shadow-2xl shadow-primary/30 uppercase tracking-widest text-lg no-underline" data-v-0b8a9529>${ssrInterpolate(__props.ctaText)}</a></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</header>`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0b8a9529"]]);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-layout" }, _attrs))} data-v-da63cedb>`);
      if (!hideHeaderFooter.value) {
        _push(ssrRenderComponent(_component_LayoutAppHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="${ssrRenderClass({ "admin-main": isAdmin.value })}" data-v-da63cedb><div class="page-container" data-v-da63cedb>`);
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
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da63cedb"]]);

export { _default as default };
//# sourceMappingURL=default-VOLds8to.mjs.map
