<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// Articoli realistici coerenti con il settore camper/roulotte
const allPosts = ref([
  {
    id: 1,
    slug: 'guida-completa-scelta-camper-perfetto',
    title: "Guida Completa alla Scelta del Camper Perfetto: Consigli da Esperti",
    excerpt: "Scopri come scegliere il camper ideale per le tue esigenze. Analizziamo dimensioni, layout, motorizzazioni e accessori essenziali per viaggi indimenticabili.",
    category: "Guide Tecniche",
    date: "2024-03-15",
    readTime: "8 min",
    author: "Antimo Pica",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=85&w=1200",
    featured: true,
    tags: ["camper", "guida", "acquisto", "consigli"],
    content: "# Guida Completa alla Scelta del Camper Perfetto\n\nScegliere il camper giusto è una decisione importante che influenzerà tutti i tuoi futuri viaggi..."
  },
  {
    id: 2,
    slug: 'migliori-destinazioni-camper-italia-primavera-2024',
    title: "Le 5 Migliori Destinazioni Camper in Italia per la Primavera 2024",
    excerpt: "Dalle Alpi alla Sicilia, ecco le mete più affascinanti per il tuo viaggio in camper. Itinerari, aree sosta e consigli pratici per un'esperienza unica.",
    category: "Viaggi",
    date: "2024-03-12",
    readTime: "6 min",
    author: "Marco Rossi",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["viaggi", "destinazioni", "primavera", "italia"],
    content: "# Le 5 Migliori Destinazioni Camper in Italia\n\nLa primavera è il momento perfetto per esplorare l'Italia in camper..."
  },
  {
    id: 3,
    slug: 'manutenzione-camper-10-controlli-essenziali',
    title: "Manutenzione Camper: 10 Controlli Essenziali Prima di Partire",
    excerpt: "Checklist completa per la sicurezza del tuo camper. Verifiche tecniche, controlli meccanici e consigli per viaggiare senza preoccupazioni.",
    category: "Manutenzione",
    date: "2024-03-10",
    readTime: "5 min",
    author: "Laura Bianchi",
    image: "https://images.unsplash.com/photo-1558618037-3c8c5bf5b1c?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["manutenzione", "sicurezza", "checklist", "prepartenza"],
    content: "# Manutenzione Camper: 10 Controlli Essenziali\n\nPrima di partire per il tuo viaggio, è fondamentale verificare..."
  },
  {
    id: 4,
    slug: 'roulotte-vs-camper-pro-e-contro',
    title: "Roulotte vs Camper: Pro e Contro per Scegliere il Tuo stile di Viaggio",
    excerpt: "Analisi comparativa tra roulotte e camper. Costi, versatilità, comfort e manutenzione: tutto quello che devi sapere per decidere.",
    category: "Confronti",
    date: "2024-03-08",
    readTime: "7 min",
    author: "Giuseppe Verdi",
    image: "https://images.unsplash.com/photo-1542282086-f6ff940b6c6c?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["roulotte", "camper", "confronto", "scelta"],
    content: "# Roulotte vs Camper: Pro e Contro\n\nLa scelta tra roulotte e camper dipende da molti fattori..."
  },
  {
    id: 5,
    slug: 'accessori-essenziali-camper',
    title: "Accessori Essenziali per Camper: Cosa Non Dimenticare Mai",
    excerpt: "Dall'impianto elettrico alla cucina, passando per il comfort. Guida completa agli accessori indispensabili per il tuo camper.",
    category: "Accessori",
    date: "2024-03-05",
    readTime: "6 min",
    author: "Anna Esposito",
    image: "https://images.unsplash.com/photo-1618668123933-0b4a2f5b6b2c?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["accessori", "essenziali", "attrezzatura", "comfort"],
    content: "# Accessori Essenziali per Camper\n\nPer viaggiare in totale comfort, il tuo camper deve essere dotato di..."
  },
  {
    id: 6,
    slug: 'normative-camper-2024-novita',
    title: "Normative Camper 2024: Tutte le Novità da Conoscere",
    excerpt: "Aggiornamenti su patenti, limiti di peso, aree sosta e circolazione. Rimani informato sulle nuove regole per camperisti italiani.",
    category: "Normative",
    date: "2024-03-01",
    readTime: "8 min",
    author: "Roberto Romano",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["normative", "leggi", "2024", "aggiornamenti"],
    content: "# Normative Camper 2024: Tutte le Novità\n\nIl 2024 porta importanti novità nel mondo dei camper..."
  },
  {
    id: 7,
    slug: 'finanziamento-camper-guida-completa',
    title: "Finanziamento Camper: Guida Completa per Acquistare senza Pensieri",
    excerpt: "Scopri tutte le opzioni di finanziamento per il tuo camper. Prestiti, leasing e piani personalizzati per realizzare il tuo sogno.",
    category: "Finanza",
    date: "2024-02-28",
    readTime: "7 min",
    author: "Francesco Neri",
    image: "https://images.unsplash.com/photo-1554224155-672d072843b7?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["finanziamento", "prestiti", "leasing", "acquisto"],
    content: "# Finanziamento Camper: Guida Completa\n\nAcquistare un camper è un investimento importante..."
  },
  {
    id: 8,
    slug: 'rimessaggio-camper-sicuro',
    title: "Rimessaggio Camper: Come Scegliere la Soluzione Sicura",
    excerpt: "Guida completa al rimessaggio camper. Coperture, box custoditi e soluzioni professionali per proteggere il tuo investimento.",
    category: "Rimessaggio",
    date: "2024-02-25",
    readTime: "6 min",
    author: "Paolo Russo",
    image: "https://images.unsplash.com/photo-1573497029040-73c8850b966?auto=format&fit=crop&q=85&w=800",
    featured: false,
    tags: ["rimessaggio", "sicurezza", "coperture", "box"],
    content: "# Rimessaggio Camper: Come Scegliere\n\nProteggere il tuo camper durante i periodi di inutilizzo è fondamentale..."
  }
])

const loading = ref(false)
const selectedCategory = ref('Tutti')
const searchQuery = ref('')

// Categorie uniche dagli articoli
const categories = computed(() => {
  const cats = ['Tutti', ...new Set(allPosts.value.map(post => post.category))]
  return cats
})

// Filtri articoli
const filteredPosts = computed(() => {
  let filtered = allPosts.value
  
  if (selectedCategory.value !== 'Tutti') {
    filtered = filtered.filter(post => post.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }
  
  return filtered
})

// Articolo featured e articoli secondari
const featuredPost = computed(() => filteredPosts.value.find(post => post.featured))
const secondaryPosts = computed(() => filteredPosts.value.filter(post => !post.featured))

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
    const headerElements = document.querySelectorAll('.blog-header > *')
    if (headerElements.length > 0) {
      gsap.fromTo(headerElements,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.blog-page',
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
    const featuredElements = document.querySelectorAll('.featured-article > *')
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

useHead({
  title: 'Blog & News | Pica Caravan',
  meta: [
    { name: 'description', content: 'Ultime novità dal mondo dei camper e roulotte, consigli di manutenzione e offerte speciali da Pica Caravan.' }
  ]
})
</script>

<template>
  <div class="blog-horizontal section">
    <!-- Background Decor -->
    <div class="blog-background">
      <div class="bg-pattern"></div>
    </div>
    
    <div class="container">
      
      <!-- Editorial Header -->
      <div class="blog-header">
        <div class="header-content">
          <span class="section-kicker">Pica Journal</span>
          <h1 class="section-title">
            <span class="title-main">Il Nostro</span>
            <span class="title-accent">Blog</span>
          </h1>
          <p class="section-subtitle">
            Guide tecniche, consigli di viaggio e approfondimenti sul mondo camper e roulotte. 
            Esperti del settore condividono conoscenza per viaggiare consapevoli.
          </p>
        </div>
      </div>

      <!-- Controls: Search & Filters -->
      <div class="blog-controls">
        <div class="categories-filter">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="['category-btn', { 'active': selectedCategory === cat }]"
          >
            {{ cat }}
          </button>
        </div>

        <div class="search-container">
          <div class="search-input-wrapper">
            <svg class="search-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Cerca articoli..." 
              class="search-input"
            />
          </div>
        </div>
      </div>

      <!-- Featured Article Orizzontale -->
      <div v-if="featuredPost" class="featured-horizontal">
        <NuxtLink :to="`/blog/${featuredPost.slug}`" class="featured-horizontal-link">
          <div class="featured-horizontal-image">
            <nuxt-img 
              :src="featuredPost.image" 
              :alt="featuredPost.title"
              class="featured-horizontal-img"
              format="webp"
              width="800"
              height="600"
            />
            <div class="featured-horizontal-overlay"></div>
          </div>
          <div class="featured-horizontal-content">
            <div class="featured-horizontal-meta">
              <span class="featured-horizontal-category">{{ featuredPost.category }}</span>
              <div class="featured-horizontal-details">
                <span class="featured-horizontal-date">{{ formatDate(featuredPost.date) }}</span>
                <span class="featured-horizontal-separator">•</span>
                <span class="featured-horizontal-author">{{ featuredPost.author }}</span>
                <span class="featured-horizontal-separator">•</span>
                <span class="featured-horizontal-time">{{ featuredPost.readTime }}</span>
              </div>
            </div>
            <h2 class="featured-horizontal-title">{{ featuredPost.title }}</h2>
            <p class="featured-horizontal-excerpt">{{ featuredPost.excerpt }}</p>
            <div class="featured-horizontal-footer">
              <span class="featured-horizontal-cta">Leggi l'Articolo Completo</span>
              <div class="featured-horizontal-tags">
                <span v-for="tag in featuredPost.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Articles Horizontal List -->
      <div class="articles-horizontal-section">
        <div class="section-header-secondary">
          <h3 class="secondary-title">Altri Articoli</h3>
          <p class="secondary-subtitle">Approfondimenti e consigli per la tua avventura</p>
        </div>
        
        <div v-if="secondaryPosts.length === 0 && !featuredPost" class="empty-state">
          <h3>Nessun articolo trovato</h3>
          <p>Prova a cambiare i filtri di ricerca.</p>
          <button @click="selectedCategory = 'Tutti'; searchQuery = ''" class="reset-btn">Reset filtri</button>
        </div>
        
        <div v-else-if="secondaryPosts.length === 0" class="empty-state">
          <h3>Nessun altro articolo</h3>
          <p>Prova a cambiare categoria o ricerca.</p>
        </div>
        
        <div v-else class="articles-horizontal-list">
          <article v-for="article in secondaryPosts" :key="article.id" class="article-horizontal-card">
            <NuxtLink :to="`/blog/${article.slug}`" class="article-horizontal-link">
              <div class="article-horizontal-image">
                <nuxt-img 
                  :src="article.image" 
                  :alt="article.title"
                  class="article-horizontal-img"
                  format="webp"
                  width="400"
                  height="300"
                />
                <div class="article-horizontal-overlay"></div>
                <span class="article-horizontal-category">{{ article.category }}</span>
              </div>
              
              <div class="article-horizontal-content">
                <div class="article-horizontal-meta">
                  <span class="article-horizontal-date">{{ formatDate(article.date) }}</span>
                  <span class="article-horizontal-separator">•</span>
                  <span class="article-horizontal-time">{{ article.readTime }}</span>
                </div>
                
                <h3 class="article-horizontal-title">{{ article.title }}</h3>
                <p class="article-horizontal-excerpt">{{ article.excerpt }}</p>
                
                <div class="article-horizontal-footer">
                  <span class="article-horizontal-cta">Leggi l'articolo</span>
                  <div class="article-horizontal-author">
                    <span>{{ article.author }}</span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
/* Blog Horizontal Layout */
.blog-horizontal {
  background: var(--bg);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
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

/* Blog Header */
.blog-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
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
  margin: 0 auto;
}

/* Blog Controls */
.blog-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-2xl);
  margin-bottom: var(--space-4xl);
  padding: var(--space-2xl) 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  flex-wrap: wrap;
}

.categories-filter {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.category-btn {
  padding: var(--space-sm) var(--space-lg);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all var(--transition-base);
  cursor: pointer;
}

.category-btn:hover {
  background: var(--surface-elevated);
  border-color: var(--primary);
  color: var(--text-primary);
}

.category-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--text-inverse);
  box-shadow: var(--shadow-primary);
}

.search-container {
  min-width: 300px;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: var(--space-lg);
  color: var(--text-muted);
  pointer-events: none;
}

.search-input {
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  padding: var(--space-md) var(--space-xl) var(--space-md) 52px;
  color: var(--text-primary);
  font-size: var(--text-sm);
  font-weight: 500;
  transition: all var(--transition-base);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  background: var(--surface-elevated);
  box-shadow: 0 0 0 3px var(--primary-glow);
}

/* Featured Article Orizzontale */
.featured-horizontal {
  margin-bottom: var(--space-4xl);
  max-width: 100%;
  overflow: hidden;
}

.featured-horizontal-link {
  display: flex;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  text-decoration: none;
  transition: all var(--transition-base);
  min-height: 400px;
  box-shadow: var(--shadow-sm);
}

.featured-horizontal-link:hover {
  transform: translateX(8px);
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.featured-horizontal-image {
  position: relative;
  width: 45%;
  min-width: 400px;
  overflow: hidden;
}

.featured-horizontal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-slow);
}

.featured-horizontal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 100%);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.featured-horizontal-link:hover .featured-horizontal-overlay {
  opacity: 1;
}

.featured-horizontal-link:hover .featured-horizontal-img {
  transform: scale(1.05);
}

.featured-horizontal-content {
  flex: 1;
  padding: var(--space-3xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.featured-horizontal-meta {
  margin-bottom: var(--space-lg);
}

.featured-horizontal-category {
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

.featured-horizontal-details {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.featured-horizontal-separator {
  color: var(--primary);
  opacity: 0.5;
}

.featured-horizontal-title {
  font-size: var(--text-3xl);
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.featured-horizontal-excerpt {
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
}

.featured-horizontal-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.featured-horizontal-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  background: var(--primary);
  color: var(--text-inverse);
  font-weight: 700;
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.featured-horizontal-link:hover .featured-horizontal-cta {
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.featured-horizontal-tags {
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

/* Articles Horizontal Section */
.articles-horizontal-section {
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

.articles-horizontal-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

/* Article Horizontal Cards */
.article-horizontal-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.article-horizontal-card:hover {
  transform: translateX(8px);
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
}

.article-horizontal-link {
  display: flex;
  text-decoration: none;
  color: inherit;
  min-height: 250px;
}

.article-horizontal-image {
  position: relative;
  width: 35%;
  min-width: 300px;
  overflow: hidden;
}

.article-horizontal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-slow);
}

.article-horizontal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 100%);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.article-horizontal-card:hover .article-horizontal-overlay {
  opacity: 1;
}

.article-horizontal-card:hover .article-horizontal-img {
  transform: scale(1.05);
}

.article-horizontal-category {
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

.article-horizontal-content {
  flex: 1;
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.article-horizontal-meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-bottom: var(--space-lg);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.article-horizontal-separator {
  color: var(--primary);
  opacity: 0.5;
}

.article-horizontal-title {
  font-size: var(--text-xl);
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: var(--space-md);
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.article-horizontal-excerpt {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
  flex: 1;
}

.article-horizontal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--line);
}

.article-horizontal-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--primary);
  font-weight: 700;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all var(--transition-base);
}

.article-horizontal-card:hover .article-horizontal-cta {
  gap: var(--space-md);
}

.article-horizontal-author {
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: var(--space-4xl);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-2xl);
}

.empty-state h3 {
  font-size: var(--text-2xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.empty-state p {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
}

.reset-btn {
  padding: var(--space-md) var(--space-xl);
  background: var(--primary);
  color: var(--text-inverse);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all var(--transition-base);
}

.reset-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .featured-horizontal-image {
    min-width: 350px;
  }
  
  .article-horizontal-image {
    min-width: 280px;
  }
}

@media (max-width: 1024px) {
  .blog-controls {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-xl);
  }
  
  .search-container {
    width: 100%;
  }
  
  .featured-horizontal-link {
    flex-direction: column;
  }
  
  .featured-horizontal-image {
    width: 100%;
    min-width: auto;
    height: 300px;
  }
  
  .article-horizontal-link {
    flex-direction: column;
  }
  
  .article-horizontal-image {
    width: 100%;
    min-width: auto;
    height: 200px;
  }
}

@media (max-width: 768px) {
  .featured-horizontal-content {
    padding: var(--space-2xl);
  }
  
  .featured-horizontal-title {
    font-size: var(--text-2xl);
  }
  
  .featured-horizontal-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-lg);
  }
  
  .article-horizontal-content {
    padding: var(--space-xl);
  }
  
  .article-horizontal-title {
    font-size: var(--text-lg);
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: var(--text-2xl);
  }
  
  .featured-horizontal-content,
  .article-horizontal-content {
    padding: var(--space-lg);
  }
  
  .categories-filter {
    justify-content: center;
  }
}
</style>
