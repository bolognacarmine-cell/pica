
<script setup>
const lifestyleItems = [
  {
    title: 'Caschi & Accessori',
    desc: 'Dagli integrali racing ai jet urbani, scopri la nostra selezione dei migliori brand per la tua sicurezza.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    image: 'https://images.unsplash.com/photo-1677751808418-47e3ce898fe5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#accessori'
  },
  {
    title: 'Mondo Pica Caravan',
    desc: 'Entra a far parte della nostra community di appassionati di viaggi.',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
    link: '/blog'
  }
]
</script>

<template>
  <section id="lifestyle" class="lifestyle-section">
    <div class="container">
      <div class="lifestyle-header">
        <p class="section-kicker">Lifestyle</p>
        <h2 class="section-title">Vivi la tua passione al massimo</h2>
        <p class="section-subtitle">
          Non vendiamo solo veicoli, ma tutto ciò che rende unico ogni tuo viaggio.
        </p>
      </div>

      <div class="lifestyle-grid">
        <div v-for="item in lifestyleItems" :key="item.title" class="lifestyle-card">
          <div class="card-image-wrapper">
            <img 
              :src="item.image" 
              :alt="item.title" 
              class="card-image"
              loading="lazy"
              @error="(e) => e.target.src = 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'"
            />
            <div class="lifestyle-icon-badge" v-html="item.icon"></div>
          </div>
          <div class="lifestyle-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <NuxtLink :to="item.link" class="btn-lifestyle">Esplora Ora</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lifestyle-section {
  padding: 60px 0;
  background: #080808;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.lifestyle-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-kicker {
  color: var(--primary);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 950;
  margin: 16px 0;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #e5e7eb;
}

.lifestyle-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.lifestyle-card {
  background: #111;
  padding: 0;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card-image-wrapper {
  position: relative;
  height: 400px;
  overflow: hidden;
  background: #111;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.lifestyle-icon-badge {
  position: absolute;
  bottom: 20px;
  right: 24px;
  font-size: 2rem;
  background: #111;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
}

.lifestyle-info {
  padding: 40px;
  text-align: center;
}

.lifestyle-info h3 {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 16px;
}

.lifestyle-info p {
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 32px;
  font-size: 1.1rem;
}

.btn-lifestyle {
  display: inline-block;
  padding: 12px 32px;
  background: var(--primary);
  color: #fff;
  text-decoration: none;
  border-radius: 100px;
  font-weight: 800;
}

@media (max-width: 768px) {
  .lifestyle-grid { grid-template-columns: 1fr; }
  .lifestyle-card { padding: 40px 24px; }
}
</style>
