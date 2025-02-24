<script setup lang="ts">

interface TechStack {
  name: string;
}

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  techStack: TechStack[];
}

defineProps<Props>();
const emit = defineEmits(['view-image']);

const handleImageClick = () => {
  emit('view-image');
};
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
    <!-- Project Image -->
    <div class="relative aspect-video overflow-hidden">
      <img 
        :src="imageUrl" 
        :alt="title"
        class="w-full h-full object-cover"
      >
      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button 
          @click="handleImageClick"
          class="px-6 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          View Project
        </button>
      </div>
    </div>

    <!-- Project Info -->
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 dark:text-white" v-html="title"></h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ description }}</p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2">
        <div 
          v-for="tech in techStack" 
          :key="tech.name"
          class="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-full text-sm"
        >
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template> 