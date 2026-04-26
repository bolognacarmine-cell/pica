<script setup>
import { ref } from 'vue'

// Props per dinamismo
defineProps({
  badge: { type: String, default: 'Vendita e Rimessaggio a San Nicola la Strada' },
  title: { type: String, default: 'Camper e roulotte per partire senza pensieri' },
  subtitle: { type: String, default: 'Vendita nuovo e usato garantito, assistenza e rimessaggio sicuro.' }
})

const isMuted = ref(true)

const toggleMute = () => {
  isMuted.value = !isMuted.value
  const video = document.querySelector('.hero-video')
  if (video) video.muted = isMuted.value
}

</script>

<template>
  <section class="hero">
    <div class="hero-video-wrapper">
      <video
        class="hero-video"
        autoplay
        loop
        muted
        playsinline
        preload="auto"
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>
      
      <button 
        @click="toggleMute"
        class="video-audio-toggle"
        :aria-label="isMuted ? 'Attiva audio' : 'Disattiva audio'"
      >
        <svg v-if="isMuted" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
        <span class="text-xs font-black uppercase tracking-widest hidden md:block">{{ isMuted ? 'Senti Audio' : 'Muto' }}</span>
      </button>
    </div>

    <div class="container hero-container">
      <div class="hero-content">
        <div class="hero-text-wrapper">
          <div class="hero-badge-wrapper">
            <span class="hero-badge">{{ badge }}</span>
          </div>
          <h1 class="hero-title">
            {{ title }}
          </h1>
          <p class="hero-subtitle">
            {{ subtitle }}
          </p>
          <div class="hero-actions">
            <a href="#contatti" class="btn-premium">
              Richiedi informazioni
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <NuxtLink to="/veicoli" class="btn-secondary">
              Scopri i veicoli
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #000;
}

.hero-video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-audio-toggle {
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 1;
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 100px;
  color: #111;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.hero-container {
  position: relative;
  z-index: 1;
}

.hero-text-wrapper {
  max-width: 800px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 28px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}

.hero-badge-wrapper {
  margin-bottom: 24px;
}

.hero-badge {
  display: inline-block;
  padding: 10px 24px;
  background: #fff;
  border: 1px solid rgba(241, 110, 34, 0.4);
  border-radius: 100px;
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 24px;
  color: #111;
  text-wrap: balance;
  letter-spacing: -0.04em;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: #444;
  margin-bottom: 48px;
  max-width: 600px;
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .video-audio-toggle {
    right: 16px;
    bottom: 16px;
  }
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  .hero-actions > * {
    width: 100%;
  }
  .hero-text-wrapper {
    padding: 18px 18px;
  }
}
</style>
