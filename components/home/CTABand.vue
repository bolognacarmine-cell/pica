<script setup>
</script>

<template>
<section class="cta-band">
    <div class="container relative z-10">
      <div class="cta-band-shell group p-10 md:p-16 lg:p-20 bg-primary rounded-2xl shadow-2xl shadow-primary/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <!-- Decorative Background -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div class="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150"></div>
        
        <div class="cta-content relative z-10 text-center lg:text-left max-w-2xl">
          <span class="text-[10px] font-black text-white/60 uppercase tracking-[0.3em] mb-4 inline-block">Pica Caravan</span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Passione e <br class="hidden lg:block"> <span class="text-white/80 italic">Professionalità</span>
          </h2>
          <p class="text-white/70 text-base md:text-lg font-medium leading-relaxed">
            Vieni a trovarci a San Nicola la Strada per scoprire il nostro parco veicoli e i servizi di rimessaggio. Il nostro team è pronto a guidarti.
          </p>
        </div>
        
        <div class="cta-actions relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#contatti" class="px-10 py-5 bg-white text-primary text-xs font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all duration-500 text-center">
            Richiedi Info
          </a>
          <a href="tel:0823224038" class="px-10 py-5 bg-black/20 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white hover:text-primary transition-all duration-500 flex items-center justify-center gap-3">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            0823 224038
          </a>
        </div>
      </div>
    </div>
</section>
</template>

<style scoped>
.cta-band {
  padding: 30px 0 60px;
  background: #030303;
}

.cta-band-shell {
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
  padding: 64px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: 
    linear-gradient(135deg, rgba(241, 110, 34, 0.12), transparent 50%),
    linear-gradient(225deg, rgba(43, 35, 90, 0.05), transparent 50%),
    #0a0a0a;
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.8);
  overflow: hidden;
}

.glow-effect {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(241, 110, 34, 0.15) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.section-kicker {
  display: inline-block;
  color: var(--primary);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.875rem;
  margin-bottom: 20px;
  background: rgba(241, 110, 34, 0.1);
  padding: 6px 16px;
  border-radius: 100px;
  border: 1px solid rgba(241, 110, 34, 0.2);
}

.cta-band-shell h2 {
  margin: 0 0 24px;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 950;
  line-height: 1;
  letter-spacing: -0.03em;
  color: white;
}

.cta-desc {
  color: #94a3b8;
  margin: 0;
  font-size: 1.125rem;
  max-width: 540px;
  line-height: 1.6;
}

.cta-actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.secondary-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.btn-primary-custom,
.btn-secondary-custom,
.btn-whatsapp-custom,
.btn-blog-custom {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 16px 32px;
  border-radius: 16px;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  gap: 12px;
  position: relative;
  overflow: hidden;
}

/* Shine effect base */
.btn-primary-custom::after,
.btn-whatsapp-custom::after,
.btn-blog-custom::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.btn-primary-custom:hover::after,
.btn-whatsapp-custom:hover::after,
.btn-blog-custom:hover::after {
  left: 100%;
}

.btn-primary-custom {
  background: var(--primary-gradient);
  color: white;
  box-shadow: 0 10px 20px -10px rgba(241, 110, 34, 0.5);
}

.btn-primary-custom:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 20px 40px -15px rgba(241, 110, 34, 0.6);
  filter: brightness(1.1);
}

.btn-whatsapp-custom {
  color: #fff;
  background: linear-gradient(135deg, #25D366, #128C7E);
  box-shadow: 0 10px 30px -10px rgba(37, 211, 102, 0.3);
}

.btn-whatsapp-custom:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 20px 40px -15px rgba(37, 211, 102, 0.4);
  filter: brightness(1.1);
}

.btn-secondary-custom {
  color: #fff;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.btn-secondary-custom:hover {
  transform: translateY(-5px) scale(1.03);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
}

.btn-blog-custom {
  border: 1px solid var(--primary);
  color: var(--primary-2);
  background: transparent;
}

.btn-blog-custom:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 20px 40px -15px rgba(225, 29, 72, 0.4);
}

.btn-icon {
  transition: transform 0.3s ease;
}

.btn-secondary-custom:hover .btn-icon,
.btn-whatsapp-custom:hover .btn-icon {
  transform: rotate(-10deg) scale(1.1);
}

.btn-icon-right {
  transition: transform 0.3s ease;
}

.btn-blog-custom:hover .btn-icon-right {
  transform: translateX(6px);
}

.desktop-only {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-only {
    display: block;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .cta-band-shell {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 60px 32px;
    gap: 40px;
  }
  
  .cta-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .cta-desc {
    margin: 0 auto;
  }
  
  .cta-actions {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .cta-band-shell {
    padding: 48px 20px;
    border-radius: 32px;
  }
  
  .cta-band-shell h2 {
    font-size: 2.25rem;
  }
  
  .btn-primary-custom,
  .btn-secondary-custom,
  .btn-whatsapp-custom,
  .btn-blog-custom {
    padding: 16px 24px;
    font-size: 0.9375rem;
  }
}
</style>