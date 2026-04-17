
<script setup>
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: 'Vendita Veicoli',
    desc: 'Ampia scelta di camper e roulotte nuovi e usati dei migliori brand, garantiti e controllati.',
    icon: '🚐',
    type: 'sales'
  },
  {
    title: 'Officina Specializzata',
    desc: 'Affida il tuo mezzo a mani esperte: eseguiamo manutenzioni, riparazioni scocche, controlli infiltrazioni e installazione accessori. Un servizio professionale per viaggiare sempre in sicurezza.',
    icon: '🔧',
    type: 'service'
  },
  {
    title: 'Accessori e Ricambi',
    desc: 'Utilizziamo solo componenti di qualità e accessori delle migliori marche per personalizzare il tuo camper.',
    icon: '⚙️',
    type: 'parts'
  }
]

let ctx
onMounted(async () => {
  await nextTick()
  ctx = gsap.context(() => {
    gsap.fromTo('.service-card', 
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

    gsap.fromTo('.support-cta-box',
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
  })
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
        <div v-for="s in services" :key="s.title" class="service-card">
          <div class="card-top">
            <div class="service-icon-box">{{ s.icon }}</div>
            <div class="service-tag">{{ s.type.toUpperCase() }}</div>
          </div>
          <div class="card-body">
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/#contatti" class="service-link">Richiedi Info →</NuxtLink>
          </div>
        </div>
      </div>

      <!-- CTA Unificato -->
      <div class="support-cta-box">
        <div class="cta-content">
          <div class="cta-text">
            <h3>Hai bisogno di assistenza o accessori?</h3>
            <p>Il nostro team tecnico è a tua disposizione per appuntamenti e consulenze veloci.</p>
          </div>
          <div class="cta-actions">
            <a href="tel:0823224038" class="btn-primary-custom">Chiama Officina</a>
            <a href="https://wa.me/390823224038" target="_blank" class="btn-whatsapp">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.combined-services-section {
  padding: 60px 0;
  background: #050505;
  position: relative;
}

.services-header {
  max-width: 700px;
  margin-bottom: 80px;
}

.section-kicker {
  color: var(--primary-2);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  margin-bottom: 16px;
  line-height: 1.1;
}

.section-subtitle {
  color: var(--muted);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-bottom: 60px;
}

.service-card {
  background: var(--panel);
  padding: 40px;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.service-icon-box.icon-box {
  width: 80px;
  height: 80px;
  background: rgba(241, 110, 34, 0.1);
  border-radius: 20px;
  display: grid;
  place-items: center;
  font-size: 2.5rem;
  margin-bottom: 24px;
  color: var(--primary-2);
}

.service-tag {
  font-size: 0.7rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 0.1em;
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
