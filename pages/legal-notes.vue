<template>
  <div class="legal-page">
    <!-- Header Decorativo con Gradiente -->
    <div class="legal-hero">
      <div class="container">
        <span class="legal-badge">Termini & Condizioni</span>
        <h1 class="legal-title">Note Legali</h1>
        <p class="legal-subtitle">Informazioni sulla proprietà intellettuale e termini d'uso del sito.</p>
      </div>
    </div>

    <div class="container legal-container">
      <div class="legal-layout">
        <!-- Sidebar Indice (Desktop) -->
        <aside class="legal-sidebar">
          <div class="index-card">
            <h3>Indice</h3>
            <ul>
              <li><a href="#proprieta">1. Proprietà Intellettuale</a></li>
              <li><a href="#limitazioni">2. Limitazione di Responsabilità</a></li>
              <li><a href="#link">3. Link Esterni</a></li>
            </ul>
          </div>
        </aside>

        <!-- Contenuto Principale -->
        <main class="legal-content">
          <div class="update-info">
            <span>Ultimo aggiornamento: 22 Marzo 2026</span>
          </div>

          <section id="proprieta" class="legal-section">
            <div class="section-number">01</div>
            <h2>Proprietà Intellettuale e Marchi</h2>
            <div class="section-body">
              <p>Tutti i contenuti presenti sul sito (testi, grafiche, loghi, icone, immagini, clip audio, video, software) sono di proprietà di <strong>PICA CARAVAN</strong> o dei rispettivi proprietari dei marchi citati (es. marchi motociclistici come Yamaha, Honda, Ducati, ecc.).</p>
              <p>È vietata la riproduzione, distribuzione, modifica o utilizzo di tali materiali senza espressa autorizzazione scritta dal Titolare o dai legittimi proprietari.</p>
            </div>
          </section>

          <section id="limitazioni" class="legal-section">
            <div class="section-number">02</div>
            <h2>Limitazione di Responsabilità</h2>
            <div class="section-body">
              <p>Le informazioni riportate su questo sito, inclusi prezzi, schede tecniche e disponibilità dei veicoli, hanno scopo puramente informativo e non costituiscono proposta contrattuale.</p>
              <p>Pica Caravan si riserva il diritto di modificare i contenuti in qualsiasi momento senza preavviso e non risponde di eventuali errori tipografici o imprecisioni.</p>
            </div>
          </section>

          <section id="link" class="legal-section">
            <div class="section-number">03</div>
            <h2>Link Esterni</h2>
            <div class="section-body">
              <p>Il sito può contenere collegamenti a siti web di terze parti. Pica Caravan non ha alcun controllo su tali siti e non assume alcuna responsabilità per i contenuti, la privacy o le pratiche di tali piattaforme.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Note Legali | Pica Caravan',
  meta: [
    { name: 'description', content: 'Informazioni sulla proprietà intellettuale, marchi e termini d\'uso del sito Pica Caravan.' }
  ]
})
</script>

<style scoped>
/* Importo gli stessi stili delle altre pagine legali per coerenza */
.legal-page { background: #030303; color: #fff; min-height: 100vh; }
.legal-hero { padding: 160px 0 80px; background: #0a0a0a; position: relative; overflow: hidden; text-align: center; }
.legal-badge { display: inline-block; padding: 6px 16px; background: rgba(225, 29, 72, 0.1); color: var(--primary-2); border-radius: 100px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px; border: 1px solid rgba(225, 29, 72, 0.2); }
.legal-title { font-size: clamp(3rem, 8vw, 5rem); font-weight: 950; margin-bottom: 16px; letter-spacing: -0.02em; color: #fff; }
.legal-subtitle { font-size: 1.25rem; color: #fff; max-width: 600px; margin: 0 auto; }
.legal-container { padding-bottom: 120px; }
.legal-layout { display: grid; grid-template-columns: 280px 1fr; gap: 80px; }
@media (max-width: 1024px) { .legal-layout { grid-template-columns: 1fr; } .legal-sidebar { display: none; } }
.index-card { position: static; background: #0a0a0a; border: 1px solid var(--line); border-radius: 24px; padding: 32px; }
.index-card h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 20px; color: var(--primary-2); }
.index-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
.index-card a { color: #fff; text-decoration: none; font-size: 0.95rem; }
.update-info { margin-bottom: 60px; font-size: 0.9rem; color: #fff; font-weight: 600; }
.legal-section { margin-bottom: 80px; position: relative; }
.section-number { font-size: 4rem; font-weight: 900; color: #111; position: absolute; top: -20px; left: -20px; z-index: 0; }
.legal-section h2 { font-size: 2rem; font-weight: 800; margin-bottom: 24px; position: relative; z-index: 1; }
.section-body { color: #fff; line-height: 1.8; font-size: 1.1rem; }
.section-body strong { color: #fff; }
</style>
