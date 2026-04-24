<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// Articoli realistici coerenti con il settore camper/roulotte
const blogPosts = ref([
  {
    id: 1,
    title: "Guida Completa alla Scelta del Camper Perfetto: Consigli da Esperti",
    excerpt: "Scopri come scegliere il camper ideale per le tue esigenze. Analizziamo dimensioni, layout, motorizzazioni e accessori essenziali per viaggi indimenticabili.",
    category: "Guide Tecniche",
    date: "2024-03-15",
    readTime: "8 min",
    author: "Antimo Pica",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=85&w=1200",
    featured: true,
    tags: ["camper", "guida", "acquisto", "consigli"]
  },
  {
    id: 2,
    title: "Le 5 Migliori Destinazioni Camper in Italia per la Primavera 2024",
    excerpt: "Dalle Alpi alla Sicilia, ecco le mete più affascinanti per il tuo viaggio in camper. Itinerari, aree sosta e consigli pratici per un'esperienza unica.",
    category: "Viaggi",
    date: "2024-03-12",
    readTime: "6 min",
    author: "Marco Rossi",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["viaggi", "destinazioni", "primavera", "italia"]
  },
  {
    id: 3,
    title: "Manutenzione Camper: 10 Controlli Essenziali Prima di Partire",
    excerpt: "Checklist completa per la sicurezza del tuo camper. Verifiche tecniche, controlli meccanici e consigli per viaggiare senza preoccupazioni.",
    category: "Manutenzione",
    date: "2024-03-10",
    readTime: "5 min",
    author: "Laura Bianchi",
    image: "https://images.unsplash.com/photo-1558618037-3c8c5bf5b1c?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["manutenzione", "sicurezza", "checklist", "prepartenza"]
  },
  {
    id: 4,
    title: "Roulotte vs Camper: Pro e Contro per Scegliere il Tuo stile di Viaggio",
    excerpt: "Analisi comparativa tra roulotte e camper. Costi, versatilità, comfort e manutenzione: tutto quello che devi sapere per decidere.",
    category: "Confronti",
    date: "2024-03-08",
    readTime: "7 min",
    author: "Giuseppe Verdi",
    image: "https://images.unsplash.com/photo-1542282086-f6ff940b6c6c?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["roulotte", "camper", "confronto", "scelta"]
  },
  {
    id: 5,
    title: "Accessori Essenziali per Camper: Cosa Non Dimenticare Mai",
    excerpt: "Dall'impianto elettrico alla cucina, passando per il comfort. Guida completa agli accessori indispensabili per il tuo camper.",
    category: "Accessori",
    date: "2024-03-05",
    readTime: "6 min",
    author: "Anna Esposito",
    image: "https://images.unsplash.com/photo-1618668123933-0b4a2f5b6b2c?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["accessori", "essenziali", "attrezzatura", "comfort"]
  },
  {
    id: 6,
    title: "Normative Camper 2024: Tutte le Novità da Conoscere",
    excerpt: "Aggiornamenti su patenti, limiti di peso, aree sosta e circolazione. Rimani informato sulle nuove regole per camperisti italiani.",
    category: "Normative",
    date: "2024-03-01",
    readTime: "8 min",
    author: "Roberto Romano",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["normative", "leggi", "2024", "aggiornamenti"]
  }
])

// Featured article e articoli secondari
const featuredPost = computed(() => blogPosts.value.find(post => post.featured))
const secondaryPosts = computed(() => blogPosts.value.filter(post => !post.featured))

const loading = ref(false)
const error = ref(false)

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

let ctx

onMounted(async () => {
  await nextTick()
  ctx = gsap.context(() => {
    // Header animation
    const headerElements = document.querySelectorAll('.editorial-header > *')
    if (headerElements.length > 0) {
      gsap.fromTo(headerElements,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.blog-editorial-section',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out',
          clearProps: 'all'
        }
      )
    }

    // Featured article animation
    const featuredElements = document.querySelectorAll('.featured-content > *')
    if (featuredElements.length > 0) {
      gsap.fromTo(featuredElements,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: '.featured-article',
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: 'expo.out',
          clearProps: 'all'
        }
      )
    }

    // Articles grid animation
    const articleCards = document.querySelectorAll('.article-card')
    if (articleCards.length > 0) {
      gsap.fromTo(articleCards,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: '.articles-grid',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'all'
        }
      )
    }
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section class="blog-editorial-section section">
    <!-- Background Decor -->
    <div class="blog-background">
      <div class="bg-pattern"></div>
    </div>
    
    <div class="container">
      
      <!-- Editorial Header -->
      <div class="editorial-header">
        <div class="header-content">
          <span class="section-kicker">Pica Journal</span>
          <h2 class="section-title">
            <span class="title-main">Il Nostro</span>
            <span class="title-accent">Blog</span>
          </h2>
          <p class="section-subtitle">
            Guide tecniche, consigli di viaggio e approfondimenti sul mondo camper e roulotte. 
            Esperti del settore condividono conoscenza per viaggiare consapevoli.
          </p>
        </div>
        <div class="header-cta">
          <NuxtLink to="/blog" class="btn btn-outline">
            <span>Esplora Tutti gli Articoli</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Featured Article -->
      <div v-if="featuredPost" class="featured-article">
        <div class="featured-content">
          <div class="featured-meta">
            <span class="featured-category">{{ featuredPost.category }}</span>
            <div class="featured-details">
              <span class="featured-date">{{ formatDate(featuredPost.date) }}</span>
              <span class="featured-separator">•</span>
              <span class="featured-author">{{ featuredPost.author }}</span>
              <span class="featured-separator">•</span>
              <span class="featured-time">{{ featuredPost.readTime }}</span>
            </div>
          </div>
          <h1 class="featured-title">{{ featuredPost.title }}</h1>
          <p class="featured-excerpt">{{ featuredPost.excerpt }}</p>
          <div class="featured-footer">
            <NuxtLink to="/blog/1" class="featured-cta">
              <span>Leggi l'Articolo Completo</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </NuxtLink>
            <div class="featured-tags">
              <span v-for="tag in featuredPost.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div class="featured-image">
          <nuxt-img 
            :src="featuredPost.image" 
            :alt="featuredPost.title"
            class="featured-img"
            format="webp"
            width="800"
            height="600"
          />
        </div>
      </div>

      <!-- Secondary Articles Grid -->
      <div class="articles-section">
        <div class="section-header-secondary">
          <h3 class="secondary-title">Altri Articoli</h3>
          <p class="secondary-subtitle">Approfondimenti e consigli per la tua avventura</p>
        </div>
        
        <div class="articles-grid">
          <article v-for="article in secondaryPosts" :key="article.id" class="article-card">
            <div class="article-image">
              <nuxt-img 
                :src="article.image" 
                :alt="article.title"
                class="article-img"
                format="webp"
                width="400"
                height="300"
              />
              <div class="article-overlay"></div>
              <span class="article-category">{{ article.category }}</span>
            </div>
            
            <div class="article-content">
              <div class="article-meta">
                <span class="article-date">{{ formatDate(article.date) }}</span>
                <span class="article-separator">•</span>
                <span class="article-time">{{ article.readTime }}</span>
              </div>
              
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              
              <div class="article-footer">
                <NuxtLink :to="`/blog/${article.id}`" class="article-cta">
                  <span>Leggi Articolo</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </NuxtLink>
                <div class="article-author">
                  <span>{{ article.author }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
/* Blog Editorial Section */
.blog-editorial-section {
  background: var(--bg);
  position: relative;
  overflow: hidden;
}

.blog-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  opacity: 0.02;
  pointer-events: none;
}

.bg-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, var(--primary) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, var(--secondary) 0%, transparent 50%);
  opacity: 0.03;
}

/* Editorial Header */
.editorial-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-4xl);
  margin-bottom: var(--space-4xl);
  flex-wrap: wrap;
}

.header-content {
  flex: 1;
  min-width: 400px;
}

.section-kicker {
  display: inline-block;
  background: var(--primary);
  color: var(--text-inverse);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-md);
}

.section-title {
  font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.title-main {
  display: block;
}

.title-accent {
  color: var(--primary);
  display: block;
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
}

.header-cta {
  flex-shrink: 0;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  text-decoration: none;
  font-weight: 700;
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.btn-outline:hover {
  background: var(--primary);
  color: var(--text-inverse);
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

/* Featured Article */
.featured-article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  margin-bottom: var(--space-4xl);
  min-height: 500px;
}

.featured-content {
  padding: var(--space-3xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-meta {
  margin-bottom: var(--space-lg);
}

.featured-category {
  display: inline-block;
  background: var(--primary);
  color: var(--text-inverse);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-lg);
  font-size: var(--text-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-sm);
}

.featured-details {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.featured-separator {
  color: var(--primary);
  opacity: 0.5;
}

.featured-title {
  font-size: var(--text-3xl);
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.featured-excerpt {
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
}

.featured-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.featured-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  background: var(--primary);
  color: var(--text-inverse);
  text-decoration: none;
  font-weight: 700;
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.featured-cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.featured-tags {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  padding: var(--space-xs) var(--space-sm);
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary);
  border-radius: var(--radius-lg);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 1px solid rgba(255, 107, 53, 0.2);
}

.featured-image {
  position: relative;
  overflow: hidden;
}

.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-slow);
}

.featured-article:hover .featured-img {
  transform: scale(1.05);
}

/* Articles Section */
.articles-section {
  margin-top: var(--space-4xl);
}

.section-header-secondary {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.secondary-title {
  font-size: var(--text-2xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.secondary-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-2xl);
}

/* Article Cards */
.article-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
}

.article-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.article-image {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.article-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-slow);
}

.article-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.article-card:hover .article-overlay {
  opacity: 1;
}

.article-card:hover .article-img {
  transform: scale(1.05);
}

.article-category {
  position: absolute;
  top: var(--space-lg);
  left: var(--space-lg);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: var(--text-primary);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-lg);
  font-size: var(--text-xs);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 2;
}

.article-content {
  padding: var(--space-2xl);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-bottom: var(--space-lg);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.article-separator {
  color: var(--primary);
  opacity: 0.5;
}

.article-title {
  font-size: var(--text-xl);
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: var(--space-md);
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.article-excerpt {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
  flex: 1;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--line);
}

.article-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--primary);
  text-decoration: none;
  font-weight: 700;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all var(--transition-base);
}

.article-cta:hover {
  gap: var(--space-md);
}

.article-author {
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .editorial-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2xl);
  }
  
  .featured-article {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  
  .featured-image {
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  
  .featured-content {
    padding: var(--space-2xl);
  }
  
  .featured-title {
    font-size: var(--text-2xl);
  }
  
  .featured-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-lg);
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: var(--text-2xl);
  }
  
  .article-content {
    padding: var(--space-xl);
  }
  
  .article-title {
    font-size: var(--text-lg);
  }
}
</style>
