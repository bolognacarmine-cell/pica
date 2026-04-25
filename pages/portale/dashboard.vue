<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref(null)
const data = ref({
  vehicle: null,
  maintenance: [],
  documents: [],
  blogPosts: []
})
const loading = ref(true)
const activeTab = ref('profile')

const fetchPortalData = async (targa) => {
  try {
    const res = await $fetch(`/api/portal/data?targa=${targa}`)
    data.value = { ...res, blogPosts: [] }
    // Carica anche articoli di manutenzione dal blog
    fetchMaintenanceArticles()
  } catch (err) {
    console.error('Errore caricamento dati:', err)
  } finally {
    loading.value = false
  }
}

const fetchMaintenanceArticles = async () => {
  try {
    const res = await $fetch('/api/blog/maintenance')
    data.value.blogPosts = res.posts || []
  } catch (e) {
    console.error('Errore caricamento articoli manutenzione:', e)
  }
}
const logout = () => {
  localStorage.removeItem('rr_portal_token')
  localStorage.removeItem('rr_portal_user')
  router.push('/portale/login')
}

onMounted(() => {
  const savedUser = localStorage.getItem('rr_portal_user')
  if (!savedUser) {
    router.push('/portale/login')
    return
  }
  user.value = JSON.parse(savedUser)
  fetchPortalData(user.value.targa)
})

const formatPrice = (p) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(p)
const formatDate = (d) => new Date(d).toLocaleDateString('it-IT')

const getDateStatus = (dateStr) => {
  if (!dateStr) return 'none'
  const today = new Date()
  const deadline = new Date(dateStr)
  const diffTime = deadline.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 0) return 'expired'
  if (diffDays <= 30) return 'upcoming'
  return 'ok'
}
</script>

<template>
  <div class="portal-dashboard bg-[#030303] min-h-screen text-white">
    <!-- Top Bar -->
    <header class="border-b border-white/5 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img src="/logo-pica-caravan.jpg" alt="Logo" class="h-10 w-10 rounded-full border border-white/10" />
          <div class="flex flex-col">
            <span class="text-sm font-black uppercase tracking-tighter">Pica Caravan</span>
            <span class="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Area Clienti</span>
          </div>
        </div>
        <div v-if="user" class="flex items-center gap-6">
          <div class="hidden md:flex flex-col items-end">
            <span class="text-xs font-black uppercase tracking-widest text-white">{{ user.nome }} {{ user.cognome }}</span>
            <span class="text-[9px] text-white/40 uppercase font-bold tracking-widest">Cliente Verificato</span>
          </div>
          <button @click="logout" class="px-4 py-2 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 transition-all">
            Esci
          </button>
        </div>
      </div>
    </header>

    <main class="container mx-auto px-6 py-12">
      <div v-if="loading" class="flex flex-col items-center justify-center py-32">
        <div class="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
        <p class="text-white/40 text-xs font-black uppercase tracking-widest">Sincronizzazione dati veicolo...</p>
      </div>

      <div v-else-if="data.vehicle" class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Sidebar -->
        <aside class="lg:col-span-3 space-y-8">
          <div class="glass-panel p-6 overflow-hidden relative">
            <div class="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <img :src="data.vehicle.photoUrl || '/logo-pica-caravan.jpg'" alt="Veicolo" class="w-full h-40 object-cover rounded-xl mb-6 border border-white/5" />
            <div class="space-y-1">
              <h3 class="text-lg font-black uppercase tracking-tighter">{{ data.vehicle.marca }} {{ data.vehicle.modello }}</h3>
              <span class="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-black rounded-md tracking-widest">{{ data.vehicle.targa }}</span>
            </div>
          </div>

          <nav class="space-y-2">
            <button 
              v-for="tab in [
                { id: 'profile', label: 'Profilo Veicolo', icon: '🚐' },
                { id: 'history', label: 'Manutenzioni', icon: '🔧' },
                { id: 'booking', label: 'Prenota Officina', icon: '📅' }
              ]"
              :key="tab.id"
              @click="activeTab = tab.id"
              class="w-full flex items-center gap-4 p-4 rounded-xl transition-all font-black uppercase tracking-widest text-[10px]"
              :class="activeTab === tab.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-white/40 hover:bg-white/5 hover:text-white'"
            >
              <span class="text-lg">{{ tab.icon }}</span>
              {{ tab.label }}
            </button>
          </nav>
        </aside>

        <!-- Content -->
        <section class="lg:col-span-9">
          <!-- TAB: PROFILO -->
          <div v-if="activeTab === 'profile'" class="space-y-10">
            <div class="flex justify-between items-center">
              <h2 class="text-3xl font-black uppercase tracking-tighter">Il tuo Veicolo</h2>
              <span v-if="data.vehicle.avvisi" class="status-badge primary animate-pulse">Avviso Importante</span>
              <span v-else class="status-badge dim">Dati Sincronizzati</span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="admin-card space-y-6">
                <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Dati Tecnici</h4>
                <div class="space-y-4">
                  <div v-for="(val, label) in { 'Marca': data.vehicle.marca, 'Modello': data.vehicle.modello, 'Data Acquisto': data.vehicle.dataAcquisto ? formatDate(data.vehicle.dataAcquisto) : 'N.D.', 'Km Iniziali': (data.vehicle.kmIniziali || 0) + ' km' }" :key="label" class="flex justify-between border-b border-white/5 pb-2">
                    <span class="text-xs text-white/40 font-bold uppercase">{{ label }}</span>
                    <span class="text-xs text-white font-black uppercase">{{ val }}</span>
                  </div>
                </div>
              </div>

              <div class="admin-card space-y-6">
                <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Stato Attuale</h4>
                <div class="space-y-4">
                  <div class="flex justify-between border-b border-white/5 pb-2">
                    <span class="text-xs text-white/40 font-bold uppercase">Km Attuali</span>
                    <span class="text-sm text-primary font-black">{{ data.vehicle.kmAttuali || 0 }} km</span>
                  </div>
                  <div class="flex justify-between border-b border-white/5 pb-2">
                    <span class="text-xs text-white/40 font-bold uppercase">Prossima Scadenza</span>
                    <span class="text-xs text-white font-black uppercase">{{ data.vehicle.prossimaManutenzione || 'In aggiornamento' }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <h3 class="text-xl font-black uppercase tracking-tighter">Scadenze Legali</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="scad in [
                  { label: 'Revisione', date: data.vehicle.scadenzaRevisione },
                  { label: 'Assicurazione', date: data.vehicle.scadenzaAssicurazione },
                  { label: 'Bollo', date: data.vehicle.scadenzaBollo }
                ]" :key="scad.label" 
                class="glass-panel p-6 flex flex-col items-center text-center gap-3 border-l-4"
                :class="[
                  getDateStatus(scad.date) === 'expired' ? 'border-l-red-500 bg-red-500/5' : 
                  getDateStatus(scad.date) === 'upcoming' ? 'border-l-primary bg-primary/5' : 'border-l-green-500 bg-green-500/5'
                ]">
                  <span class="text-[10px] font-black uppercase tracking-widest text-white/40">{{ scad.label }}</span>
                  <span class="text-lg font-black">{{ scad.date ? formatDate(scad.date) : 'N.D.' }}</span>
                  <span class="text-[9px] font-black uppercase tracking-widest" :class="getDateStatus(scad.date) === 'expired' ? 'text-red-500' : 'text-white/20'">
                    {{ getDateStatus(scad.date) === 'expired' ? 'Scaduto' : (getDateStatus(scad.date) === 'upcoming' ? 'In Scadenza' : 'In Regola') }}
                  </span>
                </div>
              </div>
            </div>

            <div v-if="data.vehicle.avvisi" class="glass-panel p-8 bg-primary/5 border-primary/20">
              <div class="flex items-start gap-4">
                <span class="text-2xl">⚠️</span>
                <div>
                  <h4 class="text-sm font-black uppercase tracking-widest text-primary mb-2">Nota del Team Pica</h4>
                  <p class="text-white/60 text-sm leading-relaxed font-medium">{{ data.vehicle.avvisi }}</p>
                </div>
              </div>
            </div>

            <!-- Blog Section -->
            <div v-if="data.blogPosts.length > 0" class="space-y-8 pt-10 border-t border-white/5">
              <h3 class="text-xl font-black uppercase tracking-tighter text-white">Consigli per il tuo viaggio</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <NuxtLink v-for="post in data.blogPosts" :key="post._id" :to="`/blog/${post.slug}`" class="admin-card group p-4 flex gap-4 items-center">
                  <img :src="post.imageCover || '/logo-pica-caravan.jpg'" alt="Blog" class="w-20 h-20 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <h4 class="text-xs font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{{ post.title }}</h4>
                    <span class="text-[9px] font-black uppercase tracking-widest text-white/40">Approfondisci →</span>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- TAB: STORICO -->
          <div v-if="activeTab === 'history'" class="space-y-10">
            <h2 class="text-3xl font-black uppercase tracking-tighter">Cronologia Interventi</h2>
            <div v-if="data.maintenance.length === 0" class="glass-panel p-20 text-center">
              <p class="text-white/40 font-bold uppercase tracking-widest text-[10px]">Nessun intervento registrato a sistema</p>
            </div>
            <div v-else class="space-y-4">
              <div v-for="item in data.maintenance" :key="item._id" class="admin-card flex flex-col md:flex-row justify-between gap-6">
                <div class="space-y-2">
                  <div class="flex items-center gap-3">
                    <span class="text-xs font-black text-primary">{{ formatDate(item.data) }}</span>
                    <span class="w-1 h-1 bg-white/20 rounded-full"></span>
                    <span class="text-xs font-black text-white/60">{{ item.km }} KM</span>
                  </div>
                  <h4 class="text-lg font-black uppercase tracking-tight text-white">{{ item.descrizione }}</h4>
                  <p v-if="item.partiSostituite" class="text-xs text-white/40 font-medium">Parti: {{ item.partiSostituite }}</p>
                </div>
                <div class="flex items-center">
                  <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-black">€ {{ item.costo }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
                <div class="time-point"></div>
                <div class="timeline-card">
                  <div class="tm-header">
                    <span class="tm-date">{{ formatDate(item.data) }}</span>
                    <span class="tm-cost" v-if="item.costo">{{ formatPrice(item.costo) }}</span>
                  </div>
                  <h4>{{ item.descrizione }}</h4>
                  <div class="tm-details">
                    <p class="km-label">🏁 {{ item.km }} km</p>
                    <p v-if="item.partiSostituite" class="parts-list">📦 Parti: {{ item.partiSostituite }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: DOCUMENTI REMOVED -->

          <!-- TAB: PRENOTAZIONE -->
          <div v-if="activeTab === 'booking'" class="tab-pane">
            <div class="content-header">
              <h2>Prenota in Officina</h2>
            </div>
            <div class="booking-placeholder">
              <p>Seleziona un servizio e una data disponibile.</p>
              <!-- Qui andrebbe un calendario interattivo -->
              <div class="booking-options">
                <button class="btn-option">Tagliando Ordinario</button>
                <button class="btn-option">Cambio Gomme</button>
                <button class="btn-option">Controllo Generale</button>
              </div>
              <button class="btn-primary-custom">Verifica Disponibilità</button>
            </div>
          </div>

        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.portal-dashboard {
  min-height: 100vh;
  background: #050505;
  color: #fff;
}

.dashboard-header {
  height: 80px;
  background: rgba(15, 15, 15, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-shell {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-minimal {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-minimal img {
  height: 40px;
  border-radius: 6px;
}

.brand-minimal span {
  font-weight: 800;
  letter-spacing: 0.05em;
  color: var(--primary-2);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.user-name {
  font-weight: 600;
  font-size: 0.9rem;
}

.btn-logout-small {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--line);
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  cursor: pointer;
}

.dashboard-main {
  padding: 40px 0;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}

@media (max-width: 900px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

/* Navigazione */
.dashboard-nav {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.vehicle-mini-card {
  background: var(--panel);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--line);
}

.vehicle-mini-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.mini-info {
  padding: 20px;
}

.mini-info h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.plate-badge {
  background: var(--primary);
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-links button {
  background: none;
  border: 1px solid transparent;
  color: var(--muted);
  text-align: left;
  padding: 14px 20px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-links button .icon {
  font-size: 1.2rem;
}

.nav-links button:hover {
  background: rgba(255,255,255,0.03);
  color: #fff;
}

.nav-links button.active {
  background: var(--panel);
  border-color: var(--line);
  color: var(--primary-2);
}

/* Content Area */
.dashboard-content {
  background: var(--panel);
  border-radius: 24px;
  border: 1px solid var(--line);
  padding: 40px;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.content-header h2 {
  font-size: 2rem;
  font-weight: 900;
}

.warranty-badge {
  background: rgba(40, 167, 69, 0.1);
  color: #28a745;
  border: 1px solid #28a745;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 700;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

@media (max-width: 640px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}

.info-card label {
  display: block;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-2);
  margin-bottom: 20px;
}

.info-card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-card ul li {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
  font-size: 0.95rem;
}

.info-card ul li span {
  color: var(--muted);
}

.info-card code {
  color: #ffc107;
  font-family: monospace;
}

/* Timeline */
.maintenance-timeline {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 20px;
  border-left: 2px solid var(--line);
}

.timeline-item {
  position: relative;
}

.time-point {
  position: absolute;
  left: -27px;
  top: 20px;
  width: 12px;
  height: 12px;
  background: var(--primary-2);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(215, 24, 42, 0.2);
}

.timeline-card {
  background: var(--panel-2);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 24px;
}

.tm-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.tm-date { font-size: 0.85rem; color: var(--muted); }
.tm-cost { font-weight: 800; color: #fff; }

.tm-desc {
  color: var(--muted);
  font-size: 0.9rem;
  margin: 10px 0 20px;
}

.tm-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.btn-text {
  color: var(--primary-2);
  font-weight: 700;
}

/* Docs */
.docs-grid {
  display: grid;
  gap: 16px;
}

.doc-card {
  background: var(--panel-2);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.doc-icon {
  background: #ff5b6b;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 900;
}

.doc-info {
  flex: 1;
}

.doc-info h4 { margin-bottom: 4px; }
.doc-info span { font-size: 0.8rem; color: var(--muted); }

.btn-download {
  color: var(--primary-2);
  font-weight: 700;
  font-size: 0.9rem;
}

/* Reminders */
.reminders-section {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--line);
}

.reminders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.reminder-item {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  padding: 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.rem-icon { font-size: 1.5rem; }
.rem-info strong { display: block; margin-bottom: 4px; }
.rem-info p { font-size: 0.85rem; color: var(--muted); }

/* Portal Blog Styles */
.portal-blog-section {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid var(--line);
}

.portal-blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.portal-blog-card {
  display: flex;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.portal-blog-card:hover {
  background: rgba(255,255,255,0.05);
  border-color: var(--primary-2);
}

.portal-blog-card img {
  width: 100px;
  height: 100%;
  object-fit: cover;
}

.p-blog-info {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.p-blog-info h4 {
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 8px;
}

.p-read-more {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-2);
  text-transform: uppercase;
}

.loading-state {
  text-align: center;
  padding: 100px 0;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(215, 24, 42, 0.2);
  border-top-color: var(--primary-2);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
.deadlines-section {
  margin-top: 40px;
  padding: 30px;
  background: rgba(255,255,255,0.02);
  border-radius: 20px;
  border: 1px solid var(--line);
}

.deadlines-grid-portal {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.deadline-pill {
  padding: 16px;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.deadline-pill .label { font-size: 0.75rem; font-weight: 800; color: var(--muted); text-transform: uppercase; }
.deadline-pill .value { font-weight: 700; font-size: 1.1rem; }

.deadline-pill.expired { border-left: 4px solid var(--primary); background: rgba(225, 29, 72, 0.05); }
.deadline-pill.expired .value { color: var(--primary-2); }
.deadline-pill.upcoming { border-left: 4px solid #ffc107; background: rgba(255, 193, 7, 0.05); }
.deadline-pill.upcoming .value { color: #ffc107; }
.deadline-pill.ok { border-left: 4px solid #28a745; }

/* ... existing styles ... */
</style>
