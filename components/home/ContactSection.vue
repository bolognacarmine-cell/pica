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
  isSubmitting.value = true
  // Simulazione invio
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  submitted.value = true
  // Reset form dopo un po'
  setTimeout(() => {
    submitted.value = false
    formData.value = { name: '', phone: '', email: '', interest: 'camper', message: '', privacy: false }
  }, 5000)
}
</script>

<template>
<section id="contatti" class="contact-section">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-info">
        <span class="section-kicker">Contattaci</span>
        <h2 class="section-title">Inizia il tuo viaggio con noi</h2>
        <p class="section-description">Siamo a San Nicola la Strada, pronti ad accoglierti e guidarti nella scelta del tuo prossimo camper o roulotte.</p>
        
        <div class="info-items">
          <div class="info-item">
            <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div class="info-content">
              <h4>Indirizzo</h4>
              <p>Via Retella / Pizzo Pilato 2ª Traversa n. 2, 81020 San Nicola la Strada (CE)</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div class="info-content">
              <h4>Telefono</h4>
              <p>0823 224038</p>
            </div>
          </div>
        </div>

        <div class="opening-hours mt-8">
          <h5>Orari di Apertura</h5>
          <div class="hours-grid">
            <span>Lun - Ven:</span>
            <span>09:00 - 13:00, 15:30 - 19:00</span>
            <span>Sabato:</span>
            <span>09:00 - 13:00</span>
            <span>Domenica:</span>
            <span>Chiuso</span>
          </div>
        </div>
      </div>

      <div class="contact-card">
        <div v-if="!submitted" class="contact-form-wrapper">
          <h3 class="card-title">Richiedi Informazioni</h3>
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <input v-model="formData.name" type="text" placeholder="Nome e Cognome" required />
            </div>
            <div class="form-row">
              <div class="form-group">
                <input v-model="formData.phone" type="tel" placeholder="Telefono" required />
              </div>
              <div class="form-group">
                <input v-model="formData.email" type="email" placeholder="Email" required />
              </div>
            </div>
            <div class="form-group">
              <select v-model="formData.interest">
                <option value="camper">Interessato a: Camper</option>
                <option value="roulotte">Interessato a: Roulotte</option>
                <option value="rimessaggio">Interessato a: Rimessaggio</option>
                <option value="assistenza">Interessato a: Assistenza/Riparazioni</option>
              </select>
            </div>
            <div class="form-group">
              <textarea v-model="formData.message" placeholder="Il tuo messaggio" rows="4"></textarea>
            </div>
            <div class="form-group privacy-check">
              <input type="checkbox" id="privacy" v-model="formData.privacy" required />
              <label for="privacy">Accetto la <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></label>
            </div>
            <button type="submit" class="btn-primary-custom w-full" :disabled="isSubmitting">
              {{ isSubmitting ? 'Invio in corso...' : 'Invia Richiesta' }}
            </button>
          </form>
        </div>
        <div v-else class="success-message text-center">
          <div class="success-icon">✅</div>
          <h3>Grazie per averci contattato!</h3>
          <p>La tua richiesta è stata inviata con successo. Ti ricontatteremo al più presto.</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.contact-section {
  padding: 60px 0;
  background: var(--bg);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}

.section-kicker {
  color: var(--primary);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.875rem;
  margin-bottom: 12px;
  display: block;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 24px;
}

.section-description {
  color: var(--muted);
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 48px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.info-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.info-icon {
  width: 48px;
  height: 48px;
  background: rgba(225, 29, 72, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}

.info-content h4 {
  font-size: 1.125rem;
  margin-bottom: 4px;
  color: white;
}

.info-content p {
  color: var(--muted);
}

.contact-card {
  background: var(--panel);
  padding: 60px;
  border-radius: 40px;
  border: 1px solid var(--line);
}

.card-title {
  font-size: 2rem;
  margin-bottom: 16px;
}

.card-text {
  color: var(--muted);
  margin-bottom: 32px;
}

.card-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.opening-hours h5 {
  font-size: 1rem;
  margin-bottom: 16px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hours-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 24px;
  font-size: 0.9375rem;
  color: var(--muted);
}

@media (max-width: 640px) {
  .contact-card {
    padding: 40px 24px;
  }
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 12px 16px;
  color: #fff;
  font-size: 0.95rem;
  transition: all 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.08);
}

.privacy-check {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  color: var(--muted);
}

.privacy-check a {
  color: var(--primary);
  text-decoration: underline;
}

.success-message {
  padding: 40px 20px;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.success-message h3 {
  margin-bottom: 12px;
  color: #fff;
}

.success-message p {
  color: var(--muted);
}

.w-full {
  width: 100%;
}
</style>