import { _ as __nuxt_component_0 } from './nuxt-link-CnjllpwB.mjs';
import { _ as __nuxt_component_1 } from './NuxtImg-CuGAG3SO.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
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
import 'vue-router';
import '@vue/shared';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const loading = ref(true);
    const error = ref(null);
    const renderMarkdown = (text) => {
      if (!text) return "";
      let html = text.replace(/^# (.*$)/gim, '<h1 class="article-h1">$1</h1>').replace(/^## (.*$)/gim, '<h2 class="article-h2">$1</h2>').replace(/^### (.*$)/gim, '<h3 class="article-h3">$1</h3>').replace(/\*\*(.*)\*\*/gim, '<strong class="article-strong">$1</strong>').replace(/\*(.*)\*/gim, '<em class="article-em">$1</em>').replace(/^- (.*$)/gim, '<li class="article-li">$1</li>').replace(/^> (.*$)/gim, '<blockquote class="article-blockquote">$1</blockquote>').replace(/!\[(.*?)\]\((.*?)\)/gim, (match, alt, url) => {
        return `<img src="${url}" alt="${alt}" class="article-img" />`;
      }).replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" class="article-link">$1</a>').replace(/\n\n/gim, '</p><p class="article-p">');
      return `<div class="article-content"><p class="article-p">${html}</p></div>`;
    };
    computed(() => {
      if (!post.value?.imageCover) return "/logo-pica-caravan.jpg";
      return transformImage(post.value.imageCover, { width: 1920, height: 1080, crop: "fill", quality: "auto", format: "webp" });
    });
    const formatDate = (d) => new Date(d).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-post-page section" }, _attrs))} data-v-9fbfa44f><div class="post-background" data-v-9fbfa44f><div class="bg-pattern" data-v-9fbfa44f></div></div>`);
      if (loading.value) {
        _push(`<div class="loading-state" data-v-9fbfa44f><div class="loading-spinner" data-v-9fbfa44f></div><p data-v-9fbfa44f>Caricamento articolo...</p></div>`);
      } else if (error.value) {
        _push(`<div class="error-state" data-v-9fbfa44f><h2 data-v-9fbfa44f>${ssrInterpolate(error.value)}</h2><p data-v-9fbfa44f>Impossibile caricare l&#39;articolo richiesto.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Torna al Blog`);
            } else {
              return [
                createTextVNode("Torna al Blog")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (_ctx.post) {
        _push(`<div class="article-container" data-v-9fbfa44f><template><div class="article-hero" data-v-9fbfa44f><div class="hero-overlay" data-v-9fbfa44f></div>`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: _ctx.post.image,
          alt: _ctx.post.title,
          class: "article-hero-image",
          format: "webp",
          width: "1920",
          height: "1080"
        }, null, _parent));
        _push(`<div class="hero-content" data-v-9fbfa44f><div class="container" data-v-9fbfa44f><div class="hero-breadcrumb" data-v-9fbfa44f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "breadcrumb-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9fbfa44f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-9fbfa44f${_scopeId}></path></svg><span data-v-9fbfa44f${_scopeId}>Torna al Blog</span>`);
            } else {
              return [
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
                    d: "M15 19l-7-7 7-7"
                  })
                ])),
                createVNode("span", null, "Torna al Blog")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hero-meta" data-v-9fbfa44f><span class="category-badge" data-v-9fbfa44f>${ssrInterpolate(_ctx.post.category)}</span><div class="meta-details" data-v-9fbfa44f><span class="meta-date" data-v-9fbfa44f>${ssrInterpolate(formatDate(_ctx.post.date))}</span><span class="meta-separator" data-v-9fbfa44f>•</span><span class="meta-author" data-v-9fbfa44f>${ssrInterpolate(_ctx.post.author)}</span><span class="meta-separator" data-v-9fbfa44f>•</span><span class="meta-time" data-v-9fbfa44f>${ssrInterpolate(_ctx.post.readTime)}</span></div></div><h1 class="hero-title" data-v-9fbfa44f>${ssrInterpolate(_ctx.post.title)}</h1><p class="hero-excerpt" data-v-9fbfa44f>${ssrInterpolate(_ctx.post.excerpt)}</p></div></div></div></template><template><div class="article-content-wrapper" data-v-9fbfa44f><div class="container" data-v-9fbfa44f><div class="article-main" data-v-9fbfa44f><div class="article-body" data-v-9fbfa44f>${renderMarkdown(_ctx.post.content) ?? ""}</div><div class="article-tags" data-v-9fbfa44f><h3 class="tags-title" data-v-9fbfa44f>Argomenti correlati</h3><div class="tags-list" data-v-9fbfa44f><!--[-->`);
        ssrRenderList(_ctx.post.tags, (tag) => {
          _push(`<span class="tag" data-v-9fbfa44f>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div><div class="article-share" data-v-9fbfa44f><h3 class="share-title" data-v-9fbfa44f>Condividi questo articolo</h3><div class="share-buttons" data-v-9fbfa44f><a href="#" class="share-btn facebook" data-v-9fbfa44f><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-9fbfa44f><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-v-9fbfa44f></path></svg><span data-v-9fbfa44f>Facebook</span></a><a href="#" class="share-btn twitter" data-v-9fbfa44f><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-9fbfa44f><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" data-v-9fbfa44f></path></svg><span data-v-9fbfa44f>Twitter</span></a><a href="#" class="share-btn linkedin" data-v-9fbfa44f><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-9fbfa44f><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-v-9fbfa44f></path></svg><span data-v-9fbfa44f>LinkedIn</span></a></div></div><div class="article-navigation" data-v-9fbfa44f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "nav-link back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9fbfa44f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-9fbfa44f${_scopeId}></path></svg><span data-v-9fbfa44f${_scopeId}>Torna agli Articoli</span>`);
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
                    d: "M15 19l-7-7 7-7"
                  })
                ])),
                createVNode("span", null, "Torna agli Articoli")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contatti",
          class: "nav-link contact-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-9fbfa44f${_scopeId}>Contatta Esperto</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9fbfa44f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-v-9fbfa44f${_scopeId}></path></svg>`);
            } else {
              return [
                createVNode("span", null, "Contatta Esperto"),
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
                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></template></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fbfa44f"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BQykKTnw.mjs.map
