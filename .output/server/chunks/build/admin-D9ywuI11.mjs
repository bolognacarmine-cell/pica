import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-3A5mrv-4.mjs';
import { V as VehicleCarousel } from './VehicleCarousel-CBCNczIc.mjs';
import { _ as _export_sfc, c as useRuntimeConfig } from './server.mjs';
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
import 'vue-router';
import '@vue/shared';

const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const isAuthenticated = ref(false);
    const usernameInput = ref("");
    const passwordInput = ref("");
    const loginError = ref(false);
    config.public.adminUser || "picacaravan";
    config.public.adminPassword || "pica2026";
    const currentTab = ref("list");
    const vehicles = ref([]);
    const leads = ref([]);
    const tradeIns = ref([]);
    const blogPosts = ref([]);
    const portalUsers = ref([]);
    const portalVehicles = ref([]);
    const newUser = ref({
      nome: "",
      cognome: "",
      targa: "",
      password: ""
    });
    const blogForm = ref({
      title: "",
      slug: "",
      category: "Novità Camper",
      imageCover: "",
      content: "",
      excerpt: "",
      relatedVehicles: []
    });
    const loading = ref(false);
    const submitting = ref(false);
    const formMessage = ref("");
    const isSuccess = ref(false);
    const vehicleForm = ref({
      marca: "",
      modello: "",
      anno: null,
      chilometri: null,
      prezzo: null,
      descrizione: "",
      tipo: "camper",
      categoria: "Motorhome",
      nuovaUsata: "nuovo",
      isVisible: true,
      immagini: []
    });
    ({ ...vehicleForm.value });
    ref([]);
    const imagePreviews = ref([]);
    ref(null);
    const selectedUserForAction = ref(null);
    ref(false);
    ref(false);
    ref([]);
    ref({
      title: "",
      type: "Libretto",
      fileBase64: ""
    });
    const portalVehicleForm = ref({
      marca: "",
      modello: "",
      targa: "",
      dataAcquisto: "",
      kmIniziali: 0,
      kmAttuali: 0,
      prossimaManutenzione: "",
      scadenzaRevisione: "",
      scadenzaAssicurazione: "",
      scadenzaBollo: "",
      avvisi: "",
      photoUrl: ""
    });
    const maintenanceHistory = ref([]);
    const maintenanceForm = ref({
      data: "",
      km: 0,
      descrizione: "",
      partiSostituite: "",
      costo: 0
    });
    const showMaintenanceModal = ref(false);
    const showPortalVehicleModal = ref(false);
    const upcomingDeadlines = computed(() => {
      const list = [];
      const today = /* @__PURE__ */ new Date();
      const thirtyDaysLater = /* @__PURE__ */ new Date();
      thirtyDaysLater.setDate(today.getDate() + 30);
      portalVehicles.value.forEach((v) => {
        const user = portalUsers.value.find((u) => u.targa.toUpperCase() === v.targa.toUpperCase());
        if (!user) return;
        const deadlineInfo = {
          targa: v.targa,
          marca: v.marca,
          modello: v.modello,
          nome: user.nome,
          cognome: user.cognome,
          scadenzaRevisione: v.scadenzaRevisione,
          scadenzaAssicurazione: v.scadenzaAssicurazione,
          scadenzaBollo: v.scadenzaBollo,
          isExpired: false,
          revisioneStatus: null,
          assicurazioneStatus: null,
          bolloStatus: null
        };
        let hasUpcoming = false;
        const checkDate = (dateStr, label) => {
          if (!dateStr) return null;
          const d = new Date(dateStr);
          const diffTime = d.getTime() - today.getTime();
          const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
          if (diffDays <= 30) {
            hasUpcoming = true;
            if (diffDays < 0) deadlineInfo.isExpired = true;
            return {
              type: diffDays < 0 ? "expired" : diffDays <= 5 ? "urgent" : "warning",
              message: diffDays < 0 ? `Scaduto da ${Math.abs(diffDays)} giorni` : diffDays === 0 ? "Scade oggi!" : `Scade tra ${diffDays} giorni`
            };
          }
          return null;
        };
        deadlineInfo.revisioneStatus = checkDate(v.scadenzaRevisione);
        deadlineInfo.assicurazioneStatus = checkDate(v.scadenzaAssicurazione);
        deadlineInfo.bolloStatus = checkDate(v.scadenzaBollo);
        if (hasUpcoming) {
          list.push(deadlineInfo);
        }
      });
      return list.sort((a, b) => a.isExpired === b.isExpired ? 0 : a.isExpired ? -1 : 1);
    });
    const hasUrgentDeadlines = computed(() => {
      return upcomingDeadlines.value.some(
        (d) => d.isExpired || d.revisioneStatus?.type === "urgent" || d.assicurazioneStatus?.type === "urgent" || d.bolloStatus?.type === "urgent"
      );
    });
    const generateWhatsAppLink = (d) => {
      const phone = "390823224038";
      let message = `Ciao ${d.nome}, sono Pica Caravan. Ti avvisiamo che per il tuo veicolo con targa ${d.targa} si avvicinano le seguenti scadenze:
`;
      if (d.revisioneStatus) message += `- Revisione: ${formatDate(d.scadenzaRevisione)}
`;
      if (d.assicurazioneStatus) message += `- Assicurazione: ${formatDate(d.scadenzaAssicurazione)}
`;
      if (d.bolloStatus) message += `- Bollo: ${formatDate(d.scadenzaBollo)}
`;
      message += `
Contattaci per un appuntamento o per maggiori informazioni!`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "N.D.";
      return new Date(dateStr).toLocaleDateString("it-IT");
    };
    const editingBlogId = ref(null);
    const showDeleteModal = ref(false);
    const vehicleToDelete = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-container" }, _attrs))} data-v-c04000e6>`);
      if (!isAuthenticated.value) {
        _push(`<div class="login-wall bg-[var(--bg)]" data-v-c04000e6><div class="glass-panel p-10 w-full max-w-md relative overflow-hidden" data-v-c04000e6><div class="mb-10 flex flex-col items-center" data-v-c04000e6><img${ssrRenderAttr("src", _imports_0)} alt="Pica Caravan" class="h-16 w-auto mb-6" data-v-c04000e6><h1 class="text-3xl font-black text-white tracking-tighter uppercase" data-v-c04000e6>PICA CARAVAN</h1><p class="text-[10px] tracking-[0.4em] text-[var(--primary)] font-black uppercase mt-2" data-v-c04000e6>Area Riservata</p></div><form class="space-y-6" data-v-c04000e6><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Username</label><input type="text"${ssrRenderAttr("value", usernameInput.value)} class="premium-input" placeholder="Inserisci username" required data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Password</label><input type="password"${ssrRenderAttr("value", passwordInput.value)} class="premium-input" placeholder="••••••••" required data-v-c04000e6></div><button type="submit" class="btn-premium w-full justify-center" data-v-c04000e6> Accedi al Pannello </button>`);
        if (loginError.value) {
          _push(`<p class="text-center text-[var(--primary)] text-xs font-bold uppercase tracking-widest mt-4" data-v-c04000e6> Credenziali non valide </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form></div></div>`);
      } else {
        _push(`<div class="admin-dashboard bg-[var(--bg)]" data-v-c04000e6><aside class="w-80 border-r border-[var(--line)] flex flex-col p-8 bg-[var(--panel)]" data-v-c04000e6><div class="mb-12" data-v-c04000e6><div class="flex flex-col" data-v-c04000e6><span class="text-xl font-black text-white tracking-tighter" data-v-c04000e6>PICA CARAVAN</span><span class="text-[10px] tracking-[0.3em] text-[var(--primary)] font-black uppercase" data-v-c04000e6>Admin Dashboard</span></div></div><nav class="flex-1 space-y-2" data-v-c04000e6><!--[-->`);
        ssrRenderList([
          { id: "list", label: "Gestisci Veicoli", icon: "🚐" },
          { id: "add", label: "Aggiungi Nuovo", icon: "➕" },
          { id: "leads", label: "Preventivi", icon: "📩", count: leads.value.length },
          { id: "tradeIns", label: "Permute", icon: "🔄", count: tradeIns.value.length },
          { id: "portal", label: "Gestione Portale", icon: "👤" },
          { id: "deadlines", label: "Alert Scadenze", icon: "🔔", count: unref(upcomingDeadlines).length, urgent: unref(hasUrgentDeadlines) },
          { id: "blog", label: "Journal Blog", icon: "📰" }
        ], (tab) => {
          _push(`<button class="${ssrRenderClass([currentTab.value === tab.id ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary-glow)]" : "text-[var(--text-dim)]", "w-full flex items-center justify-between p-4 rounded-[var(--radius-md)]"])}" data-v-c04000e6><div class="flex items-center gap-3" data-v-c04000e6><span class="text-lg" data-v-c04000e6>${ssrInterpolate(tab.icon)}</span><span class="text-xs font-black uppercase tracking-widest" data-v-c04000e6>${ssrInterpolate(tab.label)}</span></div>`);
          if (tab.count) {
            _push(`<span class="${ssrRenderClass([currentTab.value === tab.id ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary-glow)]" : tab.urgent ? "bg-red-500/20 text-red-200 border border-red-500/30" : "bg-[var(--line)] text-[var(--text-dim)]", "px-2 py-0.5 rounded-full text-[10px] font-black"])}" data-v-c04000e6>${ssrInterpolate(tab.count)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></nav><button class="mt-10 p-4 border border-[var(--line)] rounded-[var(--radius-md)] text-[var(--text-dim)] text-[10px] font-black uppercase tracking-widest" data-v-c04000e6> Disconnetti </button></aside><main class="flex-1 overflow-y-auto p-12" data-v-c04000e6>`);
        if (currentTab.value === "list") {
          _push(`<section class="space-y-10" data-v-c04000e6><div class="flex justify-between items-end" data-v-c04000e6><div data-v-c04000e6><h2 class="text-4xl font-black text-white uppercase tracking-tighter" data-v-c04000e6>I Tuoi Veicoli</h2><p class="text-[var(--text-dim)] text-sm font-medium" data-v-c04000e6>Gestisci il catalogo online in tempo reale</p></div><button class="btn-premium" data-v-c04000e6> Nuovo Veicolo </button></div>`);
          if (loading.value) {
            _push(`<div class="py-20 text-center" data-v-c04000e6><p class="text-white font-black uppercase tracking-widest text-[10px]" data-v-c04000e6>Caricamento...</p></div>`);
          } else if (vehicles.value.length === 0) {
            _push(`<div class="glass-panel p-20 text-center" data-v-c04000e6><p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-xs mb-6" data-v-c04000e6>Nessun veicolo trovato</p><button class="btn-premium" data-v-c04000e6>Inizia ora</button></div>`);
          } else {
            _push(`<div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8" data-v-c04000e6><!--[-->`);
            ssrRenderList(vehicles.value, (m) => {
              _push(`<div class="admin-card group overflow-hidden flex flex-col glass-panel" data-v-c04000e6><div class="relative h-64 overflow-hidden -mx-6 -mt-6 mb-6" data-v-c04000e6>`);
              _push(ssrRenderComponent(VehicleCarousel, {
                images: m.immagini,
                altText: `${m.marca} ${m.modello}`
              }, null, _parent));
              _push(`<div class="absolute top-4 right-4 flex gap-2" data-v-c04000e6><span class="status-badge primary" data-v-c04000e6>${ssrInterpolate(m.nuovaUsata)}</span><span class="${ssrRenderClass([m.isVisible ? "primary" : "dim", "status-badge"])}" data-v-c04000e6>${ssrInterpolate(m.isVisible ? "Visibile" : "Nascosto")}</span></div></div><div class="flex-1 flex flex-col" data-v-c04000e6><div class="flex justify-between items-start mb-4" data-v-c04000e6><div data-v-c04000e6><span class="text-[var(--primary)] text-[10px] font-black uppercase tracking-widest" data-v-c04000e6>${ssrInterpolate(m.marca)}</span><h3 class="text-xl font-black text-white uppercase tracking-tight" data-v-c04000e6>${ssrInterpolate(m.modello)}</h3></div><span class="text-lg font-black text-white" data-v-c04000e6>€ ${ssrInterpolate(m.prezzo.toLocaleString("it-IT"))}</span></div><div class="flex flex-wrap gap-2 mb-6" data-v-c04000e6><span class="px-2 py-1 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>${ssrInterpolate(m.tipo)}</span><span class="px-2 py-1 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>${ssrInterpolate(m.categoria)}</span></div><div class="flex gap-3 mt-auto" data-v-c04000e6><button class="flex-1 py-3 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-md)] text-[10px] font-black uppercase tracking-widest text-white" data-v-c04000e6> Modifica </button><button class="px-4 py-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-[var(--radius-md)]" data-v-c04000e6> 🗑️ </button></div></div></div>`);
            });
            _push(`<!--]--></div>`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        if (currentTab.value === "add" || currentTab.value === "edit") {
          _push(`<section class="space-y-10" data-v-c04000e6><div class="flex justify-between items-end" data-v-c04000e6><div data-v-c04000e6><h2 class="text-4xl font-black text-white uppercase tracking-tighter" data-v-c04000e6>${ssrInterpolate(currentTab.value === "add" ? "Carica Nuovo Veicolo" : "Modifica Veicolo")}</h2><p class="text-[var(--text-dim)] text-sm font-medium" data-v-c04000e6>Riempi i campi per pubblicare il veicolo nel catalogo</p></div><button class="btn-secondary-glass" data-v-c04000e6> ← Torna alla lista </button></div><form class="admin-card glass-panel" data-v-c04000e6><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-c04000e6><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Marca</label><input type="text"${ssrRenderAttr("value", vehicleForm.value.marca)} required placeholder="Es: Hymer" class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Modello</label><input type="text"${ssrRenderAttr("value", vehicleForm.value.modello)} required placeholder="Es: B-Class" class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Prezzo (€)</label><input type="number"${ssrRenderAttr("value", vehicleForm.value.prezzo)} required class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Anno</label><input type="number"${ssrRenderAttr("value", vehicleForm.value.anno)} class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Chilometri</label><input type="number"${ssrRenderAttr("value", vehicleForm.value.chilometri)} class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Tipo</label><select required class="premium-input appearance-none" data-v-c04000e6><option value="camper" data-v-c04000e6${ssrIncludeBooleanAttr(Array.isArray(vehicleForm.value.tipo) ? ssrLooseContain(vehicleForm.value.tipo, "camper") : ssrLooseEqual(vehicleForm.value.tipo, "camper")) ? " selected" : ""}>Camper</option><option value="roulotte" data-v-c04000e6${ssrIncludeBooleanAttr(Array.isArray(vehicleForm.value.tipo) ? ssrLooseContain(vehicleForm.value.tipo, "roulotte") : ssrLooseEqual(vehicleForm.value.tipo, "roulotte")) ? " selected" : ""}>Roulotte</option><option value="container" data-v-c04000e6${ssrIncludeBooleanAttr(Array.isArray(vehicleForm.value.tipo) ? ssrLooseContain(vehicleForm.value.tipo, "container") : ssrLooseEqual(vehicleForm.value.tipo, "container")) ? " selected" : ""}>Container</option></select></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Stato</label><select required class="premium-input appearance-none" data-v-c04000e6><option value="nuovo" data-v-c04000e6${ssrIncludeBooleanAttr(Array.isArray(vehicleForm.value.nuovaUsata) ? ssrLooseContain(vehicleForm.value.nuovaUsata, "nuovo") : ssrLooseEqual(vehicleForm.value.nuovaUsata, "nuovo")) ? " selected" : ""}>Nuovo</option><option value="usato" data-v-c04000e6${ssrIncludeBooleanAttr(Array.isArray(vehicleForm.value.nuovaUsata) ? ssrLooseContain(vehicleForm.value.nuovaUsata, "usato") : ssrLooseEqual(vehicleForm.value.nuovaUsata, "usato")) ? " selected" : ""}>Usato</option><option value="promozione" data-v-c04000e6${ssrIncludeBooleanAttr(Array.isArray(vehicleForm.value.nuovaUsata) ? ssrLooseContain(vehicleForm.value.nuovaUsata, "promozione") : ssrLooseEqual(vehicleForm.value.nuovaUsata, "promozione")) ? " selected" : ""}>Promozione</option><option value="venduto" data-v-c04000e6${ssrIncludeBooleanAttr(Array.isArray(vehicleForm.value.nuovaUsata) ? ssrLooseContain(vehicleForm.value.nuovaUsata, "venduto") : ssrLooseEqual(vehicleForm.value.nuovaUsata, "venduto")) ? " selected" : ""}>Venduto</option></select></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Categoria</label><select required class="premium-input appearance-none" data-v-c04000e6><!--[-->`);
          ssrRenderList(["Motorhome", "Profilato", "Mansardato", "Van/Camper puro", "Roulotte", "Container", "Street Food"], (cat) => {
            _push(`<option${ssrRenderAttr("value", cat)} data-v-c04000e6${ssrIncludeBooleanAttr(Array.isArray(vehicleForm.value.categoria) ? ssrLooseContain(vehicleForm.value.categoria, cat) : ssrLooseEqual(vehicleForm.value.categoria, cat)) ? " selected" : ""}>${ssrInterpolate(cat)}</option>`);
          });
          _push(`<!--]--></select></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Visibilità sul sito</label><div class="flex items-center gap-4 h-[54px]" data-v-c04000e6><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(vehicleForm.value.isVisible) ? ssrLooseContain(vehicleForm.value.isVisible, null) : vehicleForm.value.isVisible) ? " checked" : ""} id="isVisible" class="w-6 h-6 rounded-[var(--radius-sm)] border-[var(--line)] bg-[var(--line)] text-[var(--primary)] focus:ring-[var(--primary)]" data-v-c04000e6><label for="isVisible" class="text-xs font-black uppercase tracking-widest text-[var(--text-dim)] cursor-pointer" data-v-c04000e6>${ssrInterpolate(vehicleForm.value.isVisible ? "Visibile" : "Nascosto")}</label></div></div><div class="form-group md:col-span-2 lg:col-span-3" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Descrizione</label><textarea placeholder="Descrivi lo stato del veicolo..." class="premium-input min-h-[150px] py-4" data-v-c04000e6>${ssrInterpolate(vehicleForm.value.descrizione)}</textarea></div><div class="form-group md:col-span-2 lg:col-span-3" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Immagini</label><div class="border-2 border-dashed border-[var(--line)] rounded-[var(--radius-md)] p-8 text-center" data-v-c04000e6><input type="file" id="fileInput" multiple accept="image/*" class="hidden" data-v-c04000e6><label for="fileInput" class="cursor-pointer flex flex-col items-center gap-4" data-v-c04000e6><span class="text-4xl" data-v-c04000e6>📸</span><span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>Trascina o clicca per caricare foto</span></label></div>`);
          if (imagePreviews.value.length) {
            _push(`<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6" data-v-c04000e6><!--[-->`);
            ssrRenderList(imagePreviews.value, (preview, index) => {
              _push(`<div class="relative aspect-video rounded-[var(--radius-md)] overflow-hidden border border-[var(--line)] group" data-v-c04000e6><img${ssrRenderAttr("src", preview)} class="w-full h-full object-cover" data-v-c04000e6><button type="button" class="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs" data-v-c04000e6>×</button></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="mt-12 flex flex-col items-center gap-6" data-v-c04000e6><button type="submit"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="btn-premium px-12" data-v-c04000e6>${ssrInterpolate(submitting.value ? "Salvataggio in corso..." : currentTab.value === "add" ? "Pubblica Veicolo" : "Salva Modifiche")}</button>`);
          if (formMessage.value) {
            _push(`<p class="${ssrRenderClass(["text-[10px] font-black uppercase tracking-[0.2em]", isSuccess.value ? "text-green-500" : "text-red-500"])}" data-v-c04000e6>${ssrInterpolate(formMessage.value)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></form></section>`);
        } else {
          _push(`<!---->`);
        }
        if (currentTab.value === "leads") {
          _push(`<section class="space-y-10" data-v-c04000e6><div class="flex justify-between items-end" data-v-c04000e6><div data-v-c04000e6><h2 class="text-4xl font-black text-white uppercase tracking-tighter" data-v-c04000e6>Richieste Preventivo</h2><p class="text-[var(--text-dim)] text-sm font-medium" data-v-c04000e6>Gestisci i contatti dai potenziali clienti</p></div></div>`);
          if (loading.value) {
            _push(`<div class="py-20 text-center" data-v-c04000e6><p class="text-white font-black uppercase tracking-widest text-[10px]" data-v-c04000e6>Caricamento...</p></div>`);
          } else if (leads.value.length === 0) {
            _push(`<div class="glass-panel p-20 text-center" data-v-c04000e6><p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-xs" data-v-c04000e6>Non ci sono ancora richieste di preventivo.</p></div>`);
          } else {
            _push(`<div class="grid grid-cols-1 gap-6" data-v-c04000e6><!--[-->`);
            ssrRenderList(leads.value, (l) => {
              _push(`<div class="${ssrRenderClass([l.status === "nuovo" ? "border-l-[var(--primary)] bg-[var(--primary)]/5" : "border-l-[var(--line)]", "admin-card glass-panel border-l-4"])}" data-v-c04000e6><div class="flex flex-wrap justify-between items-start gap-6 mb-8" data-v-c04000e6><div class="flex items-center gap-4" data-v-c04000e6><div class="w-12 h-12 bg-[var(--line)] rounded-full flex items-center justify-center text-xl" data-v-c04000e6>👤</div><div data-v-c04000e6><h4 class="text-xl font-black text-white uppercase tracking-tight" data-v-c04000e6>${ssrInterpolate(l.nome)}</h4><span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>${ssrInterpolate(new Date(l.createdAt).toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric" }))}</span></div></div><div class="flex gap-2" data-v-c04000e6><span class="${ssrRenderClass([l.status === "nuovo" ? "primary" : "dim", "status-badge"])}" data-v-c04000e6>${ssrInterpolate(l.status)}</span></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-c04000e6><div class="space-y-4" data-v-c04000e6><div class="flex flex-col gap-1" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>Contatti</span><p class="text-sm text-white" data-v-c04000e6>📧 ${ssrInterpolate(l.email)}</p><p class="text-sm text-white" data-v-c04000e6>📞 ${ssrInterpolate(l.telefono)}</p><p class="text-sm text-white" data-v-c04000e6>📍 ${ssrInterpolate(l.citta || "Città non specificata")}</p></div></div><div class="space-y-4" data-v-c04000e6><div class="flex flex-col gap-1" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>Veicolo d&#39;interesse</span><p class="text-sm text-white font-bold uppercase" data-v-c04000e6>${ssrInterpolate(l.marca)} ${ssrInterpolate(l.modello)}</p><p class="text-[10px] text-[var(--text-dim)] font-black uppercase tracking-widest" data-v-c04000e6>${ssrInterpolate(l.tipo)} • ${ssrInterpolate(l.nuovaUsata)}</p></div></div><div class="space-y-4" data-v-c04000e6><div class="flex flex-col gap-1" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>Modalità Acquisto</span><p class="text-sm text-white" data-v-c04000e6>${ssrInterpolate(l.metodoAcquisto)}</p>`);
              if (l.valutazionePermuta === "si") {
                _push(`<div class="mt-2 p-3 bg-[var(--line)] rounded-[var(--radius-sm)] border border-[var(--line)]" data-v-c04000e6><span class="text-[9px] font-black uppercase tracking-widest text-[var(--text-dim)] block mb-1" data-v-c04000e6>Richiesta Permuta</span><p class="text-[11px] text-white" data-v-c04000e6>🔄 ${ssrInterpolate(l.permutaModello)} (${ssrInterpolate(l.permutaAnno)})</p></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></div></div>`);
              if (l.messaggio) {
                _push(`<div class="mt-8 p-6 bg-[var(--line)] rounded-[var(--radius-md)] border border-[var(--line)]" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] block mb-3" data-v-c04000e6>Messaggio del cliente</span><p class="text-sm text-[var(--text-dim)] leading-relaxed italic" data-v-c04000e6>&quot;${ssrInterpolate(l.messaggio)}&quot;</p></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        if (currentTab.value === "tradeIns") {
          _push(`<section class="space-y-10" data-v-c04000e6><div class="flex justify-between items-end" data-v-c04000e6><div data-v-c04000e6><h2 class="text-4xl font-black text-white uppercase tracking-tighter" data-v-c04000e6>Richieste Permuta</h2><p class="text-[var(--text-dim)] text-sm font-medium" data-v-c04000e6>Gestisci le valutazioni dell&#39;usato inviate dai clienti</p></div></div>`);
          if (loading.value) {
            _push(`<div class="py-20 text-center" data-v-c04000e6><p class="text-white font-black uppercase tracking-widest text-[10px]" data-v-c04000e6>Caricamento...</p></div>`);
          } else if (tradeIns.value.length === 0) {
            _push(`<div class="glass-panel p-20 text-center" data-v-c04000e6><p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-xs" data-v-c04000e6>Non ci sono ancora richieste di permuta.</p></div>`);
          } else {
            _push(`<div class="grid grid-cols-1 gap-6" data-v-c04000e6><!--[-->`);
            ssrRenderList(tradeIns.value, (t) => {
              _push(`<div class="${ssrRenderClass([t.status === "nuovo" ? "border-l-[var(--primary)] bg-[var(--primary)]/5" : "border-l-[var(--line)]", "admin-card glass-panel border-l-4"])}" data-v-c04000e6><div class="flex flex-wrap justify-between items-start gap-6 mb-8" data-v-c04000e6><div class="flex items-center gap-4" data-v-c04000e6><div class="w-12 h-12 bg-[var(--line)] rounded-full flex items-center justify-center text-xl" data-v-c04000e6>🔄</div><div data-v-c04000e6><h4 class="text-xl font-black text-white uppercase tracking-tight" data-v-c04000e6>${ssrInterpolate(t.nome)}</h4><span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>${ssrInterpolate(new Date(t.createdAt).toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric" }))}</span></div></div><div class="flex gap-2" data-v-c04000e6><span class="${ssrRenderClass([t.status === "nuovo" ? "primary" : "dim", "status-badge"])}" data-v-c04000e6>${ssrInterpolate(t.status)}</span></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-v-c04000e6><div class="space-y-4" data-v-c04000e6><div class="flex flex-col gap-1" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>Contatti</span><p class="text-sm text-white" data-v-c04000e6>📧 ${ssrInterpolate(t.email)}</p><p class="text-sm text-white" data-v-c04000e6>📞 ${ssrInterpolate(t.telefono)}</p><p class="text-sm text-white" data-v-c04000e6>📍 ${ssrInterpolate(t.citta)}</p></div></div><div class="space-y-4" data-v-c04000e6><div class="flex flex-col gap-1" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>Veicolo da Permutare</span><p class="text-sm text-white font-bold uppercase" data-v-c04000e6>${ssrInterpolate(t.marca)} ${ssrInterpolate(t.modello)}</p><p class="text-[10px] text-[var(--text-dim)] font-black uppercase tracking-widest" data-v-c04000e6>${ssrInterpolate(t.anno)} • ${ssrInterpolate(t.km)} KM</p><p class="text-[10px] text-[var(--text-dim)] font-black uppercase tracking-widest" data-v-c04000e6>Targa: ${ssrInterpolate(t.targa)}</p></div></div><div class="space-y-4" data-v-c04000e6><div class="flex flex-col gap-1" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>Stato &amp; Valutazione</span><p class="text-sm text-white" data-v-c04000e6>${ssrInterpolate(t.stato)}</p><p class="text-lg font-black text-[var(--primary)] mt-1" data-v-c04000e6>€ ${ssrInterpolate(t.prezzoDesiderato)}</p></div></div><div class="space-y-4" data-v-c04000e6><div class="flex flex-col gap-1" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>Dettagli</span><div class="flex flex-wrap gap-2 mt-1" data-v-c04000e6><span class="px-2 py-0.5 bg-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase text-[var(--text-dim)]" data-v-c04000e6>Incidentata: ${ssrInterpolate(t.incidentato)}</span><span class="px-2 py-0.5 bg-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase text-[var(--text-dim)]" data-v-c04000e6>Tagliandi: ${ssrInterpolate(t.tagliandi)}</span><span class="px-2 py-0.5 bg-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase text-[var(--text-dim)]" data-v-c04000e6>Revisionata: ${ssrInterpolate(t.revisione)}</span></div></div></div></div>`);
              if (t.descrizione || t.difetti) {
                _push(`<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6" data-v-c04000e6>`);
                if (t.descrizione) {
                  _push(`<div class="p-6 bg-[var(--line)] rounded-[var(--radius-md)] border border-[var(--line)]" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] block mb-3" data-v-c04000e6>Descrizione</span><p class="text-sm text-[var(--text-dim)] leading-relaxed" data-v-c04000e6>&quot;${ssrInterpolate(t.descrizione)}&quot;</p></div>`);
                } else {
                  _push(`<!---->`);
                }
                if (t.difetti) {
                  _push(`<div class="p-6 bg-red-500/5 rounded-[var(--radius-md)] border border-red-500/10" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-red-500 block mb-3" data-v-c04000e6>Difetti Segnalati</span><p class="text-sm text-[var(--text-dim)] leading-relaxed" data-v-c04000e6>&quot;${ssrInterpolate(t.difetti)}&quot;</p></div>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
              } else {
                _push(`<!---->`);
              }
              if (t.images && t.images.length) {
                _push(`<div class="mt-8" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] block mb-4" data-v-c04000e6>Foto Allegate</span><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4" data-v-c04000e6><!--[-->`);
                ssrRenderList(t.images, (img, idx) => {
                  _push(`<a${ssrRenderAttr("href", img)} target="_blank" class="aspect-square rounded-[var(--radius-md)] overflow-hidden border border-[var(--line)]" data-v-c04000e6><img${ssrRenderAttr("src", img)} class="w-full h-full object-cover" data-v-c04000e6></a>`);
                });
                _push(`<!--]--></div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        if (currentTab.value === "portal") {
          _push(`<section class="space-y-10" data-v-c04000e6><div class="flex justify-between items-end" data-v-c04000e6><div data-v-c04000e6><h2 class="text-4xl font-black text-white uppercase tracking-tighter" data-v-c04000e6>Gestione Portale Clienti</h2><p class="text-[var(--text-dim)] text-sm font-medium" data-v-c04000e6>Crea e gestisci gli accessi privati per i tuoi clienti</p></div></div>`);
          if (loading.value) {
            _push(`<div class="py-20 text-center" data-v-c04000e6><p class="text-white font-black uppercase tracking-widest text-[10px]" data-v-c04000e6>Caricamento...</p></div>`);
          } else {
            _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-10" data-v-c04000e6><div class="lg:col-span-1" data-v-c04000e6><div class="admin-card glass-panel sticky top-12" data-v-c04000e6><h3 class="text-xl font-black text-white uppercase tracking-tight mb-8" data-v-c04000e6>Registra Nuovo Cliente</h3><form class="space-y-6" data-v-c04000e6><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Nome</label><input${ssrRenderAttr("value", newUser.value.nome)} placeholder="Es: Mario" required class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Cognome</label><input${ssrRenderAttr("value", newUser.value.cognome)} placeholder="Es: Rossi" required class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Targa</label><input${ssrRenderAttr("value", newUser.value.targa)} placeholder="Es: AA123BB" required class="premium-input uppercase font-black" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Password Temporanea</label><input${ssrRenderAttr("value", newUser.value.password)} placeholder="••••••••" required class="premium-input" data-v-c04000e6></div><button type="submit" class="btn-premium w-full justify-center" data-v-c04000e6> Crea Account Portale </button></form></div></div><div class="lg:col-span-2 space-y-4" data-v-c04000e6><!--[-->`);
            ssrRenderList(portalUsers.value, (u) => {
              _push(`<div class="admin-card glass-panel flex flex-wrap items-center justify-between gap-6" data-v-c04000e6><div class="flex items-center gap-4" data-v-c04000e6><div class="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center text-[var(--primary)] font-black" data-v-c04000e6>${ssrInterpolate(u.nome.charAt(0))}${ssrInterpolate(u.cognome.charAt(0))}</div><div data-v-c04000e6><h4 class="text-lg font-black text-white uppercase tracking-tight" data-v-c04000e6>${ssrInterpolate(u.nome)} ${ssrInterpolate(u.cognome)}</h4><span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>Targa: <code class="text-[var(--primary)]" data-v-c04000e6>${ssrInterpolate(u.targa)}</code></span></div></div><div class="flex gap-2" data-v-c04000e6><button class="px-4 py-2 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest text-white" data-v-c04000e6>Veicolo</button><button class="px-4 py-2 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest text-white" data-v-c04000e6>Manutenzione</button><button class="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest" data-v-c04000e6>Elimina</button></div></div>`);
            });
            _push(`<!--]-->`);
            if (portalUsers.value.length === 0) {
              _push(`<div class="glass-panel p-12 text-center" data-v-c04000e6><p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-xs" data-v-c04000e6>Nessun cliente registrato nel portale.</p></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        if (currentTab.value === "deadlines") {
          _push(`<section class="space-y-10" data-v-c04000e6><div class="flex justify-between items-end" data-v-c04000e6><div data-v-c04000e6><h2 class="text-4xl font-black text-white uppercase tracking-tighter" data-v-c04000e6>Alert Scadenze 🔔</h2><p class="text-[var(--text-dim)] text-sm font-medium" data-v-c04000e6>Veicoli con scadenze imminenti o superate</p></div></div>`);
          if (loading.value) {
            _push(`<div class="py-20 text-center" data-v-c04000e6><p class="text-white font-black uppercase tracking-widest text-[10px]" data-v-c04000e6>Caricamento...</p></div>`);
          } else if (unref(upcomingDeadlines).length === 0) {
            _push(`<div class="glass-panel p-20 text-center" data-v-c04000e6><p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-sm" data-v-c04000e6>Nessuna scadenza imminente (entro 30 giorni) o superata.</p></div>`);
          } else {
            _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-c04000e6><!--[-->`);
            ssrRenderList(unref(upcomingDeadlines), (d) => {
              _push(`<div class="${ssrRenderClass([d.isExpired ? "border-l-red-500" : "border-l-[var(--primary)]", "admin-card glass-panel border-l-4"])}" data-v-c04000e6><div class="flex justify-between items-start mb-6" data-v-c04000e6><div data-v-c04000e6><h3 class="text-xl font-black text-white uppercase tracking-tight" data-v-c04000e6>${ssrInterpolate(d.marca)} ${ssrInterpolate(d.modello)}</h3><code class="text-[var(--primary)] text-xs font-black tracking-widest" data-v-c04000e6>${ssrInterpolate(d.targa)}</code></div><div class="text-right" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)] block" data-v-c04000e6>Proprietario</span><span class="text-sm font-bold text-white" data-v-c04000e6>${ssrInterpolate(d.nome)} ${ssrInterpolate(d.cognome)}</span></div></div><div class="space-y-3 mb-8" data-v-c04000e6>`);
              if (d.revisioneStatus) {
                _push(`<div class="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[var(--line)] border border-[var(--line)]" data-v-c04000e6><div class="flex items-center gap-3" data-v-c04000e6><div class="${ssrRenderClass([d.revisioneStatus.type === "expired" ? "bg-red-500" : "bg-[var(--primary)]", "w-2 h-2 rounded-full"])}" data-v-c04000e6></div><span class="text-[11px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>Revisione</span></div><div class="text-right" data-v-c04000e6><span class="text-xs font-bold text-white block" data-v-c04000e6>${ssrInterpolate(formatDate(d.scadenzaRevisione))}</span><span class="${ssrRenderClass([d.revisioneStatus.type === "expired" ? "text-red-400" : "text-[var(--primary)]", "text-[9px] font-black uppercase tracking-tighter"])}" data-v-c04000e6>${ssrInterpolate(d.revisioneStatus.message)}</span></div></div>`);
              } else {
                _push(`<!---->`);
              }
              if (d.assicurazioneStatus) {
                _push(`<div class="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[var(--line)] border border-[var(--line)]" data-v-c04000e6><div class="flex items-center gap-3" data-v-c04000e6><div class="${ssrRenderClass([d.assicurazioneStatus.type === "expired" ? "bg-red-500" : "bg-[var(--primary)]", "w-2 h-2 rounded-full"])}" data-v-c04000e6></div><span class="text-[11px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>Assicurazione</span></div><div class="text-right" data-v-c04000e6><span class="text-xs font-bold text-white block" data-v-c04000e6>${ssrInterpolate(formatDate(d.scadenzaAssicurazione))}</span><span class="${ssrRenderClass([d.assicurazioneStatus.type === "expired" ? "text-red-400" : "text-[var(--primary)]", "text-[9px] font-black uppercase tracking-tighter"])}" data-v-c04000e6>${ssrInterpolate(d.assicurazioneStatus.message)}</span></div></div>`);
              } else {
                _push(`<!---->`);
              }
              if (d.bolloStatus) {
                _push(`<div class="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[var(--line)] border border-[var(--line)]" data-v-c04000e6><div class="flex items-center gap-3" data-v-c04000e6><div class="${ssrRenderClass([d.bolloStatus.type === "expired" ? "bg-red-500" : "bg-[var(--primary)]", "w-2 h-2 rounded-full"])}" data-v-c04000e6></div><span class="text-[11px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>Bollo</span></div><div class="text-right" data-v-c04000e6><span class="text-xs font-bold text-white block" data-v-c04000e6>${ssrInterpolate(formatDate(d.scadenzaBollo))}</span><span class="${ssrRenderClass([d.bolloStatus.type === "expired" ? "text-red-400" : "text-[var(--primary)]", "text-[9px] font-black uppercase tracking-tighter"])}" data-v-c04000e6>${ssrInterpolate(d.bolloStatus.message)}</span></div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div><a${ssrRenderAttr("href", generateWhatsAppLink(d))} target="_blank" class="btn-premium w-full justify-center bg-[#25D366] border-[#25D366] shadow-none" data-v-c04000e6><span class="flex items-center gap-2" data-v-c04000e6><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-v-c04000e6><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" data-v-c04000e6></path></svg> Avvisa Cliente </span></a></div>`);
            });
            _push(`<!--]--></div>`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        if (currentTab.value === "blog") {
          _push(`<section class="space-y-10" data-v-c04000e6><div class="flex justify-between items-end" data-v-c04000e6><div data-v-c04000e6><h2 class="text-4xl font-black text-white uppercase tracking-tighter" data-v-c04000e6>Blog &amp; News</h2><p class="text-[var(--text-dim)] text-sm font-medium" data-v-c04000e6>Gestisci i contenuti editoriali del sito</p></div><button class="btn-premium" data-v-c04000e6> Scrivi Articolo </button></div>`);
          if (loading.value) {
            _push(`<div class="py-20 text-center" data-v-c04000e6><p class="text-white font-black uppercase tracking-widest text-[10px]" data-v-c04000e6>Caricamento...</p></div>`);
          } else {
            _push(`<div class="grid grid-cols-1 gap-4" data-v-c04000e6><!--[-->`);
            ssrRenderList(blogPosts.value, (p) => {
              _push(`<div class="admin-card glass-panel flex items-center gap-6" data-v-c04000e6><div class="w-32 h-20 rounded-[var(--radius-sm)] overflow-hidden border border-[var(--line)] shrink-0" data-v-c04000e6><img${ssrRenderAttr("src", p.imageCover || "/logo-pica-caravan.jpg")} class="w-full h-full object-cover" data-v-c04000e6></div><div class="flex-grow" data-v-c04000e6><div class="flex items-center gap-3 mb-1" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>${ssrInterpolate(p.category)}</span><span class="text-[10px] font-black uppercase tracking-widest text-[var(--line)]" data-v-c04000e6>•</span><span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>${ssrInterpolate(new Date(p.date).toLocaleDateString())}</span></div><h3 class="text-lg font-black text-white uppercase tracking-tight" data-v-c04000e6>${ssrInterpolate(p.title)}</h3></div><div class="flex gap-2" data-v-c04000e6><button class="px-4 py-2 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest text-white" data-v-c04000e6>Modifica</button><button class="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest" data-v-c04000e6>Elimina</button></div></div>`);
            });
            _push(`<!--]-->`);
            if (blogPosts.value.length === 0) {
              _push(`<div class="glass-panel p-20 text-center" data-v-c04000e6><p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-sm" data-v-c04000e6>Nessun articolo presente.</p></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        if (currentTab.value === "add-blog") {
          _push(`<section class="space-y-10" data-v-c04000e6><div class="flex justify-between items-end" data-v-c04000e6><div data-v-c04000e6><h2 class="text-4xl font-black text-white uppercase tracking-tighter" data-v-c04000e6>${ssrInterpolate(editingBlogId.value ? "Modifica Articolo" : "Nuovo Articolo")}</h2><p class="text-[var(--text-dim)] text-sm font-medium" data-v-c04000e6>Scrivi e pubblica contenuti per il tuo pubblico</p></div><button class="btn-secondary-glass" data-v-c04000e6> Annulla </button></div><form class="admin-card glass-panel" data-v-c04000e6><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-c04000e6><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Titolo</label><input${ssrRenderAttr("value", blogForm.value.title)} placeholder="Titolo articolo" required class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Slug (URL)</label><input${ssrRenderAttr("value", blogForm.value.slug)} placeholder="es: novita-camper-2026" required class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Categoria</label><select class="premium-input appearance-none" data-v-c04000e6><!--[-->`);
          ssrRenderList(["Novità Camper", "Manutenzione", "Consigli Viaggio", "Offerte", "Eventi"], (c) => {
            _push(`<option${ssrRenderAttr("value", c)} data-v-c04000e6${ssrIncludeBooleanAttr(Array.isArray(blogForm.value.category) ? ssrLooseContain(blogForm.value.category, c) : ssrLooseEqual(blogForm.value.category, c)) ? " selected" : ""}>${ssrInterpolate(c)}</option>`);
          });
          _push(`<!--]--></select></div><div class="form-group lg:col-span-3" data-v-c04000e6><label class="premium-label" data-v-c04000e6>URL Immagine Copertina</label><input${ssrRenderAttr("value", blogForm.value.imageCover)} placeholder="https://cloudinary..." class="premium-input" data-v-c04000e6></div><div class="form-group lg:col-span-3" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Estratto (breve descrizione)</label><textarea placeholder="Breve sintesi per l&#39;elenco..." class="premium-input min-h-[80px] py-4" data-v-c04000e6>${ssrInterpolate(blogForm.value.excerpt)}</textarea></div><div class="form-group lg:col-span-3" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Collega Veicoli (Seleziona veicoli correlati)</label><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 rounded-[var(--radius-md)] bg-[var(--line)] border border-[var(--line)]" data-v-c04000e6><!--[-->`);
          ssrRenderList(vehicles.value, (m) => {
            _push(`<div class="flex items-center gap-3" data-v-c04000e6><input type="checkbox"${ssrRenderAttr("id", `rel-${m._id}`)}${ssrRenderAttr("value", m._id)}${ssrIncludeBooleanAttr(Array.isArray(blogForm.value.relatedVehicles) ? ssrLooseContain(blogForm.value.relatedVehicles, m._id) : blogForm.value.relatedVehicles) ? " checked" : ""} class="w-5 h-5 rounded border-[var(--line)] bg-[var(--line)] text-[var(--primary)] focus:ring-[var(--primary)]" data-v-c04000e6><label${ssrRenderAttr("for", `rel-${m._id}`)} class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)] cursor-pointer" data-v-c04000e6>${ssrInterpolate(m.marca)} ${ssrInterpolate(m.modello)}</label></div>`);
          });
          _push(`<!--]--></div></div><div class="form-group lg:col-span-3" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Contenuto (Markdown)</label><textarea placeholder="Scrivi il tuo articolo qui..." class="premium-input min-h-[400px] font-mono text-sm py-4" required data-v-c04000e6>${ssrInterpolate(blogForm.value.content)}</textarea></div></div><div class="mt-10 pt-10 border-t border-[var(--line)] flex justify-center" data-v-c04000e6><button type="submit" class="btn-premium px-12"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} data-v-c04000e6>${ssrInterpolate(submitting.value ? "Salvataggio..." : "Salva Articolo")}</button></div></form></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</main></div>`);
      }
      if (showDeleteModal.value) {
        _push(`<div class="fixed inset-0 z-[100] flex items-center justify-center p-6" data-v-c04000e6><div class="absolute inset-0 bg-black/80" data-v-c04000e6></div><div class="glass-panel max-w-md w-full p-10 relative z-10 border-[var(--primary)]/20" data-v-c04000e6><h3 class="text-2xl font-black text-white uppercase tracking-tighter mb-4" data-v-c04000e6>Conferma Eliminazione</h3><p class="text-[var(--text-dim)] text-sm mb-8 leading-relaxed" data-v-c04000e6>Sei sicuro di voler eliminare definitivamente <strong class="text-white" data-v-c04000e6>${ssrInterpolate(vehicleToDelete.value?.marca)} ${ssrInterpolate(vehicleToDelete.value?.modello)}</strong>? Questa azione non può essere annullata.</p><div class="flex gap-4" data-v-c04000e6><button class="flex-1 px-6 py-4 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-md)] text-[10px] font-black uppercase tracking-widest text-white" data-v-c04000e6>Annulla</button><button class="flex-1 px-6 py-4 bg-red-500 border border-red-500 rounded-[var(--radius-md)] text-[10px] font-black uppercase tracking-widest text-white" data-v-c04000e6>Sì, Elimina</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showPortalVehicleModal.value) {
        _push(`<div class="fixed inset-0 z-[100] flex items-center justify-center p-6" data-v-c04000e6><div class="absolute inset-0 bg-black/80" data-v-c04000e6></div><div class="glass-panel max-w-4xl w-full p-10 relative z-10 max-h-[90vh] overflow-y-auto" data-v-c04000e6><div class="flex justify-between items-start mb-10" data-v-c04000e6><div data-v-c04000e6><h3 class="text-2xl font-black text-white uppercase tracking-tighter" data-v-c04000e6>Gestisci Veicolo Utente</h3><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>Targa: <code class="bg-[var(--primary)]/10 px-2 py-1 rounded-[var(--radius-sm)]" data-v-c04000e6>${ssrInterpolate(selectedUserForAction.value?.targa)}</code></span></div><button class="text-[var(--text-dim)]" data-v-c04000e6><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c04000e6><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-c04000e6></path></svg></button></div><form class="space-y-8" data-v-c04000e6><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-c04000e6><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Marca</label><input${ssrRenderAttr("value", portalVehicleForm.value.marca)} placeholder="Es: Honda" required class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Modello</label><input${ssrRenderAttr("value", portalVehicleForm.value.modello)} placeholder="Es: SH 150" required class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Data Acquisto</label><input type="date"${ssrRenderAttr("value", portalVehicleForm.value.dataAcquisto)} class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Km Iniziali</label><input type="number"${ssrRenderAttr("value", portalVehicleForm.value.kmIniziali)} class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Km Attuali</label><input type="number"${ssrRenderAttr("value", portalVehicleForm.value.kmAttuali)} class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Prossima Manutenzione</label><input${ssrRenderAttr("value", portalVehicleForm.value.prossimaManutenzione)} placeholder="Es: 10.000 km o 12/2026" class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Scadenza Revisione</label><input type="date"${ssrRenderAttr("value", portalVehicleForm.value.scadenzaRevisione)} class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Scadenza Assicurazione</label><input type="date"${ssrRenderAttr("value", portalVehicleForm.value.scadenzaAssicurazione)} class="premium-input" data-v-c04000e6></div><div class="form-group" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Scadenza Bollo</label><input type="date"${ssrRenderAttr("value", portalVehicleForm.value.scadenzaBollo)} class="premium-input" data-v-c04000e6></div><div class="form-group lg:col-span-3" data-v-c04000e6><label class="premium-label" data-v-c04000e6>Avvisi / Suggerimenti</label><textarea placeholder="Es: Controllare pressione gomme ogni mese" class="premium-input py-4" data-v-c04000e6>${ssrInterpolate(portalVehicleForm.value.avvisi)}</textarea></div><div class="form-group lg:col-span-3" data-v-c04000e6><label class="premium-label" data-v-c04000e6>URL Foto Veicolo</label><input${ssrRenderAttr("value", portalVehicleForm.value.photoUrl)} placeholder="https://..." class="premium-input" data-v-c04000e6></div></div><div class="flex gap-4 pt-8 border-t border-[var(--line)]" data-v-c04000e6><button type="button" class="flex-1 px-6 py-4 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-md)] text-[10px] font-black uppercase tracking-widest text-white" data-v-c04000e6>Annulla</button><button type="submit" class="flex-1 btn-premium" data-v-c04000e6>Salva Veicolo</button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showMaintenanceModal.value) {
        _push(`<div class="fixed inset-0 z-[100] flex items-center justify-center p-6" data-v-c04000e6><div class="absolute inset-0 bg-black/80" data-v-c04000e6></div><div class="glass-panel max-w-4xl w-full p-10 relative z-10 max-h-[90vh] flex flex-col" data-v-c04000e6><div class="flex justify-between items-start mb-10" data-v-c04000e6><div data-v-c04000e6><h3 class="text-2xl font-black text-white uppercase tracking-tighter" data-v-c04000e6>Storico Interventi</h3><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>Targa: <code class="bg-[var(--primary)]/10 px-2 py-1 rounded-[var(--radius-sm)]" data-v-c04000e6>${ssrInterpolate(selectedUserForAction.value?.targa)}</code></span></div><button class="text-[var(--text-dim)]" data-v-c04000e6><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c04000e6><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-c04000e6></path></svg></button></div><div class="flex-grow overflow-y-auto pr-4 space-y-4 mb-10 custom-scrollbar" data-v-c04000e6><!--[-->`);
        ssrRenderList(maintenanceHistory.value, (rec) => {
          _push(`<div class="p-6 rounded-[var(--radius-md)] bg-[var(--line)] border border-[var(--line)]" data-v-c04000e6><div class="flex justify-between items-start" data-v-c04000e6><div data-v-c04000e6><div class="flex items-center gap-3 mb-2" data-v-c04000e6><span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]" data-v-c04000e6>${ssrInterpolate(rec.data)}</span><span class="text-[10px] font-black uppercase tracking-widest text-[var(--line)]" data-v-c04000e6>•</span><span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]" data-v-c04000e6>${ssrInterpolate(rec.km)} KM</span></div><h4 class="text-lg font-black text-white uppercase tracking-tight mb-1" data-v-c04000e6>${ssrInterpolate(rec.descrizione)}</h4>`);
          if (rec.partiSostituite) {
            _push(`<p class="text-xs text-[var(--text-dim)] italic" data-v-c04000e6>Parti: ${ssrInterpolate(rec.partiSostituite)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (rec.costo) {
            _push(`<p class="text-sm font-black text-[var(--primary)] mt-3" data-v-c04000e6>€ ${ssrInterpolate(rec.costo)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><button class="p-2 bg-red-500/10 text-red-500 rounded-[var(--radius-sm)]" data-v-c04000e6><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c04000e6><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-c04000e6></path></svg></button></div></div>`);
        });
        _push(`<!--]-->`);
        if (maintenanceHistory.value.length === 0) {
          _push(`<div class="p-12 text-center bg-[var(--line)] rounded-[var(--radius-md)] border border-dashed border-[var(--line)]" data-v-c04000e6><p class="text-[var(--text-dim)] font-black uppercase tracking-widest text-[10px]" data-v-c04000e6>Nessun intervento registrato.</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="pt-8 border-t border-[var(--line)]" data-v-c04000e6><h4 class="text-xs font-black text-white uppercase tracking-widest mb-6" data-v-c04000e6>Aggiungi Nuovo Intervento</h4><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-c04000e6><input type="date"${ssrRenderAttr("value", maintenanceForm.value.data)} class="premium-input" data-v-c04000e6><input type="number"${ssrRenderAttr("value", maintenanceForm.value.km)} placeholder="Chilometraggio" class="premium-input" data-v-c04000e6><input type="number"${ssrRenderAttr("value", maintenanceForm.value.costo)} placeholder="Costo (€)" class="premium-input" data-v-c04000e6><input${ssrRenderAttr("value", maintenanceForm.value.descrizione)} placeholder="Descrizione (es: Tagliando completo)" class="premium-input lg:col-span-2" data-v-c04000e6><input${ssrRenderAttr("value", maintenanceForm.value.partiSostituite)} placeholder="Parti sostituite (es: Olio, Filtri...)" class="premium-input" data-v-c04000e6></div><button class="btn-premium w-full mt-6 justify-center" data-v-c04000e6>Aggiungi Intervento</button></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c04000e6"]]);

export { admin as default };
//# sourceMappingURL=admin-D9ywuI11.mjs.map
