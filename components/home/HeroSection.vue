<script setup>
import { ref } from 'vue'

// Props per dinamismo
defineProps({
  badge: { type: String, default: 'Pica Caravan • San Nicola la Strada' },
  title: { type: String, default: 'Viaggia senza compromessi.' },
  subtitle: { type: String, default: 'Camper e roulotte selezionati. Nuovo, usato garantito e officina specializzata.' }
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

.hero-video-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1200px 650px at 24% 30%, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.56) 56%, rgba(0, 0, 0, 0.82) 100%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.35) 42%, rgba(0, 0, 0, 0.78) 100%);
  pointer-events: none;
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
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 10px 16px;
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.video-audio-toggle:hover {
  background: rgba(0, 0, 0, 0.68);
  border-color: rgba(255, 255, 255, 0.24);
}

.hero-container {
  position: relative;
  z-index: 1;
}

.hero-content {
  width: 100%;
}

.hero-text-wrapper {
  max-width: 720px;
  background: rgba(0, 0, 0, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  padding: 30px 30px;
  box-shadow: 0 14px 42px rgba(0, 0, 0, 0.26);
}

.hero-badge-wrapper {
  margin-bottom: 18px;
}

.hero-badge {
  display: inline-block;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.hero-title {
  font-size: clamp(2.3rem, 6.2vw, 4.8rem);
  font-weight: 900;
  line-height: 1.02;
  margin-bottom: 18px;
  color: #fff;
  text-wrap: balance;
  letter-spacing: -0.04em;
  max-width: 18ch;
}

.hero-subtitle {
  font-size: clamp(1.03rem, 1.8vw, 1.25rem);
  color: rgba(255, 255, 255, 0.76);
  margin-bottom: 34px;
  max-width: 56ch;
  line-height: 1.55;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero-actions .btn-premium {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 18px;
  border-radius: 999px;
  background: var(--primary);
  color: #fff;
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 14px 34px rgba(241, 110, 34, 0.16);
}

.hero-actions .btn-premium:hover {
  background: var(--primary-2);
}

.hero-actions .btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.92);
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.hero-actions .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
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
