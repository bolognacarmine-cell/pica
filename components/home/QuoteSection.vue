<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import { useRoute } from 'vue-router'

const props = defineProps({
  vehicles: { type: Array, default: () => [] }
})

const route = useRoute()
const step = ref(1)
const totalSteps = 4
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const showForm = ref(false)

const form = ref({
  // Sezione Cliente
  nome: '',
  email: '',
  telefono: '',
  citta: '',
  // Sezione Moto
  vehicleId: '',
  marca: '',
  modello: '',
  anno: '',
  tipo: '',
  nuovaUsata: 'nuova',
  // Sezione Preventivo
  metodoAcquisto: 'contanti',
  valutazionePermuta: 'no',
  permutaMarca: '',
  permutaModello: '',
  permutaAnno: '',
  budget: '',
  // Messaggio e Consensi
  messaggio: '',
  privacy: false,
  offerte: false
})

const progress = computed(() => (step.value / totalSteps) * 100)

onMounted(() => {
  // Assicura uno stato pulito al caricamento della pagina
  isSubmitted.value = false
  showForm.value = false
  step.value = 1

  // Controlla se c'è un veicolo pre-selezionato via URL o se si atterra sull'ancora
  const preSelectedId = route.query.veicolo || route.query.moto
  const hash = route.hash
  
  if (preSelectedId) {
    // Se c'è un ID veicolo, aspetta che i veicoli siano caricati
    if (props.vehicles.length) {
      checkPreSelection(preSelectedId)
    }
  } else if (hash === '#preventivo') {
    startQuote()
  }
})

// Osserva quando i veicoli vengono caricati per gestire la pre-selezione iniziale
watch(() => props.vehicles, (newVehicles) => {
  const preSelectedId = route.query.veicolo || route.query.moto
  if (preSelectedId && newVehicles.length && !showForm.value) {
    checkPreSelection(preSelectedId)
  }
}, { immediate: true })

// Osserva cambiamenti nel query param veicolo (per click sulla stessa pagina)
watch(() => route.query.veicolo, (newId) => {
  if (newId && props.vehicles.length) {
    checkPreSelection(newId)
  }
}, { deep: true })

// Osserva cambiamenti nell'hash per aprire il form via ancora
watch(() => route.hash, (newHash) => {
  if (newHash === '#preventivo' && !showForm.value) {
    startQuote()
  }
})

const checkPreSelection = (id) => {
  const vehicle = props.vehicles.find(v => v._id === id || v.slug === id)
  if (vehicle) {
    showForm.value = true
    step.value = 1 // Inizia sempre dallo Step 1 (Dati Personali)
    form.value.vehicleId = vehicle._id
    onVehicleSelect() // Pre-compila i dati della moto in background
    
    // Smooth scroll alla sezione preventivo
    nextTick(() => {
      const el = document.getElementById('preventivo')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    })
  }
}

const startQuote = () => {
  showForm.value = true
  step.value = 1
  // Animazione ingresso form
  nextTick(() => {
    const formEl = document.querySelector('.quote-form')
    gsap.fromTo(formEl, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'all' })
  })
}

const nextStep = () => {
  if (step.value < totalSteps) {
    const currentStepEl = document.querySelector('.form-step')
    gsap.to(currentStepEl, { opacity: 0, x: -20, duration: 0.3, onComplete: () => {
      step.value++
      nextTick(() => {
        const nextStepEl = document.querySelector('.form-step')
        gsap.fromTo(nextStepEl, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.3, clearProps: 'all' })
      })
    }})
  }
}

const prevStep = () => {
  if (step.value > 1) {
    const currentStepEl = document.querySelector('.form-step')
    gsap.to(currentStepEl, { opacity: 0, x: 20, duration: 0.3, onComplete: () => {
      step.value--
      nextTick(() => {
        const prevStepEl = document.querySelector('.form-step')
        gsap.fromTo(prevStepEl, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.3, clearProps: 'all' })
      })
    }})
  }
}

const handleSubmit = async () => {
  if (!form.value.privacy) return alert('Devi accettare la privacy policy.')
  
  isSubmitting.value = true
  try {
    await $fetch('/api/leads', {
      method: 'POST',
      body: form.value
    })
    isSubmitted.value = true
    gsap.fromTo('.success-content', 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out' }
    )
  } catch (err) {
    alert('Errore durante l\'invio. Riprova più tardi.')
  } finally {
    isSubmitting.value = false
  }
}

const onVehicleSelect = () => {
  const vehicle = props.vehicles.find(v => v._id === form.value.vehicleId)
  if (vehicle) {
    form.value.marca = vehicle.marca
    form.value.modello = vehicle.modello
    form.value.anno = vehicle.annoImmatricolazione || ''
    form.value.tipo = vehicle.tipo
    form.value.nuovaUsata = vehicle.nuovaUsata || 'usata'
  }
}

const marche = ['Hymer', 'Bürstner', 'Carthago', 'Carado', 'Laika', 'Rimor', 'Roller Team', 'Elnagh', 'McLouis', 'Mobilvetta', 'Altro']
const tipi = ['Motorhome', 'Profilato', 'Mansardato', 'Van/Camper puro', 'Roulotte', 'Container', 'Street Food']
</script>

<template>
  <section id="preventivo" class="quote-section section">
    <div class="container">
      <div class="quote-card" :class="{ 'is-submitted': isSubmitted }">
        
        <!-- 1. Feedback Successo -->
        <div v-if="isSubmitted" class="success-content">
          <div class="success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
          </div>
          <h3>Richiesta inviata!</h3>
          <p>Grazie per averci scelto. Un nostro consulente ti contatterà entro 24 ore per fornirti il miglior preventivo possibile.</p>
          <button @click="isSubmitted = false; showForm = false; step = 1" class="btn btn-secondary">
            Invia un'altra richiesta
          </button>
        </div>

        <!-- 2. Form Multi-step -->
        <form v-else-if="showForm" @submit.prevent="handleSubmit" class="quote-form">
          
          <!-- Progress Bar -->
          <div class="progress-container">
            <div class="progress-bar-bg">
              <div class="progress-bar" :style="{ width: progress + '%' }"></div>
            </div>
            <div class="steps-info">Step {{ step }} di {{ totalSteps }}</div>
          </div>
          
          <!-- STEP 1: Dati Personali -->
          <div v-if="step === 1" class="form-step">
            <div class="step-header">
              <span class="step-number">01</span>
              <h3>Parlaci di te</h3>
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label>Nome e Cognome *</label>
                <input v-model="form.nome" type="text" placeholder="Mario Rossi" class="form-input" required />
              </div>
              <div class="form-group">
                <label>Email *</label>
                <input v-model="form.email" type="email" placeholder="mario.rossi@esempio.it" class="form-input" required />
              </div>
              <div class="form-group">
                <label>Telefono *</label>
                <input v-model="form.telefono" type="tel" placeholder="333 1234567" class="form-input" required />
              </div>
              <div class="form-group">
                <label>Città</label>
                <input v-model="form.citta" type="text" placeholder="Caserta" class="form-input" />
              </div>
            </div>
          </div>

          <!-- STEP 2: Il Veicolo -->
          <div v-if="step === 2" class="form-step">
            <div class="step-header">
              <span class="step-number">02</span>
              <h3>Il veicolo dei tuoi sogni</h3>
            </div>
            <div class="form-grid">
              <div class="form-group full-width" v-if="props.vehicles.length">
                <label>Seleziona un veicolo dal catalogo (Opzionale)</label>
                <select v-model="form.vehicleId" @change="onVehicleSelect" class="form-select">
                  <option value="">-- Seleziona --</option>
                  <option v-for="v in props.vehicles" :key="v._id" :value="v._id">
                    {{ v.marca }} {{ v.modello }} ({{ v.annoImmatricolazione || 'N/D' }})
                  </option>
                </select>
                <p class="help-text">Oppure inserisci i dettagli manualmente sotto.</p>
              </div>

              <div class="form-group">
                <label>Marca</label>
                <select v-model="form.marca" class="form-select">
                  <option value="">Seleziona marca</option>
                  <option v-for="m in marche" :key="m" :value="m">{{ m }}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Modello</label>
                <input v-model="form.modello" type="text" placeholder="Es: B-Class MasterLine" class="form-input" />
              </div>
              <div class="form-group">
                <label>Tipo di veicolo</label>
                <select v-model="form.tipo" class="form-select">
                  <option value="">Seleziona tipo</option>
                  <option v-for="t in tipi" :key="t" :value="t">{{ t }}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Stato veicolo</label>
                <div class="radio-options">
                  <label class="radio-label">
                    <input type="radio" v-model="form.nuovaUsata" value="nuova" class="radio-input" />
                    <span>Nuova</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" v-model="form.nuovaUsata" value="usata" class="radio-input" />
                    <span>Usata</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- STEP 3: Dettagli Acquisto -->
          <div v-if="step === 3" class="form-step">
            <div class="step-header">
              <span class="step-number">03</span>
              <h3>Metodo di acquisto</h3>
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label>Come preferisci pagare?</label>
                <select v-model="form.metodoAcquisto" class="form-select">
                  <option value="contanti">Contanti / Bonifico</option>
                  <option value="finanziamento">Finanziamento</option>
                  <option value="leasing">Leasing</option>
                </select>
              </div>
              <div class="form-group">
                <label>Hai una permuta?</label>
                <div class="radio-options">
                  <label class="radio-label">
                    <input type="radio" v-model="form.valutazionePermuta" value="si" class="radio-input" />
                    <span>Sì</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" v-model="form.valutazionePermuta" value="no" class="radio-input" />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <template v-if="form.valutazionePermuta === 'si'">
                <div class="form-group">
                  <label>Tuo veicolo (Marca e Modello)</label>
                  <input v-model="form.permutaModello" type="text" placeholder="Es: Rimor Seal 5" class="form-input" />
                </div>
                <div class="form-group">
                  <label>Anno</label>
                  <input v-model="form.permutaAnno" type="number" placeholder="2020" class="form-input" />
                </div>
              </template>
            </div>
          </div>

          <!-- STEP 4: Messaggio e Invio -->
          <div v-if="step === 4" class="form-step">
            <div class="step-header">
              <span class="step-number">04</span>
              <h3>Ultimi dettagli</h3>
            </div>
            <div class="form-group">
              <label>Il tuo messaggio (opzionale)</label>
              <textarea v-model="form.messaggio" placeholder="Scrivi qui eventuali richieste extra..." class="form-textarea"></textarea>
            </div>
            <div class="consensi">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.privacy" class="checkbox-input" required />
                <span>Accetto la <NuxtLink to="/privacy-policy" target="_blank" class="link">Privacy Policy</NuxtLink> (GDPR) *</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.offerte" class="checkbox-input" />
                <span>Voglio ricevere promozioni e offerte speciali</span>
              </label>
            </div>
          </div>

          <!-- Navigazione Form -->
          <div class="form-nav">
            <button v-if="step > 1" type="button" @click="prevStep" class="btn btn-secondary">
              Indietro
            </button>
            <button v-if="step < totalSteps" type="button" @click="nextStep" class="btn btn-primary">
              Avanti
            </button>
            <button v-if="step === totalSteps" type="submit" class="btn btn-primary btn-lg" :disabled="isSubmitting">
              {{ isSubmitting ? 'Invio in corso...' : 'Invia Richiesta' }}
            </button>
          </div>
        </form>

        <!-- 3. Header Iniziale -->
        <div v-else class="quote-header">
          <div class="header-content">
            <span class="section-kicker">Richiedi Preventivo</span>
            <h2 class="section-title">Personalizza la tua offerta</h2>
            <p class="section-subtitle">Compila il form e ricevi una proposta su misura entro 24 ore.</p>
            <button @click="startQuote" class="btn btn-primary btn-lg">
              Richiedi Preventivo
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Quote Section */
.quote-section {
  background: var(--bg);
  position: relative;
  z-index: 10;
}

.quote-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-3xl);
  padding: var(--space-4xl);
  box-shadow: var(--shadow-xl);
  transition: all var(--transition-base);
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  overflow: visible;
  z-index: 11;
}

/* Quote Header */
.quote-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.header-content {
  max-width: 600px;
  margin: 0 auto;
}

/* Progress Container */
.progress-container {
  margin-bottom: var(--space-3xl);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.progress-bar-bg {
  height: 6px;
  background: var(--line);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--space-sm);
}

.progress-bar {
  height: 100%;
  background: var(--primary-gradient);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.steps-info {
  font-size: var(--text-sm);
  color: var(--text-muted);
  font-weight: 600;
  text-align: center;
}

/* Form Styles */
.quote-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
}

.form-step {
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.step-header {
  margin-bottom: var(--space-2xl);
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.step-number {
  font-size: var(--text-2xl);
  font-weight: 900;
  color: var(--primary);
  opacity: 0.5;
}

.step-header h3 {
  font-size: var(--text-xl);
  font-weight: 800;
  color: var(--text-primary);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--text-primary);
}

.form-input,
.form-select,
.form-textarea {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: var(--space-md) var(--space-lg);
  color: var(--text-primary);
  font-size: var(--text-base);
  font-weight: 500;
  transition: all var(--transition-base);
  -webkit-appearance: none;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: var(--surface-elevated);
  box-shadow: 0 0 0 3px var(--primary-glow);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-muted);
}

.form-textarea {
  resize: none;
  min-height: 120px;
  font-family: inherit;
}

.help-text {
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-top: var(--space-xs);
}

/* Radio Options */
.radio-options {
  display: flex;
  gap: var(--space-lg);
  margin-top: var(--space-sm);
}

.radio-label {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  cursor: pointer;
  color: var(--text-primary);
  transition: color var(--transition-base);
  font-weight: 600;
}

.radio-label:hover {
  color: var(--primary);
}

.radio-input {
  width: 20px;
  height: 20px;
  accent-color: var(--primary);
  cursor: pointer;
}

/* Checkbox Options */
.consensi {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-lg);
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  cursor: pointer;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.4;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  accent-color: var(--primary);
  cursor: pointer;
  margin-top: 2px;
}

.link {
  color: var(--primary);
  text-decoration: none;
  transition: color var(--transition-base);
}

.link:hover {
  text-decoration: underline;
}

/* Form Navigation */
.form-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
  margin-top: var(--space-3xl);
  padding-top: var(--space-2xl);
  border-top: 1px solid var(--line);
}

/* Success State */
.success-content {
  text-align: center;
  padding: var(--space-4xl) 0;
}

.success-icon {
  background: var(--success);
  color: var(--text-inverse);
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-xl);
}

.success-content h3 {
  font-size: var(--text-3xl);
  font-weight: 900;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.success-content p {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-2xl);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .quote-card {
    padding: var(--space-3xl);
  }
}

@media (max-width: 768px) {
  .quote-card {
    padding: var(--space-2xl);
    border-radius: var(--radius-2xl);
  }
  
  .form-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
  
  .radio-options {
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .form-nav {
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .form-nav .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .quote-card {
    padding: var(--space-lg);
  }
  
  .step-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }
}
</style>
