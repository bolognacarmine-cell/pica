<template>
  <div class="app-layout">
    <!-- Header visualizzato solo se NON siamo in admin o portale -->
    <LayoutAppHeader v-if="!hideHeaderFooter" />
    
    <main :class="{ 'admin-main': isAdmin, 'no-site-header': hideHeaderFooter }">
      <div class="page-container">
        <slot />
      </div>
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

const buildId = useState('buildId', () => process.env.RENDER_GIT_COMMIT || process.env.GIT_COMMIT || 'local')
useHead({
  meta: [{ name: 'x-build-id', content: buildId.value }]
})
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-top: 80px;
}

.admin-main {
  padding-top: 0 !important;
}

.no-site-header {
  padding-top: 0 !important;
}

.page-container {
  width: 100%;
  height: 100%;
}
</style>
