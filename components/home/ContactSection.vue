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
  <section id="contatti" class="contact-section py-24 md:py-32 bg-gray-50 dark:bg-[#030303] overflow-hidden relative">
    <div class="container relative z-10">
      <div class="contact-grid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        <!-- Info Column -->
        <div class="lg:col-span-5 flex flex-col justify-center">
          <div class="mb-12">
            <span class="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 inline-block">Contatti & Sede</span>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-8 dark:text-white uppercase tracking-tighter leading-none">
              Vieni a <br><span class="text-primary italic">Trovarci</span>
            </h2>
            <p class="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-medium">
              Siamo a San Nicola la Strada, pronti ad accoglierti e guidarti nella scelta del tuo prossimo camper o roulotte.
            </p>
          </div>
          
          <div class="space-y-6">
            <!-- Address -->
            <div class="group p-6 bg-white dark:bg-white/5 rounded-xl border border-transparent hover:border-primary/20 transition-all duration-500 flex items-start gap-6">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 class="text-sm font-black dark:text-white uppercase tracking-widest mb-2">Sede Operativa</h4>
                <p class="text-sm text-gray-400 leading-relaxed">Via Retella / Pizzo Pilato 2ª Traversa n. 2<br>81020 San Nicola la Strada (CE)</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="group p-6 bg-white dark:bg-white/5 rounded-xl border border-transparent hover:border-primary/20 transition-all duration-500 flex items-start gap-6">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493-1.498A1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/></svg>
              </div>
              <div>
                <h4 class="text-sm font-black dark:text-white uppercase tracking-widest mb-2">Supporto Diretto</h4>
                <p class="text-sm text-gray-400 leading-relaxed">333 2327592 (Antimo Pica)<br>0823 224038 (Showroom)</p>
              </div>
            </div>

            <!-- Hours -->
            <div class="group p-6 bg-white dark:bg-white/5 rounded-xl border border-transparent hover:border-primary/20 transition-all duration-500 flex items-start gap-6">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 class="text-sm font-black dark:text-white uppercase tracking-widest mb-2">Orari di Apertura</h4>
                <p class="text-sm text-gray-400 leading-relaxed">Lun - Ven: 09:00-13:00 / 15:30-19:30<br>Sabato: 09:00-13:30</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="lg:col-span-7">
          <div class="contact-form-card bg-white dark:bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div v-if="!submitted" class="relative z-10">
              <h3 class="text-3xl font-black mb-10 dark:text-white uppercase tracking-tighter">Inviaci un <span class="text-primary">Messaggio</span></h3>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input v-model="formData.name" type="text" placeholder="Nome Completo" class="w-full bg-gray-50 dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-xl py-4 px-6 text-sm text-white outline-none transition-all" required />
                  <input v-model="formData.phone" type="tel" placeholder="Telefono" class="w-full bg-gray-50 dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-2xl py-4 px-6 text-sm text-white outline-none transition-all" required />
                </div>
                <input v-model="formData.email" type="email" placeholder="Email" class="w-full bg-gray-50 dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-2xl py-4 px-6 text-sm text-white outline-none transition-all" required />
                <div class="relative">
                  <select v-model="formData.interest" class="w-full bg-gray-50 dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-2xl py-4 px-6 text-sm text-white outline-none transition-all appearance-none">
                    <option value="camper">Interesse: Camper</option>
                    <option value="roulotte">Interesse: Roulotte</option>
                    <option value="rimessaggio">Interesse: Rimessaggio</option>
                    <option value="assistenza">Interesse: Assistenza</option>
                  </select>
                  <svg class="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                </div>
                <textarea v-model="formData.message" placeholder="Come possiamo aiutarti?" rows="4" class="w-full bg-gray-50 dark:bg-white/5 border border-transparent focus:border-primary/50 rounded-2xl py-4 px-6 text-sm text-white outline-none transition-all resize-none"></textarea>
                
                <div class="flex items-center gap-3">
                  <input type="checkbox" id="privacy" v-model="formData.privacy" class="w-4 h-4 accent-primary" required />
                  <label for="privacy" class="text-xs text-gray-400">Accetto il trattamento dei dati personali secondo la <NuxtLink to="/privacy-policy" class="text-primary hover:underline">Privacy Policy</NuxtLink></label>
                </div>
                
                <button type="submit" class="w-full py-5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:bg-black transition-all duration-500" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Invio in corso...' : 'Invia Messaggio' }}
                </button>
              </form>
            </div>
            
            <!-- Success State -->
            <div v-else class="relative z-10 text-center py-20">
              <div class="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 class="text-3xl font-black mb-4 dark:text-white uppercase tracking-tighter">Messaggio <span class="text-primary">Inviato</span></h3>
              <p class="text-gray-400 mb-10">Grazie! Ti risponderemo entro 24 ore lavorative.</p>
              <button @click="submitted = false" class="text-xs font-black text-primary uppercase tracking-widest hover:underline">Invia un altro messaggio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Contact Section */
.contact-section {
  background: var(--bg);
  position: relative;
  overflow: hidden;
}

.contact-background {
  position: absolute;
  top: 0;
  right: 0;
  width: 33%;
  height: 100%;
  background: var(--primary-gradient);
  opacity: 0.05;
  transform: skewX(-12deg) translateX(50%);
  pointer-events: none;
}

.bg-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, var(--primary) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, var(--secondary) 0%, transparent 50%);
  opacity: 0.03;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: start;
  position: relative;
  z-index: 2;
}

/* Info Column */
.contact-info {
  position: sticky;
  top: var(--space-4xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-lg);
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  background: var(--surface);
  border: 1px solid var(--line);
  transition: all var(--transition-base);
  min-height: 120px;
}

.info-item:hover {
  background: var(--surface-elevated);
  border-color: var(--line-elevated);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}

.info-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: rgba(255, 107, 53, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  transition: all var(--transition-base);
}

.info-item:hover .info-icon {
  background: var(--primary);
  color: white;
  transform: scale(1.05);
}

.info-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  justify-content: center;
}

.info-content h4 {
  font-size: var(--text-lg);
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.01em;
}

.info-content p {
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0;
}

.info-content br {
  display: block;
  height: 0.25em;
  content: '';
}

/* Form Container */
.contact-form-container {
  position: relative;
}

.contact-form-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-3xl);
  padding: var(--space-3xl);
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;
}

.form-title {
  font-size: var(--text-3xl);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: var(--space-2xl);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-row {
  display: flex;
  gap: var(--space-lg);
}

.form-row.grid-2 {
  grid-template-columns: 1fr 1fr;
  display: grid;
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-input,
.form-textarea,
.form-select {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  padding: var(--space-lg) var(--space-xl);
  color: var(--text-primary);
  font-size: var(--text-base);
  font-weight: 500;
  transition: all var(--transition-base);
  -webkit--webkit-appearance: none;
  appearance: none;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
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

.select-wrapper {
  position: relative;
}

.select-arrow {
  position: absolute;
  right: var(--space-xl);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
  transition: color var(--transition-base);
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  padding: var(--space-md) 0;
}

.checkbox-input {
  width: 24px;
  height: 24px;
  accent-color: var(--primary);
  border-radius: var(--radius-md);
  cursor: pointer;
  margin-top: 2px;
}

.checkbox-label {
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  line-height: 1.4;
  cursor: pointer;
}

/* Success State */
.success-content {
  text-align: center;
  padding: var(--space-4xl) 0;
}

.success-icon {
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary);
  width: 96px;
  height: 96px;
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-xl);
  transform: scale(1.1);
}

.success-title {
  font-size: var(--text-4xl);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: var(--space-lg);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.success-message {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-2xl);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }
  
  .contact-info {
    position: static;
  }
}

/* Showroom Styles */
.contact-showroom {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.showroom-header {
  text-align: left;
}

.showroom-header .section-kicker {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary);
  margin-bottom: var(--space-md);
}

.showroom-header .section-title {
  font-size: var(--text-3xl);
  font-weight: 900;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  letter-spacing: -0.02em;
}

.showroom-header .section-subtitle {
  font-size: var(--text-lg);
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0;
  max-width: 500px;
}

.showroom-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.gallery-item {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 4/3;
  background: var(--surface);
  border: 1px solid var(--line);
  transition: all var(--transition-base);
}

.gallery-item:hover {
  border-color: var(--primary);
  box-shadow: 0 15px 35px -10px rgba(255, 107, 53, 0.2);
  transform: translateY(-2px);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-base);
}

.gallery-item:hover .gallery-img {
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }
  
  .contact-info {
    position: static;
  }
}

@media (max-width: 768px) {
  .form-row.grid-2 {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
  
  .contact-form-card {
    padding: var(--space-2xl);
  }
  
  .form-title {
    font-size: var(--text-2xl);
  }
  
  .info-item {
    flex-direction: column;
    text-align: center;
    gap: var(--space-md);
  }
  
  .info-icon {
    margin: 0 auto;
  }
  
  .showroom-header .section-title {
    font-size: var(--text-2xl);
  }
  
  .showroom-gallery {
    gap: var(--space-md);
  }
}
</style>
