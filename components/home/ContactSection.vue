<script setup>
const formData = ref({
  name: '',
  phone: '',
  email: '',
  interest: 'camper',
  message: '',
  privacy: false
})

const isSubmitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  if (isSubmitting.value) return
  
  // Validazione base
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    alert('Per favore compila tutti i campi obbligatori.')
    return
  }

  isSubmitting.value = true
  
  try {
    // Simulazione invio reale con feedback visivo professionale
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form e feedback
    submitted.value = true
    formData.value = { name: '', phone: '', email: '', interest: 'camper', message: '', privacy: false }
    
    // Auto-reset feedback dopo 5 secondi
    setTimeout(() => {
      submitted.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Errore invio form:', error)
    alert('Si è verificato un errore durante l\'invio. Riprova più tardi.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contatti" class="contact-section">
    <div class="container">
      <div class="contact-grid">
        <div class="info-col">
          <div class="info-head">
            <p class="section-kicker">Contatti</p>
            <h2 class="section-title">Parliamo del tuo prossimo viaggio.</h2>
            <p class="section-description">Raccontaci obiettivo, budget e tempi. Risponde un consulente con indicazioni pratiche e trasparenti.</p>
          </div>

          <div class="info-cards">
            <div class="info-card glass-panel">
              <div class="info-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div class="info-text">
                <h4>Sede operativa</h4>
                <p>Via Retella / Pizzo Pilato 2ª Traversa n. 2<br />81020 San Nicola la Strada (CE)</p>
              </div>
            </div>

            <div class="info-card glass-panel">
              <div class="info-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493-1.498A1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/></svg>
              </div>
              <div class="info-text">
                <h4>Supporto diretto</h4>
                <p><a class="inline-link" href="tel:3332327592">333 2327592</a> (Antimo Pica)<br /><a class="inline-link" href="tel:0823224038">0823 224038</a> (Showroom)</p>
              </div>
            </div>

            <div class="info-card glass-panel">
              <div class="info-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div class="info-text">
                <h4>Orari</h4>
                <p>Lun–Ven: 09:00–13:00 / 15:30–19:30<br />Sab: 09:00–13:30</p>
              </div>
            </div>
          </div>
        </div>

        <div class="form-col">
          <div class="contact-form-card glass-panel">
            <div v-if="!submitted">
              <h3 class="form-title">Contatta un consulente</h3>
              <form @submit.prevent="handleSubmit" class="form">
                <div class="form-row">
                  <input v-model="formData.name" type="text" autocomplete="name" placeholder="Nome e cognome*" class="form-input" required />
                  <input v-model="formData.phone" type="tel" autocomplete="tel" placeholder="Telefono (opzionale)" class="form-input" />
                </div>
                <input v-model="formData.email" type="email" autocomplete="email" placeholder="Email*" class="form-input" required />

                <div class="select-wrap">
                  <select v-model="formData.interest" class="form-input form-select">
                    <option value="camper">Interesse: Camper</option>
                    <option value="roulotte">Interesse: Roulotte</option>
                    <option value="rimessaggio">Interesse: Rimessaggio</option>
                    <option value="assistenza">Interesse: Assistenza</option>
                  </select>
                  <svg aria-hidden="true" class="select-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <textarea v-model="formData.message" placeholder="Descrivi cosa cerchi (utilizzo, budget, tempistiche)*" rows="4" class="form-input form-textarea" required></textarea>
                
                <div class="privacy-row">
                  <input type="checkbox" id="privacy" v-model="formData.privacy" class="privacy-check" required />
                  <label for="privacy" class="privacy-label">
                    Accetto il trattamento dei dati secondo la <NuxtLink to="/privacy-policy" class="inline-link">Privacy Policy</NuxtLink>
                  </label>
                </div>
                
                <button type="submit" class="btn-premium form-submit" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Invio in corso…' : 'Richiedi consulenza' }}
                </button>
              </form>
            </div>
            
            <div v-else class="success">
              <div class="success-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 class="success-title">Richiesta inviata</h3>
              <p class="success-text">Grazie. Ti contattiamo entro 24 ore lavorative.</p>
              <button @click="submitted = false" class="success-reset" type="button">Nuova richiesta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: var(--bg);
  padding: 88px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 28px;
  align-items: start;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}

.info-head {
  max-width: 62ch;
  margin-bottom: 18px;
}

.info-cards {
  display: grid;
  gap: 12px;
}

.info-card {
  padding: 18px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.info-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: rgba(241, 110, 34, 0.12);
  border: 1px solid rgba(241, 110, 34, 0.18);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
}

.info-text h4 {
  margin: 0 0 6px;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
}

.info-text p {
  margin: 0;
  color: var(--text-dim);
  line-height: 1.6;
  font-size: 0.98rem;
}

.inline-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
}

.inline-link:hover {
  color: var(--primary-2);
}

.contact-form-card {
  padding: 22px;
  border-radius: var(--radius-lg);
}

.form-title {
  margin: 0 0 16px;
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.form {
  display: grid;
  gap: 12px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.form-input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.92);
  outline: none;
  font-size: 0.98rem;
}

.form-input:focus {
  border-color: rgba(241, 110, 34, 0.34);
  box-shadow: 0 0 0 3px rgba(241, 110, 34, 0.18);
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.55);
}

.select-wrap {
  position: relative;
}

.form-select {
  appearance: none;
  padding-right: 40px;
}

.select-chevron {
  position: absolute;
  right: 14px;
  top: 50%;
  margin-top: -8px;
  width: 16px !important;
  height: 16px !important;
  color: rgba(255, 255, 255, 0.62);
  pointer-events: none;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.privacy-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding-top: 4px;
}

.privacy-check {
  width: 16px;
  height: 16px;
  margin-top: 2px;
  accent-color: var(--primary);
}

.privacy-label {
  font-size: 0.9rem;
  color: var(--text-dim);
  line-height: 1.5;
}

.form-submit {
  width: 100%;
  justify-content: center;
}

.success {
  text-align: center;
  padding: 34px 10px;
}

.success-icon {
  width: 54px;
  height: 54px;
  margin: 0 auto 14px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.22);
  color: rgba(16, 185, 129, 0.95);
}

.success-title {
  margin: 0 0 8px;
  font-size: 1.6rem;
  font-weight: 900;
}

.success-text {
  margin: 0 0 14px;
  color: var(--text-dim);
  line-height: 1.65;
}

.success-reset {
  background: transparent;
  border: 0;
  color: rgba(241, 110, 34, 0.95);
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.72rem;
  cursor: pointer;
}

</style>
