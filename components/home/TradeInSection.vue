
<script setup>
import { ref, nextTick } from 'vue'

const form = ref({
  nome: '',
  email: '',
  telefono: '',
  citta: '',
  marca: '',
  modello: '',
  versione: '',
  anno: '',
  km: '',
  cilindrata: '',
  alimentazione: '',
  targa: '',
  colore: '',
  proprietari: '',
  stato: '',
  incidentato: 'no',
  tagliandi: 'no',
  revisione: 'no',
  accessori: '',
  descrizione: '',
  difetti: '',
  prezzoDesiderato: '',
  motoInteresse: '',
  privacy: false
})

const submitted = ref(false)
const showForm = ref(false)
const loading = ref(false)
const imagesBase64 = ref({})

const toggleForm = () => {
  showForm.value = true
  nextTick(() => {
    const el = document.querySelector('.trade-form-container')
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
  })
}

const handleFileUpload = (event, type) => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    imagesBase64.value[type] = e.target.result
  }
  reader.readAsDataURL(file)
}

const submitForm = async () => {
  loading.value = true
  try {
    const payload = {
      ...form.value,
      imagesBase64: Object.values(imagesBase64.value)
    }

    const res = await $fetch('/api/trade-ins', {
      method: 'POST',
      body: payload
    })

    if (res.success) {
      submitted.value = true
    }
  } catch (err) {
    console.error('Errore invio permuta:', err)
    alert('Si è verificato un errore durante l\'invio. Riprova più tardi.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="usato" class="trade-section">
    <div class="container">
      <div class="trade-card">
        <div class="trade-content">
          <p class="section-kicker">Consulenza</p>
          <h2 class="section-title">Trova il mezzo perfetto per te</h2>
          <p class="section-description">Scegliere un camper o una roulotte è un passo importante. Che tu stia cercando la tua prima casa su ruote o voglia permutare il tuo usato, siamo qui per guidarti.</p>
          
          <ul class="benefits-list">
            <li>
              <span class="benefit-icon glass-panel">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </span>
              <div><strong>Camper per Famiglia:</strong> Soluzioni spaziose e sicure per viaggiare con i tuoi cari.</div>
            </li>
            <li>
              <span class="benefit-icon glass-panel">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              </span>
              <div><strong>Roulotte per Vacanza:</strong> La libertà del campeggio con tutti i comfort di casa.</div>
            </li>
            <li>
              <span class="benefit-icon glass-panel">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </span>
              <div><strong>Usato Garantito:</strong> Ogni mezzo viene sottoposto a rigorosi controlli tecnici.</div>
            </li>
            <li>
              <span class="benefit-icon glass-panel">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </span>
              <div><strong>Assistenza Certificata:</strong> Service autorizzato VIESA, THETFORD e WEBASTO.</div>
            </li>
          </ul>

          <div class="trade-actions mt-8">
            <a href="#contatti" class="btn-premium">
              Richiedi una Consulenza
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>

        <div class="trade-visual">
          <div class="visual-placeholder">
            <img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800" alt="Consulenza Camper" class="trade-img" />
            <div class="visual-overlay"></div>
            <div class="floating-badge">
              <span class="number">100%</span>
              <span class="label">Supporto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trade-section {
  padding: 120px 0;
  background: var(--bg);
}

.trade-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: var(--panel);
  border-radius: var(--radius-xl);
  border: 1px solid var(--line);
  overflow: hidden;
  align-items: stretch;
}

@media (max-width: 1024px) {
  .trade-card {
    grid-template-columns: 1fr;
  }
}

.trade-content {
  padding: 80px;
}

@media (max-width: 640px) {
  .trade-content {
    padding: 48px 24px;
  }
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 950;
  margin-bottom: 24px;
  line-height: 1.05;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

.section-description {
  color: var(--text-dim);
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 48px;
}

.benefits-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.benefits-list li {
  display: flex;
  gap: 16px;
  align-items: center;
  color: var(--text-dim);
  font-size: 1.05rem;
  line-height: 1.5;
}

.benefits-list li strong {
  color: #fff;
  font-weight: 800;
}

.benefit-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--primary-glow) !important;
  color: var(--primary);
  border: 1px solid var(--primary) !important;
  flex-shrink: 0;
}

.trade-visual {
  position: relative;
  min-height: 500px;
}

.visual-placeholder {
  height: 100%;
  position: relative;
}

.trade-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.visual-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--panel);
}

@media (max-width: 1024px) {
  .visual-overlay {
    background: var(--panel);
  }
}

.floating-badge {
  position: absolute;
  bottom: 40px;
  right: 40px;
  background: var(--primary);
  color: white;
  padding: 24px 32px;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 20px 40px var(--primary-glow);
}

.floating-badge .number {
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.02em;
}

.floating-badge .label {
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.2em;
  margin-top: 4px;
}
</style>
