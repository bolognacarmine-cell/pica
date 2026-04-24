<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { gsap } from 'gsap'
import { useRoute, useRouter } from 'vue-router'
import VehicleCarousel from '~/components/veicoli/VehicleCarousel.vue'

const route = useRoute()
const router = useRouter()
const isVeicoliPage = computed(() => route.path === '/veicoli')

const props = defineProps({
  vehicles: { type: Array, default: () => [] }
})

const activeFilter = ref('tutti')
const activeCategory = ref('tutte')
const maxKm = ref(null)
const sortBy = ref('recente')
const localSearchQuery = ref('')

// Computed: categorie uniche dai veicoli caricate nel database
const dynamicCategories = computed(() => {
  const cats = props.vehicles
    .map(m => m.categoria)
    .filter(Boolean)
    .filter((value, index, self) => self.indexOf(value) === index)
  return cats.sort()
})

// Inizializza stato da hash URL
const initializeFromHash = () => {
  const hash = route.hash.replace('#', '')
  if (hash && ['tutti', 'nuovo', 'usato', 'promozioni'].includes(hash)) {
    activeFilter.value = hash
  }
}

// Sincronizza stato con hash URL
const syncHashWithFilter = () => {
  const currentHash = route.hash.replace('#', '')
  const targetHash = activeFilter.value === 'tutti' ? '' : `#${activeFilter.value}`
  
  if (currentHash !== activeFilter.value) {
    router.replace({ hash: targetHash })
  }
}

// Watch per sincronizzare hash quando cambia filtro
watch(activeFilter, syncHashWithFilter)

// Watch per sincronizzare filtro quando cambia hash
watch(() => route.hash, (newHash) => {
  const hash = newHash.replace('#', '')
  if (hash && ['tutti', 'nuovo', 'usato', 'promozioni'].includes(hash)) {
    activeFilter.value = hash
  } else if (!hash) {
    activeFilter.value = 'tutti'
  }
})

// Computed: veicoli filtrati
const featuredMotos = computed(() => {
  if (!props.vehicles || !Array.isArray(props.vehicles)) return []
  
  // Filtriamo subito i veicoli non visibili
  let filtered = props.vehicles.filter(m => m.isVisible !== false)
  
  // 0. Filtro per ricerca globale (Header)
  const query = (localSearchQuery.value || '').toString().toLowerCase().trim()
  if (query) {
    filtered = filtered.filter(m => 
      `${m.marca || ''} ${m.modello || ''} ${m.categoria || ''}`.toLowerCase().includes(query)
    )
  }

  // 1. Filtro per stato (nuovo/usato/promozione)
  const filterVal = (activeFilter.value || 'tutti').toLowerCase()
  
  if (filterVal === 'nuovo') {
    filtered = filtered.filter(m => 
      (m.nuovaUsata || '').toLowerCase().includes('nuov') || 
      (m.stato || '').toLowerCase().includes('nuov')
    )
  } else if (filterVal === 'usato') {
    filtered = filtered.filter(m => 
      (m.nuovaUsata || '').toLowerCase().includes('usat') || 
      (m.stato || '').toLowerCase().includes('usat')
    )
  } else if (filterVal === 'promozioni') {
    filtered = filtered.filter(m => 
      (m.nuovaUsata || '').toLowerCase().includes('promozion') || 
      m.isPromotion || m.prezzoScontato || m.offerta === true
    )
  } else if (filterVal === 'venduto') {
    filtered = filtered.filter(m => 
      (m.nuovaUsata || '').toLowerCase().includes('vendut') || 
      (m.stato || '').toLowerCase().includes('vendut')
    )
  }

  // 2. Filtro per categoria locale (Select)
  if (activeCategory.value !== 'tutte') {
    filtered = filtered.filter(m => m.categoria === activeCategory.value)
  }

  // 3. Filtro per chilometri (solo per usati o se specificato)
  if (maxKm.value !== null) {
    filtered = filtered.filter(m => {
      // Se è nuovo i km sono 0, quindi passano sempre il filtro
      const km = m.chilometri || 0
      return km <= maxKm.value
    })
  }

  // 4. Ordinamento
  filtered.sort((a, b) => {
    if (sortBy.value === 'alfabetico') {
      const nameA = `${a.marca} ${a.modello}`.toLowerCase()
      const nameB = `${b.marca} ${b.modello}`.toLowerCase()
      return nameA.localeCompare(nameB)
    } else if (sortBy.value === 'anno') {
      const yearA = a.annoImmatricolazione || a.anno || 0
      const yearB = b.annoImmatricolazione || b.anno || 0
      return yearB - yearA // Dal più recente
    } else if (sortBy.value === 'prezzo_asc') {
      return (a.prezzo || 0) - (b.prezzo || 0)
    } else {
      // Default: più recenti inseriti (se disponibile createdAt) o ID
      return (b._id > a._id) ? 1 : -1
    }
  })
  
  return filtered.slice(0, 12)
})

const formatPrice = (price) => {
  if (!price) return 'Prezzo su richiesta'
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price)
}

const formatYear = (moto) => moto.annoImmatricolazione || moto.anno || 'N/D'

const formatImages = (moto) => {
  if (moto?.immagini && Array.isArray(moto.immagini) && moto.immagini.length > 0) {
    return moto.immagini.map(img => {
      const url = typeof img === 'string' ? img : (img?.url || '/images/placeholder-vehicle.jpg')
      return url.replace('/upload/', '/upload/f_auto,q_auto/')
    })
  }
  // Placeholder professionale con logo per veicoli senza immagini
  return ['/logo-pica.png']
}

// Animazioni GSAP
let ctx

const animateCards = () => {
  if (!process.client) return
  if (ctx) ctx.revert()
  ctx = gsap.context(() => {
    // Animazione slide-in da sinistra per veicoli
    const cards = document.querySelectorAll('.vehicle-card')
    if (cards.length > 0) {
      gsap.fromTo(cards, 
        { translateX: -50, opacity: 0 },
        { 
          translateX: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          delay: 0.2, 
          ease: 'power2.out',
          clearProps: 'transform'
        }
      )
    }
  })
}

// Watch per riattivare l'animazione quando cambiano i veicoli filtrati
watch([featuredMotos, activeFilter, activeCategory, sortBy, localSearchQuery], () => {
  if (process.client) {
    nextTick(() => {
      animateCards()
    })
  }
}, { deep: true })

onMounted(async () => {
  if (process.client) {
    await nextTick()
    initializeFromHash()
    animateCards()
  }
})

onUnmounted(() => {
  if (process.client && ctx) ctx.revert()
})
</script>

<template>
  <section id="veicoli" class="featured-section section">
    <div class="container">
      <div class="section-header">
        <div class="section-content">
          <span class="section-kicker">Showroom</span>
          <h2 class="section-title">Parco Camper e Roulotte</h2>
          <p class="section-subtitle">Esplora la nostra selezione di camper e roulotte pronti per il tuo prossimo viaggio.</p>
        </div>
        
        <!-- Premium Search Bar -->
        <div class="search-container">
          <div class="search-wrapper">
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              v-model="localSearchQuery"
              type="text" 
              placeholder="Cerca camper o roulotte..." 
              class="search-input"
            />
          </div>
        </div>
      </div>

      <!-- Filtri Premium -->
      <div class="filters-section">
        <div class="filter-tabs" role="tablist" aria-label="Filtri veicoli">
          <button 
            v-for="filter in [
              { key: 'tutti', label: 'Tutti', count: props.vehicles.filter(m => m.isVisible !== false).length },
              { key: 'nuovo', label: 'Nuovo', icon: 'star', count: props.vehicles.filter(m => m.isVisible !== false && ((m.nuovaUsata || '').toLowerCase().includes('nuov') || (m.stato || '').toLowerCase().includes('nuov'))).length },
              { key: 'usato', label: 'Usato', icon: 'check', count: props.vehicles.filter(m => m.isVisible !== false && ((m.nuovaUsata || '').toLowerCase().includes('usat') || (m.stato || '').toLowerCase().includes('usat'))).length },
              { key: 'promozioni', label: 'Offerte', icon: 'tag', count: props.vehicles.filter(m => m.isVisible !== false && ((m.nuovaUsata || '').toLowerCase().includes('promozion') || m.isPromotion || m.prezzoScontato)).length }
            ]" 
            :key="filter.key"
            @click="activeFilter = filter.key"
            @keydown.enter="activeFilter = filter.key"
            @keydown.space.prevent="activeFilter = filter.key"
            :class="['filter-tab', { active: activeFilter === filter.key }]"
            :id="`filter-${filter.key}`"
            role="tab"
            :aria-selected="activeFilter === filter.key"
            :aria-controls="`vehicles-panel-${filter.key}`"
            :tabindex="activeFilter === filter.key ? 0 : -1"
          >
            <span class="filter-label">{{ filter.label }}</span>
            <span class="filter-count">{{ filter.count }}</span>
          </button>
        </div>

        <div class="secondary-filters">
          <select v-model="activeCategory" class="filter-select" v-if="dynamicCategories.length">
            <option value="tutte">Tutte le categorie</option>
            <option v-for="cat in dynamicCategories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
          
          <select v-model="sortBy" class="filter-select">
            <option value="recente">Ultimi arrivi</option>
            <option value="alfabetico">A-Z</option>
            <option value="anno">Anno</option>
            <option value="prezzo_asc">Prezzo</option>
          </select>
        </div>
      </div>

      <!-- Grid Veicoli -->
      <div v-if="!props.vehicles.length" class="empty-state">
        <div class="empty-content">
          <svg class="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
            <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 104 0m6 0a2 2 0 104 0m-4 0a2 2 0 104 0"/>
          </svg>
          <h3>Nessun veicolo disponibile</h3>
          <p>Contattaci per scoprire le prossime disponibilità</p>
        </div>
      </div>

      <div v-else class="vehicles-grid grid-3" :id="`vehicles-panel-${activeFilter}`" role="tabpanel" :aria-labelledby="`filter-${activeFilter}`">
        <article v-for="vehicle in featuredMotos" :key="vehicle._id" class="vehicle-card group bg-white dark:bg-white/5 rounded-xl overflow-hidden border border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
          <div class="vehicle-image-wrapper relative h-[280px] overflow-hidden">
            <VehicleCarousel :images="formatImages(vehicle)" :altText="`${vehicle.categoria} ${vehicle.marca} ${vehicle.modello}`" height="280px" />
            
            <!-- Sold Stamp -->
            <div v-if="vehicle.stato === 'venduto' || vehicle.nuovaUsata?.toLowerCase().includes('venduto')" class="sold-stamp absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              VENDUTO
            </div>
            
            <!-- Premium Badge stato -->
            <div class="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <span v-if="vehicle.nuovaUsata === 'nuova' || vehicle.stato === 'nuovo'" class="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">Nuovo</span>
              <span v-else-if="vehicle.nuovaUsata === 'usata' || vehicle.stato === 'usato'" class="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg border border-white/20">Usato</span>
              <span v-if="vehicle.isPromotion || vehicle.prezzoScontato" class="px-3 py-1 bg-accent text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">Offerta</span>
            </div>
            
            <!-- Price Tag -->
            <div class="absolute bottom-4 right-4 z-10">
              <div class="px-4 py-2 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                <span class="text-primary font-black text-lg">{{ formatPrice(vehicle.prezzo) }}</span>
              </div>
            </div>
          </div>

          <div class="vehicle-content p-8">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold text-primary uppercase tracking-[0.2em]">{{ vehicle.marca || 'Veicolo' }}</span>
              <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">{{ vehicle.categoria }}</span>
            </div>
            
            <h3 class="text-2xl font-black mb-6 dark:text-white uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">{{ vehicle.modello || 'Modello disponibile' }}</h3>
            
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-white/5 rounded-2xl">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                <div class="flex flex-col">
                  <span class="text-[10px] text-gray-400 font-bold uppercase">Anno</span>
                  <span class="text-xs font-black dark:text-white">{{ formatYear(vehicle) }}</span>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-white/5 rounded-2xl">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                <div class="flex flex-col">
                  <span class="text-[10px] text-gray-400 font-bold uppercase">KM</span>
                  <span class="text-xs font-black dark:text-white">{{ vehicle.chilometri?.toLocaleString('it-IT') || '0' }}</span>
                </div>
              </div>
            </div>

            <NuxtLink :to="`/veicoli/${vehicle.slug || vehicle._id}`" class="w-full py-4 bg-gray-900 dark:bg-white/10 text-white text-[11px] font-black rounded-2xl uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2 group/btn">
              Vedi Dettagli
              <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- CTA Section -->
      <div v-if="!isVeicoliPage" class="section-cta">
        <NuxtLink to="/veicoli" class="btn btn-primary btn-lg btn-icon">
          Vedi tutto il parco veicoli
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Featured Vehicles Section */
.featured-section {
  background: var(--bg);
  position: relative;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-2xl);
  margin-bottom: var(--space-2xl);
  flex-wrap: wrap;
}

.section-content {
  flex: 1;
  min-width: 300px;
}

/* Search Container */
.search-container {
  width: 100%;
  max-width: 400px;
}

.search-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: var(--space-lg);
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--text-muted);
  transition: color var(--transition-base);
}

.search-input {
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-full);
  padding: var(--space-md) var(--space-xl) var(--space-md) 52px;
  color: var(--text-primary);
  font-size: var(--text-sm);
  font-weight: 500;
  transition: all var(--transition-base);
  appearance: none;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  background: var(--surface-elevated);
  box-shadow: 0 0 0 3px var(--primary-glow);
}

.search-input:focus + .search-icon {
  color: var(--primary);
}

/* Filters Section */
.filters-section {
  margin-bottom: var(--space-3xl);
}

.filter-tabs {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
  flex-wrap: wrap;
}

.filter-tab {
  background: var(--surface);
  border: 1px solid var(--line);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-weight: 600;
  font-size: var(--text-sm);
}

.filter-tab:hover {
  background: var(--surface-elevated);
  border-color: var(--line-elevated);
  transform: translateY(-1px);
}

.filter-tab.active {
  background: var(--primary-gradient);
  border-color: transparent;
  color: var(--text-inverse);
  box-shadow: var(--shadow-primary);
}

.filter-label {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.filter-count {
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 800;
  min-width: 20px;
  text-align: center;
}

.filter-tab.active .filter-count {
  background: rgba(255, 255, 255, 0.3);
  color: var(--text-inverse);
}

.secondary-filters {
  display: flex;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.filter-select {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: var(--space-sm) var(--space-lg);
  color: var(--text-primary);
  font-weight: 600;
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  min-width: 180px;
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-glow);
}

.filter-select option {
  background: var(--surface-elevated);
  color: var(--text-primary);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: var(--space-4xl) var(--space-xl);
  background: var(--surface);
  border-radius: var(--radius-xl);
  border: 2px dashed var(--line);
}

.empty-content {
  max-width: 400px;
  margin: 0 auto;
}

.empty-icon {
  color: var(--text-muted);
  margin-bottom: var(--space-lg);
}

.empty-content h3 {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-md);
  color: var(--text-primary);
}

.empty-content p {
  color: var(--text-muted);
  font-size: var(--text-sm);
}

/* Vehicle Cards */
.vehicles-grid {
  margin-bottom: var(--space-3xl);
}

.vehicle-card {
  overflow: hidden;
  transition: all var(--transition-base);
}

.vehicle-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.vehicle-image {
  position: relative;
  overflow: hidden;
  height: 280px;
}

.vehicle-badges {
  position: absolute;
  top: var(--space-md);
  left: var(--space-md);
  display: flex;
  gap: var(--space-sm);
  z-index: 2;
}

.badge {
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-new {
  background: var(--success);
  color: var(--text-inverse);
}

.badge-used {
  background: var(--surface-elevated);
  color: var(--text-primary);
  border: 1px solid var(--line);
}

.badge-promo {
  background: var(--warning);
  color: var(--text-inverse);
}

.vehicle-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
  backdrop-filter: blur(4px);
}

.vehicle-card:hover .vehicle-overlay {
  opacity: 1;
}

.vehicle-content {
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: grayscale(0.5);
}

.sold-stamp {
  color: #ff3e3e;
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  padding: 10px 30px;
  border: 8px solid #ff3e3e;
  border-radius: 12px;
  transform: rotate(-20deg);
  opacity: 0.9;
  letter-spacing: 4px;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 0 0 4px rgba(255, 62, 62, 0.2);
  text-shadow: 0 0 10px rgba(0,0,0,0.3);
  position: relative;
}

.sold-stamp::after {
  content: "VENDUTO";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: rgba(255, 62, 62, 0.1);
  transform: translate(2px, 2px);
  z-index: -1;
}

@media (max-width: 414px) {
  .sold-stamp {
    font-size: 1.8rem;
    border-width: 6px;
    padding: 8px 20px;
  }
}

.secondary-filters-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .secondary-filters-row {
    flex-direction: column;
    gap: 12px;
  }
  .filter-select {
    min-width: 100%;
  }
}

.premium-select {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 20px;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

.premium-select:focus {
  border-color: var(--primary-2);
  background: rgba(255, 255, 255, 0.08);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

@media (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .featured-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.filter-label {
  font-size: 0.875rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
}

.filter-tabs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-select {
  padding: 10px 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--line);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  outline: none;
}

.filter-select:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--primary-2);
}

.filter-select option {
  background: #111;
  color: #fff;
}

.filter-btn {
  padding: 10px 24px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  color: var(--muted);
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.filter-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  box-shadow: 0 10px 20px -5px rgba(225, 29, 72, 0.4);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.moto-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  display: flex;
  flex-direction: column;
}

.moto-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6);
}

.card-visual {
  position: relative;
  overflow: hidden;
}

.card-overlay-actions {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
  z-index: 5;
}

.moto-card:hover .card-overlay-actions {
  opacity: 1;
}

.btn-view-quick {
  background: #fff;
  color: #000;
  padding: 12px 32px;
  border-radius: 100px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.moto-card:hover .btn-view-quick {
  transform: translateY(0);
}

.card-badges-top {
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 6;
}

.badge-status-card {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.badge-status-card.new {
  background: var(--primary);
}

.badge-status-card.used {
  background: #333;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.badge-status-card.sold {
  background: #dc3545; /* Red for Sold */
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.4);
}

.badge-promo-card {
  background: #f59e0b;
  color: white;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.moto-body {
  padding: 28px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.moto-header-main {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
}

.brand-tag {
  color: var(--primary-2);
  font-weight: 900;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
}

.category-tag {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  font-weight: 600;
}

.moto-title-display {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 24px;
  color: #fff;
  line-height: 1.2;
}

.moto-spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

@media (max-width: 400px) {
  .moto-spec-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}

.spec-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.spec-icon {
  font-size: 1.2rem;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.spec-value {
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
}

.moto-footer-premium {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.price-display-wrapper {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.main-price {
  font-size: 1.4rem;
  font-weight: 950;
  color: #fff;
}

.btn-quote-minimal {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 800;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.btn-quote-minimal:hover {
  background: var(--primary);
  border-color: var(--primary);
  transform: scale(1.05);
}

.state-box {
  text-align: center;
  padding: 60px 20px;
  background: var(--panel);
  border-radius: var(--radius);
  color: var(--muted);
  border: 1px dashed var(--line);
}

.moto-footer a:hover {
  color: #fff;
}

.section-footer {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.btn-read-more-section {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  color: #fff;
  border-radius: 100px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-read-more-section:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--primary-2);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.mt-5 { margin-top: 3rem; }
@media (max-width: 480px) {
  .action-links {
    flex-direction: column;
    align-items: stretch;
  }
  .btn-quote-mini {
    text-align: center;
  }
}
.section-footer-actions {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.section-footer-actions .btn-primary-custom {
  gap: 12px;
}

.section-footer-actions svg {
  width: 20px;
  height: 20px;
}
</style>