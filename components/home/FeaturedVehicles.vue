<script setup>
import { ref, computed, watch } from 'vue'
import { useSearch } from '~/composables/useSearch'
import { useFilter } from '~/composables/useFilter'
import VehicleCarousel from '~/components/veicoli/VehicleCarousel.vue'

// Props: veicoli dinamici e filtri
import { useRoute } from '#app'

const route = useRoute()
const isVeicoliPage = computed(() => route.path === '/veicoli')

const props = defineProps({
  vehicles: { type: Array, default: () => [] }
})

// Stato globale della ricerca
const { searchQuery, setSearchQuery } = useSearch()
const { activeFilter } = useFilter()
const localSearchQuery = ref(searchQuery.value)

// Sincronizza l'input locale con lo stato globale
watch(localSearchQuery, (newVal) => {
  setSearchQuery(newVal)
})

// Sincronizza lo stato globale con l'input locale (se resettato altrove)
watch(searchQuery, (newVal) => {
  if (newVal !== localSearchQuery.value) {
    localSearchQuery.value = newVal
  }
})

// Stato filtro attivo
const activeCategory = ref('tutte')
const maxKm = ref(null) // Nuovo: filtro chilometri
const sortBy = ref('recente') // Nuovo: ordinamento (recente, alfabetico, anno)

// Computed: categorie uniche dai veicoli caricate nel database
const dynamicCategories = computed(() => {
  const cats = props.vehicles
    .map(m => m.categoria)
    .filter(c => c && c !== '')
  return [...new Set(cats)].sort()
})

// Computed: veicoli filtrati
const featuredMotos = computed(() => {
  if (!props.vehicles || !Array.isArray(props.vehicles)) return []
  
  // Filtriamo subito i veicoli non visibili
  let filtered = props.vehicles.filter(m => m.isVisible !== false)
  
  // 0. Filtro per ricerca globale (Header)
  const query = (searchQuery.value || '').toString().toLowerCase().trim()
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
      const url = typeof img === 'string' ? img : (img?.url || '/logo-pica-caravan.jpg')
      return url.replace('/upload/', '/upload/f_auto,q_auto/')
    })
  }
  return ['https://images.unsplash.com/photo-1517030330234-94c4fa948ec3?q=80&w=2070']
}

</script>

<template>
  <section id="veicoli" class="featured-section">
    <div class="container">
      <div class="section-heading-row">
        <div class="heading-left">
          <p class="section-kicker">Showroom</p>
          <h2 class="section-title">Parco Camper e Roulotte</h2>
          <p class="section-description">Esplora la nostra selezione di camper e roulotte pronti per il tuo prossimo viaggio.</p>
        </div>
        
        <!-- Premium Search Bar Integrata -->
        <div class="search-bar-container">
          <div class="search-wrapper glass-panel">
            <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
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

      <div class="section-filters-only">
        <!-- Filtri Veicoli Premium - Grandi e Ben Visibili -->
        <div class="main-filter-tabs">
          <button 
            @click="activeFilter = 'tutti'"
            :class="{ active: activeFilter === 'tutti' }"
            class="main-tab-btn"
          >
            <span class="tab-label">TUTTI</span>
            <span class="tab-count">{{ props.vehicles.filter(m => m.isVisible !== false).length }}</span>
          </button>
          
          <button 
            @click="activeFilter = 'nuovo'"
            :class="{ active: activeFilter === 'nuovo' }"
            class="main-tab-btn"
          >
            <span class="tab-icon">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"/></svg>
            </span>
            <span class="tab-label">NUOVO</span>
            <span class="tab-count">
              {{ props.vehicles.filter(m => m.isVisible !== false && ((m.nuovaUsata || '').toLowerCase().includes('nuov') || (m.stato || '').toLowerCase().includes('nuov'))).length }}
            </span>
          </button>

          <button 
            @click="activeFilter = 'usato'"
            :class="{ active: activeFilter === 'usato' }"
            class="main-tab-btn"
          >
            <span class="tab-icon">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </span>
            <span class="tab-label">USATO</span>
            <span class="tab-count">
              {{ props.vehicles.filter(m => m.isVisible !== false && ((m.nuovaUsata || '').toLowerCase().includes('usat') || (m.stato || '').toLowerCase().includes('usat'))).length }}
            </span>
          </button>

          <button 
            @click="activeFilter = 'promozioni'"
            :class="{ active: activeFilter === 'promozioni' }"
            class="main-tab-btn promo-tab"
          >
            <span class="tab-icon">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14l-2.879 2.121z"/></svg>
            </span>
            <span class="tab-label">OFFERTE</span>
            <span class="tab-count">
              {{ props.vehicles.filter(m => m.isVisible !== false && ((m.nuovaUsata || '').toLowerCase().includes('promozion') || m.isPromotion || m.prezzoScontato)).length }}
            </span>
          </button>

          <button 
            @click="activeFilter = 'venduto'"
            :class="{ active: activeFilter === 'venduto' }"
            class="main-tab-btn sold-tab"
          >
            <span class="tab-icon">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </span>
            <span class="tab-label">VENDUTO</span>
            <span class="tab-count">
              {{ props.vehicles.filter(m => m.isVisible !== false && ((m.nuovaUsata || '').toLowerCase().includes('vendut') || (m.stato || '').toLowerCase().includes('vendut'))).length }}
            </span>
          </button>
        </div>

        <div class="secondary-filters-row">
          <div v-if="dynamicCategories.length" class="filter-group">
            <select v-model="activeCategory" class="premium-select">
              <option value="tutte">Tutte le Categorie</option>
              <option v-for="cat in dynamicCategories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>

          <div v-if="activeFilter === 'usato' || activeFilter === 'tutti'" class="filter-group">
            <select v-model="maxKm" class="premium-select">
              <option :value="null">Qualsiasi Chilometraggio</option>
              <option :value="5000">Fino a 5.000 km</option>
              <option :value="10000">Fino a 10.000 km</option>
              <option :value="20000">Fino a 20.000 km</option>
              <option :value="50000">Fino a 50.000 km</option>
            </select>
          </div>

          <div class="filter-group">
            <select v-model="sortBy" class="premium-select">
              <option value="recente">Ultimi Arrivi</option>
              <option value="alfabetico">Marca e Modello (A-Z)</option>
              <option value="anno">Anno (Più Recente)</option>
              <option value="prezzo_asc">Prezzo (Crescente)</option>
            </select>
          </div>
        </div>
      </div>

      <div v-if="!props.vehicles.length" class="state-box glass-panel">Nessun veicolo disponibile.</div>

      <div v-else class="featured-grid">
        <article v-for="moto in featuredMotos" :key="moto._id" class="moto-card glass-panel">
          <div class="card-visual">
            <VehicleCarousel :images="formatImages(moto)" :altText="`${moto.categoria} ${moto.marca} ${moto.modello} in vendita a San Nicola la Strada`" height="260px" />
             <div class="card-overlay-actions">
                <NuxtLink :to="`/veicoli/${moto.slug || moto._id}`" class="btn-secondary-glass">Dettagli</NuxtLink>
            </div>
            <div class="card-badges-top">
              <div v-if="moto.nuovaUsata === 'nuova' || moto.stato === 'nuovo'" class="badge-status-card new">NUOVO</div>
              <div v-else-if="moto.nuovaUsata === 'usata' || moto.stato === 'usato'" class="badge-status-card used">USATO</div>
              <div v-else-if="moto.nuovaUsata === 'venduta' || (moto.stato || '').toLowerCase().includes('vendut')" class="badge-status-card sold">VENDUTO</div>
              <div v-if="moto.nuovaUsata === 'promozione' || moto.isPromotion || moto.prezzoScontato || moto.offerta === true" class="badge-promo-card">PROMO</div>
            </div>
            
            <!-- Timbro Venduto -->
            <div v-if="moto.nuovaUsata === 'venduta' || (moto.stato || '').toLowerCase().includes('vendut')" class="sold-stamp-wrapper">
              <div class="sold-stamp">VENDUTO</div>
            </div>
          </div>

          <div class="moto-body">
            <div class="moto-header-main">
              <span class="brand-tag">{{ moto.marca || 'Veicolo' }}</span>
              <span class="category-tag" v-if="moto.categoria">{{ moto.categoria }}</span>
            </div>
            
            <h3 class="moto-title-display">{{ moto.modello || 'Modello disponibile' }}</h3>
            
            <div class="moto-spec-grid">
              <div class="spec-item">
                <span class="spec-icon">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </span>
                <span class="spec-value">{{ formatYear(moto) }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-icon">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                </span>
                <span class="spec-value">{{ moto.chilometri?.toLocaleString('it-IT') || '0' }} km</span>
              </div>
              <div class="spec-item">
                <span class="spec-icon">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                </span>
                <span class="spec-value">{{ moto.alimentazione || 'N/D' }}</span>
              </div>
            </div>

            <div class="moto-footer-premium">
              <div class="price-display-wrapper">
                <span class="price-label">Prezzo</span>
                <strong class="main-price">{{ formatPrice(moto.prezzo) }}</strong>
              </div>
              <NuxtLink :to="{ path: '/', query: { moto: moto._id }, hash: '#preventivo' }" class="btn-quote-minimal">
                <span class="icon">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                Preventivo
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <div v-if="!isVeicoliPage" class="section-footer-actions">
        <NuxtLink to="/veicoli" class="btn-premium">
          <span>Vedi Tutto il Parco Veicoli</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-section {
  padding: 88px 0;
  background: var(--bg);
  position: relative;
  z-index: 2;
  margin-top: 0;
}

.section-heading-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .section-heading-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 32px;
  }
}

.heading-left {
  flex: 1;
  min-width: 300px;
}

/* --- Search Bar Style --- */
.search-bar-container {
  width: 100%;
  max-width: 450px;
}

@media (max-width: 768px) {
  .search-bar-container {
    max-width: 100%;
    margin-top: 10px;
  }
}

.search-wrapper {
  position: relative;
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.search-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  margin-top: -9px;
  width: 18px;
  height: 18px;
  color: var(--text-dim);
  z-index: 1;
}

.search-input {
  width: 100%;
  background: transparent;
  border: none;
  padding: 14px 18px 14px 52px;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  -webkit-appearance: none;
  appearance: none;
}

.search-input:focus {
  outline: none;
}

.search-wrapper:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(241, 110, 34, 0.18);
}

.search-wrapper:focus-within .search-icon {
  color: var(--primary);
}

/* --- Filter Section Premium --- */
.section-filters-only {
  margin-bottom: 60px;
}

@media (max-width: 768px) {
  .section-filters-only {
    margin-bottom: 40px;
  }
}

.section-description {
  color: var(--text-dim);
  font-size: 1.05rem;
  margin-top: 8px;
  max-width: 62ch;
}

.main-filter-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 4px 4px 12px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.main-filter-tabs::-webkit-scrollbar {
  display: none;
}

.main-tab-btn {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 12px 18px;
  border-radius: var(--radius-lg);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;
}

.main-tab-btn.active {
  background: rgba(241, 110, 34, 0.12);
  border-color: rgba(241, 110, 34, 0.34);
}

.main-tab-btn.active .tab-label,
.main-tab-btn.active .tab-count,
.main-tab-btn.active .tab-icon {
  color: rgba(241, 110, 34, 0.98);
}

.tab-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tab-label {
  font-weight: 900;
  letter-spacing: 0.16em;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.72);
  text-transform: uppercase;
}

.main-tab-btn.active .tab-label {
  color: rgba(241, 110, 34, 0.98);
}

.tab-count {
  background: rgba(255, 255, 255, 0.07);
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.82);
}

.main-tab-btn.active .tab-count {
  background: var(--primary);
  color: #fff;
}

.promo-tab.active {
  border-color: rgba(245, 158, 11, 0.42);
}

.sold-tab.active {
  border-color: rgba(156, 163, 175, 0.4);
}

/* --- Sold Stamp Style --- */
.sold-stamp-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 10;
  background: rgba(0, 0, 0, 0.35);
}

.sold-stamp {
  color: #ff3e3e;
  font-size: 2.1rem;
  font-weight: 900;
  text-transform: uppercase;
  padding: 10px 22px;
  border: 4px solid #ff3e3e;
  border-radius: 14px;
  letter-spacing: 0.24em;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 0 0 3px rgba(255, 62, 62, 0.16);
  position: relative;
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
  border-radius: var(--radius-md);
  padding: 12px 20px;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;
}

.premium-select:focus {
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(241, 110, 34, 0.18);
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

.moto-card {
  position: relative;
  height: 100%;
}

.card-visual {
  position: relative;
  overflow: hidden;
}

.card-overlay-actions {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 5;
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
  border-radius: var(--radius-sm);
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.badge-status-card.new {
  background: var(--primary);
}

.badge-status-card.used {
  background: #333;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.badge-status-card.sold {
  background: #dc3545;
}

.badge-promo-card {
  background: #f59e0b;
  color: white;
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.moto-body {
  padding: 24px;
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
  color: var(--primary);
  font-weight: 900;
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
}

.category-tag {
  color: var(--text-dim);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.moto-title-display {
  font-size: 1.45rem;
  font-weight: 900;
  margin: 10px 0 18px;
  color: #fff;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.moto-spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 32px;
  padding: 20px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
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
  gap: 6px;
}

.spec-icon {
  color: var(--primary);
}

.spec-value {
  font-size: 0.85rem;
  font-weight: 750;
  color: var(--text);
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
  font-size: 1.75rem;
  font-weight: 950;
  color: #fff;
  letter-spacing: -0.02em;
}

.btn-quote-minimal {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.04);
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 900;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.state-box {
  text-align: center;
  padding: 60px 20px;
  background: var(--panel);
  border-radius: var(--radius-xl);
  color: var(--text-dim);
  border: 1px dashed var(--line);
}

.section-footer-actions {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.section-footer-actions svg {
  width: 20px;
  height: 20px;
}
</style>
