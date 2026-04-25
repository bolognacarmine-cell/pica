<template>
  <div class="admin-container">
      <!-- Login Section -->
    <div v-if="!isAuthenticated" class="login-wall bg-[var(--bg)]">
      <div class="glass-panel p-10 w-full max-w-md relative overflow-hidden">
        <div class="mb-10 flex flex-col items-center">
          <img src="/logo-pica.png" alt="Pica Caravan" class="h-16 w-auto mb-6" />
          <h1 class="text-3xl font-black text-white tracking-tighter uppercase">PICA CARAVAN</h1>
          <p class="text-[10px] tracking-[0.4em] text-[var(--primary)] font-black uppercase mt-2">Area Riservata</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="form-group">
            <label class="premium-label">Username</label>
            <input 
              type="text" 
              v-model="usernameInput" 
              class="premium-input"
              placeholder="Inserisci username" 
              required 
            />
          </div>
          <div class="form-group">
            <label class="premium-label">Password</label>
            <input 
              type="password" 
              v-model="passwordInput" 
              class="premium-input"
              placeholder="••••••••" 
              required 
            />
          </div>
          <button type="submit" class="btn-premium w-full justify-center">
            Accedi al Pannello
          </button>
          <p v-if="loginError" class="text-center text-[var(--primary)] text-xs font-bold uppercase tracking-widest mt-4">
            Credenziali non valide
          </p>
        </form>
      </div>
    </div>

    <!-- Admin Dashboard -->
    <div v-else class="admin-dashboard bg-[var(--bg)]">
      <aside class="w-80 border-r border-[var(--line)] flex flex-col p-8 bg-[var(--panel)]">
        <div class="mb-12">
          <div class="flex flex-col">
            <span class="text-xl font-black text-white tracking-tighter">PICA CARAVAN</span>
            <span class="text-[10px] tracking-[0.3em] text-[var(--primary)] font-black uppercase">Admin Dashboard</span>
          </div>
        </div>

        <nav class="flex-1 space-y-2">
          <button 
            v-for="tab in [
              { id: 'list', label: 'Gestisci Veicoli', icon: '🚐' },
              { id: 'add', label: 'Aggiungi Nuovo', icon: '➕' },
              { id: 'leads', label: 'Preventivi', icon: '📩', count: leads.length },
              { id: 'tradeIns', label: 'Permute', icon: '🔄', count: tradeIns.length },
              { id: 'portal', label: 'Gestione Portale', icon: '👤' },
              { id: 'deadlines', label: 'Alert Scadenze', icon: '🔔', count: upcomingDeadlines.length, urgent: hasUrgentDeadlines },
              { id: 'blog', label: 'Journal Blog', icon: '📰' }
            ]"
            :key="tab.id"
            @click="tab.id === 'add' ? openAddForm() : (currentTab = tab.id); if(tab.id === 'leads') fetchLeads(); if(tab.id === 'tradeIns') fetchTradeIns(); if(tab.id === 'portal' || tab.id === 'deadlines') fetchPortalUsers(); if(tab.id === 'blog') fetchBlogPosts();"
            class="w-full flex items-center justify-between p-4 rounded-[var(--radius-md)]"
            :class="currentTab === tab.id ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary-glow)]' : 'text-[var(--text-dim)]'"
          >
            <div class="flex items-center gap-3">
              <span class="text-lg">{{ tab.icon }}</span>
              <span class="text-xs font-black uppercase tracking-widest">{{ tab.label }}</span>
            </div>
            <span v-if="tab.count" 
                  class="px-2 py-0.5 rounded-full text-[10px] font-black"
                  :class="currentTab === tab.id ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary-glow)]' : (tab.urgent ? 'bg-red-500/20 text-red-200 border border-red-500/30' : 'bg-[var(--line)] text-[var(--text-dim)]')">
              {{ tab.count }}
            </span>
          </button>
        </nav>

        <button @click="logout" class="mt-10 p-4 border border-[var(--line)] rounded-[var(--radius-md)] text-[var(--text-dim)] text-[10px] font-black uppercase tracking-widest">
          Disconnetti
        </button>
      </aside>

      <main class="flex-1 overflow-y-auto p-12">
        <!-- List View -->
        <section v-if="currentTab === 'list'" class="space-y-10">
          <div class="flex justify-between items-end">
            <div>
              <h2 class="text-4xl font-black text-white uppercase tracking-tighter">I Tuoi Veicoli</h2>
              <p class="text-[var(--text-dim)] text-sm font-medium">Gestisci il catalogo online in tempo reale</p>
            </div>
            <button @click="currentTab = 'add'" class="btn-premium">
              Nuovo Veicolo
            </button>
          </div>

          <div v-if="loading" class="py-20 text-center">
            <p class="text-white font-black uppercase tracking-widest text-[10px]">Caricamento...</p>
          </div>
          
          <div v-else-if="vehicles.length === 0" class="glass-panel p-20 text-center">
            <p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-xs mb-6">Nessun veicolo trovato</p>
            <button @click="currentTab = 'add'" class="btn-premium">Inizia ora</button>
          </div>

          <div v-else class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
            <div v-for="m in vehicles" :key="m._id" class="admin-card group overflow-hidden flex flex-col glass-panel">
              <div class="relative h-64 overflow-hidden -mx-6 -mt-6 mb-6">
                <VehicleCarousel :images="m.immagini" :altText="`${m.marca} ${m.modello}`" />
                <div class="absolute top-4 right-4 flex gap-2">
                  <span class="status-badge primary">{{ m.nuovaUsata }}</span>
                  <span class="status-badge" :class="m.isVisible ? 'primary' : 'dim'">
                    {{ m.isVisible ? 'Visibile' : 'Nascosto' }}
                  </span>
                </div>
              </div>

              <div class="flex-1 flex flex-col">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <span class="text-[var(--primary)] text-[10px] font-black uppercase tracking-widest">{{ m.marca }}</span>
                    <h3 class="text-xl font-black text-white uppercase tracking-tight">{{ m.modello }}</h3>
                  </div>
                  <span class="text-lg font-black text-white">€ {{ m.prezzo.toLocaleString('it-IT') }}</span>
                </div>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-2 py-1 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest text-[var(--text-dim)]">{{ m.tipo }}</span>
                  <span class="px-2 py-1 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest text-[var(--text-dim)]">{{ m.categoria }}</span>
                </div>

                <div class="flex gap-3 mt-auto">
                  <button @click="editVehicle(m)" class="flex-1 py-3 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-md)] text-[10px] font-black uppercase tracking-widest text-white">
                    Modifica
                  </button>
                  <button @click="confirmDelete(m)" class="px-4 py-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-[var(--radius-md)]">
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Form View (Add/Edit) -->
        <section v-if="currentTab === 'add' || currentTab === 'edit'" class="space-y-10">
          <div class="flex justify-between items-end">
            <div>
              <h2 class="text-4xl font-black text-white uppercase tracking-tighter">{{ currentTab === 'add' ? 'Carica Nuovo Veicolo' : 'Modifica Veicolo' }}</h2>
              <p class="text-[var(--text-dim)] text-sm font-medium">Riempi i campi per pubblicare il veicolo nel catalogo</p>
            </div>
            <button @click="currentTab = 'list'" class="btn-secondary-glass">
              ← Torna alla lista
            </button>
          </div>

          <form @submit.prevent="handleSubmit" class="admin-card glass-panel">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="form-group">
                <label class="premium-label">Marca</label>
                <input type="text" v-model="vehicleForm.marca" required placeholder="Es: Hymer" class="premium-input" />
              </div>
              <div class="form-group">
                <label class="premium-label">Modello</label>
                <input type="text" v-model="vehicleForm.modello" required placeholder="Es: B-Class" class="premium-input" />
              </div>
              <div class="form-group">
                <label class="premium-label">Prezzo (€)</label>
                <input type="number" v-model="vehicleForm.prezzo" required class="premium-input" />
              </div>
              <div class="form-group">
                <label class="premium-label">Anno</label>
                <input type="number" v-model="vehicleForm.anno" class="premium-input" />
              </div>
              <div class="form-group">
                <label class="premium-label">Chilometri</label>
                <input type="number" v-model="vehicleForm.chilometri" class="premium-input" />
              </div>
              <div class="form-group">
                <label class="premium-label">Tipo</label>
                <select v-model="vehicleForm.tipo" required class="premium-input appearance-none">
                  <option value="camper">Camper</option>
                  <option value="roulotte">Roulotte</option>
                  <option value="container">Container</option>
                </select>
              </div>
              <div class="form-group">
                <label class="premium-label">Stato</label>
                <select v-model="vehicleForm.nuovaUsata" required class="premium-input appearance-none">
                  <option value="nuovo">Nuovo</option>
                  <option value="usato">Usato</option>
                  <option value="promozione">Promozione</option>
                  <option value="venduto">Venduto</option>
                </select>
              </div>
              <div class="form-group">
                <label class="premium-label">Categoria</label>
                <select v-model="vehicleForm.categoria" required class="premium-input appearance-none">
                  <option v-for="cat in ['Motorhome', 'Profilato', 'Mansardato', 'Van/Camper puro', 'Roulotte', 'Container', 'Street Food']" :key="cat" :value="cat">
                    {{ cat }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label class="premium-label">Visibilità sul sito</label>
                <div class="flex items-center gap-4 h-[54px]">
                  <input type="checkbox" v-model="vehicleForm.isVisible" id="isVisible" class="w-6 h-6 rounded-[var(--radius-sm)] border-[var(--line)] bg-[var(--line)] text-[var(--primary)] focus:ring-[var(--primary)]" />
                  <label for="isVisible" class="text-xs font-black uppercase tracking-widest text-[var(--text-dim)] cursor-pointer">{{ vehicleForm.isVisible ? 'Visibile' : 'Nascosto' }}</label>
                </div>
              </div>

              <div class="form-group md:col-span-2 lg:col-span-3">
                <label class="premium-label">Descrizione</label>
                <textarea v-model="vehicleForm.descrizione" placeholder="Descrivi lo stato del veicolo..." class="premium-input min-h-[150px] py-4"></textarea>
              </div>
              
              <div class="form-group md:col-span-2 lg:col-span-3">
                <label class="premium-label">Immagini</label>
                <div class="border-2 border-dashed border-[var(--line)] rounded-[var(--radius-md)] p-8 text-center">
                  <input type="file" @change="handleImageUpload" id="fileInput" multiple accept="image/*" class="hidden" />
                  <label for="fileInput" class="cursor-pointer flex flex-col items-center gap-4">
                    <span class="text-4xl">📸</span>
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Trascina o clicca per caricare foto</span>
                  </label>
                </div>
                
                <div v-if="imagePreviews.length" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
                  <div v-for="(preview, index) in imagePreviews" :key="index" class="relative aspect-video rounded-[var(--radius-md)] overflow-hidden border border-[var(--line)] group">
                    <img :src="preview" class="w-full h-full object-cover" />
                    <button @click="removeImage(index)" type="button" class="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">×</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-12 flex flex-col items-center gap-6">
              <button type="submit" :disabled="submitting" class="btn-premium px-12">
                {{ submitting ? 'Salvataggio in corso...' : (currentTab === 'add' ? 'Pubblica Veicolo' : 'Salva Modifiche') }}
              </button>
              <p v-if="formMessage" :class="['text-[10px] font-black uppercase tracking-[0.2em]', isSuccess ? 'text-green-500' : 'text-red-500']">{{ formMessage }}</p>
            </div>
          </form>
        </section>

        <!-- Leads View -->
        <section v-if="currentTab === 'leads'" class="space-y-10">
          <div class="flex justify-between items-end">
            <div>
              <h2 class="text-4xl font-black text-white uppercase tracking-tighter">Richieste Preventivo</h2>
              <p class="text-[var(--text-dim)] text-sm font-medium">Gestisci i contatti dai potenziali clienti</p>
            </div>
          </div>

          <div v-if="loading" class="py-20 text-center">
            <p class="text-white font-black uppercase tracking-widest text-[10px]">Caricamento...</p>
          </div>
          
          <div v-else-if="leads.length === 0" class="glass-panel p-20 text-center">
            <p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-xs">Non ci sono ancora richieste di preventivo.</p>
          </div>

          <div v-else class="grid grid-cols-1 gap-6">
            <div v-for="l in leads" :key="l._id" class="admin-card glass-panel border-l-4" :class="l.status === 'nuovo' ? 'border-l-[var(--primary)] bg-[var(--primary)]/5' : 'border-l-[var(--line)]'">
              <div class="flex flex-wrap justify-between items-start gap-6 mb-8">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-[var(--line)] rounded-full flex items-center justify-center text-xl">👤</div>
                  <div>
                    <h4 class="text-xl font-black text-white uppercase tracking-tight">{{ l.nome }}</h4>
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">{{ new Date(l.createdAt).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' }) }}</span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <span class="status-badge" :class="l.status === 'nuovo' ? 'primary' : 'dim'">{{ l.status }}</span>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="space-y-4">
                  <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Contatti</span>
                    <p class="text-sm text-white">📧 {{ l.email }}</p>
                    <p class="text-sm text-white">📞 {{ l.telefono }}</p>
                    <p class="text-sm text-white">📍 {{ l.citta || 'Città non specificata' }}</p>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Veicolo d'interesse</span>
                    <p class="text-sm text-white font-bold uppercase">{{ l.marca }} {{ l.modello }}</p>
                    <p class="text-[10px] text-[var(--text-dim)] font-black uppercase tracking-widest">{{ l.tipo }} • {{ l.nuovaUsata }}</p>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Modalità Acquisto</span>
                    <p class="text-sm text-white">{{ l.metodoAcquisto }}</p>
                    <div v-if="l.valutazionePermuta === 'si'" class="mt-2 p-3 bg-[var(--line)] rounded-[var(--radius-sm)] border border-[var(--line)]">
                      <span class="text-[9px] font-black uppercase tracking-widest text-[var(--text-dim)] block mb-1">Richiesta Permuta</span>
                      <p class="text-[11px] text-white">🔄 {{ l.permutaModello }} ({{ l.permutaAnno }})</p>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="l.messaggio" class="mt-8 p-6 bg-[var(--line)] rounded-[var(--radius-md)] border border-[var(--line)]">
                <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] block mb-3">Messaggio del cliente</span>
                <p class="text-sm text-[var(--text-dim)] leading-relaxed italic">"{{ l.messaggio }}"</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Trade-Ins View -->
        <section v-if="currentTab === 'tradeIns'" class="space-y-10">
          <div class="flex justify-between items-end">
            <div>
              <h2 class="text-4xl font-black text-white uppercase tracking-tighter">Richieste Permuta</h2>
              <p class="text-[var(--text-dim)] text-sm font-medium">Gestisci le valutazioni dell'usato inviate dai clienti</p>
            </div>
          </div>

          <div v-if="loading" class="py-20 text-center">
            <p class="text-white font-black uppercase tracking-widest text-[10px]">Caricamento...</p>
          </div>
          
          <div v-else-if="tradeIns.length === 0" class="glass-panel p-20 text-center">
            <p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-xs">Non ci sono ancora richieste di permuta.</p>
          </div>

          <div v-else class="grid grid-cols-1 gap-6">
            <div v-for="t in tradeIns" :key="t._id" class="admin-card glass-panel border-l-4" :class="t.status === 'nuovo' ? 'border-l-[var(--primary)] bg-[var(--primary)]/5' : 'border-l-[var(--line)]'">
              <div class="flex flex-wrap justify-between items-start gap-6 mb-8">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-[var(--line)] rounded-full flex items-center justify-center text-xl">🔄</div>
                  <div>
                    <h4 class="text-xl font-black text-white uppercase tracking-tight">{{ t.nome }}</h4>
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">{{ new Date(t.createdAt).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' }) }}</span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <span class="status-badge" :class="t.status === 'nuovo' ? 'primary' : 'dim'">{{ t.status }}</span>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="space-y-4">
                  <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Contatti</span>
                    <p class="text-sm text-white">📧 {{ t.email }}</p>
                    <p class="text-sm text-white">📞 {{ t.telefono }}</p>
                    <p class="text-sm text-white">📍 {{ t.citta }}</p>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Veicolo da Permutare</span>
                    <p class="text-sm text-white font-bold uppercase">{{ t.marca }} {{ t.modello }}</p>
                    <p class="text-[10px] text-[var(--text-dim)] font-black uppercase tracking-widest">{{ t.anno }} • {{ t.km }} KM</p>
                    <p class="text-[10px] text-[var(--text-dim)] font-black uppercase tracking-widest">Targa: {{ t.targa }}</p>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Stato & Valutazione</span>
                    <p class="text-sm text-white">{{ t.stato }}</p>
                    <p class="text-lg font-black text-[var(--primary)] mt-1">€ {{ t.prezzoDesiderato }}</p>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex flex-col gap-1">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Dettagli</span>
                    <div class="flex flex-wrap gap-2 mt-1">
                      <span class="px-2 py-0.5 bg-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase text-[var(--text-dim)]">Incidentata: {{ t.incidentato }}</span>
                      <span class="px-2 py-0.5 bg-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase text-[var(--text-dim)]">Tagliandi: {{ t.tagliandi }}</span>
                      <span class="px-2 py-0.5 bg-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase text-[var(--text-dim)]">Revisionata: {{ t.revisione }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="t.descrizione || t.difetti" class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-if="t.descrizione" class="p-6 bg-[var(--line)] rounded-[var(--radius-md)] border border-[var(--line)]">
                  <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] block mb-3">Descrizione</span>
                  <p class="text-sm text-[var(--text-dim)] leading-relaxed">"{{ t.descrizione }}"</p>
                </div>
                <div v-if="t.difetti" class="p-6 bg-red-500/5 rounded-[var(--radius-md)] border border-red-500/10">
                  <span class="text-[10px] font-black uppercase tracking-widest text-red-500 block mb-3">Difetti Segnalati</span>
                  <p class="text-sm text-[var(--text-dim)] leading-relaxed">"{{ t.difetti }}"</p>
                </div>
              </div>

              <div v-if="t.images && t.images.length" class="mt-8">
                <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] block mb-4">Foto Allegate</span>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <a v-for="(img, idx) in t.images" :key="idx" :href="img" target="_blank" class="aspect-square rounded-[var(--radius-md)] overflow-hidden border border-[var(--line)]">
                    <img :src="img" class="w-full h-full object-cover" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Portal Management View -->
        <section v-if="currentTab === 'portal'" class="space-y-10">
          <div class="flex justify-between items-end">
            <div>
              <h2 class="text-4xl font-black text-white uppercase tracking-tighter">Gestione Portale Clienti</h2>
              <p class="text-[var(--text-dim)] text-sm font-medium">Crea e gestisci gli accessi privati per i tuoi clienti</p>
            </div>
          </div>

             <div v-if="loading" class="py-20 text-center">
              <p class="text-white font-black uppercase tracking-widest text-[10px]">Caricamento...</p>
             </div>

          <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <!-- Form per nuovo utente -->
            <div class="lg:col-span-1">
              <div class="admin-card glass-panel sticky top-12">
                <h3 class="text-xl font-black text-white uppercase tracking-tight mb-8">Registra Nuovo Cliente</h3>
                <form @submit.prevent="handleCreatePortalUser" class="space-y-6">
                  <div class="form-group">
                    <label class="premium-label">Nome</label>
                    <input v-model="newUser.nome" placeholder="Es: Mario" required class="premium-input" />
                  </div>
                  <div class="form-group">
                    <label class="premium-label">Cognome</label>
                    <input v-model="newUser.cognome" placeholder="Es: Rossi" required class="premium-input" />
                  </div>
                  <div class="form-group">
                    <label class="premium-label">Targa</label>
                    <input v-model="newUser.targa" placeholder="Es: AA123BB" required class="premium-input uppercase font-black" />
                  </div>
                  <div class="form-group">
                    <label class="premium-label">Password Temporanea</label>
                    <input v-model="newUser.password" placeholder="••••••••" required class="premium-input" />
                  </div>
                  <button type="submit" class="btn-premium w-full justify-center">
                    Crea Account Portale
                  </button>
                </form>
              </div>
            </div>

            <!-- Lista utenti -->
            <div class="lg:col-span-2 space-y-4">
              <div v-for="u in portalUsers" :key="u._id" class="admin-card glass-panel flex flex-wrap items-center justify-between gap-6">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center text-[var(--primary)] font-black">
                    {{ u.nome.charAt(0) }}{{ u.cognome.charAt(0) }}
                  </div>
                  <div>
                    <h4 class="text-lg font-black text-white uppercase tracking-tight">{{ u.nome }} {{ u.cognome }}</h4>
                    <span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Targa: <code class="text-[var(--primary)]">{{ u.targa }}</code></span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button @click="openManageVehicle(u)" class="px-4 py-2 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest text-white">Veicolo</button>
                  <button @click="openMaintenance(u)" class="px-4 py-2 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest text-white">Manutenzione</button>
                  <button @click="deletePortalUser(u._id)" class="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest">Elimina</button>
                </div>
              </div>
              <div v-if="portalUsers.length === 0" class="glass-panel p-12 text-center">
                <p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-xs">Nessun cliente registrato nel portale.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Deadlines Alert View -->
        <section v-if="currentTab === 'deadlines'" class="space-y-10">
          <div class="flex justify-between items-end">
            <div>
              <h2 class="text-4xl font-black text-white uppercase tracking-tighter">Alert Scadenze 🔔</h2>
              <p class="text-[var(--text-dim)] text-sm font-medium">Veicoli con scadenze imminenti o superate</p>
            </div>
          </div>

          <div v-if="loading" class="py-20 text-center">
            <p class="text-white font-black uppercase tracking-widest text-[10px]">Caricamento...</p>
          </div>

          <div v-else-if="upcomingDeadlines.length === 0" class="glass-panel p-20 text-center">
            <p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-sm">Nessuna scadenza imminente (entro 30 giorni) o superata.</p>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="d in upcomingDeadlines" :key="d.targa" 
                 class="admin-card glass-panel border-l-4" 
                 :class="d.isExpired ? 'border-l-red-500' : 'border-l-[var(--primary)]'">
              <div class="flex justify-between items-start mb-6">
                <div>
                  <h3 class="text-xl font-black text-white uppercase tracking-tight">{{ d.marca }} {{ d.modello }}</h3>
                  <code class="text-[var(--primary)] text-xs font-black tracking-widest">{{ d.targa }}</code>
                </div>
                <div class="text-right">
                  <span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)] block">Proprietario</span>
                  <span class="text-sm font-bold text-white">{{ d.nome }} {{ d.cognome }}</span>
                </div>
              </div>
              
              <div class="space-y-3 mb-8">
                <div v-if="d.revisioneStatus" class="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[var(--line)] border border-[var(--line)]">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full" :class="d.revisioneStatus.type === 'expired' ? 'bg-red-500' : 'bg-[var(--primary)]'"></div>
                    <span class="text-[11px] font-black uppercase tracking-widest text-[var(--text-dim)]">Revisione</span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-bold text-white block">{{ formatDate(d.scadenzaRevisione) }}</span>
                    <span class="text-[9px] font-black uppercase tracking-tighter" :class="d.revisioneStatus.type === 'expired' ? 'text-red-400' : 'text-[var(--primary)]'">{{ d.revisioneStatus.message }}</span>
                  </div>
                </div>

                <div v-if="d.assicurazioneStatus" class="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[var(--line)] border border-[var(--line)]">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full" :class="d.assicurazioneStatus.type === 'expired' ? 'bg-red-500' : 'bg-[var(--primary)]'"></div>
                    <span class="text-[11px] font-black uppercase tracking-widest text-[var(--text-dim)]">Assicurazione</span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-bold text-white block">{{ formatDate(d.scadenzaAssicurazione) }}</span>
                    <span class="text-[9px] font-black uppercase tracking-tighter" :class="d.assicurazioneStatus.type === 'expired' ? 'text-red-400' : 'text-[var(--primary)]'">{{ d.assicurazioneStatus.message }}</span>
                  </div>
                </div>

                <div v-if="d.bolloStatus" class="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[var(--line)] border border-[var(--line)]">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full" :class="d.bolloStatus.type === 'expired' ? 'bg-red-500' : 'bg-[var(--primary)]'"></div>
                    <span class="text-[11px] font-black uppercase tracking-widest text-[var(--text-dim)]">Bollo</span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-bold text-white block">{{ formatDate(d.scadenzaBollo) }}</span>
                    <span class="text-[9px] font-black uppercase tracking-tighter" :class="d.bolloStatus.type === 'expired' ? 'text-red-400' : 'text-[var(--primary)]'">{{ d.bolloStatus.message }}</span>
                  </div>
                </div>
              </div>

              <a :href="generateWhatsAppLink(d)" target="_blank" 
                 class="btn-premium w-full justify-center bg-[#25D366] border-[#25D366] shadow-none">
                <span class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  Avvisa Cliente
                </span>
              </a>
            </div>
          </div>
        </section>

        <!-- Blog List View -->
        <section v-if="currentTab === 'blog'" class="space-y-10">
          <div class="flex justify-between items-end">
            <div>
              <h2 class="text-4xl font-black text-white uppercase tracking-tighter">Blog & News</h2>
              <p class="text-[var(--text-dim)] text-sm font-medium">Gestisci i contenuti editoriali del sito</p>
            </div>
            <button @click="resetBlogForm(); currentTab = 'add-blog'" class="btn-premium">
              Scrivi Articolo
            </button>
          </div>

          <div v-if="loading" class="py-20 text-center">
            <p class="text-white font-black uppercase tracking-widest text-[10px]">Caricamento...</p>
          </div>
          
          <div v-else class="grid grid-cols-1 gap-4">
            <div v-for="p in blogPosts" :key="p._id" class="admin-card glass-panel flex items-center gap-6">
              <div class="w-32 h-20 rounded-[var(--radius-sm)] overflow-hidden border border-[var(--line)] shrink-0">
                <img :src="p.imageCover || '/logo-pica-caravan.jpg'" class="w-full h-full object-cover" />
              </div>
              <div class="flex-grow">
                <div class="flex items-center gap-3 mb-1">
                  <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">{{ p.category }}</span>
                  <span class="text-[10px] font-black uppercase tracking-widest text-[var(--line)]">•</span>
                  <span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">{{ new Date(p.date).toLocaleDateString() }}</span>
                </div>
                <h3 class="text-lg font-black text-white uppercase tracking-tight">{{ p.title }}</h3>
              </div>
              <div class="flex gap-2">
                <button @click="editBlog(p)" class="px-4 py-2 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest text-white">Modifica</button>
                <button @click="deleteBlog(p._id)" class="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-[var(--radius-sm)] text-[9px] font-black uppercase tracking-widest">Elimina</button>
              </div>
            </div>
            <div v-if="blogPosts.length === 0" class="glass-panel p-20 text-center">
              <p class="text-[var(--text-dim)] font-bold uppercase tracking-widest text-sm">Nessun articolo presente.</p>
            </div>
          </div>
        </section>

        <!-- Blog Add/Edit View -->
        <section v-if="currentTab === 'add-blog'" class="space-y-10">
          <div class="flex justify-between items-end">
            <div>
              <h2 class="text-4xl font-black text-white uppercase tracking-tighter">{{ editingBlogId ? 'Modifica Articolo' : 'Nuovo Articolo' }}</h2>
              <p class="text-[var(--text-dim)] text-sm font-medium">Scrivi e pubblica contenuti per il tuo pubblico</p>
            </div>
            <button @click="currentTab = 'blog'" class="btn-secondary-glass">
              Annulla
            </button>
          </div>

          <form @submit.prevent="handleBlogSubmit" class="admin-card glass-panel">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="form-group">
                <label class="premium-label">Titolo</label>
                <input v-model="blogForm.title" placeholder="Titolo articolo" required class="premium-input" />
              </div>
              <div class="form-group">
                <label class="premium-label">Slug (URL)</label>
                <input v-model="blogForm.slug" placeholder="es: novita-camper-2026" required class="premium-input" />
              </div>
              <div class="form-group">
                <label class="premium-label">Categoria</label>
                <select v-model="blogForm.category" class="premium-input appearance-none">
                  <option v-for="c in ['Novità Camper', 'Manutenzione', 'Consigli Viaggio', 'Offerte', 'Eventi']" :key="c" :value="c">{{ c }}</option>
                </select>
              </div>
              <div class="form-group lg:col-span-3">
                <label class="premium-label">URL Immagine Copertina</label>
                <input v-model="blogForm.imageCover" placeholder="https://cloudinary..." class="premium-input" />
              </div>
              <div class="form-group lg:col-span-3">
                <label class="premium-label">Estratto (breve descrizione)</label>
                <textarea v-model="blogForm.excerpt" placeholder="Breve sintesi per l'elenco..." class="premium-input min-h-[80px] py-4"></textarea>
              </div>
              <div class="form-group lg:col-span-3">
                <label class="premium-label">Collega Veicoli (Seleziona veicoli correlati)</label>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 rounded-[var(--radius-md)] bg-[var(--line)] border border-[var(--line)]">
                  <div v-for="m in vehicles" :key="m._id" class="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      :id="`rel-${m._id}`" 
                      :value="m._id" 
                      v-model="blogForm.relatedVehicles" 
                      class="w-5 h-5 rounded border-[var(--line)] bg-[var(--line)] text-[var(--primary)] focus:ring-[var(--primary)]"
                    />
                    <label :for="`rel-${m._id}`" class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)] cursor-pointer">{{ m.marca }} {{ m.modello }}</label>
                  </div>
                </div>
              </div>
              <div class="form-group lg:col-span-3">
                <label class="premium-label">Contenuto (Markdown)</label>
                <textarea v-model="blogForm.content" placeholder="Scrivi il tuo articolo qui..." class="premium-input min-h-[400px] font-mono text-sm py-4" required></textarea>
              </div>
            </div>
            <div class="mt-10 pt-10 border-t border-[var(--line)] flex justify-center">
              <button type="submit" class="btn-premium px-12" :disabled="submitting">
                {{ submitting ? 'Salvataggio...' : 'Salva Articolo' }}
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div class="absolute inset-0 bg-black/80" @click="showDeleteModal = false"></div>
      <div class="glass-panel max-w-md w-full p-10 relative z-10 border-[var(--primary)]/20">
        <h3 class="text-2xl font-black text-white uppercase tracking-tighter mb-4">Conferma Eliminazione</h3>
        <p class="text-[var(--text-dim)] text-sm mb-8 leading-relaxed">Sei sicuro di voler eliminare definitivamente <strong class="text-white">{{ vehicleToDelete?.marca }} {{ vehicleToDelete?.modello }}</strong>? Questa azione non può essere annullata.</p>
        <div class="flex gap-4">
          <button @click="showDeleteModal = false" class="flex-1 px-6 py-4 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-md)] text-[10px] font-black uppercase tracking-widest text-white">Annulla</button>
          <button @click="deleteVehicle" class="flex-1 px-6 py-4 bg-red-500 border border-red-500 rounded-[var(--radius-md)] text-[10px] font-black uppercase tracking-widest text-white">Sì, Elimina</button>
        </div>
      </div>
    </div>

    <!-- Portal: Manage Vehicle Modal -->
    <div v-if="showPortalVehicleModal" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div class="absolute inset-0 bg-black/80" @click="showPortalVehicleModal = false"></div>
      <div class="glass-panel max-w-4xl w-full p-10 relative z-10 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-start mb-10">
          <div>
            <h3 class="text-2xl font-black text-white uppercase tracking-tighter">Gestisci Veicolo Utente</h3>
            <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Targa: <code class="bg-[var(--primary)]/10 px-2 py-1 rounded-[var(--radius-sm)]">{{ selectedUserForAction?.targa }}</code></span>
          </div>
          <button @click="showPortalVehicleModal = false" class="text-[var(--text-dim)]">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <form @submit.prevent="savePortalVehicle" class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="form-group">
              <label class="premium-label">Marca</label>
              <input v-model="portalVehicleForm.marca" placeholder="Es: Honda" required class="premium-input" />
            </div>
            <div class="form-group">
              <label class="premium-label">Modello</label>
              <input v-model="portalVehicleForm.modello" placeholder="Es: SH 150" required class="premium-input" />
            </div>
            <div class="form-group">
              <label class="premium-label">Data Acquisto</label>
              <input type="date" v-model="portalVehicleForm.dataAcquisto" class="premium-input" />
            </div>
            <div class="form-group">
              <label class="premium-label">Km Iniziali</label>
              <input type="number" v-model="portalVehicleForm.kmIniziali" class="premium-input" />
            </div>
            <div class="form-group">
              <label class="premium-label">Km Attuali</label>
              <input type="number" v-model="portalVehicleForm.kmAttuali" class="premium-input" />
            </div>
            <div class="form-group">
              <label class="premium-label">Prossima Manutenzione</label>
              <input v-model="portalVehicleForm.prossimaManutenzione" placeholder="Es: 10.000 km o 12/2026" class="premium-input" />
            </div>
            <div class="form-group">
              <label class="premium-label">Scadenza Revisione</label>
              <input type="date" v-model="portalVehicleForm.scadenzaRevisione" class="premium-input" />
            </div>
            <div class="form-group">
              <label class="premium-label">Scadenza Assicurazione</label>
              <input type="date" v-model="portalVehicleForm.scadenzaAssicurazione" class="premium-input" />
            </div>
            <div class="form-group">
              <label class="premium-label">Scadenza Bollo</label>
              <input type="date" v-model="portalVehicleForm.scadenzaBollo" class="premium-input" />
            </div>
            <div class="form-group lg:col-span-3">
              <label class="premium-label">Avvisi / Suggerimenti</label>
              <textarea v-model="portalVehicleForm.avvisi" placeholder="Es: Controllare pressione gomme ogni mese" class="premium-input py-4"></textarea>
            </div>
            <div class="form-group lg:col-span-3">
              <label class="premium-label">URL Foto Veicolo</label>
              <input v-model="portalVehicleForm.photoUrl" placeholder="https://..." class="premium-input" />
            </div>
          </div>
          
          <div class="flex gap-4 pt-8 border-t border-[var(--line)]">
            <button type="button" @click="showPortalVehicleModal = false" class="flex-1 px-6 py-4 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius-md)] text-[10px] font-black uppercase tracking-widest text-white">Annulla</button>
            <button type="submit" class="flex-1 btn-premium">Salva Veicolo</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Portal: Maintenance History Modal -->
    <div v-if="showMaintenanceModal" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div class="absolute inset-0 bg-black/80" @click="showMaintenanceModal = false"></div>
      <div class="glass-panel max-w-4xl w-full p-10 relative z-10 max-h-[90vh] flex flex-col">
        <div class="flex justify-between items-start mb-10">
          <div>
            <h3 class="text-2xl font-black text-white uppercase tracking-tighter">Storico Interventi</h3>
            <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">Targa: <code class="bg-[var(--primary)]/10 px-2 py-1 rounded-[var(--radius-sm)]">{{ selectedUserForAction?.targa }}</code></span>
          </div>
          <button @click="showMaintenanceModal = false" class="text-[var(--text-dim)]">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div class="flex-grow overflow-y-auto pr-4 space-y-4 mb-10 custom-scrollbar">
          <div v-for="rec in maintenanceHistory" :key="rec._id" class="p-6 rounded-[var(--radius-md)] bg-[var(--line)] border border-[var(--line)]">
            <div class="flex justify-between items-start">
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">{{ rec.data }}</span>
                  <span class="text-[10px] font-black uppercase tracking-widest text-[var(--line)]">•</span>
                  <span class="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">{{ rec.km }} KM</span>
                </div>
                <h4 class="text-lg font-black text-white uppercase tracking-tight mb-1">{{ rec.descrizione }}</h4>
                <p v-if="rec.partiSostituite" class="text-xs text-[var(--text-dim)] italic">Parti: {{ rec.partiSostituite }}</p>
                <p v-if="rec.costo" class="text-sm font-black text-[var(--primary)] mt-3">€ {{ rec.costo }}</p>
              </div>
              <button @click="deleteMaintenance(rec._id)" class="p-2 bg-red-500/10 text-red-500 rounded-[var(--radius-sm)]">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
          </div>
          <div v-if="maintenanceHistory.length === 0" class="p-12 text-center bg-[var(--line)] rounded-[var(--radius-md)] border border-dashed border-[var(--line)]">
            <p class="text-[var(--text-dim)] font-black uppercase tracking-widest text-[10px]">Nessun intervento registrato.</p>
          </div>
        </div>

        <div class="pt-8 border-t border-[var(--line)]">
          <h4 class="text-xs font-black text-white uppercase tracking-widest mb-6">Aggiungi Nuovo Intervento</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <input type="date" v-model="maintenanceForm.data" class="premium-input" />
            <input type="number" v-model="maintenanceForm.km" placeholder="Chilometraggio" class="premium-input" />
            <input type="number" v-model="maintenanceForm.costo" placeholder="Costo (€)" class="premium-input" />
            <input v-model="maintenanceForm.descrizione" placeholder="Descrizione (es: Tagliando completo)" class="premium-input lg:col-span-2" />
            <input v-model="maintenanceForm.partiSostituite" placeholder="Parti sostituite (es: Olio, Filtri...)" class="premium-input" />
          </div>
          <button @click="addMaintenanceRecord" class="btn-premium w-full mt-6 justify-center">Aggiungi Intervento</button>
        </div>
      </div>
    </div>

    <!-- Portal: Manage Docs Modal removed -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from '#imports'
import VehicleCarousel from '~/components/veicoli/VehicleCarousel.vue'

// --- Auth State ---
const config = useRuntimeConfig()
const isAuthenticated = ref(false)
const usernameInput = ref('')
const passwordInput = ref('')
const loginError = ref(false)
const ADMIN_USER = config.public.adminUser || 'picacaravan'
const ADMIN_PASSWORD = config.public.adminPassword || 'pica2026'

const handleLogin = () => {
  if (usernameInput.value === ADMIN_USER && passwordInput.value === ADMIN_PASSWORD) {
    isAuthenticated.value = true
    localStorage.setItem('pica_admin_auth', 'true')
    fetchVehicles()
  } else {
    loginError.value = true
  }
}

const logout = () => {
  isAuthenticated.value = false
  localStorage.removeItem('pica_admin_auth')
}

// --- Data State ---
const currentTab = ref('list')
const vehicles = ref([])
const leads = ref([])
const tradeIns = ref([])
const blogPosts = ref([])
const portalUsers = ref([])

const fetchTradeIns = async () => {
  loading.value = true
  try {
    const res = await $fetch('/api/admin/trade-ins')
    if (res.success) {
      tradeIns.value = res.tradeIns
    }
  } catch (err) {
    console.error('Errore fetch permute:', err)
  } finally {
    loading.value = false
  }
}
const portalVehicles = ref([]) // Nuovo: per tracciare i dati dei veicoli dei clienti

const newUser = ref({
  nome: '',
  cognome: '',
  targa: '',
  password: ''
})
const blogForm = ref({
  title: '',
  slug: '',
  category: 'Novità Camper',
  imageCover: '',
  content: '',
  excerpt: '',
  relatedVehicles: []
})
const loading = ref(false)
const submitting = ref(false)
const formMessage = ref('')
const isSuccess = ref(false)

const vehicleForm = ref({
  marca: '',
  modello: '',
  anno: null,
  chilometri: null,
  prezzo: null,
  descrizione: '',
  tipo: 'camper',
  categoria: 'Motorhome',
  nuovaUsata: 'nuovo',
  isVisible: true,
  immagini: []
})

const initialForm = { ...vehicleForm.value }
const selectedFiles = ref([])
const imagePreviews = ref([])
const editingId = ref(null)

// --- Portal Management Actions ---
const selectedUserForAction = ref(null)
const showPortalMotoModal = ref(false)
const showPortalDocsModal = ref(false)
const portalDocs = ref([])
const portalDocForm = ref({
  title: '',
  type: 'Libretto',
  fileBase64: ''
})
const portalVehicleForm = ref({
  marca: '',
  modello: '',
  targa: '',
  dataAcquisto: '',
  kmIniziali: 0,
  kmAttuali: 0,
  prossimaManutenzione: '',
  scadenzaRevisione: '',
  scadenzaAssicurazione: '',
  scadenzaBollo: '',
  avvisi: '',
  photoUrl: ''
})
const maintenanceHistory = ref([])
const maintenanceForm = ref({
  data: '',
  km: 0,
  descrizione: '',
  partiSostituite: '',
  costo: 0
})
const showMaintenanceModal = ref(false)
const showPortalVehicleModal = ref(false)

const openManageVehicle = async (user) => {
  selectedUserForAction.value = user
  portalVehicleForm.value = { 
    marca: '', 
    modello: '', 
    targa: user.targa, 
    dataAcquisto: '',
    kmIniziali: 0,
    kmAttuali: 0,
    prossimaManutenzione: '',
    scadenzaRevisione: '',
    scadenzaAssicurazione: '',
    scadenzaBollo: '',
    avvisi: '',
    photoUrl: '' 
  }
  
  try {
    const res = await $fetch(`/api/portal/data?targa=${user.targa}`)
    if (res.vehicle) {
      portalVehicleForm.value = { ...res.vehicle }
    }
  } catch (e) {
    console.error('Errore recupero veicolo:', e)
  }
  
  showPortalVehicleModal.value = true
}

const openMaintenance = async (user) => {
  selectedUserForAction.value = user
  maintenanceHistory.value = []
  try {
    const res = await $fetch(`/api/portal/data?targa=${user.targa}`)
    maintenanceHistory.value = res.maintenance || []
  } catch (e) {
    console.error('Errore recupero storico:', e)
  }
  showMaintenanceModal.value = true
}

const addMaintenanceRecord = async () => {
  try {
    await $fetch('/api/admin/add-maintenance', {
      method: 'POST',
      body: {
        targa: selectedUserForAction.value.targa,
        ...maintenanceForm.value
      }
    })
    alert('Intervento aggiunto!')
    maintenanceForm.value = { data: '', km: 0, descrizione: '', partiSostituite: '', costo: 0 }
    openMaintenance(selectedUserForAction.value) // Refresh
  } catch (e) {
    alert('Errore salvataggio intervento.')
  }
}

const deleteMaintenance = async (id) => {
  if (!confirm('Eliminare questo intervento dallo storico?')) return
  try {
    await $fetch(`/api/admin/delete-maintenance?id=${id}`, { method: 'DELETE' })
    openMaintenance(selectedUserForAction.value)
  } catch (e) {
    alert('Errore eliminazione.')
  }
}

const openManageDocs = async (user) => {
  selectedUserForAction.value = user
  portalDocs.value = []
  try {
    const res = await $fetch(`/api/portal/data?targa=${user.targa}`)
    portalDocs.value = res.documents || []
  } catch (e) {
    console.error('Errore recupero documenti:', e)
  }
  showPortalDocsModal.value = true
}

const savePortalVehicle = async () => {
  try {
    await $fetch('/api/admin/update-portal-vehicle', {
      method: 'POST',
      body: portalVehicleForm.value
    })
    alert('Veicolo aggiornato con successo!')
    showPortalVehicleModal.value = false
  } catch (e) {
    console.error('ERRORE SALVATAGGIO VEICOLO:', e)
    const errorMsg = e.data?.message || e.message || 'Errore sconosciuto'
    alert(`Errore durante il salvataggio del veicolo: ${errorMsg}`)
  }
}

const handlePortalDocUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  const reader = new FileReader()
  reader.onload = async (e) => {
    try {
      await $fetch('/api/admin/upload-portal-document', {
        method: 'POST',
        body: {
          targa: selectedUserForAction.value.targa,
          title: portalDocForm.value.title || file.name,
          type: portalDocForm.value.type,
          fileBase64: e.target.result
        }
      })
      alert('Documento caricato!')
      openManageDocs(selectedUserForAction.value) // Refresh
    } catch (err) {
      alert('Errore caricamento documento.')
    }
  }
  reader.readAsDataURL(file)
}

const deletePortalDoc = async (docId) => {
  if (!confirm('Eliminare questo documento?')) return
  try {
    await $fetch(`/api/admin/delete-portal-document?id=${docId}`, { method: 'DELETE' })
    openManageDocs(selectedUserForAction.value) // Refresh
  } catch (e) {
    alert('Errore eliminazione.')
  }
}

const deletePortalUser = async (id) => {
  if (!confirm('Sei sicuro di voler eliminare questo cliente dal portale?')) return
  try {
    await $fetch(`/api/admin/delete-portal-user?id=${id}`, { method: 'DELETE' })
    alert('Cliente rimosso dal portale.')
    fetchPortalUsers() // Refresh list
  } catch (e) {
    alert('Errore durante l\'eliminazione del cliente.')
  }
}

// --- Methods ---
const fetchVehicles = async () => {
  loading.value = true
  try {
    const res = await $fetch('/api/veicoli')
    vehicles.value = res.vehicles
    // Fetch leads and trade-ins count also
    fetchLeads()
    fetchTradeIns()
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

const fetchLeads = async () => {
  try {
    const res = await $fetch('/api/leads')
    leads.value = res.leads || []
  } catch (e) {
    console.error('Errore caricamento leads:', e)
  }
}

const fetchPortalUsers = async () => {
  loading.value = true
  try {
    const res = await $fetch('/api/admin/portal-data')
    portalUsers.value = res.users || []
    
    // Recupera anche tutti i veicoli per calcolare le scadenze
    const vehiclesRes = await $fetch('/api/admin/all-portal-vehicles')
    portalVehicles.value = vehiclesRes.vehicles || []
  } catch (e) {
    console.error('Errore caricamento utenti portale:', e)
  } finally {
    loading.value = false
  }
}

const upcomingDeadlines = computed(() => {
  const list = []
  const today = new Date()
  const thirtyDaysLater = new Date()
  thirtyDaysLater.setDate(today.getDate() + 30)

  portalVehicles.value.forEach(v => {
    const user = portalUsers.value.find(u => u.targa.toUpperCase() === v.targa.toUpperCase())
    if (!user) return

    const deadlineInfo = {
      targa: v.targa,
      marca: v.marca,
      modello: v.modello,
      nome: user.nome,
      cognome: user.cognome,
      scadenzaRevisione: v.scadenzaRevisione,
      scadenzaAssicurazione: v.scadenzaAssicurazione,
      scadenzaBollo: v.scadenzaBollo,
      isExpired: false,
      revisioneStatus: null,
      assicurazioneStatus: null,
      bolloStatus: null
    }

    let hasUpcoming = false

    const checkDate = (dateStr, label) => {
      if (!dateStr) return null
      const d = new Date(dateStr)
      const diffTime = d.getTime() - today.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays <= 30) {
        hasUpcoming = true
        if (diffDays < 0) deadlineInfo.isExpired = true
        return {
          type: diffDays < 0 ? 'expired' : (diffDays <= 5 ? 'urgent' : 'warning'),
          message: diffDays < 0 ? `Scaduto da ${Math.abs(diffDays)} giorni` : (diffDays === 0 ? 'Scade oggi!' : `Scade tra ${diffDays} giorni`)
        }
      }
      return null
    }

    deadlineInfo.revisioneStatus = checkDate(v.scadenzaRevisione, 'Revisione')
    deadlineInfo.assicurazioneStatus = checkDate(v.scadenzaAssicurazione, 'Assicurazione')
    deadlineInfo.bolloStatus = checkDate(v.scadenzaBollo, 'Bollo')

    if (hasUpcoming) {
      list.push(deadlineInfo)
    }
  })

  return list.sort((a, b) => (a.isExpired === b.isExpired ? 0 : a.isExpired ? -1 : 1))
})

const hasUrgentDeadlines = computed(() => {
  return upcomingDeadlines.value.some(d => 
    d.isExpired || 
    (d.revisioneStatus?.type === 'urgent') || 
    (d.assicurazioneStatus?.type === 'urgent') || 
    (d.bolloStatus?.type === 'urgent')
  )
})

const generateWhatsAppLink = (d) => {
  const phone = '390823224038' // Pica Caravan
  let message = `Ciao ${d.nome}, sono Pica Caravan. Ti avvisiamo che per il tuo veicolo con targa ${d.targa} si avvicinano le seguenti scadenze:\n`
  
  if (d.revisioneStatus) message += `- Revisione: ${formatDate(d.scadenzaRevisione)}\n`
  if (d.assicurazioneStatus) message += `- Assicurazione: ${formatDate(d.scadenzaAssicurazione)}\n`
  if (d.bolloStatus) message += `- Bollo: ${formatDate(d.scadenzaBollo)}\n`
  
  message += `\nContattaci per un appuntamento o per maggiori informazioni!`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

const formatDate = (dateStr) => {
  if (!dateStr) return 'N.D.'
  return new Date(dateStr).toLocaleDateString('it-IT')
}

const handleCreatePortalUser = async () => {
  try {
    await $fetch('/api/admin/create-portal-user', {
      method: 'POST',
      body: newUser.value
    })
    alert('Cliente registrato con successo!')
    newUser.value = { nome: '', cognome: '', targa: '', password: '' }
    fetchPortalUsers()
  } catch (e) {
    alert('Errore durante la registrazione.')
  }
}

// --- Blog Methods ---
const fetchBlogPosts = async () => {
  loading.value = true
  try {
    const res = await $fetch('/api/blog')
    blogPosts.value = res.posts || []
  } catch (e) {
    console.error('Errore caricamento blog:', e)
  } finally {
    loading.value = false
  }
}

const handleBlogSubmit = async () => {
  submitting.value = true
  try {
    const url = editingBlogId.value 
      ? `/api/blog/${editingBlogId.value}` 
      : '/api/blog'
    const method = editingBlogId.value ? 'PUT' : 'POST'
    
    await $fetch(url, {
      method,
      body: blogForm.value
    })
    
    alert(editingBlogId.value ? 'Articolo aggiornato!' : 'Articolo creato!')
    resetBlogForm()
    fetchBlogPosts()
    currentTab.value = 'blog'
  } catch (e) {
    alert('Errore durante il salvataggio dell\'articolo.')
  } finally {
    submitting.value = false
  }
}

const editBlog = (post) => {
  blogForm.value = { ...post }
  editingBlogId.value = post._id
  currentTab.value = 'add-blog'
}

const deleteBlog = async (id) => {
  if (!confirm('Sei sicuro di voler eliminare questo articolo?')) return
  try {
    await $fetch(`/api/blog/${id}`, { method: 'DELETE' })
    fetchBlogPosts()
  } catch (e) {
    alert('Errore durante l\'eliminazione.')
  }
}

const resetBlogForm = () => {
  blogForm.value = {
    title: '',
    slug: '',
    category: 'Novità Camper',
    imageCover: '',
    content: '',
    excerpt: '',
    relatedVehicles: []
  }
  editingBlogId.value = null
}

const editingBlogId = ref(null)

const openAddForm = () => {
  vehicleForm.value = { ...initialForm }
  imagePreviews.value = []
  selectedFiles.value = []
  editingId.value = null
  currentTab.value = 'add'
}

const editVehicle = (v) => {
  vehicleForm.value = { 
    ...v,
    isVisible: v.isVisible !== undefined ? v.isVisible : true
  }
  imagePreviews.value = [...(v.immagini || [])]
  editingId.value = v._id
  currentTab.value = 'edit'
}

const handleImageUpload = (event) => {
  const files = Array.from(event.target.files)
  
  // Aggiungiamo i file alla lista dei file da caricare
  selectedFiles.value = [...selectedFiles.value, ...files]
  
  // Creiamo le anteprime per i nuovi file
  files.forEach(file => {
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreviews.value.push(e.target.result)
    }
    reader.readAsDataURL(file)
  })
}

const removeImage = (index) => {
  // Se l'immagine è già sul server (URL completo), la rimuoviamo da vehicleForm.immagini
  const imageToRemove = imagePreviews.value[index]
  if (typeof imageToRemove === 'string' && imageToRemove.startsWith('http')) {
    vehicleForm.value.immagini = vehicleForm.value.immagini.filter(img => img !== imageToRemove)
  } else {
    // Altrimenti è un file appena selezionato, lo rimuoviamo da selectedFiles
    // Dobbiamo trovare l'indice corretto in selectedFiles
    // Poiché imagePreviews contiene [immagini_esistenti, nuove_immagini]
    const existingCount = vehicleForm.value.immagini ? vehicleForm.value.immagini.length : 0
    const fileIndex = index - existingCount
    if (fileIndex >= 0) {
      selectedFiles.value.splice(fileIndex, 1)
    }
  }
  
  // Rimuoviamo l'anteprima in ogni caso
  imagePreviews.value.splice(index, 1)
}

const handleSubmit = async () => {
  submitting.value = true
  formMessage.value = ''
  
  try {
    // 1. Convertiamo i nuovi file selezionati in Base64
    const imagesBase64 = []
    for (const file of selectedFiles.value) {
      const base64 = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(file)
      })
      imagesBase64.push(base64)
    }

    const method = editingId.value ? 'PUT' : 'POST'
    const url = editingId.value ? `/api/admin/veicoli/${editingId.value}` : '/api/veicoli'
    
    // 2. Prepariamo il body: uniamo le immagini esistenti che sono rimaste con le nuove (Base64)
    const body = {
      ...vehicleForm.value,
      imagesBase64,
      // Passiamo solo le immagini che l'utente NON ha rimosso
      immagini: vehicleForm.value.immagini 
    }

    const response = await $fetch(url, {
      method,
      body
    })

    isSuccess.value = true
    formMessage.value = response.message || 'Operazione completata!'
    
    setTimeout(() => {
      fetchVehicles()
      currentTab.value = 'list'
    }, 1500)

  } catch (error) {
    console.error('Errore durante il salvataggio:', error)
    isSuccess.value = false
    formMessage.value = 'Errore durante il salvataggio.'
  } finally {
    submitting.value = false
  }
}

// --- Delete Logic ---
const showDeleteModal = ref(false)
const vehicleToDelete = ref(null)

const confirmDelete = (v) => {
  vehicleToDelete.value = v
  showDeleteModal.value = true
}

const deleteVehicle = async () => {
  if (!vehicleToDelete.value) return
  
  try {
    await $fetch(`/api/admin/veicoli/${vehicleToDelete.value._id}`, { method: 'DELETE' })
    vehicles.value = vehicles.value.filter(m => m._id !== vehicleToDelete.value._id)
    showDeleteModal.value = false
  } catch (e) {
    alert('Errore durante l\'eliminazione')
  }
}

onMounted(() => {
  if (localStorage.getItem('pica_admin_auth') === 'true') {
    isAuthenticated.value = true
    fetchVehicles()
  }
})
</script>

<style scoped>
.admin-container {
  min-height: 100vh;
  background: var(--bg);
  color: white;
  font-family: 'Inter', sans-serif;
}

/* Login Wall */
.login-wall {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-card {
  background: var(--panel-2);
  padding: 40px;
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--line);
}

.login-logo-img {
  height: 80px;
  width: auto;
  filter: drop-shadow(0 0 15px rgba(255, 91, 107, 0.2));
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  font-size: 1.1rem;
}

.error-msg {
  color: var(--primary);
  margin-top: 10px;
  font-size: 0.9rem;
}

/* Dashboard Layout */
.admin-dashboard {
  display: flex;
  height: 100vh;
}

.admin-sidebar {
  width: 280px;
  background: var(--panel);
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  font-weight: bold;
}

.sidebar-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar-nav button {
  background: transparent;
  border: none;
  color: var(--text-dim);
  padding: 12px 15px;
  text-align: left;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 1rem;
}

.sidebar-nav button.active,
.sidebar-nav button:hover {
  background: var(--line);
  color: white;
}

.sidebar-nav button.active {
  color: var(--primary);
}

.btn-logout {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--text-dim);
  padding: 10px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  margin-top: 20px;
}

/* Content Area */
.admin-content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}

.section-header h2 {
  font-size: 2rem;
  margin-bottom: 5px;
}

.section-header p {
  color: var(--text-dim);
}

/* Grid View */
.motos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.moto-card-admin {
  background: var(--panel-2);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--line);
}

.moto-img-admin {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-bottom: 1px solid var(--line);
}

.moto-info-admin {
  padding: 20px;
}

.moto-info-admin h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.moto-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.tag {
  background: var(--line);
  border: 1px solid var(--line);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--text-dim);
}

.tag.category {
  border-color: var(--primary);
  color: var(--primary-2);
}

.tag.status.nuova {
  border-color: var(--success);
  color: var(--success);
}

.tag.status.usata {
  border-color: var(--warning);
  color: var(--warning);
}

.tag.status.promozione {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--primary-glow);
}

.tag.status.venduta {
  border-color: var(--text-dim);
  color: var(--text-dim);
  background: var(--line);
}

.tag.visibility {
  font-size: 0.7rem;
  background: var(--line);
}

.tag.visibility.visible {
  color: var(--success);
  border-color: var(--success-30);
}

.tag.visibility.hidden {
  color: var(--danger);
  border-color: var(--danger-30);
}

.visibility-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--line);
  padding: 10px 15px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  border: 1px solid var(--line);
}

.visibility-toggle input {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.visibility-toggle label {
  font-size: 0.9rem;
  cursor: pointer;
  color: white;
}

.description-preview {
  font-size: 0.85rem;
  color: var(--text-dim);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}

.moto-info-admin .price {
  color: var(--primary);
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.actions-admin {
  display: flex;
  gap: 10px;
}

.btn-edit, .btn-delete {
  flex: 1;
  padding: 8px;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.btn-edit {
  background: var(--line);
  color: white;
}

.btn-delete {
  background: rgba(239, 68, 68, 0.1);
  color: var(--danger);
}

.btn-logout:hover {
  background: rgba(239, 68, 68, 0.1);
  color: var(--danger);
}

.badge-count {
  background: var(--primary);
  color: white;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: auto;
}

/* Leads List Styles */
.leads-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.lead-card {
  background: var(--panel-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 24px;
}

.lead-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--line);
}

.lead-date {
  font-size: 0.85rem;
  color: var(--text-dim);
}

.lead-status {
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
}

.lead-status.nuovo {
  background: var(--primary-glow);
  color: var(--primary);
}

.lead-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 768px) {
  .lead-body {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.lead-info h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

/* Trade-In Specific Styles */
.trade-in-card {
  border-left: 4px solid var(--primary-2) !important;
}

.lead-details-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
  background: var(--line);
  border-radius: var(--radius-sm);
  margin-top: 16px;
}

.detail-item {
  font-size: 0.85rem;
  color: var(--text-dim);
}

.detail-item strong {
  color: white;
}

.warning-msg {
  border-left: 4px solid #facc15 !important;
  background: rgba(250, 204, 21, 0.05) !important;
}

.lead-images {
  margin-top: 20px;
}

.images-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
  margin-top: 10px;
}

.images-preview-grid img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line);
}

.lead-info p, .lead-moto p, .lead-payment p {
  font-size: 0.9rem;
  color: var(--text-dim);
  margin-bottom: 5px;
}

.lead-message {
  margin-top: 20px;
  padding: 15px;
  background: var(--line);
  border-radius: var(--radius-sm);
}

.lead-message p {
  font-size: 0.9rem;
  color: white;
  font-style: italic;
  margin-top: 5px;
}

/* Portal Admin Styles */
.portal-admin-grid {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 40px;
}

@media (max-width: 1024px) {
  .portal-admin-grid {
    grid-template-columns: 1fr;
  }
}

.user-card-admin {
  background: var(--panel-2);
  border: 1px solid var(--line);
  padding: 20px;
  border-radius: var(--radius-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.user-main-info strong {
  display: block;
  font-size: 1.1rem;
}

.user-main-info code {
  color: var(--primary-2);
  font-weight: 800;
}

.btn-edit-small {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--line);
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  margin-left: 8px;
}

.btn-delete-red {
  color: var(--primary-2);
  border-color: rgba(215, 24, 42, 0.3);
}

.btn-delete-red:hover {
  background: rgba(215, 24, 42, 0.1);
}

.portal-add-user {
  background: var(--panel-2);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid var(--line);
  height: fit-content;
}

.portal-add-user h3 {
  margin-bottom: 20px;
  font-size: 1.25rem;
}

.mini-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mini-form input {
  background: var(--bg);
  border: 1px solid var(--line);
  padding: 12px;
  border-radius: var(--radius-sm);
  color: #ffffff;
  font-size: 1rem;
  width: 100%;
}

.mini-form input::placeholder {
  color: var(--text-dim);
}

.mini-form input:focus {
  border-color: var(--primary);
  outline: none;
}

/* Blog Admin Styles */
.blog-admin-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.blog-item-admin {
  background: var(--panel-2);
  border: 1px solid var(--line);
  padding: 15px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.blog-thumb {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}

.blog-info {
  flex: 1;
}

.blog-info h3 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.blog-meta {
  font-size: 0.8rem;
  color: var(--muted);
}

.content-editor {
  min-height: 400px;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.6;
}

.related-motos-selector {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  max-height: 200px;
  overflow-y: auto;
  background: var(--bg);
  padding: 15px;
  border-radius: 12px;
  border: 1px solid var(--line);
}

.moto-check {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
}

.moto-check input {
  width: auto;
}

/* Form Styles */
.moto-form {
  background: var(--panel-2);
  padding: 30px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.full-width {
  grid-column: span 2;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--text-dim);
  font-size: 0.9rem;
}

.form-group input, 
.form-group select, 
.form-group textarea {
  width: 100%;
  padding: 12px;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  color: white;
  font-size: 1rem;
}

.form-group textarea {
  height: 100px;
  resize: vertical;
}

.image-previews {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.image-preview-item {
  position: relative;
  width: 100px;
  height: 100px;
}

.image-preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.remove-btn {
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: var(--panel-2);
  padding: 30px;
  border-radius: var(--radius-lg);
  max-width: 400px;
  width: 90%;
  text-align: center;
  border: 1px solid var(--line);
}

.modal.large {
  max-width: 550px;
  text-align: left;
}

.modal.large h3 {
  margin-bottom: 10px;
}

.existing-docs {
  max-height: 200px;
  overflow-y: auto;
  background: var(--bg);
  border-radius: var(--radius-sm);
  padding: 10px;
}

.doc-item-admin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--line);
  font-size: 0.9rem;
}

.doc-item-admin:last-child {
  border-bottom: none;
}

.btn-delete-icon {
  background: rgba(215, 24, 42, 0.1);
  color: var(--primary);
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-weight: bold;
}

.upload-zone {
  background: var(--panel);
  padding: 20px;
  border-radius: var(--radius-md);
  border: 2px dashed var(--line);
}

.upload-zone input[type="text"],
.upload-zone select {
  background: var(--bg);
  border: 1px solid var(--line);
  color: white;
  padding: 8px;
  border-radius: var(--radius-sm);
  width: 100%;
}

.mini-input {
  background: var(--bg);
  border: 1px solid var(--line);
  color: white;
  padding: 10px;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  width: 100%;
}

.mini-input:focus {
  border-color: var(--primary);
  outline: none;
}

.modal-actions {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}

.btn-cancel {
  flex: 1;
  background: var(--line);
  color: white;
  border: none;
  padding: 12px;
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.btn-delete-confirm {
  flex: 1;
  background: var(--primary);
  color: white;
  border: none;
  padding: 12px;
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.msg {
  margin-top: 15px;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.msg.success { background: rgba(40, 167, 69, 0.1); color: #28a745; }
.msg.error { background: rgba(220, 53, 69, 0.1); color: #dc3545; }

@media (max-width: 768px) {
  .admin-dashboard { flex-direction: column; }
  .admin-sidebar { width: 100%; height: auto; }
  .form-grid { grid-template-columns: 1fr; }
  .full-width { grid-column: span 1; }
}
/* Deadlines Alert Styles */
.deadlines-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.deadline-card {
  background: var(--panel-2);
  border: 1px solid var(--line);
  padding: 24px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.deadline-card.expired {
  border-color: rgba(225, 29, 72, 0.3);
  background: var(--panel-2);
}

.deadline-info {
  flex: 1;
}

.vehicle-details strong {
  display: block;
  font-size: 1.25rem;
  margin-bottom: 4px;
}

.vehicle-details code {
  color: var(--primary-2);
  font-weight: 800;
  font-size: 1rem;
}

.owner-details {
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.9rem;
}

.deadlines-items {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.deadline-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  background: rgba(255,255,255,0.03);
  font-size: 0.9rem;
}

.deadline-item .label {
  font-weight: 700;
  min-width: 100px;
}

.deadline-item.urgent { 
  border-left: 4px solid #ffc107; 
  color: #ffc107; 
}
.deadline-item.warning { border-left: 4px solid #94a3b8; }
.deadline-item.expired { 
  border-left: 4px solid var(--primary); 
  color: var(--primary-2); 
}

.badge-count.blink-badge {
  background: var(--primary);
}

.deadline-item .days {
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.btn-whatsapp-small {
  background: #25D366;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.85rem;
  text-decoration: none;
  display: inline-block;
}

@media (max-width: 1024px) {
  .deadline-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* ... existing styles ... */
</style>
