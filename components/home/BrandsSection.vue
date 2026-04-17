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
  color: var(--primary-2);
  text-transform: uppercase;
  font-weight: 800;
  font-size: .85rem;
  letter-spacing: .12em;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.brand-pill {
  min-height: 80px;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #fff;
  text-align: center;
  padding: 14px;
  border-radius: var(--radius);
  background: var(--panel);
  border: 1px solid var(--line);
  transition: all 0.3s ease;
  cursor: default;
}

.brand-pill:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  background: var(--panel-2);
}
</style>