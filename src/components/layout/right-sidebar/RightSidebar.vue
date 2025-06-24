<script setup lang="ts">
import { computed, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Settings, X } from 'lucide-vue-next'
import { Separator } from '@/components/ui/separator'
import { useColorMode } from '@vueuse/core'
import NavigationStyleCard from './cards/NavigationStyleCard.vue'
import ThemeCard from './cards/ThemeCard.vue'

const emit = defineEmits(['update:navStyle'])

const isOpen = ref(false)
const currentNavStyle = ref('header')

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode({
  emitAuto: true,
  modes: {
    auto: 'auto'
  },
  selector: 'html',
  attribute: 'class',
  storageKey: 'vueuse-color-scheme',
})

const themeValue = computed({
  get: () => String(mode.value),
  set: (val: string) => { mode.value = val as typeof mode.value }
})

const navStyles = [
  { id: 'sidebar', label: 'Sidebar Navigation' },
  { id: 'header', label: 'Header Navigation' }
]

const changeNavStyle = (style: string) => {
  currentNavStyle.value = style
  emit('update:navStyle', style)
}

const setTheme = (val: string) => {
  themeValue.value = val
}

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <!-- Toggle Button -->
  <Button 
    size="icon" 
    variant="outline" 
    class="fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-background hover:bg-muted"
    @click="toggleSidebar"
  >
    <Settings class="h-5 w-5" />
    <span class="sr-only">Layout Settings</span>
  </Button>

  <!-- Settings Sidebar -->
  <transition name="slide">
    <div 
      v-if="isOpen" 
      class="fixed top-0 right-0 bottom-0 w-72 bg-background border-l border-border shadow-lg z-40 overflow-y-auto"
    >
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="font-semibold text-lg">Layout Settings</h2>
        <Button variant="ghost" size="icon" @click="toggleSidebar">
          <X class="h-5 w-5" />
          <span class="sr-only">Close</span>
        </Button>
      </div>

      <div class="p-4">
        <NavigationStyleCard
          :nav-styles="navStyles"
          :current-nav-style="currentNavStyle"
          @update:navStyle="changeNavStyle"
        />
        <ThemeCard
          :theme-value="themeValue"
          @update:theme="setTheme"
        />
        <!-- Placeholder for future settings -->
        <div class="mt-4">
          <Separator class="my-4" />
          <p class="text-sm text-muted-foreground">More customization options will be available here.</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style> 