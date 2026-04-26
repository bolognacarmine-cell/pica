
<script setup>
const services = [
  {
    title: 'Vendita Veicoli',
    desc: 'Selezione di camper e roulotte nuovi e usati, con verifiche e indicazioni chiare prima dell’acquisto.',
    icon: '<svg width="32" height="32" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
    type: 'Vendita'
  },
  {
    title: 'Officina Specializzata',
    desc: 'Manutenzione, riparazioni, controlli infiltrazioni e installazione accessori: interventi certificati e rapidi.',
    icon: '<svg width="32" height="32" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    type: 'Officina'
  },
  {
    title: 'Accessori e Ricambi',
    desc: 'Ricambi e accessori selezionati, installazione e configurazioni per comfort e autonomia in viaggio.',
    icon: '<svg width="32" height="32" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>',
    type: 'Ricambi'
  }
]
</script>

<template>
  <section id="assistenza" class="combined-services-section">
    <div class="container">
      <div class="services-header">
        <p class="section-kicker">Assistenza</p>
        <h2 class="section-title">Servizi solidi, prima e dopo l’acquisto.</h2>
        <p class="section-description">Dalla scelta del veicolo alla manutenzione: un punto di riferimento unico, con officina e supporto dedicato.</p>
      </div>

      <div class="services-grid">
        <div v-for="s in services" :key="s.title" class="service-card glass-panel">
          <div class="card-top">
            <div class="service-icon-box" v-html="s.icon"></div>
            <div class="service-tag">{{ s.type }}</div>
          </div>
          <div class="card-body">
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
          <div class="card-footer">
            <NuxtLink to="/#contatti" class="service-link">
              Parla con un consulente
              <svg width="16" height="16" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- CTA Unificato -->
      <div class="support-cta-box glass-panel">
        <div class="cta-content">
          <div class="cta-text">
            <h3>Hai bisogno di officina o accessori?</h3>
            <p>Richiedi un appuntamento: ti rispondiamo con tempi e opzioni disponibili.</p>
          </div>
          <div class="cta-actions">
            <a href="tel:0823224038" class="btn-premium">
              <svg width="20" height="20" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Chiama Officina
            </a>
            <a href="https://wa.me/390823224038" target="_blank" class="btn-whatsapp">
              <svg width="20" height="20" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
  padding: 88px 0;
  background: var(--bg);
  position: relative;
}

.services-header {
  max-width: 760px;
  margin-bottom: 44px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 28px;
}

.service-card {
  padding: 26px;
  display: flex;
  flex-direction: column;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.service-icon-box {
  width: 52px;
  height: 52px;
  background: rgba(241, 110, 34, 0.12);
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: var(--primary);
  border: 1px solid rgba(241, 110, 34, 0.18);
}

.service-tag {
  font-size: 0.7rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.78);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.card-body h3 {
  font-size: 1.25rem;
  font-weight: 900;
  margin-bottom: 10px;
}

.card-body p {
  color: var(--text-dim);
  line-height: 1.7;
  font-size: 0.98rem;
}

.card-footer {
  margin-top: 18px;
}

.service-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 900;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

/* CTA Box */
.support-cta-box {
  padding: 28px;
}

.cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.cta-text h3 {
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 12px;
}

.cta-text p {
  color: var(--text-dim);
  font-size: 1.02rem;
  line-height: 1.65;
}

.cta-actions {
  display: flex;
  gap: 16px;
}

@media (max-width: 1100px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-content { flex-direction: column; text-align: center; }
}

@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .service-card { padding: 22px; }
}
</style>
