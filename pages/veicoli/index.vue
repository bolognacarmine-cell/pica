
<script setup>
import { ref, onMounted } from 'vue'
import FeaturedVehicles from '~/components/home/FeaturedVehicles.vue'

const vehicles = ref([])
const loading = ref(true)
const error = ref(false)

const fetchVehicles = async () => {
  try {
    const res = await $fetch('/api/veicoli')
    vehicles.value = Array.isArray(res.vehicles) ? res.vehicles : []
  } catch (e) {
    console.error('Errore nel caricamento del catalogo:', e)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchVehicles()
})

useHead({
  title: 'Parco Veicoli | Pica Caravan',
  meta: [
    { name: 'description', content: 'Sfoglia il nostro catalogo completo di camper e roulotte nuovi e usati a San Nicola la Strada (CE).' }
  ]
})
</script>

<template>
  <div class="vehicles-page section">
    <!-- Hero Section Parco Veicoli -->
    <div class="vehicles-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Parco Veicoli Premium</h1>
          <p class="hero-subtitle">Scopri la nostra selezione esclusiva di camper e roulotte nuovi e usati</p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">{{ vehicles.length }}+</span>
              <span class="stat-label">Veicoli Disponibili</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label">Anni Esperienza</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Garanzia Qualità</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>Caricamento veicoli...</p>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <div class="error-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 12v.01"/></svg>
        </div>
        <h3>Errore nel caricamento</h3>
        <p>Impossibile caricare il catalogo veicoli. Riprova più tardi.</p>
        <button @click="fetchVehicles" class="btn btn-primary">
          Riprova
        </button>
      </div>
      
      <!-- Vehicles Grid -->
      <FeaturedVehicles v-else :vehicles="vehicles" />
      
      <!-- CTA Section -->
      <div v-if="!loading && !error && vehicles.length" class="vehicles-cta">
        <div class="cta-content">
          <h2 class="cta-title">Non trovi quello che cerchi?</h2>
          <p class="cta-subtitle">Contattaci per trovare il veicolo perfetto per le tue esigenze</p>
          <div class="cta-actions">
            <a href="tel:3332327592" class="btn btn-primary btn-lg">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18"/></svg>
              Chiama Ora
            </a>
            <NuxtLink to="#contatti" class="btn btn-secondary btn-lg">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0l7.89 5.26v9.48L12 20l-7.89-5.26V8z"/></svg>
              Richiedi Consulenza
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Vehicles Page */
.vehicles-page {
  background: var(--bg);
  min-height: 100vh;
}

/* Vehicles Hero */
.vehicles-hero {
  position: relative;
  height: 70vh;
  background: url('https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=85&w=1920');
  background-size: cover;
  background-position: center 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

@media (max-width: 768px) {
  .vehicles-hero {
    height: 50vh;
    background-position: center 40%;
  }
}

@media (max-width: 480px) {
  .vehicles-hero {
    height: 45vh;
  }
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 2;
  position: relative;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
  line-height: 1.05;
  max-width: 800px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }
}

.hero-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.5;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .hero-subtitle {
    font-size: clamp(0.9rem, 4vw, 1.1rem);
    margin-bottom: 1.5rem;
  }
}

.hero-stats {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .hero-stats {
    gap: 1rem;
    margin-top: 1.5rem;
  }
}

.stat-item {
  text-align: center;
  padding: 1.25rem 1.5rem;
  background: #0a0a0a;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  min-width: 140px;
}

@media (max-width: 768px) {
  .stat-item {
    padding: 1rem 1.25rem;
    min-width: 120px;
  }
}

.stat-number {
  display: block;
  font-size: var(--text-3xl);
  font-weight: 900;
  color: var(--primary);
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Vehicles CTA */
.vehicles-cta {
  background: var(--surface);
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  margin-top: 3rem;
  text-align: center;
  border: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}

.vehicles-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary);
}

@media (max-width: 768px) {
  .vehicles-cta {
    padding: 2rem 1.5rem;
    margin-top: 2rem;
  }
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: var(--text-2xl);
  font-weight: 800;
  margin-bottom: var(--space-md);
  color: var(--text-primary);
}

.cta-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: var(--space-lg);
  justify-content: center;
  flex-wrap: wrap;
}

/* Loading State */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-4xl) 0;
  text-align: center;
}

.loading-state p {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  font-weight: 500;
}

/* Error State */
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-4xl) 0;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.error-icon {
  background: rgba(239, 68, 68, 0.1);
  color: var(--error);
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-xl);
}

.error-state h3 {
  font-size: var(--text-xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.error-state p {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-xl);
}
</style>
