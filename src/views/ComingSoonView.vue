<template>
  <div class="flex flex-1 flex-col items-center justify-center gap-6 p-4">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-primary mb-4">Currently Building</h1>
      <div class="text-2xl md:text-3xl text-primary/80 mb-8">Coming Soon</div>
      <div class="flex items-center gap-2 text-lg md:text-xl text-primary/60">
        <i class="pi pi-cog animate-spin"></i>
        Under Construction
      </div>
    </div>
    <Button 
      @click="$router.push('/')" 
      class="px-6 py-2 text-base md:text-lg font-semibold border-2 border-primary rounded-xl hover:bg-primary hover:text-secondary bg-transparent text-primary"
    >
      Back to Dashboard
    </Button>
  </div>
</template>

<script setup lang="ts">
</script> 