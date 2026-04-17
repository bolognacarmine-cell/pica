<template>
  <div class="app-layout">
    <!-- Header visualizzato solo se NON siamo in admin o portale -->
    <LayoutAppHeader v-if="!hideHeaderFooter" />
    
    <main :class="{ 'admin-main': isAdmin }">
      <slot />
    </main>

    <!-- Footer visualizzato solo se NON siamo in admin o portale -->
    <LayoutFooter v-if="!hideHeaderFooter" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isAdmin = computed(() => route.path.startsWith('/admin'))
const isPortal = computed(() => route.path.startsWith('/portale'))

const hideHeaderFooter = computed(() => isAdmin.value || isPortal.value)
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.admin-main {
  padding-top: 0 !important;
}
</style>
