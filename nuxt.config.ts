export default defineNuxtConfig({
  // ✅ Compatibilità Nuxt
  compatibilityDate: '2026-03-09',

  // CSS globale
  css: [
    '~/assets/css/main.css',
    '~/assets/css/silktide-consent.css'
  ],

  // ✅ Configurazione runtime per API e URL pubblico
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI || process.env.NUXT_MONGODB_URI,
    mongodbDbName: process.env.MONGODB_DB_NAME || process.env.NUXT_MONGODB_DB_NAME || 'picacaravan_db',
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://picacaravan.it',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://api.picacaravan.it',
      adminUser: process.env.ADMIN_USER || 'picacaravan',
      adminPassword: process.env.ADMIN_PASSWORD || 'pica2026'
    }
  },

  // Configurazione dell'app (head globale)
  app: {
    head: {
      titleTemplate: '%s | Pica Caravan',
      htmlAttrs: { lang: 'it' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#111111' },
        { name: 'description', content: 'Pica Caravan a San Nicola la Strada (CE) è la tua concessionaria di fiducia per la vendita di camper, roulotte e rimessaggio sicuro.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://picacaravan.it' },
        { property: 'og:title', content: 'Pica Caravan | Vendita Camper e Roulotte a Caserta' },
        { property: 'og:description', content: 'Scopri la vasta gamma di camper e roulotte nuovi e usati. Servizi di assistenza, riparazione e rimessaggio a San Nicola la Strada.' },
        { property: 'og:image', content: 'https://picacaravan.it/logo-pica.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Pica Caravan | Camper e Roulotte a Caserta' },
        { name: 'twitter:description', content: 'Vendita, assistenza e rimessaggio camper e roulotte a San Nicola la Strada (CE).' },
        { name: 'twitter:image', content: 'https://picacaravan.it/logo-pica.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://picacaravan.it' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // ✅ Build performance e ottimizzazioni
  vite: {
    build: { sourcemap: false },
    optimizeDeps: { include: ['gsap'] }
  },

  // ✅ Configurazione Nitro per gestire file grandi (immagini)
  nitro: {
    experimental: {
      bodySizeLimit: '20mb'
    }
  },
  // ✅ Moduli opzionali (immagini e sitemap)
  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  // ✅ Sitemap per SEO
  sitemap: {
    siteUrl: 'https://picacaravan.it',
    gzip: true,
    exclude: [
      '/admin/**',
      '/portale/dashboard/**'
    ]
  },

  // ✅ Immagini ottimizzate
  image: {
    domains: ['api.picacaravan.it'],
    format: ['webp', 'avif']
  }
})
