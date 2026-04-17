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
        <div class="benefit-icon">🚐</div>
        <h3>Camper Nuovi e Usati</h3>
        <p>Ampia selezione di autocaravan dei migliori marchi, con usato garantito e controllato.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">🏠</div>
        <h3>Roulotte e Caravan</h3>
        <p>Soluzioni abitative mobili per ogni esigenza, dalle compatte alle familiari full-optional.</p>
      </div>
      <div id="rimessaggio" class="benefit-card highlight">
        <div class="benefit-icon">🛡️</div>
        <h3>Rimessaggio Sicuro</h3>
        <p>Area attrezzata e videosorvegliata a San Nicola la Strada per la sosta del tuo veicolo.</p>
        <a href="#contatti" class="btn-text">Richiedi un posto →</a>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">🍔</div>
        <h3>Allestimenti Street-Food</h3>
        <p>Progettiamo e realizziamo allestimenti professionali personalizzati per il tuo business su ruote.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">🛠️</div>
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
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.benefit-card.highlight {
  border-color: var(--primary);
  background: linear-gradient(145deg, var(--panel), #002d2d);
}

.benefit-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 24px;
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
  transition: color 0.3s;
}

.btn-text:hover {
  color: #fff;
}
</style>