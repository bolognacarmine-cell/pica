<script setup>
import { ref } from 'vue'

const props = defineProps({
  logo: { type: String, default: '/logo-pica.png' },
  menuItems: {
    type: Array,
    default: () => [
      { name: 'Home', link: '/' },
      { name: 'Veicoli', link: '/veicoli' },
      { name: 'Blog', link: '/blog' },
      { name: 'Contatti', link: '/#contatti' }
    ]
  },
  ctaText: { type: String, default: 'Info: 333 2327592' }
})

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="header-fixed" role="banner">
    <div class="header-content">
      <NuxtLink to="/" class="logo-link" aria-label="Pica Caravan - Home">
        <span class="logo-shell">
          <img :src="props.logo" alt="Logo Pica Caravan" class="logo-visible" />
        </span>
      </NuxtLink>

      <nav class="nav-desktop" role="navigation" aria-label="Menu principale">
        <NuxtLink v-for="item in props.menuItems" :key="item.name" :to="item.link" class="nav-link">
          {{ item.name }}
        </NuxtLink>
      </nav>

      <div class="actions">
        <a href="tel:3332327592" class="cta">{{ props.ctaText }}</a>
        <button class="menu-toggle" type="button" @click="mobileMenuOpen = !mobileMenuOpen">
          Menu
        </button>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="mobile-menu">
      <nav class="mobile-nav" role="navigation" aria-label="Menu mobile">
        <NuxtLink
          v-for="item in props.menuItems"
          :key="item.name"
          :to="item.link"
          class="mobile-link"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid #eee;
}

.header-content {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.logo-link {
  display: inline-flex;
  align-items: center;
}

.logo-shell {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.95);
}

.logo-visible {
  width: 140px;
  height: auto;
  display: block;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.nav-desktop {
  display: none;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: #111;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.actions {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.cta {
  display: none;
  background: var(--primary);
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
}

.menu-toggle {
  background: #fff;
  color: #111;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.mobile-menu {
  border-top: 1px solid #eee;
  background: #fff;
}

.mobile-nav {
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mobile-link {
  color: #111;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
  text-decoration: none;
}

@media (min-width: 1024px) {
  .nav-desktop {
    display: flex;
  }
  .cta {
    display: inline-flex;
  }
  .menu-toggle {
    display: none;
  }
  .mobile-menu {
    display: none;
  }
}
</style>
