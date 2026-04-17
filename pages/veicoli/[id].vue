
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import VehicleCarousel from '~/components/veicoli/VehicleCarousel.vue'

const route = useRoute()
const vehicle = ref(null)
const relatedVehicles = ref([]) 
const relatedPosts = ref([])
const loading = ref(true)
const error = ref(null)

const fetchVehicle = async () => {
  try {
    const res = await $fetch(`/api/veicoli/${route.params.id}`)
    vehicle.value = res.vehicle
    
    // SEO Dinamica
    if (vehicle.value) {
      useHead({
        title: `${vehicle.value.marca} ${vehicle.value.modello} | Pica Caravan`,
        meta: [
          { name: 'description', content: `Scopri ${vehicle.value.marca} ${vehicle.value.modello} presso Pica Caravan a San Nicola la Strada. ${vehicle.value.chilometri || 0} km, anno ${vehicle.value.anno}. Prezzo: ${formatPrice(vehicle.value.prezzo)}.` },
          { property: 'og:title', content: `${vehicle.value.marca} ${vehicle.value.modello} | Pica Caravan` },
          { property: 'og:description', content: `Dettagli e prezzo per ${vehicle.value.marca} ${vehicle.value.modello}. Vieni a trovarci a San Nicola la Strada (CE).` },
          { property: 'og:image', content: formatImages(vehicle.value.immagini)[0] }
        ]
      })
    }
  } catch (err) {
    console.error('Errore nel caricamento del veicolo:', err)
    error.value = 'Impossibile caricare i dettagli di questo veicolo.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchVehicle()
})

const formatPrice = (price) => {
  if (!price) return 'Prezzo su richiesta'
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price)
}

const formatImages = (images) => {
  if (images && Array.isArray(images) && images.length > 0) {
    return images.map(img => {
      const url = typeof img === 'string' ? img : (img?.url || '/logo-pica-caravan.jpg')
      return url.replace('/upload/', '/upload/f_auto,q_auto/')
    })
  }
  return ['https://placehold.co/1200x800/141414/white?text=Pica+Caravan']
}
</script>

<template>
  <div class="moto-detail-page">
    <div class="container py-5">
      <!-- Breadcrumb / Back button -->
      <div class="back-nav mb-5">
        <NuxtLink to="/veicoli" class="btn-back">
          <span class="arrow">←</span> Torna al parco veicoli
        </NuxtLink>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-box">
        <div class="spinner"></div>
        <p>Caricamento dettagli...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-box">
        <p>{{ error }}</p>
        <NuxtLink to="/" class="btn-primary-custom">Torna alla Home</NuxtLink>
      </div>

      <!-- Content -->
      <div v-else-if="vehicle" class="moto-detail-grid">
        <!-- Colonna Sinistra: Carosello -->
        <div class="moto-visuals">
          <VehicleCarousel :images="formatImages(vehicle.immagini)" :altText="`${vehicle.marca} ${vehicle.modello}`" height="500px" />
          
          <div class="moto-description-section mt-5">
            <h3>Descrizione</h3>
            <div class="description-text">
              {{ vehicle.descrizione || 'Nessuna descrizione disponibile per questo veicolo.' }}
            </div>
          </div>
        </div>

        <!-- Colonna Destra: Info & Prezzo -->
        <div class="moto-info-panel">
          <div class="sticky-panel">
            <span class="type-badge">{{ vehicle.categoria }}</span>
            <h1 class="moto-title">{{ vehicle.marca }} {{ vehicle.modello }}</h1>
            <p class="price-tag">{{ formatPrice(vehicle.prezzo) }}</p>
            
            <div class="spec-grid">
              <div class="spec-item">
                <span class="label">Anno</span>
                <span class="value">{{ vehicle.anno || 'N/D' }}</span>
              </div>
              <div class="spec-item">
                <span class="label">Stato</span>
                <span class="value">{{ vehicle.nuovaUsata || 'N/D' }}</span>
              </div>
              <div class="spec-item">
                <span class="label">Condizioni</span>
                <span class="value">{{ vehicle.stato || 'Ottime' }}</span>
              </div>
            </div>

            <div class="cta-actions">
              <NuxtLink :to="{ path: '/', hash: '#contatti' }" class="btn-quote">
                Richiedi Informazioni
              </NuxtLink>
              <a :href="`https://wa.me/390823224038?text=Ciao, vorrei informazioni su ${vehicle.marca} ${vehicle.modello}`" target="_blank" class="btn-whatsapp">
                Chiedi su WhatsApp
              </a>
              <a href="tel:+390823224038" class="btn-call">
                Chiama ora 0823 224038
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.moto-detail-page {
  background: #050505;
  color: #fff;
  min-height: 100vh;
  padding-top: 80px;
}

.back-nav {
  display: flex;
  align-items: center;
}

.btn-back {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #888;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-back .arrow {
  transition: transform 0.3s ease;
}

.btn-back:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-back:hover .arrow {
  transform: translateX(-4px);
}

.moto-detail-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
}

.moto-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin: 10px 0;
}

.price-tag {
  font-size: 2rem;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 30px;
}

.type-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(0, 90, 90, 0.1);
  color: var(--primary-2);
  border-radius: 20px;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  background: #111;
  padding: 20px;
  border-radius: 18px;
  border: 1px solid #222;
}

.spec-item {
  display: flex;
  flex-direction: column;
}

.spec-item .label {
  color: #888;
  font-size: 0.8rem;
  margin-bottom: 4px;
}

.spec-item .value {
  font-weight: 700;
  color: #fff;
}

.description-text {
  color: #ccc;
  line-height: 1.8;
  font-size: 1.1rem;
  white-space: pre-wrap;
}

.moto-description-section h3 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 700;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-quote {
  background: var(--primary);
  color: white;
  text-align: center;
  padding: 16px;
  border-radius: 12px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  cursor: pointer;
}

.btn-quote:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 90, 90, 0.3);
}

.btn-whatsapp {
  background: #25d366;
  color: white;
  text-align: center;
  padding: 16px;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.3s;
}

.btn-call {
  background: #fff;
  color: #000;
  text-align: center;
  padding: 16px;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.3s;
}

.btn-whatsapp:hover, .btn-call:hover {
  opacity: 0.9;
}

.sticky-panel {
  position: sticky;
  top: 100px;
}

.related-posts-section {
  padding-top: 60px;
  border-top: 1px solid var(--line);
}

.section-title {
  font-size: 1.75rem;
  font-weight: 900;
  margin-bottom: 30px;
}

.blog-mini-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.mini-blog-card {
  display: flex;
  gap: 15px;
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 12px;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.mini-blog-card:hover {
  border-color: var(--primary-2);
  transform: translateY(-5px);
}

.mini-blog-card img {
  width: 100px;
  height: 75px;
  object-fit: cover;
  border-radius: 8px;
}

.mini-blog-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mini-badge {
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--primary-2);
  text-transform: uppercase;
  margin-bottom: 4px;
}

.mini-blog-info h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
}

.mini-read-more {
  display: block;
  margin-top: 8px;
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--primary-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.mini-blog-card:hover .mini-read-more {
  opacity: 1;
  transform: translateX(0);
}

.loading-box, .error-box {
  text-align: center;
  padding: 100px 20px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 90, 90, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: spin 1s ease-in-out infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 900px) {
  .moto-detail-grid {
    grid-template-columns: 1fr;
  }
  .sticky-panel {
    position: static;
  }
}
</style>
