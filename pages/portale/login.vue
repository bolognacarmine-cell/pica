<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('pica')
const targa = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const handleLogin = async () => {
  loading.value = true
  errorMsg.value = ''
  
  try {
    const res = await $fetch('/api/auth/portal-login', {
      method: 'POST',
      body: {
        username: username.value,
        targa: targa.value,
        password: password.value
      }
    })
    
    if (res.success) {
      // Salva info sessione
      localStorage.setItem('rr_portal_token', res.token)
      localStorage.setItem('rr_portal_user', JSON.stringify(res.user))
      // Vai alla dashboard
      router.push('/portale/dashboard')
    }
  } catch (err) {
    errorMsg.value = err.statusMessage || 'Errore durante l\'accesso. Verifica i dati.'
  } finally {
    loading.value = false
  }
}

useHead({
  title: 'Accedi al tuo Veicolo | Pica Caravan',
  meta: [{ name: 'description', content: 'Portale privato clienti Pica Caravan.' }]
})
</script>

<template>
  <div class="portal-login-page">
    <div class="login-container">
      <div class="glass-panel p-10 shadow-2xl">
        <div class="login-header">
          <img src="/logo-pica-caravan.jpg" alt="Logo" class="portal-logo mx-auto" />
          <h1 class="text-3xl font-black mb-2">Portale Cliente</h1>
          <p class="text-white text-sm uppercase tracking-widest">Inserisci i dati del tuo veicolo</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form mt-8">
          <div class="form-group mb-6">
            <label class="premium-label">Username</label>
            <input 
              v-model="username" 
              type="text" 
              readonly 
              class="premium-input cursor-not-allowed"
            />
          </div>

          <div class="form-group mb-6">
            <label class="premium-label">Targa Veicolo</label>
            <input 
              v-model="targa" 
              type="text" 
              placeholder="ES: AA123BB" 
              required 
              maxlength="7"
              class="premium-input uppercase font-black tracking-widest text-center text-lg"
            />
          </div>

          <div class="form-group mb-8">
            <label class="premium-label">Password Personale</label>
            <input 
              v-model="password" 
              type="password" 
              placeholder="••••••••" 
              required 
              class="premium-input"
            />
          </div>

          <div v-if="errorMsg" class="error-banner mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
            {{ errorMsg }}
          </div>

          <button type="submit" class="btn-premium w-full justify-center" :disabled="loading">
            {{ loading ? 'Verifica in corso...' : 'Accedi al tuo veicolo' }}
          </button>

          <div class="login-footer mt-8 text-center">
            <p class="text-white/30 text-xs">Hai dimenticato la password? <a href="#" class="text-primary font-bold hover:underline">Contatta la concessionaria</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portal-login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #050505;
  padding: 24px;
}

.login-container {
  width: 100%;
  max-width: 480px;
}

.portal-logo {
  height: 90px;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.p-10 { padding: 2.5rem; }
.shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
.w-full { width: 100%; }
.justify-center { justify-content: center; }
.mx-auto { margin-left: auto; margin-right: auto; }
</style>
