<script setup>
</script>

<template>
<section class="cta-band">
  <div class="container">
    <div class="cta-band-shell">
      
      <div class="cta-content">
        <p class="section-kicker">Consulenza</p>
        <h2 class="cta-title section-title">Facciamo chiarezza sul veicolo giusto per te.</h2>
        <p class="cta-desc section-description">Due minuti di contatto, una risposta concreta: selezione, disponibilità e prossimi passi, senza giri di parole.</p>
      </div>
      
      <div class="cta-actions">
        <a href="#contatti" class="btn-premium">
          Richiedi consulenza
        </a>
        <div class="secondary-actions">
          <a href="tel:0823224038" class="btn-secondary-glass">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            0823 224038
          </a>
          <a href="https://wa.me/390823224038" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3.5Z"></path></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.cta-band {
  padding: 88px 0;
  background: var(--bg);
}

.cta-band-shell {
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: center;
  padding: 36px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.10);
  overflow: hidden;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  margin: 0 0 14px;
}

.cta-desc {
  margin: 0;
}

.cta-actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.secondary-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}


.desktop-only {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-only {
    display: block;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .cta-band-shell {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 32px 20px;
    gap: 24px;
  }
  
  .cta-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .cta-desc {
    margin: 0 auto;
  }
  
  .cta-actions {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .cta-band-shell {
    border-radius: var(--radius-lg);
  }
}
</style>
