<script setup>
import BlogCard from '~/components/blog/BlogCard.vue'

// Utilizziamo useAsyncData per il data fetching lato server (SSR friendly)
const { data: res, pending: loading, error } = await useAsyncData('latest-posts', () => 
  $fetch('/api/blog', {
    query: { limit: 3 }
  })
)

const latestPosts = computed(() => res.value?.posts || [])
</script>

<template>
  <section class="blog-preview-section py-24 md:py-32 bg-white dark:bg-[#050505] relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      
      <!-- Section Header -->
      <div class="blog-preview-header mb-16 md:mb-20">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div class="max-w-2xl">
            <span class="section-kicker block mb-4 text-primary font-black uppercase tracking-[0.3em] text-xs">The Journal</span>
            <h2 class="text-4xl md:text-6xl font-black dark:text-white uppercase tracking-tighter leading-[0.9] mb-6">
              Ultime dal <span class="text-primary italic">Blog</span>
            </h2>
            <p class="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
              Consigli tecnici, guide di viaggio e tutte le novità dal settore dei veicoli ricreazionali, curati dai nostri esperti.
            </p>
          </div>
          <NuxtLink to="/blog" class="btn-premium">
            Esplora tutto il blog
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="skeleton-card h-[500px] bg-gray-100 dark:bg-white/5 rounded-[var(--radius-xl)]"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="p-12 text-center bg-red-50 dark:bg-red-500/5 rounded-[var(--radius-xl)] border border-red-100 dark:border-red-500/10">
        <p class="text-red-500 font-bold uppercase tracking-widest text-xs">Errore nel caricamento degli articoli</p>
      </div>

      <!-- Content -->
      <div v-else-if="latestPosts.length > 0" class="blog-preview-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <div v-for="post in latestPosts" :key="post._id" class="blog-grid-item h-full">
          <BlogCard :post="post" />
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state p-20 text-center bg-gray-50 dark:bg-white/2 rounded-[var(--radius-xl)] border border-gray-100 dark:border-white/5">
        <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">Contenuti in arrivo...</p>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.skeleton-card {
  background: rgba(0, 0, 0, 0.04);
}

.dark .skeleton-card {
  background: rgba(255, 255, 255, 0.06);
}
</style>
