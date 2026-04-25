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
  <section class="testimonials-section section">
    <div class="container">
      <div class="section-header">
        <div class="section-content">
          <span class="section-kicker">Testimonianze</span>
          <h2 class="section-title">Cosa Dicono i Nostri Clienti</h2>
          <p class="section-subtitle">Scopri le esperienze reali di chi ha scelto Pica Caravan per i propri viaggi.</p>
        </div>
      </div>

      <div class="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <nuxt-img 
                  :src="testimonial.image" 
                  :alt="testimonial.name"
                  class="w-full h-full object-cover"
                  format="webp"
                  width="56"
                  height="56"
                />
              </div>
              <div class="flex flex-col">
                <h3 class="text-lg font-black dark:text-white uppercase tracking-tighter">{{ testimonial.name }}</h3>
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{{ testimonial.location }}</span>
              </div>
            </div>
            
            <div class="flex gap-1 mb-4 text-primary">
              <svg v-for="i in 5" :key="i" class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <div class="testimonial-content mb-6">
              <p class="text-sm text-gray-500 dark:text-gray-400 italic leading-relaxed">"{{ testimonial.text }}"</p>
            </div>
          </div>
          
          <div class="pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
            <div class="flex flex-col">
              <span class="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em]">Veicolo</span>
              <span class="text-[10px] font-black text-primary uppercase tracking-tighter">{{ testimonial.vehicle }}</span>
            </div>
            <span class="text-[9px] font-bold text-gray-400 uppercase">{{ testimonial.date }}</span>
          </div>
        </article>
      </div>

      <!-- CTA Section -->
      <div class="testimonials-cta">
        <div class="cta-content">
          <h3 class="cta-title">Condividi la Tua Esperienza</h3>
          <p class="cta-subtitle">Hai acquistato un veicolo da Pica Caravan? Raccontaci la tua storia!</p>
          <div class="cta-actions">
            <a href="tel:3332327592" class="btn btn-primary btn-lg">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18"/></svg>
              Lascia una Recensione
            </a>
            <NuxtLink to="#contatti" class="btn btn-secondary btn-lg">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0l7.89 5.26v9.48L12 20l-7.89-5.26V8z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              Contatta Esperto
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Testimonials Section */
.testimonials-section {
  background: var(--bg);
  position: relative;
  overflow: hidden;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.section-content {
  max-width: 600px;
  margin: 0 auto;
}

.section-kicker {
  display: inline-block;
  background: var(--primary);
  color: var(--text-inverse);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-md);
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: 900;
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  line-height: 1.2;
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Testimonials Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-4xl);
}

/* Testimonial Cards */
.testimonial-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-2xl);
  padding: var(--space-2xl);
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Testimonial Header */
.testimonial-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-lg);
}

.client-info {
  display: flex;
  gap: var(--space-md);
  align-items: center;
  flex: 1;
}

.client-avatar {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  overflow: hidden;
  border: 3px solid var(--primary);
  flex-shrink: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.client-details {
  flex: 1;
}

.client-name {
  font-size: var(--text-xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.client-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.client-location {
  font-size: var(--text-sm);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.client-location::before {
  content: '📍';
  font-size: var(--text-sm);
}

.testimonial-date {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.rating-stars {
  display: flex;
  gap: var(--space-xs);
  align-items: center;
}

.star {
  color: var(--primary);
}

/* Testimonial Content */
.testimonial-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.testimonial-text {
  background: var(--surface-elevated);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  margin-bottom: var(--space-lg);
  flex: 1;
}

.testimonial-text p {
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--text-secondary);
  font-style: italic;
  position: relative;
}


.testimonial-vehicle {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: rgba(255, 107, 53, 0.1);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 107, 53, 0.2);
}

.vehicle-label {
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary);
}

.vehicle-name {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-primary);
}

/* Testimonials CTA */
.testimonials-cta {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-2xl);
  padding: var(--space-4xl);
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: var(--text-2xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.cta-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: var(--space-lg);
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  
  .testimonial-header {
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .client-info {
    flex-direction: column;
    text-align: center;
  }
  
  .testimonial-content {
    text-align: center;
  }
  
  .cta-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .testimonial-card {
    padding: var(--space-xl);
  }
  
  .section-title {
    font-size: var(--text-2xl);
  }
}
</style>
