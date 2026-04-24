<template>
  <footer class="site-footer bg-[#050505] pt-24 pb-12 overflow-hidden relative">
    <!-- Decorative Glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-3xl rounded-full"></div>

    <div class="container relative z-10">
      <div class="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        
        <!-- Brand Col -->
        <div class="brand-col lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-4 mb-8 group no-underline">
            <div class="w-16 h-16 bg-white p-2 rounded-2xl shadow-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <nuxt-img src="/logo-pica.png" alt="Logo Pica" class="w-full h-full object-contain" />
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-black text-white uppercase tracking-tighter">PICA CARAVAN</span>
              <span class="text-[8px] font-bold text-primary uppercase tracking-[0.3em]">Vendita & Rimessaggio</span>
            </div>
          </NuxtLink>
          <p class="text-gray-500 text-sm leading-relaxed mb-8">
            La tua concessionaria di riferimento a San Nicola la Strada per la vendita di camper, roulotte e rimessaggio sicuro. Qualità e passione dal 1990.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.242 3.608-1.308 1.266-.058-1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759-6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links Cols -->
        <div>
          <h4 class="text-white text-xs font-black uppercase tracking-[0.3em] mb-8">Navigazione</h4>
          <ul class="space-y-4">
            <li><NuxtLink to="/" class="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Home</NuxtLink></li>
            <li><NuxtLink to="/veicoli" class="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Veicoli</NuxtLink></li>
            <li><NuxtLink to="/#servizi" class="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Servizi</NuxtLink></li>
            <li><NuxtLink to="/#azienda" class="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Azienda</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white text-xs font-black uppercase tracking-[0.3em] mb-8">Informazioni</h4>
          <ul class="space-y-4">
            <li><NuxtLink to="/privacy-policy" class="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/cookie-policy" class="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Cookie Policy</NuxtLink></li>
            <li><NuxtLink to="/termini" class="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Termini & Condizioni</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Col -->
        <div>
          <h4 class="text-white text-xs font-black uppercase tracking-[0.3em] mb-8">Contatti</h4>
          <ul class="space-y-6">
            <li class="flex gap-4">
              <svg class="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span class="text-gray-500 text-sm leading-snug">Via Retella / Pizzo Pilato 2ª Traversa n. 2, San Nicola la Strada (CE)</span>
            </li>
            <li class="flex gap-4">
              <svg class="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493-1.498A1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/></svg>
              <span class="text-gray-500 text-sm font-bold">0823 224038</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
          &copy; 2026 PICA CARAVAN. ALL RIGHTS RESERVED.
        </p>
        <p class="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
          Developed by Antimo Pica
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #050505;
  padding: 3rem 0 0;
  border-top: 1px solid var(--line);
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .site-footer {
    padding: 4rem 0 0;
    margin-top: 3rem;
  }
}

@media (min-width: 1024px) {
  .site-footer {
    padding: 5rem 0 0;
    margin-top: 4rem;
  }
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .footer-grid {
    gap: 2.5rem;
    padding-bottom: 3rem;
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    gap: 3rem;
    padding-bottom: 3.5rem;
  }
}

.brand-col {
  max-width: 350px;
}

@media (max-width: 768px) {
  .brand-col {
    max-width: 100%;
  }
}

.footer-logo-img {
  height: 60px;
  width: auto;
  object-fit: contain;
}

@media (min-width: 768px) {
  .footer-logo-img {
    height: 70px;
  }
}

@media (min-width: 1024px) {
  .footer-logo-img {
    height: 80px;
  }
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
  letter-spacing: -0.02em;
  line-height: 1;
}

.brand-tagline {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-top: 4px;
}

.brand-desc {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}

.social-link {
  color: var(--muted);
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--line);
}

.social-link:hover {
  color: var(--primary);
  transform: translateY(-2px);
  background: rgba(255, 107, 53, 0.1);
  border-color: var(--primary);
}

.footer-col h4 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  color: var(--muted);
  font-size: 0.95rem;
  margin-bottom: 12px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-bottom {
  padding: 30px 0;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.85rem;
}

.bottom-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.privacy-links {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .bottom-flex {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
</style>
