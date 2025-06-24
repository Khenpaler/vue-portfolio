<template>
  <SidebarProvider>
    <LeftSidebar v-if="showSidebar" />
    <SidebarInset>
      <div class="relative flex flex-col min-h-screen">
        <Header class="relative z-20" :show-nav="!showSidebar" />
        <ParticlesBackground class="absolute inset-0 z-0" />
        <main class="flex-grow relative z-10">
          <slot></slot>
        </main>
        <Footer class="relative z-20" />
        <RightSidebar @update:nav-style="updateNavStyle" />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template> 

<script setup lang="ts">
import { ref, computed } from 'vue'

import Header from '@/components/layout/header/Header.vue'
import LeftSidebar from '@/components/layout/left-sidebar/LeftSidebar.vue'
import RightSidebar from './right-sidebar/RightSidebar.vue'
import Footer from './footer/Footer.vue'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import ParticlesBackground from '@/components/ParticlesBackground.vue'

// Navigation style state (sidebar or header)
const navStyle = ref('header')

// Determine if sidebar should be visible
const showSidebar = computed(() => navStyle.value === 'sidebar')

// Handle navigation style change
const updateNavStyle = (style: string) => {
  navStyle.value = style
}
</script>