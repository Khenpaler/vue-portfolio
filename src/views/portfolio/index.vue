<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-4xl font-bold text-center mb-12">
      My Projects
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-if="loading">
        <Skeleton v-for="i in 6" :key="i" class="h-80 w-full" />
      </template>
      <template v-else>
        <ProjectCard
          v-for="(project, idx) in projects"
          :key="project.title"
          v-bind="project"
          @view-image="
            project.images
              ? openModal(project.images, 0)
              : openModal([project.imageUrl], 0)
          "
        />
      </template>
    </div>

    <ProjectImageModal
      :images="selectedImages"
      :isOpen="isModalOpen"
      :startIndex="selectedIndex"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { Skeleton } from '@/components/ui/skeleton';
import ProjectCard from '@/views/portfolio/components/ProjectCard.vue';
import ProjectImageModal from '@/views/portfolio/components/ProjectImageModal.vue';

import { projects } from './data';

const selectedImages = ref<string[]>([]);
const selectedIndex = ref(0);
const isModalOpen = ref(false);
const loading = ref(true);

const openModal = (images: string[], index = 0) => {
  selectedImages.value = images;
  selectedIndex.value = index;
  isModalOpen.value = true;
};

const closeModal = () => {
  selectedImages.value = [];
  selectedIndex.value = 0;
  isModalOpen.value = false;
};

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1200); // Simulate loading for 1.2s
});
</script>
