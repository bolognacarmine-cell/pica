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
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 12px 38px rgba(0, 0, 0, 0.08);
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
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
}

.logo-visible {
  width: 132px;
  height: auto;
  display: block;
  filter: none;
}

.nav-desktop {
  display: none;
  align-items: center;
  gap: 8px;
}

.nav-link {
  color: rgba(17, 17, 17, 0.78);
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid transparent;
}

.nav-link:hover {
  color: rgba(17, 17, 17, 0.95);
  background: rgba(0, 0, 0, 0.04);
}

.nav-link.router-link-active,
.nav-link[aria-current="page"] {
  color: #111;
  background: rgba(241, 110, 34, 0.12);
  border-color: rgba(241, 110, 34, 0.35);
}

.actions {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.cta {
  display: none;
  background: var(--primary);
  color: #fff;
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 12px 16px;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(241, 110, 34, 0.18);
}

.cta:hover {
  background: var(--primary-2);
}

.menu-toggle {
  background: rgba(255, 255, 255, 0.9);
  color: rgba(17, 17, 17, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 999px;
  padding: 12px 16px;
  font-weight: 900;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}

.menu-toggle:hover {
  background: rgba(0, 0, 0, 0.04);
}

.mobile-menu {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(255, 255, 255, 0.98);
}

.mobile-nav {
  max-width: 1400px;
  margin: 0 auto;
  padding: 12px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-link {
  color: rgba(17, 17, 17, 0.82);
  font-weight: 900;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  padding: 14px 14px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0.02);
  text-decoration: none;
}

.mobile-link:hover {
  color: rgba(17, 17, 17, 0.95);
  background: rgba(0, 0, 0, 0.04);
}

.mobile-link.router-link-active,
.mobile-link[aria-current="page"] {
  color: #111;
  background: rgba(241, 110, 34, 0.14);
  border-color: rgba(241, 110, 34, 0.35);
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
