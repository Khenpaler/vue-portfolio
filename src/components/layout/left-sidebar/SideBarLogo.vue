<template>
  <div class="flex h-16 items-center justify-center border-b px-4 transition-[height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    <div class="flex items-center justify-center group-has-[[data-collapsible=icon]]/sidebar-wrapper:min-w-12">
      <img 
        :src="isDarkMode ? lightLogo : darkLogo" 
        alt="Logo" 
        class="w-1/2 h-1/2 object-contain" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'
import darkLogo from '@/assets/sidebar/k_black.png'
import lightLogo from '@/assets/sidebar/k_white.png'

const mode = useColorMode()
const isDarkMode = computed(() => mode.value === 'dark')
</script>
