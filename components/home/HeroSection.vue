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

gsap.registerPlugin(ScrollTrigger)

let ctx

const isMuted = ref(true)

const toggleMute = () => {
  isMuted.value = !isMuted.value
  const video = document.querySelector('.hero-video')
  if (video) video.muted = isMuted.value
}

onMounted(async () => {
  await nextTick()
  ctx = gsap.context(() => {
    // Animazione di comparsa fluida ed elegante
    const textWrapper = document.querySelector('.hero-text-wrapper')
    if (textWrapper) {
      gsap.fromTo(textWrapper, 
        { opacity: 0, y: 30 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
          ease: 'power4.out'
        }
      )
    }

    // Stagger dei contenuti interni per profondità
    const internalContent = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-actions')
    if (internalContent.length > 0) {
      gsap.fromTo(internalContent,
        { opacity: 0, y: 20 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          delay: 0.8,
          ease: 'power2.out'
        }
      )
    }

    const scrollIndicator = document.querySelector('.scroll-indicator')
    if (scrollIndicator) {
      gsap.fromTo(scrollIndicator, 
        { opacity: 0, y: 20 },
        { 
          opacity: 0.6, 
          y: 0,
          duration: 1.2, 
          delay: 1.5,
          clearProps: 'transform'
        }
      )
    }

    // Parallasse discreto sullo scroll
    if (textWrapper && document.querySelector('.hero')) {
      gsap.to(textWrapper, {
        y: -30,
        opacity: 0.5,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })
    }
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section class="hero">
    <!-- Video di sfondo con overlay gradiente -->
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
      
      <!-- Video Audio Toggle -->
      <button 
        @click="toggleMute"
        class="video-audio-toggle"
        :aria-label="isMuted ? 'Attiva audio' : 'Disattiva audio'"
      >
        <svg v-if="isMuted" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
        <span class="text-xs font-black uppercase tracking-widest hidden md:block">{{ isMuted ? 'Senti Audio' : 'Muto' }}</span>
      </button>
    </div>

    <!-- Contenuto testuale -->
    <div class="container hero-container">
      <div class="hero-content">
        <div class="hero-text-wrapper">
          <div class="hero-badge-wrapper">
            <span class="hero-badge glass-panel">{{ badge }}</span>
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
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <NuxtLink to="/veicoli" class="btn-secondary-glass">
              Scopri i veicoli
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>Scorri per scoprire</span>
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
  z-index: 1;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6) contrast(1.1);
}

.video-audio-toggle {
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 100px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.video-audio-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(3, 3, 3, 0.4) 0%,
    rgba(3, 3, 3, 0.2) 50%,
    rgba(3, 3, 3, 0.8) 100%
  );
}

.hero-container {
  position: relative;
  z-index: 2;
  padding-top: var(--header-h);
}

.hero-text-wrapper {
  max-width: 800px;
  /* Rimossa opacity per evitare card invisibili se GSAP non carica */
}

.hero-badge-wrapper {
  margin-bottom: 24px;
}

.hero-badge {
  display: inline-block;
  padding: 10px 24px;
  background: rgba(241, 110, 34, 0.1) !important;
  border: 1px solid rgba(241, 110, 34, 0.3) !important;
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
  color: white;
  text-wrap: balance;
  letter-spacing: -0.04em;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: var(--text-dim);
  margin-bottom: 48px;
  max-width: 600px;
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.btn-secondary-glass {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: white;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: all 0.3s ease;
}

.btn-secondary-glass:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  opacity: 0.6;
}

.scroll-indicator span {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.5);
}

.mouse {
  width: 26px;
  height: 42px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-wheel 2s infinite;
}

@keyframes scroll-wheel {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 15px); opacity: 0; }
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  .hero-actions > * {
    width: 100%;
  }
}
</style>
