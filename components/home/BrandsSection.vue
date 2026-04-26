<script setup>
// Marchi principali e Service Center
const brands = ['Across Car', 'Viesa', 'Thetford', 'Webasto', 'Hymer', 'Knaus']
</script>

<template>
  <section id="marchi" class="brands-section">
    <div class="container">
      <div class="section-heading">
        <p class="section-kicker">Partnership & Qualità</p>
        <h2 class="section-title">Service Center e Concessionario</h2>
        <p class="section-description">Centro autorizzato per sistemi di bordo e rivenditore ufficiale Across Car. Standard tecnici e ricambi selezionati.</p>
      </div>

      <div class="brands-grid">
        <div
          v-for="brand in brands"
          :key="brand"
          class="brand-pill"
        >
          {{ brand }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.brands-section {
  padding: 88px 0;
  background: var(--bg);
  color: #f5f5f5;
}

.section-heading {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 48px;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.brand-pill {
  min-height: 76px;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.88);
  text-align: center;
  padding: 16px;
  border-radius: var(--radius-lg);
  cursor: default;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.10);
}
</style>
