import { _ as __nuxt_component_0 } from './nuxt-link-Bp6FFQQI.mjs';
import { computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { V as VehicleCarousel } from './VehicleCarousel-CBCNczIc.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';

const globalSearchQuery = ref("");
const useSearch = () => {
  const setSearchQuery = (query) => {
    globalSearchQuery.value = query;
  };
  return {
    searchQuery: computed(() => globalSearchQuery.value),
    setSearchQuery
  };
};
const activeFilter = ref("tutti");
const useFilter = () => {
  const setFilter = (filter) => {
    activeFilter.value = filter;
  };
  return {
    activeFilter,
    setFilter
  };
};
const _sfc_main = {
  __name: "HomeFeaturedVehicles",
  __ssrInlineRender: true,
  props: {
    vehicles: { type: Array, default: () => [] }
  },
  setup(__props) {
    const route = useRoute();
    const isVeicoliPage = computed(() => route.path === "/veicoli");
    const props = __props;
    const { searchQuery, setSearchQuery } = useSearch();
    const { activeFilter: activeFilter2 } = useFilter();
    const localSearchQuery = ref(searchQuery.value);
    watch(localSearchQuery, (newVal) => {
      setSearchQuery(newVal);
    });
    watch(searchQuery, (newVal) => {
      if (newVal !== localSearchQuery.value) {
        localSearchQuery.value = newVal;
      }
    });
    const activeCategory = ref("tutte");
    const maxKm = ref(null);
    const sortBy = ref("recente");
    const dynamicCategories = computed(() => {
      const cats = props.vehicles.map((m) => m.categoria).filter((c) => c && c !== "");
      return [...new Set(cats)].sort();
    });
    const featuredMotos = computed(() => {
      if (!props.vehicles || !Array.isArray(props.vehicles)) return [];
      let filtered = props.vehicles.filter((m) => m.isVisible !== false);
      const query = (searchQuery.value || "").toString().toLowerCase().trim();
      if (query) {
        filtered = filtered.filter(
          (m) => `${m.marca || ""} ${m.modello || ""} ${m.categoria || ""}`.toLowerCase().includes(query)
        );
      }
      const filterVal = (activeFilter2.value || "tutti").toLowerCase();
      if (filterVal === "nuovo") {
        filtered = filtered.filter(
          (m) => (m.nuovaUsata || "").toLowerCase().includes("nuov") || (m.stato || "").toLowerCase().includes("nuov")
        );
      } else if (filterVal === "usato") {
        filtered = filtered.filter(
          (m) => (m.nuovaUsata || "").toLowerCase().includes("usat") || (m.stato || "").toLowerCase().includes("usat")
        );
      } else if (filterVal === "promozioni") {
        filtered = filtered.filter(
          (m) => (m.nuovaUsata || "").toLowerCase().includes("promozion") || m.isPromotion || m.prezzoScontato || m.offerta === true
        );
      } else if (filterVal === "venduto") {
        filtered = filtered.filter(
          (m) => (m.nuovaUsata || "").toLowerCase().includes("vendut") || (m.stato || "").toLowerCase().includes("vendut")
        );
      }
      if (activeCategory.value !== "tutte") {
        filtered = filtered.filter((m) => m.categoria === activeCategory.value);
      }
      if (maxKm.value !== null) {
        filtered = filtered.filter((m) => {
          const km = m.chilometri || 0;
          return km <= maxKm.value;
        });
      }
      filtered.sort((a, b) => {
        if (sortBy.value === "alfabetico") {
          const nameA = `${a.marca} ${a.modello}`.toLowerCase();
          const nameB = `${b.marca} ${b.modello}`.toLowerCase();
          return nameA.localeCompare(nameB);
        } else if (sortBy.value === "anno") {
          const yearA = a.annoImmatricolazione || a.anno || 0;
          const yearB = b.annoImmatricolazione || b.anno || 0;
          return yearB - yearA;
        } else if (sortBy.value === "prezzo_asc") {
          return (a.prezzo || 0) - (b.prezzo || 0);
        } else {
          return b._id > a._id ? 1 : -1;
        }
      });
      return filtered.slice(0, 12);
    });
    const formatPrice = (price) => {
      if (!price) return "Prezzo su richiesta";
      return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(price);
    };
    const formatYear = (moto) => moto.annoImmatricolazione || moto.anno || "N/D";
    const formatImages = (moto) => {
      if (moto?.immagini && Array.isArray(moto.immagini) && moto.immagini.length > 0) {
        return moto.immagini.map((img) => {
          const url = typeof img === "string" ? img : img?.url || "/logo-pica-caravan.jpg";
          return url.replace("/upload/", "/upload/f_auto,q_auto/");
        });
      }
      return ["https://images.unsplash.com/photo-1517030330234-94c4fa948ec3?q=80&w=2070"];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "veicoli",
        class: "featured-section"
      }, _attrs))} data-v-79aa299c><div class="container" data-v-79aa299c><div class="section-heading-row" data-v-79aa299c><div class="heading-left" data-v-79aa299c><p class="section-kicker" data-v-79aa299c>Showroom</p><h2 class="section-title" data-v-79aa299c>Parco Camper e Roulotte</h2><p class="section-description" data-v-79aa299c>Esplora la nostra selezione di camper e roulotte pronti per il tuo prossimo viaggio.</p></div><div class="search-bar-container" data-v-79aa299c><div class="search-wrapper glass-panel" data-v-79aa299c><svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-79aa299c><circle cx="11" cy="11" r="8" data-v-79aa299c></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-79aa299c></line></svg><input${ssrRenderAttr("value", localSearchQuery.value)} type="text" placeholder="Cerca camper o roulotte..." class="search-input" data-v-79aa299c></div></div></div><div class="section-filters-only" data-v-79aa299c><div class="main-filter-tabs" data-v-79aa299c><button class="${ssrRenderClass([{ active: unref(activeFilter2) === "tutti" }, "main-tab-btn"])}" data-v-79aa299c><span class="tab-label" data-v-79aa299c>TUTTI</span><span class="tab-count" data-v-79aa299c>${ssrInterpolate(props.vehicles.filter((m) => m.isVisible !== false).length)}</span></button><button class="${ssrRenderClass([{ active: unref(activeFilter2) === "nuovo" }, "main-tab-btn"])}" data-v-79aa299c><span class="tab-icon" data-v-79aa299c><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-79aa299c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" data-v-79aa299c></path></svg></span><span class="tab-label" data-v-79aa299c>NUOVO</span><span class="tab-count" data-v-79aa299c>${ssrInterpolate(props.vehicles.filter((m) => m.isVisible !== false && ((m.nuovaUsata || "").toLowerCase().includes("nuov") || (m.stato || "").toLowerCase().includes("nuov"))).length)}</span></button><button class="${ssrRenderClass([{ active: unref(activeFilter2) === "usato" }, "main-tab-btn"])}" data-v-79aa299c><span class="tab-icon" data-v-79aa299c><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-79aa299c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-79aa299c></path></svg></span><span class="tab-label" data-v-79aa299c>USATO</span><span class="tab-count" data-v-79aa299c>${ssrInterpolate(props.vehicles.filter((m) => m.isVisible !== false && ((m.nuovaUsata || "").toLowerCase().includes("usat") || (m.stato || "").toLowerCase().includes("usat"))).length)}</span></button><button class="${ssrRenderClass([{ active: unref(activeFilter2) === "promozioni" }, "main-tab-btn promo-tab"])}" data-v-79aa299c><span class="tab-icon" data-v-79aa299c><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-79aa299c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" data-v-79aa299c></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14l-2.879 2.121z" data-v-79aa299c></path></svg></span><span class="tab-label" data-v-79aa299c>OFFERTE</span><span class="tab-count" data-v-79aa299c>${ssrInterpolate(props.vehicles.filter((m) => m.isVisible !== false && ((m.nuovaUsata || "").toLowerCase().includes("promozion") || m.isPromotion || m.prezzoScontato)).length)}</span></button><button class="${ssrRenderClass([{ active: unref(activeFilter2) === "venduto" }, "main-tab-btn sold-tab"])}" data-v-79aa299c><span class="tab-icon" data-v-79aa299c><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-79aa299c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-v-79aa299c></path></svg></span><span class="tab-label" data-v-79aa299c>VENDUTO</span><span class="tab-count" data-v-79aa299c>${ssrInterpolate(props.vehicles.filter((m) => m.isVisible !== false && ((m.nuovaUsata || "").toLowerCase().includes("vendut") || (m.stato || "").toLowerCase().includes("vendut"))).length)}</span></button></div><div class="secondary-filters-row" data-v-79aa299c>`);
      if (dynamicCategories.value.length) {
        _push(`<div class="filter-group" data-v-79aa299c><select class="premium-select" data-v-79aa299c><option value="tutte" data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(activeCategory.value) ? ssrLooseContain(activeCategory.value, "tutte") : ssrLooseEqual(activeCategory.value, "tutte")) ? " selected" : ""}>Tutte le Categorie</option><!--[-->`);
        ssrRenderList(dynamicCategories.value, (cat) => {
          _push(`<option${ssrRenderAttr("value", cat)} data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(activeCategory.value) ? ssrLooseContain(activeCategory.value, cat) : ssrLooseEqual(activeCategory.value, cat)) ? " selected" : ""}>${ssrInterpolate(cat)}</option>`);
        });
        _push(`<!--]--></select></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeFilter2) === "usato" || unref(activeFilter2) === "tutti") {
        _push(`<div class="filter-group" data-v-79aa299c><select class="premium-select" data-v-79aa299c><option${ssrRenderAttr("value", null)} data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(maxKm.value) ? ssrLooseContain(maxKm.value, null) : ssrLooseEqual(maxKm.value, null)) ? " selected" : ""}>Qualsiasi Chilometraggio</option><option${ssrRenderAttr("value", 5e3)} data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(maxKm.value) ? ssrLooseContain(maxKm.value, 5e3) : ssrLooseEqual(maxKm.value, 5e3)) ? " selected" : ""}>Fino a 5.000 km</option><option${ssrRenderAttr("value", 1e4)} data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(maxKm.value) ? ssrLooseContain(maxKm.value, 1e4) : ssrLooseEqual(maxKm.value, 1e4)) ? " selected" : ""}>Fino a 10.000 km</option><option${ssrRenderAttr("value", 2e4)} data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(maxKm.value) ? ssrLooseContain(maxKm.value, 2e4) : ssrLooseEqual(maxKm.value, 2e4)) ? " selected" : ""}>Fino a 20.000 km</option><option${ssrRenderAttr("value", 5e4)} data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(maxKm.value) ? ssrLooseContain(maxKm.value, 5e4) : ssrLooseEqual(maxKm.value, 5e4)) ? " selected" : ""}>Fino a 50.000 km</option></select></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="filter-group" data-v-79aa299c><select class="premium-select" data-v-79aa299c><option value="recente" data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "recente") : ssrLooseEqual(sortBy.value, "recente")) ? " selected" : ""}>Ultimi Arrivi</option><option value="alfabetico" data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "alfabetico") : ssrLooseEqual(sortBy.value, "alfabetico")) ? " selected" : ""}>Marca e Modello (A-Z)</option><option value="anno" data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "anno") : ssrLooseEqual(sortBy.value, "anno")) ? " selected" : ""}>Anno (Più Recente)</option><option value="prezzo_asc" data-v-79aa299c${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "prezzo_asc") : ssrLooseEqual(sortBy.value, "prezzo_asc")) ? " selected" : ""}>Prezzo (Crescente)</option></select></div></div></div>`);
      if (!props.vehicles.length) {
        _push(`<div class="state-box glass-panel" data-v-79aa299c>Nessun veicolo disponibile.</div>`);
      } else {
        _push(`<div class="featured-grid" data-v-79aa299c><!--[-->`);
        ssrRenderList(featuredMotos.value, (moto) => {
          _push(`<article class="moto-card glass-panel" data-v-79aa299c><div class="card-visual" data-v-79aa299c>`);
          _push(ssrRenderComponent(VehicleCarousel, {
            images: formatImages(moto),
            altText: `${moto.categoria} ${moto.marca} ${moto.modello} in vendita a San Nicola la Strada`,
            height: "260px"
          }, null, _parent));
          _push(`<div class="card-overlay-actions" data-v-79aa299c>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/veicoli/${moto.slug || moto._id}`,
            class: "btn-secondary-glass"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Dettagli`);
              } else {
                return [
                  createTextVNode("Dettagli")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="card-badges-top" data-v-79aa299c>`);
          if (moto.nuovaUsata === "nuova" || moto.stato === "nuovo") {
            _push(`<div class="badge-status-card new" data-v-79aa299c>NUOVO</div>`);
          } else if (moto.nuovaUsata === "usata" || moto.stato === "usato") {
            _push(`<div class="badge-status-card used" data-v-79aa299c>USATO</div>`);
          } else if (moto.nuovaUsata === "venduta" || (moto.stato || "").toLowerCase().includes("vendut")) {
            _push(`<div class="badge-status-card sold" data-v-79aa299c>VENDUTO</div>`);
          } else {
            _push(`<!---->`);
          }
          if (moto.nuovaUsata === "promozione" || moto.isPromotion || moto.prezzoScontato || moto.offerta === true) {
            _push(`<div class="badge-promo-card" data-v-79aa299c>PROMO</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (moto.nuovaUsata === "venduta" || (moto.stato || "").toLowerCase().includes("vendut")) {
            _push(`<div class="sold-stamp-wrapper" data-v-79aa299c><div class="sold-stamp" data-v-79aa299c>VENDUTO</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="moto-body" data-v-79aa299c><div class="moto-header-main" data-v-79aa299c><span class="brand-tag" data-v-79aa299c>${ssrInterpolate(moto.marca || "Veicolo")}</span>`);
          if (moto.categoria) {
            _push(`<span class="category-tag" data-v-79aa299c>${ssrInterpolate(moto.categoria)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><h3 class="moto-title-display" data-v-79aa299c>${ssrInterpolate(moto.modello || "Modello disponibile")}</h3><div class="moto-spec-grid" data-v-79aa299c><div class="spec-item" data-v-79aa299c><span class="spec-icon" data-v-79aa299c><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-79aa299c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-79aa299c></path></svg></span><span class="spec-value" data-v-79aa299c>${ssrInterpolate(formatYear(moto))}</span></div><div class="spec-item" data-v-79aa299c><span class="spec-icon" data-v-79aa299c><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-79aa299c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" data-v-79aa299c></path></svg></span><span class="spec-value" data-v-79aa299c>${ssrInterpolate(moto.chilometri?.toLocaleString("it-IT") || "0")} km</span></div><div class="spec-item" data-v-79aa299c><span class="spec-icon" data-v-79aa299c><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-79aa299c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" data-v-79aa299c></path></svg></span><span class="spec-value" data-v-79aa299c>${ssrInterpolate(moto.alimentazione || "N/D")}</span></div></div><div class="moto-footer-premium" data-v-79aa299c><div class="price-display-wrapper" data-v-79aa299c><span class="price-label" data-v-79aa299c>Prezzo</span><strong class="main-price" data-v-79aa299c>${ssrInterpolate(formatPrice(moto.prezzo))}</strong></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "/", query: { moto: moto._id }, hash: "#preventivo" },
            class: "btn-quote-minimal"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="icon" data-v-79aa299c${_scopeId}><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-79aa299c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-79aa299c${_scopeId}></path></svg></span> Preventivo `);
              } else {
                return [
                  createVNode("span", { class: "icon" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-3.5 h-3.5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      })
                    ]))
                  ]),
                  createTextVNode(" Preventivo ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></article>`);
        });
        _push(`<!--]--></div>`);
      }
      if (!isVeicoliPage.value) {
        _push(`<div class="section-footer-actions" data-v-79aa299c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/veicoli",
          class: "btn-premium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-79aa299c${_scopeId}>Vedi Tutto il Parco Veicoli</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-79aa299c${_scopeId}><path d="M5 12h14M12 5l7 7-7 7" data-v-79aa299c${_scopeId}></path></svg>`);
            } else {
              return [
                createVNode("span", null, "Vedi Tutto il Parco Veicoli"),
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  createVNode("path", { d: "M5 12h14M12 5l7 7-7 7" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/FeaturedVehicles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FeaturedVehicles = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-79aa299c"]]);

export { FeaturedVehicles as F };
//# sourceMappingURL=FeaturedVehicles-DAVJWXhh.mjs.map
