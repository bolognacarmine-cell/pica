<script setup>
// Marchi principali e Service Center
const brands = ['Across Car', 'Viesa', 'Thetford', 'Webasto', 'Hymer', 'Knaus']
</script>

<template>
  <section id="marchi" class="brands-section">
    <div class="container">
      <div class="section-heading">
        <p class="section-kicker">Partnership & Qualità</p>
        <h2>Service Center & Concessionario</h2>
        <p>Siamo centro autorizzato per i migliori sistemi di bordo e rivenditori ufficiali Across Car.</p>
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
  padding: 80px 0;
  background: var(--bg);
  color: #f5f5f5;
  scroll-margin-top: 100px;
}

.section-heading {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 48px;
}

.section-heading h2 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 4vw, 3rem);
}

.section-kicker {
  color: var(--primary);
  text-transform: uppercase;
  font-weight: 800;
  font-size: .85rem;
  letter-spacing: .12em;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
}

.brand-pill {
  min-height: 100px;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 1.1rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  padding: 20px;
  border-radius: var(--radius-md);
  cursor: default;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
</style>
