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
          class="brand-pill glass-panel"
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
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: default;
  position: relative;
  overflow: hidden;
}

.brand-pill:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px var(--primary-glow);
}

.brand-pill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transition: 0.5s;
}

.brand-pill:hover::after {
  left: 100%;
}
</style>