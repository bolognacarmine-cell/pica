<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const { transformImage } = useCloudinary()

const formatDate = (d) => {
  if (!d) return ''
  return new Date(d).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

const readingTime = (content) => {
  if (!content) return '2 min lettura'
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min lettura`
}

// Ottimizzazione immagine Cloudinary per le card (600x400 aspect 3:2 o 16:10)
const optimizedImage = computed(() => {
  const url = props.post.imageCover || props.post.image || 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070'
  return transformImage(url, { width: 800, height: 500, crop: 'fill', quality: 'auto', format: 'webp' })
})
</script>

<template>
  <NuxtLink :to="`/blog/${post.slug}`" class="blog-card group h-full flex flex-col bg-white dark:bg-[#0a0a0a] rounded-[32px] border border-gray-100 dark:border-white/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-2">
    <!-- Image Wrapper -->
    <div class="card-media relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-white/5">
      <img 
        :src="optimizedImage" 
        :alt="post.title" 
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        loading="lazy"
        width="800"
        height="500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <!-- Category Badge -->
      <div class="absolute top-6 left-6">
        <span class="px-3 py-1.5 bg-white/90 dark:bg-black/70 backdrop-blur-md text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg border border-white/20">
          {{ post.category || 'Journal' }}
        </span>
      </div>
    </div>
    
    <!-- Content Body -->
    <div class="card-body p-8 flex-1 flex flex-col">
      <!-- Meta -->
      <div class="card-meta flex items-center gap-3 mb-6">
        <span class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          {{ formatDate(post.date) }}
        </span>
        <span class="w-1 h-1 bg-primary/40 rounded-full"></span>
        <span class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          {{ readingTime(post.content) }}
        </span>
      </div>
      
      <!-- Title -->
      <h3 class="card-title text-xl md:text-2xl font-black mb-4 dark:text-white uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
        {{ post.title }}
      </h3>
      
      <!-- Excerpt -->
      <p class="card-excerpt text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-8">
        {{ post.excerpt || (post.content ? post.content.substring(0, 120).replace(/[#*]/g, '') + '...' : 'Scopri i dettagli di questo articolo sul blog di Pica Caravan.') }}
      </p>
      
      <!-- Footer CTA -->
      <div class="card-footer mt-auto pt-6 border-t border-gray-50 dark:border-white/5">
        <span class="read-more-link inline-flex items-center gap-3 text-gray-900 dark:text-white font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-primary group-hover:gap-5 transition-all duration-300">
          Leggi Articolo
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.blog-card {
  will-change: transform, box-shadow;
}

/* Fix chirurgico icone giganti */
.read-more-link svg {
  width: 14px !important;
  height: 14px !important;
  display: inline-block;
}
</style>
