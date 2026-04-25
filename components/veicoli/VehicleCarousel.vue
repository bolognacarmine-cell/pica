
<template>
  <div class="carousel-container" @mouseenter="showArrows = true" @mouseleave="showArrows = false">
    <!-- Immagini -->
    <div class="carousel-wrapper">
      <div 
        v-for="(img, index) in images" 
        :key="index"
        class="carousel-slide"
        v-show="currentIndex === index"
      >
        <img :src="img" :alt="altText" class="carousel-img" loading="lazy" />
      </div>
      
      <!-- Placeholder se non ci sono immagini -->
      <div v-if="!images || images.length === 0" class="carousel-slide">
        <img src="https://placehold.co/800x600/141414/white?text=Pica+Caravan" :alt="altText" class="carousel-img" />
      </div>
    </div>

    <!-- Frecce (se più di una immagine) -->
    <template v-if="images && images.length > 1">
      <button 
        class="nav-btn prev" 
        @click.stop="handlePrevManual" 
        v-show="showArrows"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button 
        class="nav-btn next" 
        @click.stop="handleNextManual" 
        v-show="showArrows"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
      </button>

      <!-- Indicatori (pallini) -->
      <div class="carousel-dots">
        <span 
          v-for="(_, index) in images" 
          :key="index"
          class="dot"
          :class="{ active: currentIndex === index }"
          @click.stop="manualSelect(index)"
        ></span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  },
  altText: {
    type: String,
    default: 'Immagine Veicolo'
  },
  height: {
    type: String,
    default: '100%'
  },
  autoplayInterval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
const showArrows = ref(false)
let timer = null

const startAutoplay = () => {
  if (props.images && props.images.length > 1) {
    stopAutoplay()
    timer = setInterval(() => {
      nextSlide()
    }, props.autoplayInterval)
  }
}

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const nextSlide = () => {
  if (props.images.length === 0) return
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevSlide = () => {
  if (props.images.length === 0) return
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const manualSelect = (index) => {
  currentIndex.value = index
  startAutoplay() // Reset timer
}

const handleNextManual = () => {
  nextSlide()
  startAutoplay() // Reset timer
}

const handlePrevManual = () => {
  prevSlide()
  startAutoplay() // Reset timer
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: v-bind(height);
  background: #050505;
  overflow: hidden;
}

.carousel-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s ease;
}

.carousel-container:hover .carousel-img {
  transform: scale(1.05);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-btn:hover {
  background: #f16e22;
  border-color: #f16e22;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 0 20px rgba(241, 110, 34, 0.4);
}

.prev { left: 20px; }
.next { right: 20px; }

.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
  padding: 6px 12px;
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(8px);
  border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.05);
}

.dot {
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.dot.active {
  background: #f16e22;
  width: 20px;
  border-radius: 10px;
}
</style>
