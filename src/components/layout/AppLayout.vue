<script setup lang="ts">
import AppSidebar from '@/components/layout/Sidebar/AppSidebar.vue'
import AppHeader from '@/components/layout/Header/AppHeader.vue'
import Footer from './Footer/Footer.vue';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import ParticlesBackground from '@/components/ParticlesBackground.vue'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <div class="relative flex flex-col min-h-screen">
        <AppHeader class="relative z-20" />
        <ParticlesBackground class="absolute inset-0 z-0" />
        <main class="flex-grow relative z-10">
          <slot></slot>
        </main>
        <Footer class="relative z-20" />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template> 