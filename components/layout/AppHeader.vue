<script setup>
import { ref, onMounted, onUnmounted, watch, computed, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// Throttle function for performance optimization
const throttle = (func, delay) => {
  let timeoutId
  let lastExecTime = 0
  return function (...args) {
    const currentTime = Date.now()
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

const props = defineProps({
  logo: { type: String, default: '/logo-pica.png' },
  menuItems: { 
    type: Array, 
    default: () => [
      { name: 'Home', link: '/' },
      { name: 'Veicoli', link: '/veicoli' },
      { name: 'Servizi', link: '/#servizi' },
      { name: 'Azienda', link: '/#azienda' },
      { name: 'Blog', link: '/blog' },
      { name: 'Contatti', link: '/#contatti' }
    ]
  },
  ctaText: { type: String, default: 'Info: 333 2327592' }
})

// --- 2026 Core States ---
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const isDarkMode = ref(true)
const searchQuery = ref('')
const currentLang = ref('IT')
const userDropdownOpen = ref(false)
const isLoaded = ref(false) // Skeleton loader control

// --- Theme Persistance Logic ---
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  updateTheme()
}

const updateTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// --- Animations removed for better performance ---

// --- Scroll Handling (Simple state change) ---
const handleScroll = () => {
  const scrollY = window.scrollY
  isScrolled.value = scrollY > 20
}

onMounted(() => {
  // Theme initialization
  const savedTheme = localStorage.getItem('theme')
  isDarkMode.value = savedTheme ? savedTheme === 'dark' : true
  updateTheme()

  // Simulate loading for Skeleton
  setTimeout(async () => {
    isLoaded.value = true
    await nextTick()
    handleScroll()

    // Custom Cursor Follower (optimized for performance)
    if (window.innerWidth > 1024) {
      const cursor = document.querySelector('.custom-cursor')
      if (cursor) {
        let rafId = null
        let lastX = 0, lastY = 0
        
        const updateCursor = (e) => {
          // Only update if position changed significantly
          if (Math.abs(e.clientX - lastX) > 1 || Math.abs(e.clientY - lastY) > 1) {
            lastX = e.clientX
            lastY = e.clientY
            
            if (rafId) cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(() => {
              const isInteractive = e.target.closest('a, button, .btn, input, select, textarea')
              gsap.set(cursor, { 
                x: e.clientX, 
                y: e.clientY,
                scale: isInteractive ? 1.5 : 1,
                opacity: isInteractive ? 0.8 : 0.5
              })
            })
          }
        }
        
        // Use throttled mouse move
        const throttledMouseMove = throttle(updateCursor, 16) // ~60fps
        window.addEventListener('mousemove', throttledMouseMove, { passive: true })
      }
    }
  }, 800)

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    gsap.from('.mobile-drawer-link', { x: 50, opacity: 0, stagger: 0.1, delay: 0.3, ease: 'back.out(1.7)' })
  }
}
</script>

<template>
  <!-- Skeleton Loader State -->
  <header v-if="!isLoaded" class="fixed top-0 left-0 right-0 z-[1030] h-[80px] bg-black/40 backdrop-blur-md animate-pulse">
    <div class="container mx-auto px-8 flex items-center justify-between h-full">
      <div class="w-40 h-8 bg-white/30 rounded-full"></div>
      <div class="hidden lg:flex gap-8"><div v-for="i in 5" :key="i" class="w-16 h-4 bg-white/30 rounded-full"></div></div>
      <div class="w-28 h-8 bg-white/30 rounded-full"></div>
    </div>
  </header>

  <header 
    v-else
    role="banner"
    class="fixed top-0 left-0 right-0 z-[1030] transition-all duration-500 will-change-transform flex items-center bg-black/20 backdrop-blur-xl border-b border-white/5"
    :class="[isScrolled ? 'h-[65px] shadow-2xl bg-black/95 border-white/10' : 'h-[90px] bg-black/20 border-transparent']"
  >
    <!-- Custom Cursor Follower -->
    <div class="custom-cursor hidden lg:block fixed w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[1070] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-300"></div>

    <div class="w-full max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-full">
      
      <!-- 1. Logo & Branding (Transparent Integration) -->
      <NuxtLink to="/" class="nav-logo flex items-center gap-4 group no-underline shrink-0 py-2" aria-label="Pica Caravan - Home">
        <div class="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
          <nuxt-img 
            src="/logo-pica.png" 
            alt="Logo Pica Caravan" 
            class="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
            format="webp"
            width="80"
            height="80"
            loading="eager"
            quality="100"
          />
        </div>
        <div class="flex flex-col justify-center">
          <span class="text-xl md:text-2xl font-black tracking-tighter text-white leading-none uppercase group-hover:text-primary transition-colors duration-300 drop-shadow-md font-serif italic">PICA CARAVAN</span>
          <span class="text-[8px] md:text-[10px] font-bold tracking-[0.25em] text-primary/80 uppercase mt-1.5 drop-shadow-sm">Vendita & Rimessaggio</span>
        </div>
      </NuxtLink>

      <!-- 2. Desktop Navigation (Refined Weights) -->
      <nav class="hidden lg:flex items-center gap-1 xl:gap-2" role="navigation">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.name" 
          :to="item.link"
          class="nav-link text-[13px] font-medium uppercase tracking-[0.1em] text-white/70 hover:text-primary transition-all duration-300 relative py-2.5 px-4 group"
          active-class="active-nav-link text-white !font-bold"
        >
          <span class="relative z-10">{{ item.name }}</span>
          <!-- Active/Hover Indicator (Replit style) -->
          <span class="absolute bottom-1 left-4 w-4 h-0.5 bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
        </NuxtLink>
      </nav>

      <!-- 3. Actions Area (Premium CTA) -->
      <div class="nav-actions flex items-center gap-4 md:gap-8">
        
        <!-- CTA Telefonica Doppia Riga -->
        <a 
          href="tel:3332327592" 
          class="nav-cta hidden sm:flex flex-col items-end group no-underline"
        >
          <span class="text-[10px] font-bold text-primary/80 uppercase tracking-widest leading-none mb-1 transition-colors group-hover:text-primary">Parla con un esperto</span>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span class="text-base md:text-lg font-bold text-white group-hover:text-primary transition-colors tracking-tight">333 2327592</span>
          </div>
        </a>

        <!-- Mobile Phone Icon (Persistent) -->
        <a 
          href="tel:3332327592" 
          class="sm:hidden w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary border border-primary/20"
          aria-label="Chiama ora"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        </a>

        <!-- Mobile Toggle (Minimal Hamburger) -->
        <button 
          @click="toggleMobileMenu"
          aria-label="Menu"
          class="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
        >
          <span class="w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-primary" :class="{'rotate-45 translate-y-2': mobileMenuOpen}"></span>
          <span class="w-4 h-0.5 bg-white self-end transition-all duration-300 group-hover:bg-primary group-hover:w-6" :class="{'-rotate-45 -translate-y-0 w-6': mobileMenuOpen}"></span>
        </button>
      </div>
    </div>

    <!-- 4. Modern Mobile Drawer -->
    <Transition
      enter-active-class="transition duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-[1040] lg:hidden">
        <!-- Backdrop Blur Overlay -->
        <div @click="toggleMobileMenu" class="absolute inset-0 bg-black/70 backdrop-blur-xl"></div>
        
        <!-- Drawer Content -->
        <div class="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.5)] p-10 flex flex-col border-l border-white/5">
          <div class="flex justify-between items-center mb-16">
            <div class="flex flex-col">
              <span class="text-3xl font-black text-primary italic drop-shadow-lg">MENU</span>
              <div class="w-12 h-1 bg-primary mt-1 rounded-full"></div>
            </div>
            <button @click="toggleMobileMenu" class="p-3 bg-gray-100 dark:bg-white/5 rounded-full">
              <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          
          <nav class="flex flex-col gap-4" role="navigation">
            <NuxtLink 
              v-for="(item, idx) in menuItems" 
              :key="item.name" 
              :to="item.link"
              class="mobile-drawer-link text-2xl md:text-3xl font-black text-white hover:text-primary transition-all flex items-center gap-4 no-underline group py-2"
              @click="toggleMobileMenu"
            >
              <span class="text-sm text-primary/30 group-hover:text-primary transition-colors font-mono font-bold">0{{ idx + 1 }}</span>
              {{ item.name }}
            </NuxtLink>
          </nav>
          
          <div class="mt-auto pt-8 border-t border-white/10">
            <a href="tel:3332327592" class="block w-full text-center py-4 bg-gradient-to-r from-primary to-orange-600 text-white font-black rounded-xl shadow-lg shadow-primary/25 uppercase tracking-wider text-base no-underline hover:shadow-xl transition-all duration-300" @click="toggleMobileMenu">
              {{ ctaText }}
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Custom Cubic Bezier for 2026 motion feel */
.ease-expo {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

.custom-cursor {
  mix-blend-mode: difference;
}

@keyframes pulse-glow {
  0% { box-shadow: 0 0 0 0 rgba(255, 91, 107, 0.5); transform: scale(1); }
  50% { box-shadow: 0 0 0 12px rgba(255, 91, 107, 0); transform: scale(1.015); }
  100% { box-shadow: 0 0 0 0 rgba(255, 91, 107, 0); transform: scale(1); }
}

.nav-cta {
  animation: pulse-glow 3s infinite ease-in-out;
}

/* Glassmorphism utility with high-end saturation */
.backdrop-blur-xl {
  backdrop-filter: blur(25px) saturate(200%);
}

/* Safe area for iPhone notch & modern status bars */
header {
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

.mobile-drawer-link {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.mobile-drawer-link:hover {
  transform: translateX(10px);
}
</style>
