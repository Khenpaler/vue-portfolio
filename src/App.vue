<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" v-if="$route.path === '/auth/login'" />
    <AppLayout v-else>
      <component :is="Component" />
    </AppLayout>
  </router-view>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
</script>
