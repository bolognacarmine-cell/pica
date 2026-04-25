
<script setup>
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
            <div class="value-card glass-panel">
              <div class="value-icon">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <div class="value-info">
                <strong>Soluzioni Su Misura</strong>
                <p>Dal primo camper alla roulotte per tutta la famiglia, ti guidiamo nella scelta migliore.</p>
              </div>
            </div>
            <div class="value-card glass-panel">
              <div class="value-icon">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div class="value-info">
                <strong>Affidabilità Locale</strong>
                <p>Un nome storico sul territorio casertano, sinonimo di fiducia e assistenza continua.</p>
              </div>
            </div>
          </div>

          <div class="about-actions">
            <NuxtLink to="/veicoli" class="btn-premium">
              Scopri il parco veicoli
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
            <a href="#contatti" class="btn-secondary-glass">Richiedi informazioni</a>
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
  padding: 120px 0;
  background: var(--bg);
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
  border-radius: var(--radius-lg);
}

.layer-bg {
  top: 10%;
  right: 0;
  width: 80%;
  height: 70%;
  background: rgba(241, 110, 34, 0.06);
  border: 1px solid rgba(241, 110, 34, 0.1);
  z-index: 1;
}

.layer-frame {
  top: 15%;
  left: 5%;
  width: 75%;
  height: 75%;
  border: 2px solid var(--line);
  z-index: 2;
}

.layer-main {
  top: 12%;
  left: 10%;
  width: 80%;
  height: 80%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  padding: 24px;
}

.layer-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: var(--radius-md);
}

.layer-badge {
  bottom: 5%;
  right: -5%;
  z-index: 4;
}

.experience-badge-content {
  background: var(--primary-gradient);
  padding: 24px 32px;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 15px 30px var(--primary-glow);
}

.experience-badge-content .years {
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1;
  color: #fff;
  letter-spacing: -0.02em;
}

.experience-badge-content .label {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.9);
}

/* Content Styles Refinement */
.value-card {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 24px;
}

@media (max-width: 1200px) {
  .about-grid { gap: 60px; }
  .layer-badge { right: 0; }
}

.about-title {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 950;
  line-height: 1.05;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

.about-subtitle {
  font-size: 1.25rem;
  color: var(--text-dim);
  margin-bottom: 32px;
  font-weight: 500;
  line-height: 1.5;
}

.about-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-dim);
  margin-bottom: 48px;
}

.about-text p {
  margin-bottom: 20px;
}

.about-text strong {
  color: #fff;
  font-weight: 800;
}

.about-values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 48px;
}

.value-info strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 4px;
  color: #fff;
}

.value-info p {
  font-size: 0.9rem;
  color: var(--text-dim);
  line-height: 1.5;
}

.value-icon {
  background: var(--primary-glow);
  color: var(--primary);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid var(--primary);
  flex-shrink: 0;
}

.about-actions {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
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
