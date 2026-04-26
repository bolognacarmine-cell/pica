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

/* Mobile First: Video full-width, content sotto con animazione */
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
    padding: var(--spacing-2xl) var(--spacing-lg);
    background: linear-gradient(135deg, #0F0A08 0%, #1A1512 100%);
    z-index: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  
  /* Animazione entrance per caption mobile */
  .hero-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(241, 110, 34, 0.1), transparent);
    animation: slideInOverlay 2s ease-out 0.5s forwards;
  }
  
  .hero-badge-wrapper {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out 0.3s forwards;
  }
  
  .hero-title {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out 0.5s forwards;
  }
  
  .hero-subtitle {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out 0.7s forwards;
  }
  
  .hero-cta {
    opacity: 0;
    transform: translateY(40px);
    animation: fadeInUp 0.8s ease-out 0.9s forwards;
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
    background: linear-gradient(135deg, #0F0A08 0%, #1A1512 100%);
    z-index: 2;
    overflow: hidden;
  }
  
  /* Animazioni desktop */
  .hero-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(241, 110, 34, 0.08), transparent);
    animation: slideInOverlay 2.5s ease-out 0.3s forwards;
  }
  
  .hero-badge-wrapper {
    opacity: 0;
    transform: translateX(-30px);
    animation: fadeInLeft 0.8s ease-out 0.2s forwards;
  }
  
  .hero-title {
    opacity: 0;
    transform: translateX(-40px);
    animation: fadeInLeft 0.8s ease-out 0.4s forwards;
  }
  
  .hero-subtitle {
    opacity: 0;
    transform: translateX(-30px);
    animation: fadeInLeft 0.8s ease-out 0.6s forwards;
  }
  
  .hero-cta {
    opacity: 0;
    transform: translateX(-30px);
    animation: fadeInLeft 0.8s ease-out 0.8s forwards;
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

/* Content Typography - Gerarchia chiara con design moderno */
.hero-badge-wrapper {
  margin-bottom: var(--spacing-lg);
  position: relative;
}

.hero-badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary) 0%, #F16913 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0 4px 15px rgba(241, 110, 34, 0.3);
  position: relative;
  overflow: hidden;
}

.hero-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 3s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(32px, 6vw, 56px);
  font-weight: 900;
  line-height: 1.05;
  color: #ffffff;
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
  position: relative;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), transparent);
  border-radius: 2px;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: clamp(40px, 5vw, 64px);
    max-width: 500px;
  }
}

.hero-subtitle {
  font-size: clamp(16px, 2.5vw, 20px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--spacing-2xl);
  max-width: 500px;
  position: relative;
  padding-left: 20px;
}

.hero-subtitle::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, var(--primary), transparent);
  border-radius: 1px;
}

/* CTA - Design premium con animazioni */
.hero-cta {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: flex-start;
  position: relative;
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
  gap: 10px;
  padding: 16px 28px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  min-height: 52px;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 767px) {
  .btn {
    width: 100%;
    justify-content: center;
    padding: 18px 24px;
  }
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn--primary {
  background: linear-gradient(135deg, var(--primary) 0%, #F16913 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(241, 110, 34, 0.4);
}

.btn--primary::before {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

.btn--primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(241, 110, 34, 0.5);
}

.btn--secondary {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn--secondary::before {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
}

.btn--secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

.btn svg {
  transition: transform 0.3s ease;
}

.btn:hover svg {
  transform: translateX(4px);
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
