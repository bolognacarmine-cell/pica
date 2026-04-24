<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Props per dinamismo
defineProps({
  badge: { type: String, default: 'Vendita e Rimessaggio a San Nicola la Strada' },
  title: { type: String, default: 'Camper e roulotte per partire senza pensieri' },
  subtitle: { type: String, default: 'Vendita nuovo e usato garantito, assistenza e rimessaggio sicuro.' }
})

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

let ctx

const isMuted = ref(true)

const toggleMute = () => {
  isMuted.value = !isMuted.value
  const video = document.querySelector('.hero-video')
  if (video) video.muted = isMuted.value
}

onMounted(async () => {
  await nextTick()
  // Animations removed for better performance
})
</script>

<template>
  <section class="hero">
    <!-- Video di sfondo con overlay gradiente premium -->
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
      <div class="hero-overlay" />
      
      <!-- Video Audio Toggle Premium -->
      <button 
        @click="toggleMute"
        class="video-audio-toggle"
        :aria-label="isMuted ? 'Attiva audio' : 'Disattiva audio'"
      >
        <svg v-if="isMuted" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
        <span class="text-[10px] font-black uppercase tracking-widest hidden md:block">{{ isMuted ? 'Audio' : 'Muto' }}</span>
      </button>
    </div>

    <!-- Contenuto testuale premium -->
    <div class="container hero-container">
      <div class="hero-content">
        <div class="hero-text-wrapper">
          <div class="hero-badge-wrapper mb-8">
            <span class="hero-badge px-6 py-2.5 bg-primary/20 border border-primary/40 text-primary text-[11px] font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-md inline-block">
              {{ badge }}
            </span>
          </div>
          
          <h1 class="hero-title text-white font-bold leading-[1.05] mb-8 tracking-tight">
            {{ title.toLowerCase().includes('roulotte') ? title.split(/roulotte/i)[0] : title }}
            <span v-if="title.toLowerCase().includes('roulotte')" class="text-primary italic font-serif">e Roulotte</span>
          </h1>
          
          <p class="hero-subtitle text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-2xl font-medium">
            {{ subtitle }}
          </p>
          
          <div class="hero-actions flex flex-wrap gap-4">
            <a href="#contatti" class="px-8 py-3 bg-primary text-white text-sm font-semibold rounded-lg uppercase tracking-wide shadow-lg shadow-primary/20 hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-0.5">
              Richiedi informazioni
            </a>
            <NuxtLink to="/veicoli" class="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold rounded-lg uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-0.5">
              Catalogo Veicoli
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator Premium -->
    <Transition name="scroll-slide" appear>
      <a href="#azienda" class="scroll-indicator no-underline group cursor-pointer">
        <div class="mouse border-2 border-white/30 group-hover:border-primary transition-colors">
          <div class="wheel bg-primary"></div>
        </div>
        <span class="text-white/60 group-hover:text-white transition-colors">Scorri per scoprire</span>
      </a>
    </Transition>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--bg);
  margin: 0;
  padding: 0;
  left: 0;
  right: 0;
  padding-top: 100px; /* Dynamic header height */
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
    padding-top: 80px;
  }
}

@media (min-width: 769px) and (max-width: 1023px) {
  .hero {
    height: 78vh;
    padding-top: 90px;
  }
}

.hero-video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.8) contrast(1.05) saturate(1.1);
  position: absolute;
  top: 0;
  left: 0;
}

@media (max-width: 768px) {
  .hero-video {
    height: 100%;
    object-position: center 30%;
  }
}

@media (min-width: 769px) and (max-width: 1023px) {
  .hero-video {
    height: 100%;
  }
}

.video-audio-toggle {
  position: absolute;
  bottom: var(--space-2xl);
  right: var(--space-2xl);
  z-index: 10;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid var(--line-elevated);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  font-weight: 600;
  font-size: var(--text-xs);
}

.video-audio-toggle:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
  border-color: var(--primary);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.hero-container {
  position: relative;
  z-index: 2;
  padding-top: clamp(80px, 10vh, 120px);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-text-wrapper {
  max-width: 800px;
  padding: 0 1.5rem;
  text-align: left;
}

.hero-badge-wrapper {
  margin-bottom: var(--space-xl);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-sm) var(--space-lg);
  background: rgba(255, 107, 53, 0.15);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: var(--radius-full);
  color: var(--primary);
  font-size: var(--text-sm);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  backdrop-filter: blur(12px);
  transition: all var(--transition-base);
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  min-width: fit-content;
  text-overflow: ellipsis;
  box-sizing: border-box;
}

.hero-badge:hover {
  background: rgba(255, 107, 53, 0.25);
  border-color: var(--primary);
  transform: translateY(-2px);
}

.hero-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  font-weight: 700;
  line-height: 1;
  color: white;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  text-transform: none;
  text-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: clamp(1rem, 1.8vw, 1.35rem);
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 550px;
  font-weight: 500;
}

.hero-actions {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.hero-actions .btn {
  min-width: 180px;
}

/* Navigazione sopra il video */
.hero-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 2rem 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
  backdrop-filter: blur(10px);
}

.hero-nav .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .nav-items {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .nav-items {
    gap: 0.5rem;
  }
  
  .nav-item {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }
}

@media (max-width: 375px) {
  .nav-item {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
}

.nav-item {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: manipulation;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
}

.nav-item.router-link-active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-2xl);
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  opacity: 0.7;
  transition: all var(--transition-base);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.scroll-indicator:hover {
  opacity: 1;
  transform: translateX(-50%) translateY(-2px);
}

.scroll-indicator span {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  font-weight: 600;
}

.mouse {
  width: 30px;
  height: 48px;
  border: 2px solid var(--line-elevated);
  border-radius: var(--radius-2xl);
  position: relative;
  background: rgba(255, 255, 255, 0.02);
}

.wheel {
  width: 4px;
  height: 10px;
  background: var(--primary);
  border-radius: var(--radius-xs);
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-wheel 2s infinite;
}

@keyframes scroll-wheel {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 18px); opacity: 0; }
}

/* Slide-in transitions per Hero Section */
.hero-slide-enter-active {
  transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hero-slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.nav-slide-enter-active {
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.nav-slide-enter-from {
  transform: translateX(-50%);
  opacity: 0;
}

.content-slide-enter-active {
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.content-slide-enter-from {
  transform: translateX(-80%);
  opacity: 0;
}

.scroll-slide-enter-active {
  transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-slide-enter-from {
  transform: translateX(-30%);
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
  
  .hero-actions > * {
    width: 100%;
    justify-content: center;
    min-height: 48px;
    padding: 0.75rem 1rem;
  }
  
  .video-audio-toggle {
    bottom: 1rem;
    right: 1rem;
    padding: 0.5rem 0.75rem;
  }
  
  .scroll-indicator {
    bottom: 1rem;
  }
  
  .content-slide-enter-from {
    transform: translateX(-60%);
  }
}

/* Small phones */
@media (max-width: 430px) {
  .hero-title {
    font-size: clamp(1.5rem, 9vw, 2.25rem);
    line-height: 1.1;
  }
  
  .hero-subtitle {
    font-size: clamp(0.875rem, 4vw, 1rem);
    line-height: 1.4;
  }
  
  .hero-text-wrapper {
    padding: 0 0.75rem;
  }
  
  .hero-badge {
    font-size: 0.7rem;
    padding: 0.375rem 0.875rem;
    letter-spacing: 0.03em;
  }
  
  .hero-actions > * {
    font-size: 0.875rem;
    padding: 0.625rem 0.875rem;
  }
}

@media (max-width: 390px) {
  .hero-title {
    font-size: clamp(1.375rem, 8.5vw, 2rem);
  }
  
  .hero-subtitle {
    font-size: clamp(0.8rem, 3.8vw, 0.95rem);
  }
  
  .hero-badge {
    font-size: 0.65rem;
    padding: 0.325rem 0.625rem;
    letter-spacing: 0.02em;
  }
}

@media (max-width: 375px) {
  .hero-title {
    font-size: clamp(1.25rem, 8vw, 1.875rem);
  }
  
  .hero-subtitle {
    font-size: clamp(0.75rem, 3.5vw, 0.9rem);
  }
  
  .hero-text-wrapper {
    padding: 0 0.625rem;
  }
  
  .hero-badge {
    font-size: 0.6rem;
    padding: 0.3rem 0.5rem;
    letter-spacing: 0.01em;
  }
  
  .video-audio-toggle span {
    display: none;
  }
  
  .content-slide-enter-from {
    transform: translateX(-35%);
  }
}
</style>
