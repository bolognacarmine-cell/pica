
<script setup>
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

let ctx

onMounted(async () => {
  await nextTick()
  ctx = gsap.context(() => {
    // Reveal Titolo e Sottotitolo
    const headerElements = document.querySelectorAll('.about-header > *')
    if (headerElements.length > 0) {
      gsap.fromTo(headerElements, 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out',
          clearProps: 'all'
        }
      )
    }

    // Reveal Paragrafi Testo con Stagger
    const textParagraphs = document.querySelectorAll('.about-text p')
    if (textParagraphs.length > 0) {
      gsap.fromTo(textParagraphs, 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.about-text',
            start: 'top 85%',
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

    // Animazione Visual Layered (Effetto Parallasse)
    const visualElements = document.querySelectorAll('.visual-layer')
    if (visualElements.length > 0) {
      visualElements.forEach((el, i) => {
        gsap.fromTo(el, 
          { y: 60 * (i + 1), opacity: 0, scale: 0.9 },
          {
            scrollTrigger: {
              trigger: '.about-visual-container',
              start: 'top 75%',
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            delay: i * 0.2,
            ease: 'expo.out',
            clearProps: 'all'
          }
        )
      })
    }

    // Parallasse continuo al movimento dello scroll
    const layerBg = document.querySelector('.layer-bg')
    if (layerBg) {
      gsap.to(layerBg, {
        y: -50,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }
    
    const layerMain = document.querySelector('.layer-main')
    if (layerMain) {
      gsap.to(layerMain, {
        y: 30,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }

    // Hover sulle icone valori
    const valueCards = document.querySelectorAll('.value-card')
    if (valueCards.length > 0) {
      gsap.fromTo(valueCards, 
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.about-values',
            start: 'top 90%',
          },
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          clearProps: 'all'
        }
      )
    }
  })
})
</script>

<template>
  <section id="azienda" class="about-section section">
    <div class="container">
      <div class="about-grid grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <!-- Parte Visiva con Immagine Coerente -->
        <div class="about-visual relative order-2 lg:order-1">
          <div class="about-image-wrapper relative rounded-[48px] overflow-hidden shadow-2xl group">
            <nuxt-img 
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=85&w=800" 
              alt="Officina specializzata camper e roulotte Pica Caravan" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              format="webp"
              width="800"
              height="600"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <!-- Experience Badge -->
            <div class="absolute bottom-8 left-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
              <div class="flex items-center gap-4">
                <span class="text-4xl font-black text-primary">30+</span>
                <div class="flex flex-col">
                  <span class="text-[10px] font-black text-white uppercase tracking-widest leading-none">Anni di</span>
                  <span class="text-xs font-bold text-gray-300 uppercase tracking-tighter">Esperienza</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <!-- Parte Testuale -->
        <div class="about-content order-1 lg:order-2">
          <div class="mb-12">
            <span class="text-[11px] font-black text-primary uppercase tracking-[0.35em] mb-6 inline-block bg-primary/10 px-4 py-2 rounded-full">La nostra realtà</span>
            <h2 class="text-4xl md:text-5xl lg:text-7xl font-black mb-10 dark:text-white uppercase tracking-tighter leading-[0.95]">
              Pica Caravan: <br><span class="text-primary italic">In Movimento</span>
            </h2>
            <div class="space-y-8 text-gray-500 dark:text-gray-400 text-xl leading-relaxed font-medium max-w-xl">
              <p>
                Situata a <span class="text-white border-b-2 border-primary/30">San Nicola la Strada</span>, Pica Caravan è il punto di riferimento per gli amanti del plein air. Guidata da <span class="text-primary font-black">Antimo Pica</span>, offriamo soluzioni complete per ogni esigenza.
              </p>
              <p class="text-lg font-normal opacity-80">
                Siamo orgogliosi di essere <span class="text-white font-bold">Concessionario Across Car</span> e centro assistenza autorizzato per i migliori brand del settore come <span class="text-white">Viesa, Thetford e Webasto</span>.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            <div class="group p-8 bg-white dark:bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-xl hover:shadow-primary/5">
              <div class="w-14 h-14 mb-6 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h4 class="text-base font-black dark:text-white uppercase tracking-widest mb-3">Su Misura</h4>
              <p class="text-sm text-gray-400 leading-relaxed">Ti guidiamo nella scelta del tuo primo camper o roulotte con consulenza dedicata.</p>
            </div>
            <div class="group p-8 bg-white dark:bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-xl hover:shadow-primary/5">
              <div class="w-14 h-14 mb-6 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h4 class="text-base font-black dark:text-white uppercase tracking-widest mb-3">Affidabilità</h4>
              <p class="text-sm text-gray-400 leading-relaxed">Un nome storico sinonimo di fiducia, trasparenza e assistenza continua nel tempo.</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-6">
            <NuxtLink to="/veicoli" class="px-10 py-5 bg-primary text-white text-[11px] font-black rounded-2xl uppercase tracking-widest shadow-2xl shadow-primary/20 hover:bg-white hover:text-black transition-all duration-500 transform hover:-translate-y-1">
              Scopri i veicoli
            </NuxtLink>
            <a href="#contatti" class="px-10 py-5 bg-white/5 text-white text-[11px] font-black rounded-2xl border border-white/10 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 transform hover:-translate-y-1">
              Contattaci
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: var(--bg);
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
}

@media (min-width: 768px) {
  .about-section {
    padding: 5rem 0;
  }
}

@media (min-width: 1024px) {
  .about-section {
    padding: 6rem 0;
  }
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

@media (min-width: 1280px) {
  .about-grid {
    gap: 5rem;
  }
}

/* Content Styles */
.about-content {
  max-width: 600px;
}

.about-header {
  margin-bottom: var(--space-2xl);
}

.about-text {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
}

.about-text p {
  margin-bottom: var(--space-lg);
}

.about-text p:last-child {
  margin-bottom: 0;
}

.about-text strong {
  color: var(--text-primary);
  font-weight: 700;
}

/* Values Grid */
.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.value-card {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
  transition: all var(--transition-base);
}

.value-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
}

.value-icon {
  background: rgba(255, 107, 53, 0.1);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 107, 53, 0.2);
  flex-shrink: 0;
  color: var(--primary);
}

.value-content h4 {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
}

.value-content p {
  font-size: var(--text-sm);
  color: var(--text-muted);
  line-height: 1.5;
}

.about-actions {
  display: flex;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

/* Visual Styles */
.about-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

@media (min-width: 768px) {
  .about-image-container {
    aspect-ratio: 5/4;
  }
}

@media (min-width: 1024px) {
  .about-image-container {
    aspect-ratio: 3/2;
  }
}

.about-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
}

.about-image-container:hover .about-main-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.05) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  pointer-events: none;
}

.image-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

@media (max-width: 640px) {
  .image-badge {
    top: 1rem;
    left: 1rem;
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
  }
}

.visual-layer {
  position: absolute;
  border-radius: var(--radius-2xl);
  transition: transform var(--transition-slow);
}

.layer-bg {
  top: 10%;
  right: 0;
  width: 85%;
  height: 75%;
  background: var(--primary-gradient);
  opacity: 0.1;
  z-index: 1;
}

.layer-frame {
  top: 15%;
  left: 5%;
  width: 75%;
  height: 75%;
  border: 2px solid var(--line-elevated);
  z-index: 2;
}

.layer-main {
  top: 12%;
  left: 10%;
  width: 80%;
  height: 80%;
  background: var(--surface);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-xl);
  padding: var(--space-lg);
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: var(--radius-lg);
}

.layer-badge {
  bottom: 8%;
  right: -5%;
  z-index: 4;
}

.experience-badge {
  background: var(--primary-gradient);
  padding: var(--space-lg) var(--space-xl);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-primary);
  transform: rotate(3deg);
  transition: all var(--transition-base);
}

.experience-badge:hover {
  transform: rotate(0deg) scale(1.05);
}

.badge-years {
  font-size: var(--text-2xl);
  font-weight: 900;
  line-height: 1;
  color: var(--text-inverse);
}

.badge-label {
  font-size: var(--text-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-top: var(--space-xs);
  color: var(--text-inverse);
  opacity: 0.9;
}

/* Showroom Styles */
.about-showroom-image {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.showroom-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.showroom-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl);
}

.overlay-content {
  text-align: center;
  color: white;
}

.overlay-content h3 {
  font-size: var(--text-2xl);
  font-weight: 800;
  margin-bottom: var(--space-md);
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.overlay-content p {
  font-size: var(--text-base);
  opacity: 0.9;
  max-width: 300px;
  line-height: 1.6;
}

/* Value Icons */
.value-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }
  
  .about-visual {
    height: 500px;
    order: -1;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .about-actions {
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .about-actions .btn {
    width: 100%;
    justify-content: center;
  }
  
  .about-visual {
    height: 400px;
  }
  
  .layer-main {
    padding: var(--space-md);
  }
  
  .experience-badge {
    padding: var(--space-md) var(--space-lg);
  }
}
</style>
