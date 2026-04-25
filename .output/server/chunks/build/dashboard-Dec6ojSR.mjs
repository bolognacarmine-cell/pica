import { _ as __nuxt_component_0 } from './nuxt-link-CnjllpwB.mjs';
import { ref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-u0fwKHEW.mjs';
import { useRouter } from 'vue-router';
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
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const user = ref(null);
    const data = ref({
      vehicle: null,
      maintenance: [],
      documents: [],
      blogPosts: []
    });
    const loading = ref(true);
    const activeTab = ref("profile");
    const formatDate = (d) => new Date(d).toLocaleDateString("it-IT");
    const getDateStatus = (dateStr) => {
      if (!dateStr) return "none";
      const today = /* @__PURE__ */ new Date();
      const deadline = new Date(dateStr);
      const diffTime = deadline.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays < 0) return "expired";
      if (diffDays <= 30) return "upcoming";
      return "ok";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "portal-dashboard bg-[#030303] min-h-screen text-white" }, _attrs))} data-v-523d3a06><header class="border-b border-white/5 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50" data-v-523d3a06><div class="container mx-auto px-6 h-20 flex items-center justify-between" data-v-523d3a06><div class="flex items-center gap-4" data-v-523d3a06><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="h-10 w-10 rounded-full border border-white/10" data-v-523d3a06><div class="flex flex-col" data-v-523d3a06><span class="text-sm font-black uppercase tracking-tighter" data-v-523d3a06>Pica Caravan</span><span class="text-[10px] text-primary font-black uppercase tracking-[0.2em]" data-v-523d3a06>Area Clienti</span></div></div>`);
      if (user.value) {
        _push(`<div class="flex items-center gap-6" data-v-523d3a06><div class="hidden md:flex flex-col items-end" data-v-523d3a06><span class="text-xs font-black uppercase tracking-widest text-white" data-v-523d3a06>${ssrInterpolate(user.value.nome)} ${ssrInterpolate(user.value.cognome)}</span><span class="text-[9px] text-white/40 uppercase font-bold tracking-widest" data-v-523d3a06>Cliente Verificato</span></div><button class="px-4 py-2 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 transition-all" data-v-523d3a06> Esci </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><main class="container mx-auto px-6 py-12" data-v-523d3a06>`);
      if (loading.value) {
        _push(`<div class="flex flex-col items-center justify-center py-32" data-v-523d3a06><div class="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" data-v-523d3a06></div><p class="text-white/40 text-xs font-black uppercase tracking-widest" data-v-523d3a06>Sincronizzazione dati veicolo...</p></div>`);
      } else if (data.value.vehicle) {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-12 gap-12" data-v-523d3a06><aside class="lg:col-span-3 space-y-8" data-v-523d3a06><div class="glass-panel p-6 overflow-hidden relative" data-v-523d3a06><div class="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10" data-v-523d3a06></div><img${ssrRenderAttr("src", data.value.vehicle.photoUrl || "/logo-pica-caravan.jpg")} alt="Veicolo" class="w-full h-40 object-cover rounded-xl mb-6 border border-white/5" data-v-523d3a06><div class="space-y-1" data-v-523d3a06><h3 class="text-lg font-black uppercase tracking-tighter" data-v-523d3a06>${ssrInterpolate(data.value.vehicle.marca)} ${ssrInterpolate(data.value.vehicle.modello)}</h3><span class="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-black rounded-md tracking-widest" data-v-523d3a06>${ssrInterpolate(data.value.vehicle.targa)}</span></div></div><nav class="space-y-2" data-v-523d3a06><!--[-->`);
        ssrRenderList([
          { id: "profile", label: "Profilo Veicolo", icon: "🚐" },
          { id: "history", label: "Manutenzioni", icon: "🔧" },
          { id: "booking", label: "Prenota Officina", icon: "📅" }
        ], (tab) => {
          _push(`<button class="${ssrRenderClass([activeTab.value === tab.id ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-white/40 hover:bg-white/5 hover:text-white", "w-full flex items-center gap-4 p-4 rounded-xl transition-all font-black uppercase tracking-widest text-[10px]"])}" data-v-523d3a06><span class="text-lg" data-v-523d3a06>${ssrInterpolate(tab.icon)}</span> ${ssrInterpolate(tab.label)}</button>`);
        });
        _push(`<!--]--></nav></aside><section class="lg:col-span-9" data-v-523d3a06>`);
        if (activeTab.value === "profile") {
          _push(`<div class="space-y-10" data-v-523d3a06><div class="flex justify-between items-center" data-v-523d3a06><h2 class="text-3xl font-black uppercase tracking-tighter" data-v-523d3a06>Il tuo Veicolo</h2>`);
          if (data.value.vehicle.avvisi) {
            _push(`<span class="status-badge primary animate-pulse" data-v-523d3a06>Avviso Importante</span>`);
          } else {
            _push(`<span class="status-badge dim" data-v-523d3a06>Dati Sincronizzati</span>`);
          }
          _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-523d3a06><div class="admin-card space-y-6" data-v-523d3a06><h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary" data-v-523d3a06>Dati Tecnici</h4><div class="space-y-4" data-v-523d3a06><!--[-->`);
          ssrRenderList({ "Marca": data.value.vehicle.marca, "Modello": data.value.vehicle.modello, "Data Acquisto": data.value.vehicle.dataAcquisto ? formatDate(data.value.vehicle.dataAcquisto) : "N.D.", "Km Iniziali": (data.value.vehicle.kmIniziali || 0) + " km" }, (val, label) => {
            _push(`<div class="flex justify-between border-b border-white/5 pb-2" data-v-523d3a06><span class="text-xs text-white/40 font-bold uppercase" data-v-523d3a06>${ssrInterpolate(label)}</span><span class="text-xs text-white font-black uppercase" data-v-523d3a06>${ssrInterpolate(val)}</span></div>`);
          });
          _push(`<!--]--></div></div><div class="admin-card space-y-6" data-v-523d3a06><h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary" data-v-523d3a06>Stato Attuale</h4><div class="space-y-4" data-v-523d3a06><div class="flex justify-between border-b border-white/5 pb-2" data-v-523d3a06><span class="text-xs text-white/40 font-bold uppercase" data-v-523d3a06>Km Attuali</span><span class="text-sm text-primary font-black" data-v-523d3a06>${ssrInterpolate(data.value.vehicle.kmAttuali || 0)} km</span></div><div class="flex justify-between border-b border-white/5 pb-2" data-v-523d3a06><span class="text-xs text-white/40 font-bold uppercase" data-v-523d3a06>Prossima Scadenza</span><span class="text-xs text-white font-black uppercase" data-v-523d3a06>${ssrInterpolate(data.value.vehicle.prossimaManutenzione || "In aggiornamento")}</span></div></div></div></div><div class="space-y-6" data-v-523d3a06><h3 class="text-xl font-black uppercase tracking-tighter" data-v-523d3a06>Scadenze Legali</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-523d3a06><!--[-->`);
          ssrRenderList([
            { label: "Revisione", date: data.value.vehicle.scadenzaRevisione },
            { label: "Assicurazione", date: data.value.vehicle.scadenzaAssicurazione },
            { label: "Bollo", date: data.value.vehicle.scadenzaBollo }
          ], (scad) => {
            _push(`<div class="${ssrRenderClass([[
              getDateStatus(scad.date) === "expired" ? "border-l-red-500 bg-red-500/5" : getDateStatus(scad.date) === "upcoming" ? "border-l-primary bg-primary/5" : "border-l-green-500 bg-green-500/5"
            ], "glass-panel p-6 flex flex-col items-center text-center gap-3 border-l-4"])}" data-v-523d3a06><span class="text-[10px] font-black uppercase tracking-widest text-white/40" data-v-523d3a06>${ssrInterpolate(scad.label)}</span><span class="text-lg font-black" data-v-523d3a06>${ssrInterpolate(scad.date ? formatDate(scad.date) : "N.D.")}</span><span class="${ssrRenderClass([getDateStatus(scad.date) === "expired" ? "text-red-500" : "text-white/20", "text-[9px] font-black uppercase tracking-widest"])}" data-v-523d3a06>${ssrInterpolate(getDateStatus(scad.date) === "expired" ? "Scaduto" : getDateStatus(scad.date) === "upcoming" ? "In Scadenza" : "In Regola")}</span></div>`);
          });
          _push(`<!--]--></div></div>`);
          if (data.value.vehicle.avvisi) {
            _push(`<div class="glass-panel p-8 bg-primary/5 border-primary/20" data-v-523d3a06><div class="flex items-start gap-4" data-v-523d3a06><span class="text-2xl" data-v-523d3a06>⚠️</span><div data-v-523d3a06><h4 class="text-sm font-black uppercase tracking-widest text-primary mb-2" data-v-523d3a06>Nota del Team Pica</h4><p class="text-white/60 text-sm leading-relaxed font-medium" data-v-523d3a06>${ssrInterpolate(data.value.vehicle.avvisi)}</p></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (data.value.blogPosts.length > 0) {
            _push(`<div class="space-y-8 pt-10 border-t border-white/5" data-v-523d3a06><h3 class="text-xl font-black uppercase tracking-tighter text-white" data-v-523d3a06>Consigli per il tuo viaggio</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-523d3a06><!--[-->`);
            ssrRenderList(data.value.blogPosts, (post) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: post._id,
                to: `/blog/${post.slug}`,
                class: "admin-card group p-4 flex gap-4 items-center"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", post.imageCover || "/logo-pica-caravan.jpg")} alt="Blog" class="w-20 h-20 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all" data-v-523d3a06${_scopeId}><div data-v-523d3a06${_scopeId}><h4 class="text-xs font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors" data-v-523d3a06${_scopeId}>${ssrInterpolate(post.title)}</h4><span class="text-[9px] font-black uppercase tracking-widest text-white/40" data-v-523d3a06${_scopeId}>Approfondisci →</span></div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: post.imageCover || "/logo-pica-caravan.jpg",
                        alt: "Blog",
                        class: "w-20 h-20 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all"
                      }, null, 8, ["src"]),
                      createVNode("div", null, [
                        createVNode("h4", { class: "text-xs font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors" }, toDisplayString(post.title), 1),
                        createVNode("span", { class: "text-[9px] font-black uppercase tracking-widest text-white/40" }, "Approfondisci →")
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "history") {
          _push(`<div class="space-y-10" data-v-523d3a06><h2 class="text-3xl font-black uppercase tracking-tighter" data-v-523d3a06>Cronologia Interventi</h2>`);
          if (data.value.maintenance.length === 0) {
            _push(`<div class="glass-panel p-20 text-center" data-v-523d3a06><p class="text-white/40 font-bold uppercase tracking-widest text-[10px]" data-v-523d3a06>Nessun intervento registrato a sistema</p></div>`);
          } else {
            _push(`<div class="space-y-4" data-v-523d3a06><!--[-->`);
            ssrRenderList(data.value.maintenance, (item) => {
              _push(`<div class="admin-card flex flex-col md:flex-row justify-between gap-6" data-v-523d3a06><div class="space-y-2" data-v-523d3a06><div class="flex items-center gap-3" data-v-523d3a06><span class="text-xs font-black text-primary" data-v-523d3a06>${ssrInterpolate(formatDate(item.data))}</span><span class="w-1 h-1 bg-white/20 rounded-full" data-v-523d3a06></span><span class="text-xs font-black text-white/60" data-v-523d3a06>${ssrInterpolate(item.km)} KM</span></div><h4 class="text-lg font-black uppercase tracking-tight text-white" data-v-523d3a06>${ssrInterpolate(item.descrizione)}</h4>`);
              if (item.partiSostituite) {
                _push(`<p class="text-xs text-white/40 font-medium" data-v-523d3a06>Parti: ${ssrInterpolate(item.partiSostituite)}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div><div class="flex items-center" data-v-523d3a06><span class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-black" data-v-523d3a06>€ ${ssrInterpolate(item.costo)}</span></div></div>`);
            });
            _push(`<!--]--></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "booking") {
          _push(`<div class="tab-pane" data-v-523d3a06><div class="content-header" data-v-523d3a06><h2 data-v-523d3a06>Prenota in Officina</h2></div><div class="booking-placeholder" data-v-523d3a06><p data-v-523d3a06>Seleziona un servizio e una data disponibile.</p><div class="booking-options" data-v-523d3a06><button class="btn-option" data-v-523d3a06>Tagliando Ordinario</button><button class="btn-option" data-v-523d3a06>Cambio Gomme</button><button class="btn-option" data-v-523d3a06>Controllo Generale</button></div><button class="btn-primary-custom" data-v-523d3a06>Verifica Disponibilità</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portale/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-523d3a06"]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-Dec6ojSR.mjs.map
