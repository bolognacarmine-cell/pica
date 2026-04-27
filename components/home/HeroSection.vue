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
  <section class="hero hero--video">
    <div class="hero-media">
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
      
      <div class="hero-scrim" aria-hidden="true"></div>
      
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge-wrapper">
            <span class="hero-badge">{{ badge }}</span>
          </div>
          
          <h1 class="hero-title">
            {{ title }}
          </h1>
          
          <p class="hero-subtitle">
            {{ subtitle }}
          </p>
          
          <div class="hero-cta">
            <a href="#contatti" class="btn btn--primary">
              Richiedi informazioni
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <NuxtLink to="/veicoli" class="btn btn--secondary">
              Scopri i veicoli
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="hero-corner" aria-label="Controlli Hero">
        <NuxtLink to="/" class="hero-logo-link" aria-label="Pica Caravan - Home">
          <span class="hero-logo-shell">
            <img
              src="/logo-pica.png"
              alt="Pica Caravan"
              class="hero-logo"
              decoding="async"
              fetchpriority="high"
            />
          </span>
        </NuxtLink>

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
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #000;
}

.hero-media {
  position: relative;
  width: 100%;
  height: 100vh;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-scrim {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(1200px 680px at 22% 40%, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.28) 55%, rgba(0, 0, 0, 0) 72%),
    linear-gradient(90deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.22) 46%, rgba(0, 0, 0, 0) 70%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.12) 52%, rgba(0, 0, 0, 0) 78%);
}

.hero-content {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  padding: 22px 16px;
}

@media (min-width: 768px) {
  .hero-content {
    align-items: center;
    padding: 0 clamp(28px, 4vw, 64px);
  }
}

.hero-text {
  width: 100%;
  max-width: 620px;
  padding: 18px 18px;
  border-radius: 22px;
  background: rgba(10, 10, 10, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
}

@media (min-width: 768px) {
  .hero-text {
    padding: 22px 22px;
  }
}

.hero-corner {
  position: absolute;
  top: calc(14px + env(safe-area-inset-top));
  right: calc(14px + env(safe-area-inset-right));
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

@media (min-width: 768px) {
  .hero-corner {
    top: 18px;
    right: 18px;
    gap: 12px;
  }
}

.hero-logo-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.hero-logo-shell {
  display: inline-flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.hero-logo-link:hover .hero-logo-shell {
  background: rgba(0, 0, 0, 0.52);
  border-color: rgba(255, 255, 255, 0.22);
  transform: translateY(-1px);
}

.hero-logo {
  width: clamp(96px, 11vw, 138px);
  height: auto;
  display: block;
  opacity: 0.96;
  filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.35));
}

@media (max-width: 420px) {
  .hero-logo-shell {
    padding: 8px 10px;
  }

  .hero-logo {
    width: 110px;
  }
}

.video-audio-toggle {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 16px;
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

@media (max-width: 767px) {
  .video-audio-toggle {
    padding: 10px 12px;
  }
}

.video-audio-toggle:hover {
  background: rgba(0, 0, 0, 0.85);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.hero-badge-wrapper {
  margin-bottom: 14px;
}

.hero-badge {
  display: inline-block;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}

.hero-title {
  font-size: clamp(2.05rem, 6vw, 4.6rem);
  font-weight: 950;
  line-height: 1.02;
  margin-bottom: 14px;
  color: rgba(255, 255, 255, 0.98);
  text-wrap: balance;
  letter-spacing: -0.04em;
  max-width: 19ch;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.38);
}

.hero-subtitle {
  font-size: clamp(1.03rem, 1.9vw, 1.24rem);
  color: rgba(255, 255, 255, 0.76);
  margin-bottom: 22px;
  max-width: 56ch;
  line-height: 1.55;
}

.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .hero-cta {
    flex-direction: row;
    align-items: center;
    gap: 14px;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.18);
  min-height: 48px;
}

@media (max-width: 767px) {
  .btn {
    width: 100%;
    justify-content: center;
  }
}

.btn--primary {
  background: var(--primary);
  color: white;
  box-shadow: 0 14px 34px rgba(241, 110, 34, 0.18);
}

.btn--primary:hover {
  background: var(--primary-2);
  transform: translateY(-1px);
}

.btn--secondary {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.92);
}

.btn--secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn svg {
  transition: transform 0.2s ease;
}

.btn:hover svg {
  transform: translateX(2px);
}

@media (max-width: 767px) {
  .hero-content {
    padding-bottom: calc(18px + env(safe-area-inset-bottom));
    padding-left: calc(16px + env(safe-area-inset-left));
    padding-right: calc(16px + env(safe-area-inset-right));
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn,
  .video-audio-toggle {
    transition: none;
  }
}

@media (prefers-contrast: high) {
  .video-audio-toggle {
    border-width: 2px;
  }
}
</style>
