
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
    gsap.fromTo('.about-header > *', 
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

    // Reveal Paragrafi Testo con Stagger
    gsap.fromTo('.about-text p', 
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

    // Animazione Visual Layered (Effetto Parallasse)
    const visualElements = document.querySelectorAll('.visual-layer')
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

    // Parallasse continuo al movimento dello scroll
    gsap.to('.layer-bg', {
      y: -50,
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
    
    gsap.to('.layer-main', {
      y: 30,
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    // Hover sulle icone valori
    gsap.fromTo('.value-card', 
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
  })
})
</script>

<template>
  <section id="azienda" class="about-section">
    <div class="container about-container">
      <div class="about-grid">
        
        <!-- Parte Testuale -->
        <div class="about-content">
          <div class="about-header">
            <p class="section-kicker">La nostra realtà</p>
            <h2 class="about-title">PICA CARAVAN: La tua casa in movimento</h2>
            <p class="about-subtitle">Esperienza e professionalità nel mondo del plein air a San Nicola la Strada.</p>
          </div>
          
          <div class="about-text">
            <p>
              Situata strategicamente a <strong>San Nicola la Strada (CE)</strong>, Pica Caravan è l'azienda leader per chi ama viaggiare in libertà. Guidata dall'esperienza di <strong>Antimo Pica</strong>, la nostra realtà è specializzata nella <strong>vendita di articoli da campeggio, riparazione e ristrutturazione di camper, roulotte e container</strong>.
            </p>
            <p>
              Siamo orgogliosi di essere <strong>Concessionario Across Car</strong>, produttore europeo d'eccellenza per Camper e Roulotte. Inoltre, realizziamo <strong>allestimenti Street-Food</strong> personalizzati, trasformando la nostra competenza tecnica in soluzioni professionali per il tuo business su ruote.
            </p>
            <p>
              Qualità e sicurezza sono i nostri pilastri: siamo <strong>Service Center autorizzato VIESA, THETFORD e WEBASTO</strong>, garantendo interventi certificati e ricambi di altissimo livello per ogni esigenza di climatizzazione e comfort.
            </p>
          </div>

          <div class="about-values">
            <div class="value-card">
              <span class="value-icon">🚐</span>
              <div class="value-info">
                <strong>Soluzioni Su Misura</strong>
                <p>Dal primo camper alla roulotte per tutta la famiglia, ti guidiamo nella scelta migliore.</p>
              </div>
            </div>
            <div class="value-card">
              <span class="value-icon">🛡️</span>
              <div class="value-info">
                <strong>Affidabilità Locale</strong>
                <p>Un nome storico sul territorio casertano, sinonimo di fiducia e assistenza continua.</p>
              </div>
            </div>
          </div>

          <div class="about-actions">
            <NuxtLink to="/veicoli" class="btn-primary-custom">Scopri il parco veicoli</NuxtLink>
            <a href="#contatti" class="btn-outline-custom">Richiedi informazioni</a>
          </div>
        </div>

        <!-- Parte Visuale (Layered Animation) -->
        <div class="about-visual-container">
          <div class="visual-wrapper">
            <!-- Sfondo astratto o decorativo -->
            <div class="visual-layer layer-bg"></div>
            <!-- Cornice principale -->
            <div class="visual-layer layer-frame"></div>
            <!-- Immagine principale -->
            <div class="visual-layer layer-main">
              <img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1000" alt="Pica Caravan - Vendita e Assistenza" class="founder-img" />
            </div>
            <!-- Badge esperienza -->
            <div class="visual-layer layer-badge">
              <div class="experience-badge-content">
                <span class="years">Expert</span>
                <span class="label">Plein Air</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 60px 0;
  background: #050505;
  color: #fff;
  overflow: hidden;
  position: relative;
}

.about-container {
  position: relative;
  z-index: 2;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 100px;
  align-items: center;
}

/* Visual Layered Styles */
.about-visual-container {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.visual-layer {
  position: absolute;
  border-radius: 30px;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.layer-bg {
  top: 10%;
  right: 0;
  width: 80%;
  height: 70%;
  background: linear-gradient(135deg, rgba(225, 29, 72, 0.05) 0%, rgba(225, 29, 72, 0) 100%);
  border: 1px solid rgba(225, 29, 72, 0.1);
  z-index: 1;
}

.layer-frame {
  top: 15%;
  left: 5%;
  width: 75%;
  height: 75%;
  border: 2px solid rgba(255, 255, 255, 0.05);
  z-index: 2;
}

.layer-main {
  top: 12%;
  left: 10%;
  width: 80%;
  height: 80%;
  background: #fff;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
  padding: 40px;
}

.layer-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 20px;
}

.layer-badge {
  bottom: 5%;
  right: -5%;
  z-index: 4;
}

.experience-badge-content {
  background: var(--primary-2);
  padding: 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 20px 40px rgba(225, 29, 72, 0.4);
  transform: rotate(5deg);
}

.experience-badge-content .years {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  color: #fff;
}

.experience-badge-content .label {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.9);
}

/* Content Styles Refinement */
.value-card {
  display: flex;
  gap: 20px;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
}

.value-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(225, 29, 72, 0.3);
  transform: translateY(-5px);
}

@media (max-width: 1200px) {
  .about-grid { gap: 60px; }
  .layer-badge { right: 0; }
}

.section-kicker {
  color: var(--primary-2);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.about-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 950;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.about-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 32px;
  font-weight: 500;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
}

.about-text p {
  margin-bottom: 20px;
}

.about-text strong {
  color: #fff;
  font-weight: 700;
}

.about-values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 48px;
}

.value-info strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.value-info p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5;
}

.value-icon {
  font-size: 1.5rem;
  background: rgba(225, 29, 72, 0.1);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid rgba(225, 29, 72, 0.2);
}

.about-actions {
  display: flex;
  gap: 20px;
}

.btn-outline-custom {
  padding: 14px 28px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn-outline-custom:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #fff;
}

@media (max-width: 1024px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-visual-container { height: 500px; order: -1; }
  .layer-main { padding: 30px; }
}

@media (max-width: 640px) {
  .about-values {
    grid-template-columns: 1fr;
  }
  .about-actions {
    flex-direction: column;
  }
  .btn-primary-custom, .btn-outline-custom {
    text-align: center;
  }
}
</style>
