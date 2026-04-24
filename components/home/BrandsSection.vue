<script setup>
// Marchi principali e Service Center - Versione Premium con loghi SVG/Mockup
const brands = [
  { name: 'Across Car', type: 'Concessionario Ufficiale' },
  { name: 'Viesa', type: 'Service Center' },
  { name: 'Thetford', type: 'Partner Tecnico' },
  { name: 'Webasto', type: 'Assistenza Autorizzata' },
  { name: 'Hymer', type: 'Rivenditore' },
  { name: 'Knaus', type: 'Service Point' }
]
</script>

<template>
  <section id="marchi" class="brands-section py-20 md:py-24 bg-gray-50 dark:bg-[#080808]">
    <div class="container mx-auto px-4">
      <div class="section-heading text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <span class="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-4 inline-block bg-primary/10 px-4 py-2 rounded-full">Partnership & Qualità</span>
        <h2 class="text-3xl md:text-5xl font-black mb-6 dark:text-white uppercase tracking-tighter leading-tight">
          Centro Assistenza & <br><span class="text-primary italic">Rivenditore Autorizzato</span>
        </h2>
        <p class="text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium">
          Collaboriamo con i leader mondiali del caravanning per garantirti solo il meglio.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        <div
          v-for="brand in brands"
          :key="brand.name"
          class="group relative bg-white dark:bg-white/5 rounded-2xl p-6 md:p-8 border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden"
        >
          <!-- Background accent hover -->
          <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10 flex flex-col items-center">
            <span class="text-xl md:text-2xl font-black text-white/40 group-hover:text-white uppercase tracking-tighter transition-all duration-500 mb-2">
              {{ brand.name }}
            </span>
            <div class="h-0.5 w-8 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            <p class="mt-4 text-[9px] text-gray-500 uppercase font-black tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              {{ brand.type }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.brands-section {
  scroll-margin-top: 100px;
}
</style>