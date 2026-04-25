<template>
  <footer class="site-footer">
    <div class="container py-20">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-10">
        <!-- Brand Col -->
        <div class="lg:col-span-2 max-w-md">
          <NuxtLink to="/" class="flex items-center gap-4 group no-underline mb-8">
            <div class="relative w-16 h-16 flex items-center justify-center">
              <img src="/logo-pica.png" alt="Logo Pica Caravan" class="w-full h-full object-contain" />
            </div>
            <div class="flex flex-col">
              <span class="text-2xl font-black tracking-tighter text-white uppercase leading-none group-hover:text-primary transition-colors">PICA CARAVAN</span>
              <span class="text-[10px] font-black tracking-[0.2em] text-primary uppercase opacity-90 mt-1">Vendita & Rimessaggio</span>
            </div>
          </NuxtLink>
          <p class="text-[var(--text-dim)] text-sm leading-relaxed mb-8">
            Pica Caravan di Antimo Pica. La tua concessionaria di riferimento a San Nicola la Strada per la vendita di camper, roulotte e rimessaggio sicuro. Oltre 20 anni di esperienza al servizio dei viaggiatori.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-[var(--line)] flex items-center justify-center text-[var(--text-dim)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-[var(--line)] flex items-center justify-center text-[var(--text-dim)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.242 3.608-1.308 1.266-.058-1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759-6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links Col -->
        <div>
          <h4 class="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">Navigazione</h4>
          <ul class="flex flex-col gap-4 p-0 list-none">
            <li v-for="link in ['Home', 'Veicoli', 'Blog', 'Azienda', 'Contatti']" :key="link">
              <NuxtLink :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`" class="text-[var(--text-dim)] hover:text-[var(--primary)] text-sm font-bold transition-colors no-underline uppercase tracking-wider">
                {{ link }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Col -->
        <div>
          <h4 class="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">Contatti</h4>
          <ul class="flex flex-col gap-6 p-0 list-none">
            <li class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--line)] flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <span class="text-[var(--text-dim)] text-xs leading-relaxed">Via Retella / Pizzo Pilato<br>San Nicola la Strada (CE)</span>
            </li>
            <li class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--line)] flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <span class="text-[var(--text-dim)] text-xs leading-relaxed">0823 224038<br>333 2327592</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-[var(--line)] py-10">
      <div class="container flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[var(--text-dim)] opacity-40 text-[10px] font-bold uppercase tracking-widest">
          &copy; 2026 PICA CARAVAN. TUTTI I DIRITTI RISERVATI. P.IVA 02741910613
        </p>
        <div class="flex gap-8">
          <NuxtLink to="/privacy-policy" class="text-[var(--text-dim)] opacity-40 hover:opacity-100 hover:text-white text-[10px] font-bold uppercase tracking-widest no-underline transition-colors">Privacy</NuxtLink>
          <NuxtLink to="/cookie-policy" class="text-[var(--text-dim)] opacity-40 hover:opacity-100 hover:text-white text-[10px] font-bold uppercase tracking-widest no-underline transition-colors">Cookies</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--bg);
  border-top: 1px solid var(--line);
}
</style>
