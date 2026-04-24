<template>
  <div class="app-layout">
    <!-- Header visualizzato solo se NON siamo in admin o portale -->
    <LayoutAppHeader v-if="!hideHeaderFooter" />
    
    <main :class="{ 'admin-main': isAdmin }">
      <Transition name="slide-in" mode="out-in">
        <div :key="$route.fullPath" class="page-container">
          <slot />
        </div>
      </Transition>
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

.page-container {
  width: 100%;
  height: 100%;
}

/* Slide-in transition da sinistra verso destra */
.slide-in-enter-active {
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-in-leave-active {
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-in-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-in-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.slide-in-move {
  transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
