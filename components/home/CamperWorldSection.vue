
<script setup>
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const categories = [
  {
    id: 'novita-camper',
    title: 'Novità Camper',
    desc: 'Le ultime anteprime dal mondo dei camper e delle roulotte: nuovi modelli e innovazioni tecnologiche.',
    icon: '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    link: '/blog?category=Novità Camper',
    label: 'Esplora Novità'
  },
  {
    id: 'codice-della-strada',
    title: 'Codice della Strada',
    desc: 'Resta sempre in regola: aggiornamenti normativi, regole di circolazione e consigli per viaggiare sereni.',
    icon: '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    link: '/blog?category=Codice della Strada',
    label: 'Aggiornamenti'
  },
  {
    id: 'sicurezza-e-manutenzione',
    title: 'Sicurezza e Manutenzione',
    desc: 'Tutto quello che devi sapere per viaggiare protetto e mantenere il tuo veicolo in condizioni perfette.',
    icon: '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    link: '/blog?category=Sicurezza e Manutenzione',
    label: 'Leggi Consigli'
  },
  {
    id: 'guide-per-viaggiatori',
    title: 'Guide per Viaggiatori',
    desc: 'Consigli pratici su itinerari, campeggi e tecnica di vita in camper per ogni tipo di viaggiatore.',
    icon: '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>',
    link: '/blog?category=Guide per Viaggiatori',
    label: 'Scopri di più'
  }
]

let ctx
onMounted(async () => {
  await nextTick()
  ctx = gsap.context(() => {
    gsap.from('.camper-header > *', {
      scrollTrigger: {
        trigger: '.camper-world-section',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    })

    gsap.from('.category-card', {
      scrollTrigger: {
        trigger: '.categories-grid',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out'
    })
  })
})
</script>

<template>
  <section id="mondo-camper" class="camper-world-section py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
    <!-- Subtle Background Decor -->
    <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 dark:from-white/2 to-transparent pointer-events-none"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      
      <!-- Intestazione Sezione -->
      <div class="camper-header max-w-4xl mb-16">
        <span class="section-kicker block mb-4 text-primary font-black uppercase tracking-[0.3em] text-xs">Mondo Pica Caravan</span>
        <h2 class="section-title text-4xl md:text-6xl font-black mb-6 dark:text-white uppercase tracking-tighter leading-[0.9] lg:leading-[0.85]">
          News, Guide & <br>
          <span class="text-primary italic">Insights</span>
        </h2>
        <p class="section-subtitle text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed font-medium">
          Esplora i nostri contenuti esclusivi: novità, sicurezza e tutto ciò che serve per vivere al meglio la tua passione per il viaggio in libertà.
        </p>
      </div>

      <!-- Griglia Categorie -->
      <div class="categories-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <NuxtLink 
          v-for="cat in categories" 
          :key="cat.id" 
          :to="cat.link"
          class="category-card group flex flex-col p-8 glass-panel border border-transparent hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
        >
          <div class="category-icon w-14 h-14 mb-8 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500" v-html="cat.icon"></div>
          
          <div class="card-content flex-1 flex flex-col">
            <h3 class="text-xl font-black mb-3 dark:text-white uppercase tracking-tight">{{ cat.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed line-clamp-3">{{ cat.desc }}</p>
            
            <div class="mt-auto">
              <span class="card-link inline-flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                {{ cat.label }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Social Band -->
      <div class="social-community-band glass-panel rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-10 shadow-2xl relative overflow-hidden group">
        <div class="glow-effect"></div>
        
        <div class="band-text text-center lg:text-left relative z-10">
          <h4 class="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-none">Entra nella nostra <span class="text-primary italic">Community</span></h4>
          <p class="text-white/60 font-medium max-w-xl">Unisciti a migliaia di appassionati. Seguici sui social per non perdere nemmeno un aggiornamento dal mondo Pica Caravan.</p>
        </div>
        
        <div class="band-actions flex flex-wrap justify-center gap-4 relative z-10">
          <a href="https://facebook.com" target="_blank" class="btn-secondary-glass">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" class="btn-secondary-glass">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.242 3.608-1.308 1.266-.058-1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759-6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagram
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.camper-world-section {
  position: relative;
}

/* Fix chirurgico icone giganti */
.category-icon :deep(svg) {
  width: 24px !important;
  height: 24px !important;
  display: block;
}

.card-link :deep(svg) {
  width: 14px !important;
  height: 14px !important;
}

.band-actions :deep(svg) {
  width: 18px !important;
  height: 18px !important;
}
</style>
