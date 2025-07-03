<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-4xl font-bold text-center mb-12">
      <span class="dark:text-white">What Do I Do?</span>
    </h1>

    <Carousel />
    
    <TechnologiesTools />
  </div>
</template>

<script setup lang="ts">
import Carousel from './components/Carousel.vue'
import TechnologiesTools from './components/TechnologiesTools.vue'
</script>