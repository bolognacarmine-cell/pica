<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    name: 'Marco Rossi',
    location: 'San Nicola la Strada, CE',
    rating: 5,
    date: 'Marzo 2024',
    vehicle: 'Camper Adria 670',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1f7a1a85e?auto=format&fit=crop&q=85&w=400',
    text: 'Servizio impeccabile e professionalità. Ho trovato il camper perfetto per la mia famiglia. Consigliatissimo!'
  },
  {
    id: 2,
    name: 'Laura Bianchi',
    location: 'Caserta, CE',
    rating: 5,
    date: 'Febbraio 2024',
    vehicle: 'Roulotte Knaus Tabbert',
    image: 'https://images.unsplash.com/photo-1573497029040-73c8850b966?auto=format&fit=crop&q=85&w=400',
    text: 'Personale gentile e competente. Mi hanno guidato nella scelta della mia prima roulotte con pazienza e consigli preziosi.'
  },
  {
    id: 3,
    name: 'Giuseppe Verdi',
    location: 'Napoli, NA',
    rating: 5,
    date: 'Gennaio 2024',
    vehicle: 'Camper Hymer B-Class Modern',
    image: 'https://images.unsplash.com/photo-1542282086-f6ff940b6c6c?auto=format&fit=crop&q=85&w=400',
    text: 'Assistenza post-vendita eccellente. Anche per piccoli interventi, sono sempre disponibili e rapidi.'
  },
  {
    id: 4,
    name: 'Anna Esposito',
    location: 'Aversa, CE',
    rating: 5,
    date: 'Dicembre 2023',
    vehicle: 'Camper Dethleff T7',
    image: 'https://images.unsplash.com/photo-1558618037-3c8c5bf5b1c?auto=format&fit=crop&q=85&w=400',
    text: 'Qualità premium e attenzione ai dettagli. Il camper era perfetto e il servizio di consegna è stato puntuale.'
  },
  {
    id: 5,
    name: 'Roberto Romano',
    location: 'Benevento, CE',
    rating: 5,
    date: 'Novembre 2023',
    vehicle: 'Camper Laika Ecovip',
    image: 'https://images.unsplash.com/photo-1618668123933-0b4a2f5b6b2c?auto=format&fit=crop&q=85&w=400',
    text: 'Prezzo competitivo e trasparenza. Nessuna sorpresa, tutto come descritto. Venditore affidabile!'
  },
  {
    id: 6,
    name: 'Francesca Neri',
    location: 'Santa Maria Capua Vetere, CE',
    rating: 5,
    date: 'Ottobre 2023',
    vehicle: 'Roulotte Fendt Saphir',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=85&w=400',
    text: 'Esperienza pluriennale nel settore. Conoscono il mondo camper e offrono consulenza esperta.'
  }
])

</script>

<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <div class="section-content">
          <span class="section-kicker">Testimonianze</span>
          <h2 class="section-title">Recensioni verificate, esperienze reali.</h2>
          <p class="section-description">Un’azienda si giudica anche da come segue i clienti dopo l’acquisto: ecco cosa raccontano.</p>
        </div>
      </div>

      <div class="testimonials-grid">
        <article v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card glass-panel">
          <div>
            <div class="testimonial-head">
              <div class="avatar">
                <nuxt-img 
                  :src="testimonial.image" 
                  :alt="testimonial.name"
                  format="webp"
                  width="48"
                  height="48"
                />
              </div>
              <div class="meta">
                <h3 class="name">{{ testimonial.name }}</h3>
                <span class="location">{{ testimonial.location }}</span>
              </div>
            </div>
            
            <div class="rating" aria-label="Valutazione 5 su 5">
              <svg v-for="i in 5" :key="i" width="12" height="12" class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <div class="testimonial-content mb-6">
              <p class="quote">“{{ testimonial.text }}”</p>
            </div>
          </div>
          
          <div class="card-footer">
            <div class="vehicle">
              <span class="label">Veicolo</span>
              <span class="value">{{ testimonial.vehicle }}</span>
            </div>
            <span class="date">{{ testimonial.date }}</span>
          </div>
        </article>
      </div>

      <!-- CTA Section -->
      <div class="testimonials-cta">
        <div class="cta-content">
          <h3 class="cta-title">Vuoi un consiglio prima di scegliere?</h3>
          <p class="cta-subtitle">Parla con un consulente: ti orientiamo tra modelli, dotazioni e disponibilità.</p>
          <div class="cta-actions">
            <a href="tel:3332327592" class="btn-premium">Chiama ora</a>
            <a href="#contatti" class="btn-secondary-glass">Richiedi consulenza</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  background: var(--bg);
  position: relative;
  overflow: hidden;
  padding: 88px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 44px;
}

.section-content {
  max-width: 760px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}

.testimonial-card {
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  flex: none;
}

.avatar :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-size: 1.05rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 0;
  color: rgba(255, 255, 255, 0.94);
}

.location {
  display: block;
  margin-top: 2px;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
}

.rating {
  display: inline-flex;
  gap: 4px;
  color: var(--primary);
  margin-bottom: 12px;
}

.quote {
  margin: 0 0 18px;
  color: var(--text-dim);
  line-height: 1.7;
  font-size: 0.98rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.vehicle .label {
  display: block;
  font-size: 0.68rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.55);
}

.vehicle .value {
  display: block;
  margin-top: 2px;
  font-size: 0.86rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
}

.date {
  font-size: 0.78rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.6);
}

.testimonials-cta {
  margin-top: 32px;
  padding: 28px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.10);
  text-align: center;
}

.cta-content {
  max-width: 64ch;
  margin: 0 auto;
}

.cta-title {
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: 0 0 10px;
}

.cta-subtitle {
  margin: 0;
  color: var(--text-dim);
  line-height: 1.65;
}

.cta-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;
}
</style>
