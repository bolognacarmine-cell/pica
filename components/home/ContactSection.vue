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
              La nostra sede a San Nicola la Strata è pronta ad accoglierti. Ti guidiamo nella scelta del camper perfetto con consulenza dedicata.
            </p>
          </div>
          
          <div class="space-y-6">
            <!-- Address -->
            <div class="p-6 bg-white dark:bg-[#0b0b0b] rounded-xl border border-primary/20 flex items-start gap-6">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 class="text-sm font-black dark:text-white uppercase tracking-widest mb-2">Sede Operativa</h4>
                <p class="text-sm text-gray-400 leading-relaxed">Via Retella / Pizzo Pilato 2ª Traversa n. 2<br>81020 San Nicola la Strada (CE)</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="p-6 bg-white dark:bg-[#0b0b0b] rounded-xl border border-primary/20 flex items-start gap-6">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493-1.498A1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/></svg>
              </div>
              <div>
                <h4 class="text-sm font-black dark:text-white uppercase tracking-widest mb-2">Supporto Diretto</h4>
                <p class="text-sm text-gray-400 leading-relaxed">333 2327592 (Antimo Pica)<br>0823 224038 (Showroom)</p>
              </div>
            </div>

            <!-- Hours -->
            <div class="p-6 bg-white dark:bg-[#0b0b0b] rounded-xl border border-primary/20 flex items-start gap-6">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
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
          <div class="contact-form-card bg-white dark:bg-[#0b0b0b] rounded-2xl p-8 md:p-12 border border-primary/20 relative">
            <div v-if="!submitted" class="relative z-10">
              <h3 class="text-3xl font-black mb-10 dark:text-white uppercase tracking-tighter">Contatta un <span class="text-primary">Consulente</span></h3>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input v-model="formData.name" type="text" placeholder="Nome e Cognome" class="w-full bg-gray-50 dark:bg-[#111] border border-primary/20 focus:border-primary rounded-xl py-4 px-6 text-sm text-gray-900 dark:text-white outline-none" required />
                  <input v-model="formData.phone" type="tel" placeholder="Telefono" class="w-full bg-gray-50 dark:bg-[#111] border border-primary/20 focus:border-primary rounded-2xl py-4 px-6 text-sm text-gray-900 dark:text-white outline-none" required />
                </div>
                <input v-model="formData.email" type="email" placeholder="Email" class="w-full bg-gray-50 dark:bg-[#111] border border-primary/20 focus:border-primary rounded-2xl py-4 px-6 text-sm text-gray-900 dark:text-white outline-none" required />
                <div class="relative">
                  <select v-model="formData.interest" class="w-full bg-gray-50 dark:bg-[#111] border border-primary/20 focus:border-primary rounded-2xl py-4 px-6 text-sm text-gray-900 dark:text-white outline-none appearance-none">
                    <option value="camper">Interesse: Camper</option>
                    <option value="roulotte">Interesse: Roulotte</option>
                    <option value="rimessaggio">Interesse: Rimessaggio</option>
                    <option value="assistenza">Interesse: Assistenza</option>
                  </select>
                  <svg aria-hidden="true" class="select-chevron absolute right-6 top-1/2 -mt-2 w-4 h-4 text-slate-500 dark:text-white/60 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <textarea v-model="formData.message" placeholder="Descrivi le tue necessità" rows="4" class="w-full bg-gray-50 dark:bg-[#111] border border-primary/20 focus:border-primary rounded-2xl py-4 px-6 text-sm text-gray-900 dark:text-white outline-none resize-none"></textarea>
                
                <div class="flex items-center gap-3">
                  <input type="checkbox" id="privacy" v-model="formData.privacy" class="w-4 h-4 accent-primary" required />
                  <label for="privacy" class="text-xs text-gray-400">Accetto il trattamento dei dati personali secondo la <NuxtLink to="/privacy-policy" class="text-primary">Privacy Policy</NuxtLink></label>
                </div>
                
                <button type="submit" class="w-full py-5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-2xl" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Invio in corso...' : 'Parla con un Esperto' }}
                </button>
              </form>
            </div>
            
            <!-- Success State -->
            <div v-else class="relative z-10 text-center py-20">
              <div class="w-20 h-20 bg-gray-100 dark:bg-[#111] text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 class="text-3xl font-black mb-4 dark:text-white uppercase tracking-tighter">Richiesta <span class="text-primary">Inviata</span></h3>
              <p class="text-gray-400 mb-10">Grazie per la tua fiducia. Un nostro consulente ti contatterà entro 24 ore lavorative.</p>
              <button @click="submitted = false" class="text-xs font-black text-primary uppercase tracking-widest">Nuova Richiesta</button>
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
  position: relative;
  overflow: hidden;
}

.select-chevron {
  width: 16px !important;
  height: 16px !important;
}
</style>
