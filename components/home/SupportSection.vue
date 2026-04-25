<script setup>
const services = [
  {
    title: 'Officina Specializzata',
    desc: 'Affida il tuo mezzo a mani esperte: eseguiamo tagliandi, riparazioni, controlli completi e installazione accessori su camper e roulotte. Un servizio preciso e trasparente, pensato per mantenere il tuo veicolo sempre efficiente.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'
  },
  {
    title: 'Ricambi Originali',
    desc: 'Utilizziamo solo componenti ufficiali per garantire la massima affidabilità e durata nel tempo.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>'
  }
]
</script>

<template>
  <section id="assistenza" class="support-section">
    <div class="container">
      <div class="section-heading text-center">
        <p class="section-kicker">Service</p>
        <h2>Assistenza Post-Vendita</h2>
        <p class="section-desc">Ci prendiamo cura del tuo veicolo con passione e professionalità anche dopo l'acquisto.</p>
      </div>

      <div class="support-grid">
        <div v-for="s in services" :key="s.title" class="support-card">
          <div class="support-icon-box" v-html="s.icon"></div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>

      <div class="support-cta">
        <div class="cta-inner">
          <div class="cta-text">
            <h3>Hai bisogno di assistenza immediata?</h3>
            <p>Prenota un appuntamento in officina o richiedi un preventivo per la manutenzione.</p>
          </div>
          <div class="cta-btns">
            <a href="tel:0823516087" class="btn-primary-custom">Chiama Ora</a>
            <a href="https://wa.me/393391581997" target="_blank" class="btn-secondary-custom">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.support-section {
  padding: 120px 0;
  background: #080808;
  position: relative;
  overflow: hidden;
}

.section-heading {
  margin-bottom: 80px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.text-center { text-align: center; }

.section-kicker {
  color: var(--primary);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.875rem;
  margin-bottom: 16px;
}

.section-heading h2 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 950;
  margin-bottom: 24px;
  line-height: 1.1;
  color: white;
}

.section-desc {
  color: var(--muted);
  font-size: 1.125rem;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-bottom: 80px;
}

.support-card {
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 48px 40px;
  border-radius: 32px;
}

.support-icon-box {
  color: var(--primary);
  margin-bottom: 24px;
  width: 70px;
  height: 70px;
  background: rgba(241, 110, 34, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid rgba(241, 110, 34, 0.2);
}

.support-card h3 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: white;
}

.support-card p {
  color: #94a3b8;
  line-height: 1.6;
}

.support-cta {
  margin-top: 40px;
}

.cta-inner {
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 60px;
  border-radius: 40px;
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
  color: var(--muted);
  font-size: 1.1rem;
}

.cta-btns {
  display: flex;
  gap: 16px;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .cta-inner {
    flex-direction: column;
    text-align: center;
    padding: 48px 32px;
  }
  .cta-btns {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .cta-btns {
    flex-direction: column;
  }
  .support-card {
    padding: 32px;
  }
}
</style>
