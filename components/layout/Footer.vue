<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col brand-col">
        <div class="footer-logo-container mb-6">
          <img src="/logo-pica.png" alt="Pica Caravan Logo" class="footer-logo-img" />
        </div>
        <div class="footer-logo-text">
          <span class="brand-name">PICA CARAVAN</span>
          <span class="brand-tagline">Vendita & Rimessaggio</span>
        </div>
        <p class="brand-desc">Pica Caravan di Antimo Pica. La tua concessionaria di riferimento a San Nicola la Strada per la vendita di camper, roulotte e rimessaggio sicuro.</p>
        <div class="social-links">
          <a href="#" class="social-link">FB</a>
          <a href="#" class="social-link">IG</a>
        </div>
      </div>
      
      <div class="footer-col">
        <h4>Navigazione</h4>
        <ul class="footer-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/veicoli">Veicoli</NuxtLink></li>
          <li><NuxtLink to="/#rimessaggio">Rimessaggio</NuxtLink></li>
          <li><NuxtLink to="/#servizi">Servizi</NuxtLink></li>
          <li><NuxtLink to="/#azienda">Azienda</NuxtLink></li>
        </ul>
      </div>
      
      <div class="footer-col">
        <h4>Contatti</h4>
        <ul class="footer-links">
          <li>📍 Via Retella / Pizzo Pilato 2ª Traversa n. 2, San Nicola la Strada (CE)</li>
          <li>📞 0823 224038</li>
          <li>✉️ info@picacaravan.it</li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container bottom-flex">
        <p>&copy; 2026 Pica Caravan. Tutti i diritti riservati.</p>
        <div class="privacy-links">
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
          <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #050505;
  padding: 80px 0 0;
  border-top: 1px solid var(--line);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 60px;
}

.brand-col {
  max-width: 350px;
}

.footer-logo-img {
  height: 80px;
  width: auto;
  object-fit: contain;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
  letter-spacing: -0.02em;
  line-height: 1;
}

.brand-tagline {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--primary-2);
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-top: 4px;
}

.brand-desc {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 24px;
}

.footer-col h4 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  color: var(--muted);
  font-size: 0.95rem;
  margin-bottom: 12px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--primary-2);
}

.footer-bottom {
  padding: 30px 0;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.85rem;
}

.bottom-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.privacy-links {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .bottom-flex {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
</style>
