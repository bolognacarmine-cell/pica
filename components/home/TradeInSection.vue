
<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const form = ref({
  nome: '',
  email: '',
  telefono: '',
  citta: '',
  marca: '',
  modello: '',
  versione: '',
  anno: '',
  km: '',
  cilindrata: '',
  alimentazione: '',
  targa: '',
  colore: '',
  proprietari: '',
  stato: '',
  incidentato: 'no',
  tagliandi: 'no',
  revisione: 'no',
  accessori: '',
  descrizione: '',
  difetti: '',
  prezzoDesiderato: '',
  motoInteresse: '',
  privacy: false
})

const submitted = ref(false)
const showForm = ref(false)
const loading = ref(false)
const imagesBase64 = ref({})

const toggleForm = () => {
  showForm.value = true
  nextTick(() => {
    const el = document.querySelector('.trade-form-container')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
    }
  })
}

const handleFileUpload = (event, type) => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    imagesBase64.value[type] = e.target.result
  }
  reader.readAsDataURL(file)
}

const submitForm = async () => {
  loading.value = true
  try {
    const payload = {
      ...form.value,
      imagesBase64: Object.values(imagesBase64.value)
    }

    const res = await $fetch('/api/trade-ins', {
      method: 'POST',
      body: payload
    })

    if (res.success) {
      submitted.value = true
      nextTick(() => {
        gsap.from('.success-message', {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(1.7)'
        })
      })
    }
  } catch (err) {
    console.error('Errore invio permuta:', err)
    alert('Si è verificato un errore durante l\'invio. Riprova più tardi.')
  } finally {
    loading.value = false
  }
}

let ctx
onMounted(async () => {
  await nextTick()
  ctx = gsap.context(() => {
    // Header Animation
    const headerElements = document.querySelectorAll('.trade-content > .section-kicker, .trade-content > .section-title, .trade-content > .section-description')
    if (headerElements.length > 0) {
      gsap.fromTo(headerElements, 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.trade-section',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          clearProps: 'all'
        }
      )
    }

    // Benefits Animation
    const benefitItems = document.querySelectorAll('.benefits-list li')
    if (benefitItems.length > 0) {
      gsap.fromTo(benefitItems, 
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.benefits-list',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'all'
        }
      )
    }

    // CTA Animation
    const ctaWrapper = document.querySelector('.trade-actions')
    if (ctaWrapper) {
      gsap.fromTo(ctaWrapper, 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.trade-actions',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'all'
        }
      )
    }
  })
})
</script>

<template>
  <section id="usato" class="trade-section">
    <div class="container">
      <div class="trade-card">
        <div class="trade-content">
          <p class="section-kicker">Consulenza</p>
          <h2 class="section-title">Trova il mezzo perfetto per te</h2>
          <p class="section-description">Scegliere un camper o una roulotte è un passo importante. Che tu stia cercando la tua prima casa su ruote o voglia permutare il tuo usato, siamo qui per guidarti.</p>
          
          <!-- Premium Cards Vendita Veicoli -->
          <div class="vehicle-cards">
            <div class="vehicle-card-item">
              <div class="card-image" style="background-image: url('https://images.unsplash.com/photo-1558020113-5b9a28bb9733?auto=format&fit=crop&q=80&w=600')"></div>
              <div class="card-content">
                <h3>Camper Famiglia</h3>
                <p>Soluzioni spaziose e sicure per viaggiare con i tuoi cari in totale comfort.</p>
                <div class="card-features">
                  <span class="feature">Spazio</span>
                  <span class="feature">Sicurezza</span>
                  <span class="feature">Comfort</span>
                </div>
              </div>
            </div>
            
            <div class="vehicle-card-item">
              <div class="card-image" style="background-image: url('https://images.unsplash.com/photo-1618668123933-0b4a2f5b6b2c?auto=format&fit=crop&q=80&w=600')"></div>
              <div class="card-content">
                <h3>Roulotte Vacanza</h3>
                <p>La libertà del campeggio con tutti i comfort di casa per vacanze indimenticabili.</p>
                <div class="card-features">
                  <span class="feature">Libertà</span>
                  <span class="feature">Praticità</span>
                  <span class="feature">Design</span>
                </div>
              </div>
            </div>
            
            <div class="vehicle-card-item">
              <div class="card-image" style="background-image: url('https://images.unsplash.com/photo-1558618667-f725c4cd7ab3?auto=format&fit=crop&q=80&w=600')"></div>
              <div class="card-content">
                <h3>Usato Garantito</h3>
                <p>Ogni mezzo viene sottoposto a rigorosi controlli tecnici per garantire massima affidabilità.</p>
                <div class="card-features">
                  <span class="feature">Garanzia</span>
                  <span class="feature">Controllo</span>
                  <span class="feature">Certificato</span>
                </div>
              </div>
            </div>
          </div>

          <div class="trade-actions mt-8">
            <a href="#contatti" class="btn-primary-custom">Richiedi una Consulenza</a>
          </div>
        </div>

        <div class="trade-visual">
          <div class="visual-placeholder">
            <img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800" alt="Consulenza Camper" class="trade-img" />
            <div class="visual-overlay"></div>
            <div class="floating-badge">
              <span class="number">100%</span>
              <span class="label">Supporto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trade-section {
  padding: 100px 0;
  background: var(--bg);
}

.trade-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  background: var(--panel);
  border-radius: 40px;
  border: 1px solid var(--line);
  overflow: hidden;
  align-items: center;
}

@media (max-width: 1024px) {
  .trade-card {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.trade-content {
  padding: 60px;
}

@media (max-width: 640px) {
  .trade-content {
    padding: 40px 24px;
  }
}

.section-kicker {
  color: var(--primary);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 24px;
  line-height: 1.1;
}

.section-description {
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 32px;
}

.vehicle-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
  margin: var(--space-3xl) 0;
}

.vehicle-card-item {
  background: var(--surface-elevated);
  border: 1px solid var(--line);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  transition: all var(--transition-base);
  height: 400px;
  position: relative;
}

.vehicle-card-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary);
}

.card-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.4) saturate(0.8);
  transition: all var(--transition-base);
}

.vehicle-card-item:hover .card-image {
  filter: brightness(0.5) saturate(1);
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-2xl);
  text-align: center;
}

.card-content h3 {
  font-size: var(--text-xl);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.card-content p {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-xl);
}

.card-features {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.feature {
  background: var(--primary-gradient);
  color: var(--text-inverse);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.trade-visual {
  height: 100%;
  position: relative;
}

.visual-placeholder {
  height: 100%;
  position: relative;
}

.trade-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 400px;
}

.visual-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, var(--panel) 0%, transparent 100%);
}

@media (max-width: 1024px) {
  .visual-overlay {
    background: linear-gradient(to top, var(--panel) 0%, transparent 100%);
  }
}

.floating-badge {
  position: absolute;
  bottom: 40px;
  right: 40px;
  background: var(--primary);
  color: white;
  padding: 20px 30px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.floating-badge .number {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
}

.floating-badge .label {
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
}
</style>
