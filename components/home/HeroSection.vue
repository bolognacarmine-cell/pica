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
  <!-- Hero Section con layout responsive: mobile caption sotto, desktop split -->
  <section class="hero hero--video">
    <!-- Media container: video su mobile (full), su desktop (destra) -->
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
      
      <!-- Overlay leggero per migliorare contrasto su mobile -->
      <div class="hero-overlay hero-overlay--gradient"></div>
      
      <!-- Controllo audio: posizionato per non confliggere con CTA -->
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

    <!-- Content container: caption sotto su mobile, split a sinistra su desktop -->
    <div class="hero-content">
      <!-- Badge per contesto -->
      <div class="hero-badge-wrapper">
        <span class="hero-badge">{{ badge }}</span>
      </div>
      
      <!-- Titolo principale con gerarchia chiara -->
      <h1 class="hero-title">
        {{ title }}
      </h1>
      
      <!-- Sottotitolo opzionale per dettagli -->
      <p class="hero-subtitle">
        {{ subtitle }}
      </p>
      
      <!-- CTA con gerarchia primaria/secondaria -->
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
  </section>
</template>

<style scoped>
/* Hero Section - Layout responsive: mobile caption, desktop split */
.hero {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #000;
}

/* Mobile First: Video full-width, content sotto */
@media (max-width: 767px) {
  .hero {
    min-height: 100vh;
    flex-direction: column;
  }
  
  .hero-media {
    position: relative;
    width: 100%;
    height: 60vh;
    min-height: 400px;
  }
  
  .hero-content {
    position: relative;
    width: 100%;
    padding: var(--spacing-xl) var(--spacing-md);
    background: var(--surface);
    z-index: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

/* Desktop: Layout split (testo a sinistra, video a destra) */
@media (min-width: 768px) {
  .hero {
    min-height: 100vh;
    flex-direction: row;
  }
  
  .hero-media {
    width: 55%;
    height: 100vh;
    position: relative;
  }
  
  .hero-content {
    width: 45%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--spacing-2xl);
    background: var(--surface);
    z-index: 2;
  }
}

/* Media Container */
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Overlay per migliorare contrasto (solo su mobile) */
.hero-overlay--gradient {
  display: none;
}

@media (max-width: 767px) {
  .hero-overlay--gradient {
    display: block;
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
}

/* Controllo Audio - posizionato per non confliggere */
.video-audio-toggle {
  position: absolute;
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
  z-index: 10;
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
    bottom: var(--spacing-md);
    right: var(--spacing-md);
    padding: 10px 14px;
  }
}

.video-audio-toggle:hover {
  background: rgba(0, 0, 0, 0.85);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

/* Content Typography - Gerarchia chiara */
.hero-badge-wrapper {
  margin-bottom: var(--spacing-md);
}

.hero-badge {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-title {
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 900;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: clamp(36px, 4vw, 56px);
    max-width: 500px;
  }
}

.hero-subtitle {
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 500px;
}

/* CTA - Gerarchia primaria/secondaria */
.hero-cta {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: flex-start;
}

@media (min-width: 768px) {
  .hero-cta {
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-lg);
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  min-height: 48px; /* Touch target WCAG */
}

@media (max-width: 767px) {
  .btn {
    width: 100%;
    justify-content: center;
    padding: 16px 24px;
  }
}

.btn--primary {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn--primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.btn--secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border);
}

.btn--secondary:hover {
  background: var(--surface-hover);
  border-color: var(--primary);
  color: var(--primary);
}

/* Safe Area e Spaziamenti */
@media (max-width: 767px) {
  .hero-content {
    padding-top: calc(var(--spacing-xl) + env(safe-area-inset-top));
    padding-bottom: calc(var(--spacing-xl) + env(safe-area-inset-bottom));
  }
  
  .video-audio-toggle {
    right: calc(var(--spacing-md) + env(safe-area-inset-right));
    bottom: calc(var(--spacing-md) + env(safe-area-inset-bottom));
  }
}

/* Performance e Accessibilità */
@media (prefers-reduced-motion: reduce) {
  .btn,
  .video-audio-toggle {
    transition: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .btn--primary {
    border: 2px solid currentColor;
  }
  
  .video-audio-toggle {
    border-width: 2px;
  }
}
</style>
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
