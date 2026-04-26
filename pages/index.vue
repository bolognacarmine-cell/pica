<script setup>
import { ref } from 'vue'
import { useRuntimeConfig } from '#imports'

// Componenti modulari
import HeroSection from '~/components/home/HeroSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import FeaturedVehicles from '~/components/home/FeaturedVehicles.vue'
import TradeInSection from '~/components/home/TradeInSection.vue'
import ServiceSection from '~/components/home/ServiceSection.vue'
import BrandsSection from '~/components/home/BrandsSection.vue'
import CTABand from '~/components/home/CTABand.vue'
import CamperWorldSection from '~/components/home/CamperWorldSection.vue'
import BlogPreviewSection from '~/components/home/BlogPreviewSection.vue'
import PreventivoSection from '~/components/home/PreventivoSection.vue'
import ContactSection from '~/components/home/ContactSection.vue'
import TestimonialsSection from '~/components/home/TestimonialsSection.vue'

// Config runtime
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'http://localhost:3000'
const apiBase = config.public.apiBase || 'http://localhost:3001'

// SEO Avanzata & Dati Strutturati
useHead({
  htmlAttrs: { lang: 'it' },
  title: 'Pica Caravan | Vendita Camper e Roulotte a San Nicola la Strada (CE)',
  meta: [
    { name: 'description', content: 'Pica Caravan di Antimo Pica: vendita camper e roulotte nuovi e usati, assistenza tecnica, riparazioni e rimessaggio sicuro a San Nicola la Strada (CE).' },
    { name: 'keywords', content: 'vendita camper caserta, camper usati caserta, roulotte caserta, rimessaggio camper caserta, assistenza camper caserta, ricambi caravan' },
    { name: 'robots', content: 'index,follow' },
    { name: 'author', content: 'Pica Caravan' },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Pica Caravan | Camper, Roulotte e Rimessaggio a Caserta' },
    { property: 'og:description', content: 'Scopri la nostra selezione di camper e roulotte. Offriamo servizi completi di assistenza, riparazione e rimessaggio.' },
    { property: 'og:url', content: siteUrl },
    { property: 'og:image', content: `${siteUrl}/logo-pica-caravan.jpg` },
    { property: 'og:site_name', content: 'Pica Caravan' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Pica Caravan | Vendita e Assistenza Camper' },
    { name: 'twitter:description', content: 'Camper e roulotte nuovi e usati a San Nicola la Strada. Rimessaggio e assistenza specializzata.' },
    { name: 'twitter:image', content: `${siteUrl}/logo-pica-caravan.jpg` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoDealer",
        "name": "Pica Caravan",
        "image": `${siteUrl}/logo-pica-caravan.jpg`,
        "@id": siteUrl,
        "url": siteUrl,
        "telephone": "+390823224038",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Retella / Pizzo Pilato 2ª Traversa n. 2",
          "addressLocality": "San Nicola la Strada",
          "postalCode": "81020",
          "addressRegion": "CE",
          "addressCountry": "IT"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.0312,
          "longitude": 14.3312
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "13:00"
          }
        ]
      })
    }
  ]
})

// Stato dei veicoli
const vehicles = ref([])
const loading = ref(true)
const error = ref(false)

// Recupero veicoli dal backend
const fetchVehicles = async () => {
  try {
    const res = await $fetch('/api/veicoli')
    vehicles.value = Array.isArray(res.vehicles) ? res.vehicles : []
  } catch (e) {
    console.error('Errore nel caricamento:', e)
    error.value = true
  } finally {
    loading.value = false
  }
}

fetchVehicles()
</script>

<template>
  <div class="homepage">
    <!-- Hero dinamico -->
    <HeroSection
      badge="Pica Caravan • San Nicola la Strada"
      title="Camper e roulotte selezionati."
      subtitle="Consulenza su misura, usato garantito e officina specializzata. Ti accompagniamo dalla scelta alla consegna."
    />

    <!-- About Section -->
    <AboutSection />

    <!-- Featured Vehicles dinamico -->
    <div v-if="loading" class="state-box">Caricamento veicoli...</div>
    <div v-else-if="error" class="state-box error">Impossibile caricare i veicoli.</div>
    <FeaturedVehicles v-else :vehicles="vehicles" />

    <!-- Sezione Servizi / Rimessaggio -->
    <ServiceSection />

    <!-- Brands Section -->
    <BrandsSection />

    <!-- CTA Band -->
    <CTABand />

    <!-- Sezione Preventivo -->
    <PreventivoSection />

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<style scoped>
.homepage {
  background: var(--bg);
  color: #f5f5f5;
  min-height: 100vh;
}

.state-box {
  text-align: center;
  padding: 1.5rem;
  margin: 1.5rem auto;
  border-radius: 1rem;
  background: #111;
  color: #fff;
}

@media (min-width: 768px) {
  .state-box {
    padding: 2rem;
    margin: 2rem auto;
  }
}

.state-box.error {
  border: 1px solid #ff5b6b;
}
</style>
