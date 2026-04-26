<script setup>
import { ref } from 'vue'

const showGdpr = ref(false)
const showInfo = ref(false)

const toggleGdpr = () => {
  showGdpr.value = !showGdpr.value
}

const toggleInfo = () => {
  showInfo.value = !showInfo.value
}

</script>

<template>
  <section id="preventivo" class="py-24 md:py-32 bg-gray-50 dark:bg-[#030303] overflow-hidden relative">
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-6xl mx-auto">
        
        <div class="preventivo-header text-center mb-16 md:mb-24">
          <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white dark:bg-white/5 border border-primary/20 shadow-sm">
            <span class="relative flex h-2 w-2">
              <span class="inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span class="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Consulenza Personalizzata</span>
          </div>
          
          <h2 class="text-4xl md:text-6xl lg:text-7xl font-black mb-8 dark:text-white uppercase tracking-tighter leading-none">
            Pronto a <br>
            <span class="text-primary italic">Partire?</span>
          </h2>
          
          <p class="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed font-medium">
            Inizia il tuo viaggio con il supporto dei nostri specialisti. Ti guidiamo nella scelta migliore con una consulenza su misura.
          </p>
        </div>

        <!-- Action Cards -->
        <div class="action-cards-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          
          <!-- Card 1: Modulo -->
          <div class="action-card p-10 md:p-12 bg-white dark:bg-white/5 rounded-[40px] border border-primary/20 relative">
            
            <div class="action-card-icon flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-primary/10 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            
            <h3 class="text-2xl md:text-3xl font-black mb-4 dark:text-white uppercase tracking-tighter">Richiedi <span class="text-primary">Preventivo</span></h3>
            <p class="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed text-sm">Compila il modulo e ricevi una quotazione dettagliata entro 24 ore lavorative.</p>
            
            <NuxtLink 
              to="/#contatti" 
              class="action-link inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-black rounded-xl no-underline uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20"
            >
              RICHIEDI CONSULENZA
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </NuxtLink>
          </div>

          <!-- Card 2: Chiamata Diretta -->
          <div class="action-card p-10 md:p-12 bg-primary rounded-[40px] shadow-xl shadow-primary/20 relative">
            
            <div class="action-card-icon flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-white/20 text-white">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>
            
            <h3 class="text-2xl md:text-3xl font-black mb-4 text-white uppercase tracking-tighter">Chiamata <span class="text-white/80">Immediata</span></h3>
            <p class="text-white/80 mb-10 leading-relaxed text-sm">Parla direttamente con un nostro consulente per risposte immediate e assistenza personalizzata.</p>
            
            <a 
              href="tel:3332327592" 
              class="action-call inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-black rounded-xl no-underline uppercase tracking-widest text-lg md:text-xl shadow-lg shadow-black/10"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              333 2327592
            </a>
          </div>

        </div>

        <!-- FAQ/Info Footer -->
        <div class="max-w-4xl mx-auto border-t border-gray-200 dark:border-white/10 pt-16">
          <div class="grid md:grid-cols-2 gap-8 md:gap-16">
            <!-- Why Us -->
            <div class="relative">
              <button @click="toggleInfo" class="flex items-center justify-between w-full py-6 text-left group">
                <span class="text-sm font-black uppercase tracking-widest dark:text-white">Perché Pica Caravan?</span>
                <svg aria-hidden="true" class="w-4 h-4 text-slate-500 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="showInfo" class="overflow-hidden">
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pb-6">
                  Dal 2004 siamo il punto di riferimento per il caravanning in Campania. Vendita garantita, assistenza certificata e rimessaggio sicuro: la nostra esperienza al servizio della tua libertà di viaggiare.
                </p>
              </div>
            </div>

            <!-- GDPR -->
            <div class="relative">
              <button @click="toggleGdpr" class="flex items-center justify-between w-full py-6 text-left group">
                <span class="text-sm font-black uppercase tracking-widest dark:text-white">Trattamento Dati</span>
                <svg aria-hidden="true" class="w-4 h-4 text-slate-500 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="showGdpr" class="overflow-hidden">
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pb-6">
                  I tuoi dati sono protetti secondo il GDPR. Verranno utilizzati esclusivamente per gestire la tua richiesta e non saranno ceduti a terzi. Puoi richiedere la cancellazione in qualsiasi momento scrivendo a info@picacaravan.it.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Fix icone giganti */
.action-card .action-card-icon :deep(svg) {
  width: 32px !important;
  height: 32px !important;
  display: block;
}

.action-card .action-call :deep(svg) {
  width: 24px !important;
  height: 24px !important;
}

.action-card .action-link :deep(svg) {
  width: 18px !important;
  height: 18px !important;
}
</style>
