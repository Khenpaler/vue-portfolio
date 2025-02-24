<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const loadedSections = ref(new Set());

onMounted(() => {
  // Simulate loading delay
  setTimeout(() => {
    isLoading.value = false;
    // Load sections sequentially
    const sections = ['web', 'mobile', 'backend', 'uiux', 'photo'];
    sections.forEach((section, index) => {
      setTimeout(() => {
        loadedSections.value.add(section);
      }, index * 300); // 300ms delay between each section
    });
  }, 1000); // Initial loading delay
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-4xl font-bold text-center mb-12">
      <span class="dark:text-white">What Do I Do?</span>
    </h1>

    <!-- Web Development Section -->
    <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
      <div v-if="!isLoading && loadedSections.has('web')" 
           class="flex-1 space-y-4 animate-fade-in-up">
        <h2 class="text-2xl font-semibold dark:text-white">Web Development</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Creating responsive and dynamic web applications using modern frameworks and technologies.
          Specialized in Vue.js, React, and other cutting-edge tools to deliver exceptional user experiences.
        </p>
      </div>
      <div v-else class="flex-1 space-y-4">
        <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse w-3/4"></div>
        <div class="h-20 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>
      <div class="flex-1">
        <div v-if="!isLoading && loadedSections.has('web')" class="animate-fade-in-up">
          <img src="@/assets/about/web_development.jpg" alt="Web Development" class="rounded-lg shadow-lg w-full">
        </div>
        <div v-else class="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>

    <!-- Mobile Development Section -->
    <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
      <div v-if="!isLoading && loadedSections.has('mobile')" 
           class="flex-1 space-y-4 animate-fade-in-up">
        <h2 class="text-2xl font-semibold dark:text-white">Mobile Development</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Building native and cross-platform mobile applications that provide seamless experiences
          across iOS and Android devices. Expertise in React Native and Flutter development.
        </p>
      </div>
      <div v-else class="flex-1 space-y-4">
        <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse w-3/4"></div>
        <div class="h-20 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>
      <div class="flex-1">
        <div v-if="!isLoading && loadedSections.has('mobile')" class="animate-fade-in-up">
          <img src="@/assets/about/mobile_development.jpg" alt="Mobile Development" class="rounded-lg shadow-lg w-full">
        </div>
        <div v-else class="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>

    <!-- Backend Development Section -->
    <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
      <div v-if="!isLoading && loadedSections.has('backend')" 
           class="flex-1 space-y-4 animate-fade-in-up">
        <h2 class="text-2xl font-semibold dark:text-white">Backend Development</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Developing robust and scalable server-side solutions using Node.js, Python, and various
          database technologies. Experienced in creating RESTful APIs and microservices architecture.
        </p>
      </div>
      <div v-else class="flex-1 space-y-4">
        <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse w-3/4"></div>
        <div class="h-20 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>
      <div class="flex-1">
        <div v-if="!isLoading && loadedSections.has('backend')" class="animate-fade-in-up">
          <img src="@/assets/about/backend_development.jpg" alt="Backend Development" class="rounded-lg shadow-lg w-full">
        </div>
        <div v-else class="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>

    <!-- UI/UX Design Section -->
    <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
      <div v-if="!isLoading && loadedSections.has('uiux')" 
           class="flex-1 space-y-4 animate-fade-in-up">
        <h2 class="text-2xl font-semibold dark:text-white">UI/UX Design</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Creating intuitive and beautiful user interfaces with a focus on user experience.
          Proficient in design tools like Figma and Adobe XD for prototyping and design systems.
        </p>
      </div>
      <div v-else class="flex-1 space-y-4">
        <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse w-3/4"></div>
        <div class="h-20 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>
      <div class="flex-1">
        <div v-if="!isLoading && loadedSections.has('uiux')" class="animate-fade-in-up">
          <img src="@/assets/about/ui_ux.jpg" alt="UI/UX Design" class="rounded-lg shadow-lg w-full">
        </div>
        <div v-else class="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>

    <!-- Photo and Video Editing Section -->
    <div class="flex flex-col md:flex-row items-center gap-8">
      <div v-if="!isLoading && loadedSections.has('photo')" 
           class="flex-1 space-y-4 animate-fade-in-up">
        <h2 class="text-2xl font-semibold dark:text-white">Photo and Video Editing</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Professional photo and video editing services using industry-standard software.
          Expertise in Adobe Creative Suite, including Photoshop, Premiere Pro, and After Effects.
        </p>
      </div>
      <div v-else class="flex-1 space-y-4">
        <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse w-3/4"></div>
        <div class="h-20 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>
      <div class="flex-1">
        <div v-if="!isLoading && loadedSections.has('photo')" class="animate-fade-in-up">
          <img src="@/assets/about/editing.jpg" alt="Photo and Video Editing" class="rounded-lg shadow-lg w-full">
        </div>
        <div v-else class="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>
  </div>
</template>
