
<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: 'Soluzioni Su Misura',
    desc: 'Personalizziamo il tuo camper con accessori premium e configurazioni uniche, create apposta per te.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>',
    type: 'custom',
    bgImage: 'https://images.unsplash.com/photo-1558020113-5b9a28bb9733?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Massima Affidabilità',
    desc: 'Garanzia di qualità su tutti i veicoli e assistenza tecnica specializzata per viaggiare senza pensieri.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    type: 'warranty',
    bgImage: 'https://images.unsplash.com/photo-1618668123933-0b4a2f5b6b2c?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Assistenza Completa',
    desc: 'Officina specializzata, ricambi originali e supporto tecnico per ogni tua esigenza.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    type: 'support',
    bgImage: 'https://images.unsplash.com/photo-1558618667-f725c4cd7ab3?auto=format&fit=crop&q=80&w=600'
  }
]

let ctx
onMounted(async () => {
  if (process.client) {
    await nextTick()
    ctx = gsap.context(() => {
      const serviceCards = document.querySelectorAll('.service-card')
      if (serviceCards.length > 0) {
        gsap.fromTo(serviceCards, 
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: '.services-grid',
              start: 'top 80%',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            clearProps: 'all'
          }
        )
      }

      const supportCtaBox = document.querySelector('.support-cta-box')
      if (supportCtaBox) {
        gsap.fromTo(supportCtaBox,
          { opacity: 0, scale: 0.95 },
          {
            scrollTrigger: {
              trigger: '.support-cta-box',
              start: 'top 85%',
            },
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'expo.out',
            clearProps: 'all'
          }
        )
      }
    })
  }
})

onUnmounted(() => {
  if (process.client && ctx) ctx.revert()
})
</script>

<template>
  <section id="assistenza" class="combined-services-section">
    <div class="container">
      <div class="services-header">
        <p class="section-kicker">Service & Support</p>
        <h2 class="section-title">Soluzioni complete per il tuo viaggio</h2>
        <p class="section-subtitle">
          Dall'acquisto alla manutenzione, ti accompagniamo in ogni chilometro delle tue vacanze.
        </p>
      </div>

      <div class="services-grid">
        <div v-for="s in services" :key="s.title" class="service-card group relative bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-700 hover:shadow-2xl h-[420px]">
          <div class="absolute inset-0">
            <nuxt-img 
              :src="s.bgImage" 
              :alt="s.title" 
              class="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1] transition-transform duration-1000 group-hover:scale-110"
              format="webp"
              width="600"
              height="450"
            />
          </div>
          <div class="relative z-10 h-full flex flex-col justify-between p-8 md:p-10 text-center">
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 mb-6 rounded-xl bg-primary/10 backdrop-blur-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500" v-html="s.icon"></div>
              <span class="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{{ s.type }}</span>
              <h3 class="text-2xl font-black text-white uppercase tracking-tighter mb-4">{{ s.title }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">{{ s.desc }}</p>
            </div>
            <div class="pt-6">
              <NuxtLink to="#contatti" class="inline-flex items-center gap-2 text-white/60 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-all group/link">
                Scopri Servizio
                <svg width="14" height="14" class="transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Unificato -->
      <div class="support-cta-box mt-16 md:mt-24 bg-white/5 border border-white/5 rounded-2xl p-8 md:p-16 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div class="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left">
          <div class="max-w-xl">
            <h3 class="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">Hai bisogno di assistenza o accessori?</h3>
            <p class="text-gray-400 text-base md:text-lg font-medium">Il nostro team tecnico è a tua disposizione per appuntamenti e consulenze veloci.</p>
          </div>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="tel:0823224038" class="px-8 py-4 bg-primary text-white text-[11px] font-black rounded-xl uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-white hover:text-black transition-all duration-500 transform hover:-translate-y-1">
              Chiama Officina
            </a>
            <a href="https://wa.me/390823224038" target="_blank" class="px-8 py-4 bg-[#25D366] text-white text-[11px] font-black rounded-xl uppercase tracking-widest shadow-lg shadow-green-500/20 hover:brightness-110 transition-all duration-500 transform hover:-translate-y-1 flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.31 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.41 1.26 4.85l-1.33 4.86 4.98-1.31c1.4.74 2.99 1.17 4.67 1.17 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.79 14.16c-.25.7-1.46 1.34-2.01 1.43-.5.08-1.15.15-3.32-.74-2.78-1.14-4.57-3.97-4.71-4.16-.14-.19-1.13-1.5-1.13-2.86s.71-2.03.96-2.3c.25-.27.54-.34.72-.34.18 0 .36.01.52.02.17.01.4.04.62.55.23.54.79 1.93.86 2.07.07.14.12.3.02.49-.1.19-.15.3-.3.47-.15.17-.31.38-.44.51-.15.15-.31.31-.13.62.18.31.79 1.3 1.7 2.11.7.63 1.29.83 1.6.96.31.13.49.11.67-.1.18-.21.79-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.15 1.02.32.16.53.24.6.38.08.13.08.77-.17 1.47z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.combined-services-section {
  padding: 3rem 0;
  background: #050505;
  position: relative;
}

@media (min-width: 768px) {
  .combined-services-section {
    padding: 4rem 0;
  }
}

@media (min-width: 1024px) {
  .combined-services-section {
    padding: 5rem 0;
  }
}

.services-header {
  max-width: 700px;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .services-header {
    margin-bottom: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .services-header {
    margin-bottom: 3rem;
  }
}

.section-kicker {
  color: var(--primary);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  margin-bottom: 12px;
}

.section-title {
  font-size: var(--text-4xl);
  font-weight: 900;
  margin-bottom: var(--space-lg);
  line-height: 1.1;
  color: var(--text-primary);
}

.section-subtitle {
  color: var(--muted);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .services-grid {
    gap: 2rem;
    margin-bottom: 4rem;
  }
}

@media (min-width: 1024px) {
  .services-grid {
    gap: 2.5rem;
    margin-bottom: 5rem;
  }
}

.service-card {
  position: relative;
  background: var(--surface);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--line);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
  height: 400px;
  will-change: transform;
}

.card-background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.3) saturate(0.8);
  transition: filter 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.4);
  border-color: var(--primary);
}

.service-card:hover .card-background {
  filter: brightness(0.35) saturate(0.9);
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-2xl);
  text-align: center;
}

.card-icon {
  margin-bottom: var(--space-lg);
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  background: var(--primary-gradient);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-md);
  color: var(--text-inverse);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all var(--transition-base);
}

.icon-wrapper svg {
  stroke-width: 2;
}

.service-card:hover .icon-wrapper {
  transform: scale(1.1);
  box-shadow: 0 0 20px var(--primary-glow);
}

.service-tag {
  font-size: 0.65rem;
  font-weight: 900;
  color: var(--primary);
  opacity: 0.5;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.card-body h3 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.card-body p {
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
  font-size: 1rem;
}

.card-footer {
  margin-top: 32px;
}

.service-link {
  color: var(--primary-2);
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9rem;
}

/* CTA Box */
.support-cta-box {
  background: var(--panel);
  border-radius: 40px;
  padding: 60px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.cta-text h3 {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 12px;
}

.cta-text p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
}

.cta-actions {
  display: flex;
  gap: 16px;
}

.btn-whatsapp {
  padding: 14px 32px;
  border-radius: 100px;
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-whatsapp::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.btn-whatsapp:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
  filter: brightness(1.1);
}

.btn-whatsapp:hover::after {
  left: 100%;
}

.btn-primary-custom {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
}

.btn-primary-custom:hover {
  transform: translateY(-5px) scale(1.03);
}

@media (max-width: 1100px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-content { flex-direction: column; text-align: center; }
}

@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .service-card { padding: 30px; }
}
</style>
