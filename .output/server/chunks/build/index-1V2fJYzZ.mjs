import { _ as __nuxt_component_0 } from './nuxt-link-CnjllpwB.mjs';
import { _ as __nuxt_component_1 } from './NuxtImg-CuGAG3SO.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
import 'vue-router';
import '@vue/shared';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const allPosts = ref([
      {
        id: 1,
        slug: "guida-completa-scelta-camper-perfetto",
        title: "Guida Completa alla Scelta del Camper Perfetto: Consigli da Esperti",
        excerpt: "Scopri come scegliere il camper ideale per le tue esigenze. Analizziamo dimensioni, layout, motorizzazioni e accessori essenziali per viaggi indimenticabili.",
        category: "Guide Tecniche",
        date: "2024-03-15",
        readTime: "8 min",
        author: "Antimo Pica",
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=85&w=1200",
        featured: true,
        tags: ["camper", "guida", "acquisto", "consigli"],
        content: "# Guida Completa alla Scelta del Camper Perfetto\n\nScegliere il camper giusto è una decisione importante che influenzerà tutti i tuoi futuri viaggi..."
      },
      {
        id: 2,
        slug: "migliori-destinazioni-camper-italia-primavera-2024",
        title: "Le 5 Migliori Destinazioni Camper in Italia per la Primavera 2024",
        excerpt: "Dalle Alpi alla Sicilia, ecco le mete più affascinanti per il tuo viaggio in camper. Itinerari, aree sosta e consigli pratici per un'esperienza unica.",
        category: "Viaggi",
        date: "2024-03-12",
        readTime: "6 min",
        author: "Marco Rossi",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=85&w=800",
        featured: false,
        tags: ["viaggi", "destinazioni", "primavera", "italia"],
        content: "# Le 5 Migliori Destinazioni Camper in Italia\n\nLa primavera è il momento perfetto per esplorare l'Italia in camper..."
      },
      {
        id: 3,
        slug: "manutenzione-camper-10-controlli-essenziali",
        title: "Manutenzione Camper: 10 Controlli Essenziali Prima di Partire",
        excerpt: "Checklist completa per la sicurezza del tuo camper. Verifiche tecniche, controlli meccanici e consigli per viaggiare senza preoccupazioni.",
        category: "Manutenzione",
        date: "2024-03-10",
        readTime: "5 min",
        author: "Laura Bianchi",
        image: "https://images.unsplash.com/photo-1558618037-3c8c5bf5b1c?auto=format&fit=crop&q=85&w=800",
        featured: false,
        tags: ["manutenzione", "sicurezza", "checklist", "prepartenza"],
        content: "# Manutenzione Camper: 10 Controlli Essenziali\n\nPrima di partire per il tuo viaggio, è fondamentale verificare..."
      },
      {
        id: 4,
        slug: "roulotte-vs-camper-pro-e-contro",
        title: "Roulotte vs Camper: Pro e Contro per Scegliere il Tuo stile di Viaggio",
        excerpt: "Analisi comparativa tra roulotte e camper. Costi, versatilità, comfort e manutenzione: tutto quello che devi sapere per decidere.",
        category: "Confronti",
        date: "2024-03-08",
        readTime: "7 min",
        author: "Giuseppe Verdi",
        image: "https://images.unsplash.com/photo-1542282086-f6ff940b6c6c?auto=format&fit=crop&q=85&w=800",
        featured: false,
        tags: ["roulotte", "camper", "confronto", "scelta"],
        content: "# Roulotte vs Camper: Pro e Contro\n\nLa scelta tra roulotte e camper dipende da molti fattori..."
      },
      {
        id: 5,
        slug: "accessori-essenziali-camper",
        title: "Accessori Essenziali per Camper: Cosa Non Dimenticare Mai",
        excerpt: "Dall'impianto elettrico alla cucina, passando per il comfort. Guida completa agli accessori indispensabili per il tuo camper.",
        category: "Accessori",
        date: "2024-03-05",
        readTime: "6 min",
        author: "Anna Esposito",
        image: "https://images.unsplash.com/photo-1618668123933-0b4a2f5b6b2c?auto=format&fit=crop&q=85&w=800",
        featured: false,
        tags: ["accessori", "essenziali", "attrezzatura", "comfort"],
        content: "# Accessori Essenziali per Camper\n\nPer viaggiare in totale comfort, il tuo camper deve essere dotato di..."
      },
      {
        id: 6,
        slug: "normative-camper-2024-novita",
        title: "Normative Camper 2024: Tutte le Novità da Conoscere",
        excerpt: "Aggiornamenti su patenti, limiti di peso, aree sosta e circolazione. Rimani informato sulle nuove regole per camperisti italiani.",
        category: "Normative",
        date: "2024-03-01",
        readTime: "8 min",
        author: "Roberto Romano",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=85&w=800",
        featured: false,
        tags: ["normative", "leggi", "2024", "aggiornamenti"],
        content: "# Normative Camper 2024: Tutte le Novità\n\nIl 2024 porta importanti novità nel mondo dei camper..."
      },
      {
        id: 7,
        slug: "finanziamento-camper-guida-completa",
        title: "Finanziamento Camper: Guida Completa per Acquistare senza Pensieri",
        excerpt: "Scopri tutte le opzioni di finanziamento per il tuo camper. Prestiti, leasing e piani personalizzati per realizzare il tuo sogno.",
        category: "Finanza",
        date: "2024-02-28",
        readTime: "7 min",
        author: "Francesco Neri",
        image: "https://images.unsplash.com/photo-1554224155-672d072843b7?auto=format&fit=crop&q=85&w=800",
        featured: false,
        tags: ["finanziamento", "prestiti", "leasing", "acquisto"],
        content: "# Finanziamento Camper: Guida Completa\n\nAcquistare un camper è un investimento importante..."
      },
      {
        id: 8,
        slug: "rimessaggio-camper-sicuro",
        title: "Rimessaggio Camper: Come Scegliere la Soluzione Sicura",
        excerpt: "Guida completa al rimessaggio camper. Coperture, box custoditi e soluzioni professionali per proteggere il tuo investimento.",
        category: "Rimessaggio",
        date: "2024-02-25",
        readTime: "6 min",
        author: "Paolo Russo",
        image: "https://images.unsplash.com/photo-1573497029040-73c8850b966?auto=format&fit=crop&q=85&w=800",
        featured: false,
        tags: ["rimessaggio", "sicurezza", "coperture", "box"],
        content: "# Rimessaggio Camper: Come Scegliere\n\nProteggere il tuo camper durante i periodi di inutilizzo è fondamentale..."
      }
    ]);
    ref(false);
    const selectedCategory = ref("Tutti");
    const searchQuery = ref("");
    const categories = computed(() => {
      const cats = ["Tutti", ...new Set(allPosts.value.map((post) => post.category))];
      return cats;
    });
    const filteredPosts = computed(() => {
      let filtered = allPosts.value;
      if (selectedCategory.value !== "Tutti") {
        filtered = filtered.filter((post) => post.category === selectedCategory.value);
      }
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (post) => post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query) || post.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      }
      return filtered;
    });
    const featuredPost = computed(() => filteredPosts.value.find((post) => post.featured));
    const secondaryPosts = computed(() => filteredPosts.value.filter((post) => !post.featured));
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    };
    useHead({
      title: "Blog & News | Pica Caravan",
      meta: [
        { name: "description", content: "Ultime novità dal mondo dei camper e roulotte, consigli di manutenzione e offerte speciali da Pica Caravan." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-horizontal section" }, _attrs))} data-v-65475e60><div class="blog-background" data-v-65475e60><div class="bg-pattern" data-v-65475e60></div></div><div class="container" data-v-65475e60><div class="blog-header" data-v-65475e60><div class="header-content" data-v-65475e60><span class="section-kicker" data-v-65475e60>Pica Journal</span><h1 class="section-title" data-v-65475e60><span class="title-main" data-v-65475e60>Il Nostro</span><span class="title-accent" data-v-65475e60>Blog</span></h1><p class="section-subtitle" data-v-65475e60> Guide tecniche, consigli di viaggio e approfondimenti sul mondo camper e roulotte. Esperti del settore condividono conoscenza per viaggiare consapevoli. </p></div></div><div class="blog-controls" data-v-65475e60><div class="categories-filter" data-v-65475e60><!--[-->`);
      ssrRenderList(categories.value, (cat) => {
        _push(`<button class="${ssrRenderClass(["category-btn", { "active": selectedCategory.value === cat }])}" data-v-65475e60>${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div><div class="search-container" data-v-65475e60><div class="search-input-wrapper" data-v-65475e60><svg class="search-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-65475e60><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-65475e60></path></svg><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Cerca articoli..." class="search-input" data-v-65475e60></div></div></div>`);
      if (featuredPost.value) {
        _push(`<div class="featured-horizontal" data-v-65475e60>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/${featuredPost.value.slug}`,
          class: "featured-horizontal-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="featured-horizontal-image" data-v-65475e60${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: featuredPost.value.image,
                alt: featuredPost.value.title,
                class: "featured-horizontal-img",
                format: "webp",
                width: "800",
                height: "600"
              }, null, _parent2, _scopeId));
              _push2(`<div class="featured-horizontal-overlay" data-v-65475e60${_scopeId}></div></div><div class="featured-horizontal-content" data-v-65475e60${_scopeId}><div class="featured-horizontal-meta" data-v-65475e60${_scopeId}><span class="featured-horizontal-category" data-v-65475e60${_scopeId}>${ssrInterpolate(featuredPost.value.category)}</span><div class="featured-horizontal-details" data-v-65475e60${_scopeId}><span class="featured-horizontal-date" data-v-65475e60${_scopeId}>${ssrInterpolate(formatDate(featuredPost.value.date))}</span><span class="featured-horizontal-separator" data-v-65475e60${_scopeId}>•</span><span class="featured-horizontal-author" data-v-65475e60${_scopeId}>${ssrInterpolate(featuredPost.value.author)}</span><span class="featured-horizontal-separator" data-v-65475e60${_scopeId}>•</span><span class="featured-horizontal-time" data-v-65475e60${_scopeId}>${ssrInterpolate(featuredPost.value.readTime)}</span></div></div><h2 class="featured-horizontal-title" data-v-65475e60${_scopeId}>${ssrInterpolate(featuredPost.value.title)}</h2><p class="featured-horizontal-excerpt" data-v-65475e60${_scopeId}>${ssrInterpolate(featuredPost.value.excerpt)}</p><div class="featured-horizontal-footer" data-v-65475e60${_scopeId}><span class="featured-horizontal-cta" data-v-65475e60${_scopeId}>Leggi l&#39;Articolo Completo</span><div class="featured-horizontal-tags" data-v-65475e60${_scopeId}><!--[-->`);
              ssrRenderList(featuredPost.value.tags, (tag) => {
                _push2(`<span class="tag" data-v-65475e60${_scopeId}>${ssrInterpolate(tag)}</span>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "featured-horizontal-image" }, [
                  createVNode(_component_nuxt_img, {
                    src: featuredPost.value.image,
                    alt: featuredPost.value.title,
                    class: "featured-horizontal-img",
                    format: "webp",
                    width: "800",
                    height: "600"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "featured-horizontal-overlay" })
                ]),
                createVNode("div", { class: "featured-horizontal-content" }, [
                  createVNode("div", { class: "featured-horizontal-meta" }, [
                    createVNode("span", { class: "featured-horizontal-category" }, toDisplayString(featuredPost.value.category), 1),
                    createVNode("div", { class: "featured-horizontal-details" }, [
                      createVNode("span", { class: "featured-horizontal-date" }, toDisplayString(formatDate(featuredPost.value.date)), 1),
                      createVNode("span", { class: "featured-horizontal-separator" }, "•"),
                      createVNode("span", { class: "featured-horizontal-author" }, toDisplayString(featuredPost.value.author), 1),
                      createVNode("span", { class: "featured-horizontal-separator" }, "•"),
                      createVNode("span", { class: "featured-horizontal-time" }, toDisplayString(featuredPost.value.readTime), 1)
                    ])
                  ]),
                  createVNode("h2", { class: "featured-horizontal-title" }, toDisplayString(featuredPost.value.title), 1),
                  createVNode("p", { class: "featured-horizontal-excerpt" }, toDisplayString(featuredPost.value.excerpt), 1),
                  createVNode("div", { class: "featured-horizontal-footer" }, [
                    createVNode("span", { class: "featured-horizontal-cta" }, "Leggi l'Articolo Completo"),
                    createVNode("div", { class: "featured-horizontal-tags" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(featuredPost.value.tags, (tag) => {
                        return openBlock(), createBlock("span", {
                          key: tag,
                          class: "tag"
                        }, toDisplayString(tag), 1);
                      }), 128))
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="articles-horizontal-section" data-v-65475e60><div class="section-header-secondary" data-v-65475e60><h3 class="secondary-title" data-v-65475e60>Altri Articoli</h3><p class="secondary-subtitle" data-v-65475e60>Approfondimenti e consigli per la tua avventura</p></div>`);
      if (secondaryPosts.value.length === 0 && !featuredPost.value) {
        _push(`<div class="empty-state" data-v-65475e60><h3 data-v-65475e60>Nessun articolo trovato</h3><p data-v-65475e60>Prova a cambiare i filtri di ricerca.</p><button class="reset-btn" data-v-65475e60>Reset filtri</button></div>`);
      } else if (secondaryPosts.value.length === 0) {
        _push(`<div class="empty-state" data-v-65475e60><h3 data-v-65475e60>Nessun altro articolo</h3><p data-v-65475e60>Prova a cambiare categoria o ricerca.</p></div>`);
      } else {
        _push(`<div class="articles-horizontal-list" data-v-65475e60><!--[-->`);
        ssrRenderList(secondaryPosts.value, (article) => {
          _push(`<article class="article-horizontal-card" data-v-65475e60>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/blog/${article.slug}`,
            class: "article-horizontal-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="article-horizontal-image" data-v-65475e60${_scopeId}>`);
                _push2(ssrRenderComponent(_component_nuxt_img, {
                  src: article.image,
                  alt: article.title,
                  class: "article-horizontal-img",
                  format: "webp",
                  width: "400",
                  height: "300"
                }, null, _parent2, _scopeId));
                _push2(`<div class="article-horizontal-overlay" data-v-65475e60${_scopeId}></div><span class="article-horizontal-category" data-v-65475e60${_scopeId}>${ssrInterpolate(article.category)}</span></div><div class="article-horizontal-content" data-v-65475e60${_scopeId}><div class="article-horizontal-meta" data-v-65475e60${_scopeId}><span class="article-horizontal-date" data-v-65475e60${_scopeId}>${ssrInterpolate(formatDate(article.date))}</span><span class="article-horizontal-separator" data-v-65475e60${_scopeId}>•</span><span class="article-horizontal-time" data-v-65475e60${_scopeId}>${ssrInterpolate(article.readTime)}</span></div><h3 class="article-horizontal-title" data-v-65475e60${_scopeId}>${ssrInterpolate(article.title)}</h3><p class="article-horizontal-excerpt" data-v-65475e60${_scopeId}>${ssrInterpolate(article.excerpt)}</p><div class="article-horizontal-footer" data-v-65475e60${_scopeId}><span class="article-horizontal-cta" data-v-65475e60${_scopeId}>Leggi l&#39;articolo</span><div class="article-horizontal-author" data-v-65475e60${_scopeId}><span data-v-65475e60${_scopeId}>${ssrInterpolate(article.author)}</span></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "article-horizontal-image" }, [
                    createVNode(_component_nuxt_img, {
                      src: article.image,
                      alt: article.title,
                      class: "article-horizontal-img",
                      format: "webp",
                      width: "400",
                      height: "300"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "article-horizontal-overlay" }),
                    createVNode("span", { class: "article-horizontal-category" }, toDisplayString(article.category), 1)
                  ]),
                  createVNode("div", { class: "article-horizontal-content" }, [
                    createVNode("div", { class: "article-horizontal-meta" }, [
                      createVNode("span", { class: "article-horizontal-date" }, toDisplayString(formatDate(article.date)), 1),
                      createVNode("span", { class: "article-horizontal-separator" }, "•"),
                      createVNode("span", { class: "article-horizontal-time" }, toDisplayString(article.readTime), 1)
                    ]),
                    createVNode("h3", { class: "article-horizontal-title" }, toDisplayString(article.title), 1),
                    createVNode("p", { class: "article-horizontal-excerpt" }, toDisplayString(article.excerpt), 1),
                    createVNode("div", { class: "article-horizontal-footer" }, [
                      createVNode("span", { class: "article-horizontal-cta" }, "Leggi l'articolo"),
                      createVNode("div", { class: "article-horizontal-author" }, [
                        createVNode("span", null, toDisplayString(article.author), 1)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</article>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65475e60"]]);

export { index as default };
//# sourceMappingURL=index-1V2fJYzZ.mjs.map
