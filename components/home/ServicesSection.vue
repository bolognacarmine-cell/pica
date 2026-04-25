<script setup>
import { ref, onMounted } from 'vue'

const latestNews = ref(null)
const latestMaintenance = ref(null)

const fetchFeaturedArticles = async () => {
  try {
    const [newsRes, maintRes] = await Promise.all([
      $fetch('/api/blog', { query: { category: 'Novità Camper', limit: 1 } }),
      $fetch('/api/blog', { query: { category: 'Manutenzione', limit: 1 } })
    ])
    
    if (newsRes.posts?.length > 0) latestNews.value = newsRes.posts[0]
    if (maintRes.posts?.length > 0) latestMaintenance.value = maintRes.posts[0]
  } catch (err) {
    console.error('Errore recupero articoli per servizi:', err)
  }
}

onMounted(() => {
  fetchFeaturedArticles()
})
</script>

<template>
<section id="servizi" class="benefits-section">
  <div class="container">
    <div class="section-heading text-center">
      <p class="section-kicker">Cosa Offriamo</p>
      <h2>I nostri servizi</h2>
      <p>Soluzioni complete per la tua vita in movimento, dalla vendita al rimessaggio sicuro.</p>
    </div>
    <div class="benefits-grid">
      <div class="benefit-card">
        <div class="benefit-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 104 0m6 0a2 2 0 104 0m-4 0a2 2 0 104 0"/>
          </svg>
        </div>
        <h3>Camper Nuovi e Usati</h3>
        <p>Ampia selezione di autocaravan dei migliori marchi, con usato garantito e controllato.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
        </div>
        <h3>Roulotte e Caravan</h3>
        <p>Soluzioni abitative mobili per ogni esigenza, dalle compatte alle familiari full-optional.</p>
      </div>
      <div id="rimessaggio" class="benefit-card highlight">
        <div class="benefit-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3>Rimessaggio Sicuro</h3>
        <p>Area attrezzata e videosorvegliata a San Nicola la Strada per la sosta del tuo veicolo.</p>
        <a href="#contatti" class="btn-text">Richiedi un posto →</a>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 2L3 7v9a2 2 0 002 2h14a2 2 0 002-2V7l-6-5z"/>
            <polyline points="3,7 12,13 21,7"/>
            <line x1="12" y1="22" x2="12" y2="13"/>
          </svg>
        </div>
        <h3>Allestimenti Street-Food</h3>
        <p>Progettiamo e realizziamo allestimenti professionali personalizzati per il tuo business su ruote.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h3>Riparazioni e Assistenza</h3>
        <p>Specializzati in ristrutturazioni complete e riparazioni certificate per camper, roulotte e container.</p>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.benefits-section {
  padding: 100px 0;
  background: var(--bg);
  scroll-margin-top: 100px;
}

.text-center {
  text-align: center;
}

.section-heading {
  margin-bottom: 60px;
}

.section-kicker {
  color: var(--accent);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  margin-bottom: 12px;
}

.section-heading h2 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 16px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.benefit-card {
  background: var(--panel);
  padding: 40px;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.benefit-card.highlight {
  border-color: var(--primary);
  background: var(--panel);
}

.benefit-icon {
  color: var(--primary);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(255, 107, 53, 0.1);
  border-radius: 20px;
}

.benefit-card h3 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: #fff;
}

.benefit-card p {
  color: var(--muted);
  line-height: 1.6;
  font-size: 1rem;
}

.btn-text {
  margin-top: auto;
  padding-top: 20px;
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
}
</style>
