<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" @click.self="$emit('close')">
    <div class="relative flex items-center">
      <button
        v-if="images.length > 1"
        @click.stop="prevImage"
        class="absolute left-0 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
        style="top: 50%; transform: translateY(-50%);"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <img 
        :src="images[currentIndex]" 
        alt="Project Preview" 
        class="max-h-[90vh] max-w-[90vw] object-contain mx-12"
      >
      <button
        v-if="images.length > 1"
        @click.stop="nextImage"
        class="absolute right-0 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
        style="top: 50%; transform: translateY(-50%);"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button 
        @click="$emit('close')"
        class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div v-if="images.length > 1" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 rounded px-3 py-1 text-xs z-20">
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';

const props = defineProps<{
  images: string[],
  isOpen: boolean,
  startIndex?: number
}>()

defineEmits(['close'])

const currentIndex = ref(props.startIndex ?? 0)

watch(() => props.isOpen, (open) => {
  if (open) {
    currentIndex.value = props.startIndex ?? 0
  }
})

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}
</script> 