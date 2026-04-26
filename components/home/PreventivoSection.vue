<script setup>
import { ref } from 'vue'

const showGdpr = ref(false)
const showInfo = ref(false)

const toggleGdpr = () => {
  showGdpr.value = !showGdpr.value
}

const toggleInfo = () => {
  showInfo.value = !showInfo.value
}

</script>

<template>
  <section id="preventivo" class="preventivo-section">
    <div class="container">
      <div class="preventivo-inner">
        <header class="preventivo-header">
          <p class="section-kicker">Consulenza personalizzata</p>
          <h2 class="section-title">Pronto a partire?</h2>
          <p class="preventivo-subtitle">
            Raccontaci cosa cerchi: ti risponde un consulente con una proposta chiara, pensata per il tuo utilizzo e il tuo budget.
          </p>
        </header>

        <div class="action-cards-grid">
          <div class="action-card action-card--light glass-panel">
            <div class="action-card-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>

            <h3 class="action-card-title">Parla con un <span class="accent">consulente</span></h3>
            <p class="action-card-text">Compila il form: risposta entro 24 ore lavorative, con indicazioni concrete.</p>

            <NuxtLink to="/#contatti" class="btn-premium action-card-cta">
              Richiedi consulenza
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </NuxtLink>
          </div>

          <div class="action-card action-card--accent">
            <div class="action-card-icon action-card-icon--inverse">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>

            <h3 class="action-card-title">Chiamata immediata</h3>
            <p class="action-card-text action-card-text--inverse">Parla subito con noi: orientamento rapido e indicazioni operative.</p>

            <a href="tel:3332327592" class="action-call">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              333 2327592
            </a>
          </div>
        </div>

        <div class="preventivo-faq">
          <div class="faq-item">
            <button @click="toggleInfo" class="faq-trigger" type="button">
              <span class="faq-title">Perché Pica Caravan</span>
              <svg aria-hidden="true" class="faq-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="showInfo" class="faq-content">
              Dal 2004 supportiamo chi viaggia in libertà con selezione del veicolo, assistenza certificata e rimessaggio sicuro.
            </div>
          </div>

          <div class="faq-item">
            <button @click="toggleGdpr" class="faq-trigger" type="button">
              <span class="faq-title">Trattamento dati</span>
              <svg aria-hidden="true" class="faq-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="showGdpr" class="faq-content">
              I dati sono gestiti secondo GDPR e usati solo per rispondere alla richiesta. Puoi richiedere la cancellazione in qualsiasi momento.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.preventivo-section {
  background: var(--bg);
  padding: 88px 0;
}

.preventivo-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.preventivo-header {
  text-align: center;
  max-width: 62ch;
  margin: 0 auto 44px;
}

.preventivo-subtitle {
  color: var(--text-dim);
  font-size: 1.05rem;
  line-height: 1.65;
  margin: 0;
}

.action-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 28px;
}

@media (max-width: 900px) {
  .action-cards-grid {
    grid-template-columns: 1fr;
  }
}

.action-card {
  border-radius: var(--radius-xl);
  padding: 26px;
  position: relative;
  overflow: hidden;
}

.action-card--light {
  background: rgba(255, 255, 255, 0.04);
}

.action-card--accent {
  background: var(--primary-gradient);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.action-card-icon {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(241, 110, 34, 0.12);
  color: var(--primary);
  border: 1px solid rgba(241, 110, 34, 0.18);
  margin-bottom: 16px;
}

.action-card-icon--inverse {
  background: rgba(255, 255, 255, 0.16);
  color: rgba(255, 255, 255, 0.96);
  border-color: rgba(255, 255, 255, 0.18);
}

.action-card-title {
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 0 0 10px;
  color: #fff;
}

.action-card-title .accent {
  color: var(--primary);
}

.action-card-text {
  color: var(--text-dim);
  line-height: 1.65;
  margin: 0 0 18px;
  font-size: 0.98rem;
}

.action-card-text--inverse {
  color: rgba(255, 255, 255, 0.82);
}

.action-card-cta {
  width: fit-content;
}

.action-call {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.92);
  color: rgba(241, 110, 34, 0.98);
  padding: 12px 16px;
  border-radius: 999px;
  font-weight: 900;
  letter-spacing: 0.02em;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.preventivo-faq {
  margin-top: 44px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 20px;
}

@media (max-width: 900px) {
  .preventivo-faq {
    grid-template-columns: 1fr;
  }
}

.faq-item {
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
}

.faq-trigger {
  width: 100%;
  padding: 16px 18px;
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  text-align: left;
}

.faq-title {
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.faq-content {
  padding: 0 18px 16px;
  color: var(--text-dim);
  line-height: 1.65;
  font-size: 0.95rem;
}

.faq-chevron {
  width: 16px !important;
  height: 16px !important;
  flex: none;
}
</style>
