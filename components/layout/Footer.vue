<script setup>
const year = new Date().getFullYear()
const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Parco veicoli', to: '/veicoli' },
  { label: 'Assistenza', to: '/#assistenza' },
  { label: 'Preventivo', to: '/#preventivo' },
  { label: 'Contatti', to: '/#contatti' }
]

const companyLinks = [
  { label: 'Azienda', to: '/#azienda' },
  { label: 'Marchi', to: '/#marchi' },
  { label: 'Blog', to: '/blog' }
]
</script>

<template>
  <footer class="site-footer" aria-label="Footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-grid">
          <div class="footer-brand">
            <NuxtLink to="/" class="brand-link">
              <img src="/logo-pica.png" alt="Pica Caravan" class="brand-logo" />
              <div class="brand-text">
                <span class="brand-name">Pica Caravan</span>
                <span class="brand-sub">Vendita • Assistenza • Rimessaggio</span>
              </div>
            </NuxtLink>

            <p class="brand-desc">
              Consulenza concreta per scegliere il veicolo giusto, con supporto tecnico e servizi in sede a San Nicola la Strada (CE).
            </p>

            <div class="footer-cta">
              <a class="footer-btn footer-btn--primary" href="tel:0823224038" aria-label="Chiama 0823 224038">
                Chiama
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </a>

              <a class="footer-btn footer-btn--secondary" href="https://wa.me/390823224038" target="_blank" rel="noopener noreferrer" aria-label="Apri WhatsApp">
                WhatsApp
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.464 3.488A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <nav class="footer-nav" aria-label="Link rapidi">
            <h4 class="footer-title">Link rapidi</h4>
            <ul class="footer-list">
              <li v-for="l in quickLinks" :key="l.label">
                <NuxtLink class="footer-link" :to="l.to">{{ l.label }}</NuxtLink>
              </li>
            </ul>
          </nav>

          <div class="footer-contact">
            <h4 class="footer-title">Contatti</h4>
            <address class="footer-address">
              Via Retella / Pizzo Pilato 2ª Traversa n. 2<br />
              81020 San Nicola la Strada (CE)
            </address>

            <div class="footer-meta">
              <a class="footer-link" href="tel:0823224038">0823 224038</a>
              <a class="footer-link" href="tel:3332327592">333 2327592</a>
              <a class="footer-link" href="mailto:info@picacaravan.it">info@picacaravan.it</a>
            </div>

            <div class="footer-secondary">
              <h4 class="footer-title footer-title--sm">Azienda</h4>
              <ul class="footer-list footer-list--inline">
                <li v-for="l in companyLinks" :key="l.label">
                  <NuxtLink class="footer-link" :to="l.to">{{ l.label }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-legal">
          © {{ year }} Pica Caravan. Tutti i diritti riservati. P.IVA 02741910613
        </p>
        <div class="footer-legal-links">
          <NuxtLink to="/privacy-policy" class="footer-link footer-link--muted">Privacy</NuxtLink>
          <NuxtLink to="/cookie-policy" class="footer-link footer-link--muted">Cookie</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--bg);
  border-top: 1px solid var(--line);
}

.footer-top {
  padding: 72px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.25fr;
  gap: 28px;
  align-items: start;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
}

.brand-logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.10);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.94);
  text-transform: uppercase;
}

.brand-sub {
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
}

.brand-desc {
  margin: 14px 0 0;
  max-width: 62ch;
  color: var(--text-dim);
  line-height: 1.65;
  font-size: 0.98rem;
}

.footer-cta {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.footer-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 900;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-btn--primary {
  background: rgba(241, 110, 34, 0.12);
  border-color: rgba(241, 110, 34, 0.34);
  color: rgba(241, 110, 34, 0.98);
}

.footer-btn--secondary {
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.90);
}

.footer-title {
  margin: 0 0 12px;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.88);
}

.footer-title--sm {
  margin-top: 18px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.footer-list--inline {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.84);
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9rem;
}

.footer-link:hover {
  color: var(--primary-2);
}

.footer-link:focus-visible,
.footer-btn:focus-visible {
  outline: 2px solid rgba(241, 110, 34, 0.7);
  outline-offset: 3px;
}

.footer-address {
  margin: 0;
  color: var(--text-dim);
  font-style: normal;
  line-height: 1.65;
  font-size: 0.98rem;
}

.footer-meta {
  margin-top: 12px;
  display: grid;
  gap: 8px;
}

.footer-bottom {
  padding: 18px 0 26px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-legal {
  margin: 0;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.72rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.footer-legal-links {
  display: flex;
  gap: 14px;
}

.footer-link--muted {
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.78rem;
}
</style>
