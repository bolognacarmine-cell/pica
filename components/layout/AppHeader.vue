<script setup>
import { ref, onMounted, onUnmounted, watch, computed, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const props = defineProps({
  logo: { type: String, default: '/logo-pica.png' },
  menuItems: { 
    type: Array, 
    default: () => [
      { name: 'Home', link: '/' },
      { name: 'Veicoli', link: '/veicoli' },
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

// --- GSAP Scroll Reveal & Parallax ---
const initAnimations = () => {
  const tl = gsap.timeline({ 
    defaults: { ease: 'expo.out', duration: 1.2 },
    onComplete: () => {
      // Pulizia stili inline per evitare conflitti con responsive/hover
      gsap.set(['.nav-logo', '.nav-link', '.nav-actions', '.nav-cta'], { clearProps: 'all' })
    }
  })
  
  tl.from('.nav-logo', { scale: 0.9, opacity: 0, y: -20, filter: 'blur(10px)' })
    .from('.nav-link', { y: -15, opacity: 0, stagger: 0.08, filter: 'blur(5px)' }, '-=0.8')
    .from('.nav-actions', { x: 20, opacity: 0, filter: 'blur(10px)' }, '-=1')
    .from('.nav-cta', { scale: 0.9, opacity: 0, rotationX: 45 }, '-=0.8')

  // Hover Pulse CTA (Gradient Glow) handled by CSS for performance

  // Parallax Effect on Logo (Light motion)
  if (window.innerWidth > 1024) {
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 20
      const yPos = (clientY / window.innerHeight - 0.5) * 20
      gsap.to('.nav-logo-parallax', { x: xPos, y: yPos, duration: 0.8, ease: 'power2.out' })
    })
  }
}

// --- Scroll Handling (Sticky Morphing) ---
const handleScroll = () => {
  const scrollY = window.scrollY
  isScrolled.value = scrollY > 20
  
  if (process.client) {
    gsap.to('header', {
      backgroundColor: isScrolled.value 
        ? (isDarkMode.value ? 'rgba(10, 10, 10, 0.95)' : 'rgba(255, 255, 255, 0.95)') 
        : 'rgba(5, 5, 5, 0)',
      backdropFilter: isScrolled.value ? 'blur(20px) saturate(180%)' : 'blur(0px)',
      borderBottomColor: isScrolled.value ? (isDarkMode.value ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)') : 'rgba(255, 255, 255, 0)',
      height: isScrolled.value ? '70px' : '90px',
      duration: 0.4,
      ease: 'power2.out'
    })
  }
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
    initAnimations()

    // Custom Cursor Follower (init after load)
    if (window.innerWidth > 1024) {
      const cursor = document.querySelector('.custom-cursor')
      if (cursor) {
        window.addEventListener('mousemove', (e) => {
          gsap.to(cursor, { 
            x: e.clientX, y: e.clientY, 
            duration: 0.15, ease: 'power2.out',
            scale: e.target.closest('a, button') ? 1.5 : 1,
            opacity: e.target.closest('a, button') ? 0.8 : 0.5
          })
        })
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
  <header v-if="!isLoaded" class="fixed top-0 left-0 right-0 z-[100] h-[80px] bg-[var(--line)] backdrop-blur-md animate-pulse">
    <div class="container mx-auto px-8 flex items-center justify-between h-full">
      <div class="w-40 h-8 bg-[var(--line)] rounded-full"></div>
      <div class="hidden lg:flex gap-8"><div v-for="i in 5" :key="i" class="w-16 h-4 bg-[var(--line)] rounded-full"></div></div>
      <div class="w-28 h-8 bg-[var(--line)] rounded-full"></div>
    </div>
  </header>

  <header 
    v-else
    role="banner"
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 will-change-transform border-b border-transparent flex items-center"
    :class="[isScrolled ? 'h-[70px] shadow-2xl' : 'h-[90px]']"
  >
    <!-- Custom Cursor Follower -->
    <div class="custom-cursor hidden lg:block fixed w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-300"></div>

    <div class="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-full">
      
      <!-- 1. Logo & Branding (Parallax) -->
      <NuxtLink to="/" class="nav-logo flex items-center gap-2 md:gap-4 group no-underline shrink-0 py-2" aria-label="Pica Caravan - Home">
        <div class="nav-logo-parallax relative w-12 h-12 md:w-16 md:h-16 overflow-hidden transition-all duration-700 flex items-center justify-center">
          <nuxt-img 
            src="/logo-pica.png" 
            alt="Logo Pica Caravan" 
            class="w-full h-full object-contain"
            format="webp"
            width="64"
            height="64"
          />
        </div>
        <div class="flex flex-col justify-center">
          <span class="text-xl md:text-2xl font-black tracking-tighter dark:text-white text-black leading-none uppercase group-hover:text-primary transition-colors duration-500">PICA CARAVAN</span>
          <div class="flex items-center gap-1.5 mt-1">
            <div class="h-[1.5px] w-4 bg-primary hidden md:block"></div>
            <span class="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-primary uppercase opacity-90">Vendita & Rimessaggio</span>
          </div>
        </div>
      </NuxtLink>

      <!-- 2. Desktop Navigation (WCAG 2.2 compliant) -->
      <nav class="hidden lg:flex items-center gap-6 xl:gap-8" role="navigation">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.name" 
          :to="item.link"
          class="nav-link text-[12px] font-black uppercase tracking-[0.1em] text-[var(--text-dim)] hover:text-primary transition-all duration-500 relative group py-2"
          active-class="active-nav-link"
        >
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 ease-expo group-hover:w-full group-[.active-nav-link]:w-full rounded-full"></span>
        </NuxtLink>
      </nav>

      <!-- 3. Actions Area -->
      <div class="nav-actions flex items-center gap-3 md:gap-4 lg:gap-6">
        
        <!-- Smart Search Bar -->
        <div class="relative hidden lg:block group/search">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Cerca..."
            class="bg-[var(--line)] border border-[var(--line)] focus:border-primary/50 rounded-full py-2 px-5 pl-10 text-[11px] font-medium outline-none transition-all duration-500 w-28 xl:w-36 focus:w-48 xl:focus:w-56 shadow-inner text-white placeholder:text-white/30"
          />
          <svg width="14" height="14" class="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within/search:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>

        <!-- Social Icons (Grouped) -->
        <div class="hidden xl:flex items-center gap-5 border-l border-[var(--line)] pl-6 h-6">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="text-white/40 hover:text-primary transition-all hover:scale-110">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="text-white/40 hover:text-primary transition-all hover:scale-110">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.242 3.608-1.308 1.266-.058-1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759-6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>

        <!-- Dark/Light Toggle (Animated) -->
        <button 
          @click="toggleDarkMode"
          aria-label="Cambia tema"
          class="p-2.5 rounded-full bg-[var(--line)] hover:bg-primary/20 transition-all duration-300 text-white/60 hover:text-white"
        >
          <svg v-if="isDarkMode" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
          <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        </button>

        <!-- CTA Button (Premium Style) -->
        <a 
          href="tel:3332327592" 
          class="nav-cta hidden md:flex px-7 py-3 bg-[var(--primary)] text-white text-[11px] font-black rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-0.5 active:scale-95 no-underline uppercase tracking-widest border border-[var(--line)]"
        >
          {{ ctaText }}
        </a>

        <!-- Mobile Toggle -->
        <button 
          @click="toggleMobileMenu"
          aria-label="Menu"
          class="lg:hidden p-2.5 text-gray-700 dark:text-gray-200 focus:outline-none bg-[var(--line)] rounded-xl border border-transparent active:scale-95 transition-all"
        >
          <div class="w-6 h-5 flex flex-col justify-between relative">
            <span :class="mobileMenuOpen ? 'rotate-45 translate-y-[9px] w-full' : 'w-full'" class="h-0.5 bg-current transition-all duration-500 rounded-full"></span>
            <span :class="mobileMenuOpen ? 'opacity-0 -translate-x-5' : 'w-full'" class="h-0.5 bg-current transition-all duration-500 rounded-full"></span>
            <span :class="mobileMenuOpen ? '-rotate-45 -translate-y-[9px] w-full' : 'w-full'" class="h-0.5 bg-current transition-all duration-500 rounded-full"></span>
          </div>
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
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-[110] lg:hidden">
        <!-- Backdrop Blur Overlay -->
        <div @click="toggleMobileMenu" class="absolute inset-0 bg-black/70 backdrop-blur-xl"></div>
        
        <!-- Drawer Content -->
        <div class="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.5)] p-10 flex flex-col border-l border-white/5">
          <div class="flex justify-between items-center mb-16">
            <div class="flex flex-col">
              <span class="text-3xl font-black text-primary italic">MENU</span>
              <div class="w-12 h-1 bg-primary mt-1 rounded-full"></div>
            </div>
            <button @click="toggleMobileMenu" class="p-3 bg-gray-100 dark:bg-white/5 rounded-full">
              <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          
          <nav class="flex flex-col gap-8" role="navigation">
            <NuxtLink 
              v-for="(item, idx) in menuItems" 
              :key="item.name" 
              :to="item.link"
              class="mobile-drawer-link text-3xl font-black dark:text-white text-black hover:text-primary transition-all flex items-center gap-4 no-underline group"
              @click="toggleMobileMenu"
            >
              <span class="text-sm text-primary/40 group-hover:text-primary transition-colors">0{{ idx + 1 }}.</span>
              {{ item.name }}
            </NuxtLink>
          </nav>

          <div class="mt-auto pt-12">
            <div class="flex gap-8 mb-10 justify-center">
              <a href="https://wa.me/393391581997" class="text-gray-400 hover:text-[#25D366] transition-transform hover:scale-125"><svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.31 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.41 1.26 4.85l-1.33 4.86 4.98-1.31c1.4.74 2.99 1.17 4.67 1.17 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.79 14.16c-.25.7-1.46 1.34-2.01 1.43-.5.08-1.15.15-3.32-.74-2.78-1.14-4.57-3.97-4.71-4.16-.14-.19-1.13-1.5-1.13-2.86s.71-2.03.96-2.3c.25-.27.54-.34.72-.34.18 0 .36.01.52.02.17.01.4.04.62.55.23.54.79 1.93.86 2.07.07.14.12.3.02.49-.1.19-.15.3-.3.47-.15.17-.31.38-.44.51-.15.15-.31.31-.13.62.18.31.79 1.3 1.7 2.11.7.63 1.29.83 1.6.96.31.13.49.11.67-.1.18-.21.79-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.15 1.02.32.16.53.24.6.38.08.13.08.77-.17 1.47z"/></svg></a>
              <a href="#" class="text-gray-400 hover:text-[#E4405F] transition-transform hover:scale-125"><svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.242 3.608-1.308 1.266-.058-1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072z"/></svg></a>
            </div>
            <a href="tel:3332327592" class="block w-full text-center py-5 bg-primary text-white font-black rounded-2xl shadow-2xl shadow-primary/30 uppercase tracking-widest text-lg no-underline" @click="toggleMobileMenu">
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
  mix-blend-difference: difference;
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
