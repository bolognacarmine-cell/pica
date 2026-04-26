<script setup>
import { ref } from 'vue'

const route = useRoute()
const loading = ref(true)
const error = ref(null)
const post = ref(null)

// Articoli realistici con slug matching
const articles = {
  'guida-completa-scelta-camper-perfetto': {
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
    content: `# Guida Completa alla Scelta del Camper Perfetto: Consigli da Esperti

Scegliere il camper giusto è una decisione importante che influenzerà tutti i tuoi futuri viaggi. In questa guida completa, ti aiuteremo a navigare tra le opzioni disponibili per trovare il veicolo perfetto per le tue esigenze.

## Tipologie di Camper: Quale Fa per Te?

### **Camper Profiliato**
Ideale per chi cerca spazio e comfort. Il design aerodinamico offre migliori prestazioni su strada e un consumo di carburante ridotto.

**Vantaggi:**
- Design aerodinamico
- Consumi contenuti
- Facile da guidare

**Svantaggi:**
- Spazio limitato
- Posti letto ridotti

### **Camper Mansardato**
Caratterizzato dalla letta sopra la cabina di guida, offre spazio abbondante ed è perfetto per famiglie.

**Vantaggi:**
- Spazio generoso
- Posti letto multipli
- Comfort elevato

**Svantaggi:**
- Maggiore resistenza all'aria
- Consumi più alti

### **Camper Semintegrale**
Senza cabina di guida separata, offre il massimo spazio interno e comfort.

**Vantaggi:**
- Spazio ottimale
- Comfort da hotel
- Design moderno

**Svantaggi:**
- Dimensioni importanti
- Richiede patente appropriata

## Motorizzazioni: Benzina, Diesel o GPL?

### **Motorizzazione Diesel**
La più comune per camper di medie e grandi dimensioni.

**Pro:**
- Consumi ridotti
- Coppia elevata
- Durata motore

**Contro:**
- Costo manutenzione
- Impatto ambientale

### **Motorizzazione Benzina**
Ideale per camper piccoli e mezzi.

**Pro:**
- Costo acquisto inferiore
- Manutenzione semplice
- Prestazioni brillanti

**Contro:**
- Consumi elevati
- Autonomia limitata

### **Impianto GPL/Metano**
Soluzione ecologica ed economica.

**Pro:**
- Costo carburante ridotto
- Minor impatto ambientale

**Contro:**
- Rete distribuzione limitata
- Perdita spazio serbatoio

## Layout Interni: Come Scegliere la Configurazione Giusta

### **Letti fissi vs Convertibili**
I letti fissi offrono comfort immediato ma occupano spazio giorno. I letti convertibili ottimizzano lo spazio ma richiedono preparazione serale.

### **Cucina: Lineare o a L?**
La cucina lineare è compatta ma funzionale. Quella a L offre più superficie di lavoro ma richiede più spazio.

### **Bagno: Completo o Parziale?**
Il bagno completo con doccia è essenziale per lunghi soggiorni. Il bagno parziale si limita a WC e lavabo.

## Accessori Essenziali: Cosa Non Può Mancare

### **Impianto Elettrico**
- Pannelli solari
- Batterie al litio
- Inverter
- Prese 220V

### **Riscaldamento e Climatizzazione**
- Riscaldamento centralizzato
- Aria condizionata
- Ventilazione forzata

### **Sicurezza**
- Allarme antifurto
- Estintori
- Kit pronto soccorso
- Triangoli di segnalazione

## Budget: Quanto Investire in un Camper?

### **Camper Nuovi**
- **Entry level:** €40.000 - €60.000
- **Media gamma:** €60.000 - €90.000
- **Alta gamma:** €90.000 - €150.000+

### **Camper Usati**
- **Recenti (0-3 anni):** €30.000 - €50.000
- **Maturi (3-7 anni):** €20.000 - €35.000
- **Datati (7+ anni):** €10.000 - €25.000

## Prova su Strada: I Controlli Essenziali

Prima dell'acquisto, effettua sempre una prova su strada completa:

1. **Guida in città** - Verifica manovrabilità
2. **Percorso autostradale** - Testa stabilità ad alta velocità
3. **Salita e discesa** - Controlla potenza motorizzazione
4. **Parcheggio** - Valuta facilità di posteggio

## Manutenzione: Costi da Prevedere

### **Manutenzione Ordinaria**
- Tagliando annuale: €500 - €800
- Cambio gomme: €600 - €1.200
- Assicurazione: €600 - €1.200

### **Manutenzione Straordinaria**
- Revisione impianto gas: €200 - €400
- Sostituzione batterie: €800 - €1.500
- Riparazione carrozzeria: variabile

## Conclusione: Il Camper Perfetto Esiste?

Il camper perfetto non esiste, ma il camper *perfetto per te* sì. Valuta onestamente le tue esigenze, il tuo budget e il tuo stile di viaggio.

Ricorda che il camper è solo il mezzo: la vera libertà sta nelle avventure che vivrai e nei luoghi che scoprirai.

**Pronto a iniziare il tuo viaggio? Contatta i nostri esperti per una consulenza personalizzata!**`
  }
}

const fetchPost = async () => {
  try {
    const slug = route.params.slug
    const article = articles[slug]
    
    if (!article) {
      throw new Error('Articolo non trovato')
    }
    
    post.value = article
    
    // SEO Dinamica
    useHead({
      title: `${article.title} | Pica Caravan Blog`,
      meta: [
        { name: 'description', content: article.excerpt },
        { property: 'og:title', content: `${article.title} | Pica Caravan Blog` },
        { property: 'og:description', content: article.excerpt },
        { property: 'og:image', content: article.image },
        { property: 'og:type', content: 'article' }
      ]
    })
  } catch (err) {
    console.error('ERRORE FETCH POST:', err)
    error.value = 'Articolo non trovato o errore nel caricamento.'
  } finally {
    loading.value = false
  }
}

// Parser Markdown con rendering premium
const renderMarkdown = (text) => {
  if (!text) return ''
  
  let html = text
    .replace(/^# (.*$)/gim, '<h1 class="article-h1">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="article-h2">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="article-h3">$1</h3>')
    .replace(/\*\*(.*)\*\*/gim, '<strong class="article-strong">$1</strong>')
    .replace(/\*(.*)\*/gim, '<em class="article-em">$1</em>')
    .replace(/^- (.*$)/gim, '<li class="article-li">$1</li>')
    .replace(/^> (.*$)/gim, '<blockquote class="article-blockquote">$1</blockquote>')
    .replace(/!\[(.*?)\]\((.*?)\)/gim, (match, alt, url) => {
      return `<img src="${url}" alt="${alt}" class="article-img" />`
    })
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" class="article-link">$1</a>')
    .replace(/\n\n/gim, '</p><p class="article-p">')
    
  return `<div class="article-content"><p class="article-p">${html}</p></div>`
}

await fetchPost()

const formatDate = (d) => new Date(d).toLocaleDateString('it-IT', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

const readingTime = (content) => {
  if (!content) return '2 min lettura'
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min lettura`
}
</script>

<template>
  <div class="blog-post-page section">
    <div v-if="loading" class="loading-state">
      <p>Caricamento articolo...</p>
    </div>

    <div v-else-if="error" class="error-state">
      <h2>{{ error }}</h2>
      <p>Impossibile caricare l'articolo richiesto.</p>
      <NuxtLink to="/blog" class="btn btn-primary">Torna al Blog</NuxtLink>
    </div>

    <div v-else-if="post" class="article-container">
      <div class="article-hero">
        <nuxt-img 
          :src="post.image" 
          :alt="post.title"
          class="article-hero-image"
          format="webp"
          width="1920"
          height="1080"
        />
        <div class="hero-content">
          <div class="container">
            <div class="hero-breadcrumb">
              <NuxtLink to="/blog" class="breadcrumb-link">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                <span>Torna al Blog</span>
              </NuxtLink>
            </div>
            <div class="hero-meta">
              <span class="category-badge">{{ post.category }}</span>
              <div class="meta-details">
                <span class="meta-date">{{ formatDate(post.date) }}</span>
                <span class="meta-separator">•</span>
                <span class="meta-author">{{ post.author }}</span>
                <span class="meta-separator">•</span>
                <span class="meta-time">{{ post.readTime }}</span>
              </div>
            </div>
            <h1 class="hero-title">{{ post.title }}</h1>
            <p class="hero-excerpt">{{ post.excerpt }}</p>
          </div>
        </div>
      </div>

      <div class="article-content-wrapper">
        <div class="container">
          <div class="article-main">
            <div class="article-body" v-html="renderMarkdown(post.content)"></div>
            
            <div class="article-tags">
              <h3 class="tags-title">Argomenti correlati</h3>
              <div class="tags-list">
                <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>

            <div class="article-share">
              <h3 class="share-title">Condividi questo articolo</h3>
              <div class="share-buttons">
                <a href="#" class="share-btn facebook">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook</span>
                </a>
                <a href="#" class="share-btn twitter">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  <span>Twitter</span>
                </a>
                <a href="#" class="share-btn linkedin">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div class="article-navigation">
              <NuxtLink to="/blog" class="nav-link back-link">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                <span>Torna agli Articoli</span>
              </NuxtLink>
              <NuxtLink to="/contatti" class="nav-link contact-link">
                <span>Contatta Esperto</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Blog Post Page */
.blog-post-page {
  background: var(--bg);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

/* Loading State */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
}

/* Error State */
.error-state {
  text-align: center;
  padding: var(--space-4xl);
  max-width: 600px;
  margin: 0 auto;
}

.error-state h2 {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
}

.error-state p {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
}

/* Article Hero */
.article-hero {
  position: relative;
  height: 70vh;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.article-hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding-bottom: var(--space-4xl);
  background: rgba(0, 0, 0, 0.9);
}

.hero-breadcrumb {
  margin-bottom: var(--space-lg);
}

.breadcrumb-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--text-muted);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-meta {
  margin-bottom: var(--space-xl);
}

.category-badge {
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

.meta-details {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.meta-separator {
  color: var(--primary);
}

.hero-title {
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
  font-weight: 900;
  line-height: 1.1;
  color: var(--text-inverse);
  margin-bottom: var(--space-lg);
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.hero-excerpt {
  font-size: var(--text-xl);
  line-height: 1.6;
  color: var(--text-inverse);
  max-width: 800px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

/* Article Content */
.article-content-wrapper {
  background: var(--surface);
  margin-top: -60px;
  position: relative;
  z-index: 10;
  border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
  min-height: 60vh;
}

.article-main {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-4xl) var(--space-2xl);
}

/* Article Typography */
.article-content {
  margin-bottom: var(--space-3xl);
}

.article-p {
  font-size: var(--text-lg);
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
}

.article-h1 {
  font-size: var(--text-3xl);
  font-weight: 900;
  color: var(--text-primary);
  margin: var(--space-3xl) 0 var(--space-xl);
  line-height: 1.2;
}

.article-h2 {
  font-size: var(--text-2xl);
  font-weight: 800;
  color: var(--text-primary);
  margin: var(--space-2xl) 0 var(--space-lg);
  line-height: 1.3;
}

.article-h3 {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin: var(--space-xl) 0 var(--space-md);
  line-height: 1.4;
}

.article-strong {
  color: var(--text-primary);
  font-weight: 700;
}

.article-em {
  color: var(--primary);
  font-style: italic;
}
</style>
