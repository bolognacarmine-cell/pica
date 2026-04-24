
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
    // Animazione Intestazione
    const headerElements = document.querySelectorAll('.accessories-header > *')
    if (headerElements.length > 0) {
      gsap.from(headerElements, {
        scrollTrigger: {
          trigger: '.accessories-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }

    // Animazione Card Caschi
    const helmetCards = document.querySelectorAll('.helmet-card')
    if (helmetCards.length > 0) {
      gsap.from(helmetCards, {
        scrollTrigger: {
          trigger: '.helmets-grid',
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      })
    }

    // Effetto parallasse sullo sfondo decorativo
    const bgDecoration = document.querySelector('.bg-decoration')
    if (bgDecoration) {
      gsap.to(bgDecoration, {
        y: -100,
        scrollTrigger: {
          trigger: '.accessories-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }
  })
})
</script>

<template>
  <section id="accessori" class="accessories-section section">
    <!-- Background Decor -->
    <div class="section-background">
      <div class="bg-pattern"></div>
    </div>
    
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">Accessori e Protezione</span>
        <h2 class="section-title">La tua sicurezza, con stile</h2>
        <p class="section-subtitle">
          Da PICA CARAVAN trovi una selezione esclusiva di <strong>caschi e accessori</strong> dei migliori brand. 
          Dall'integrale racing al jet urbano, proteggiamo la tua passione con il massimo della qualità.
        </p>
      </div>

      <div class="accessories-grid">
        <!-- Card 1: Integrali -->
        <div class="accessory-card card">
          <div class="accessory-visual">
            <div class="accessory-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10 5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div class="accessory-tag">Racing & Sport</div>
          </div>
          <div class="accessory-content">
            <h3>Caschi Integrali</h3>
            <p>Massima protezione e aerodinamica per chi non accetta compromessi sulla velocità.</p>
            <ul class="feature-list">
              <li>Fibra di carbonio</li>
              <li>Sistemi di ventilazione avanzati</li>
              <li>Design aerodinamico</li>
            </ul>
          </div>
        </div>

        <!-- Card 2: Modulari -->
        <div class="accessory-card card featured">
          <div class="accessory-visual">
            <div class="accessory-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="accessory-tag featured-tag">Best Seller</div>
          </div>
          <div class="accessory-content">
            <h3>Caschi Modulari</h3>
            <p>La versatilità perfetta per il touring e i lunghi viaggi, senza rinunciare alla sicurezza.</p>
            <ul class="feature-list">
              <li>Doppia omologazione P/J</li>
              <li>Visierino parasole integrato</li>
              <li>Comfort acustico superiore</li>
            </ul>
          </div>
        </div>

        <!-- Card 3: Jet -->
        <div class="accessory-card card">
          <div class="accessory-visual">
            <div class="accessory-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </div>
            <div class="accessory-tag">Urban Style</div>
          </div>
          <div class="accessory-content">
            <h3>Caschi Jet</h3>
            <p>Leggerezza e stile per i tuoi spostamenti quotidiani in città su scooter o cafe racer.</p>
            <ul class="feature-list">
              <li>Ampio campo visivo</li>
              <li>Interni anallergici</li>
              <li>Stile iconico</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section-footer">
        <div class="brands-info">
          <span class="brands-label">Trattiamo i migliori marchi:</span>
          <div class="brands-list">
            AGV • SHOEI • ARAI • HJC • Nolan • SHARK
          </div>
        </div>
        <NuxtLink to="#contatti" class="btn btn-primary btn-lg">
          Chiedi disponibilità taglie
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Accessories Section */
.accessories-section {
  background: var(--bg);
  position: relative;
  overflow: hidden;
}

.section-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.bg-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, var(--primary) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, var(--secondary) 0%, transparent 50%);
  opacity: 0.03;
}

.container {
  position: relative;
  z-index: 2;
}

.section-header {
  max-width: 800px;
  margin: 0 auto var(--space-4xl);
  text-align: center;
}

.section-subtitle strong {
  color: var(--text-primary);
  font-weight: 700;
}

/* Accessories Grid */
.accessories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2xl);
  margin-bottom: var(--space-4xl);
}

.accessory-card {
  transition: all var(--transition-base);
}

.accessory-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.accessory-card.featured {
  background: var(--primary-gradient);
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.accessory-visual {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-xl);
}

.accessory-icon {
  background: var(--surface);
  width: 80px;
  height: 80px;
  border-radius: var(--radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  color: var(--primary);
  transition: all var(--transition-base);
}

.accessory-card:hover .accessory-icon {
  background: var(--primary);
  color: var(--text-inverse);
  transform: scale(1.05);
}

.accessory-tag {
  font-size: var(--text-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: var(--space-xs) var(--space-md);
  background: var(--surface);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  border: 1px solid var(--line);
}

.featured-tag {
  background: var(--text-inverse);
  color: var(--primary);
  border-color: var(--text-inverse);
}

.accessory-content h3 {
  font-size: var(--text-xl);
  font-weight: 800;
  margin-bottom: var(--space-md);
  color: var(--text-primary);
}

.accessory-content p {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-muted);
}

.feature-list li::before {
  content: '→';
  color: var(--primary);
  font-weight: 900;
}

/* Section Footer */
.section-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-3xl);
  border-top: 1px solid var(--line);
  flex-wrap: wrap;
  gap: var(--space-xl);
}

.brands-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.brands-label {
  font-size: var(--text-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}

.brands-list {
  font-size: var(--text-lg);
  font-weight: 900;
  color: var(--text-primary);
  letter-spacing: 0.05em;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .accessories-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  
  .accessory-card.featured {
    order: -1;
  }
}

@media (max-width: 768px) {
  .section-header {
    margin-bottom: var(--space-3xl);
  }
  
  .section-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-lg);
  }
  
  .accessory-visual {
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
  }
  
  .accessory-icon {
    width: 64px;
    height: 64px;
  }
}
</style>
