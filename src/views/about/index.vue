<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-4xl font-bold text-center mb-12">
      <span class="dark:text-white">What Do I Do?</span>
    </h1>

    <!-- <Carousel /> -->

    <!-- Web Development Section -->
    <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
      <div class="flex-1 space-y-4 animate-fade-in-up">
        <h2 class="text-2xl font-semibold dark:text-white">Web Development</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Creating responsive and dynamic web applications using modern frameworks and technologies.
          Specialized in Vue.js, React, and other cutting-edge tools to deliver exceptional user experiences.
        </p>
      </div>
      <div class="flex-1">
        <img src="@/assets/about/web_development.jpg" alt="Web Development" class="rounded-lg shadow-lg w-full">
      </div>
    </div>

    <!-- Mobile Development Section -->
    <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
      <div class="flex-1 space-y-4 animate-fade-in-up">
        <h2 class="text-2xl font-semibold dark:text-white">Mobile Development</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Building native and cross-platform mobile applications that provide seamless experiences
          across iOS and Android devices. Expertise in React Native and Flutter development.
        </p>
      </div>
      <div class="flex-1">
        <img src="@/assets/about/mobile_development.jpg" alt="Mobile Development" class="rounded-lg shadow-lg w-full">
      </div>
    </div>

    <!-- Backend Development Section -->
    <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
      <div class="flex-1 space-y-4 animate-fade-in-up">
        <h2 class="text-2xl font-semibold dark:text-white">Backend Development</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Developing robust and scalable server-side solutions using Node.js, Python, and various
          database technologies. Experienced in creating RESTful APIs and microservices architecture.
        </p>
      </div>
      <div class="flex-1">
        <img src="@/assets/about/backend_development.jpg" alt="Backend Development" class="rounded-lg shadow-lg w-full">
      </div>
    </div>

    <!-- UI/UX Design Section -->
    <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
      <div class="flex-1 space-y-4 animate-fade-in-up">
        <h2 class="text-2xl font-semibold dark:text-white">UI/UX Design</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Creating intuitive and beautiful user interfaces with a focus on user experience.
          Proficient in design tools like Figma and Adobe XD for prototyping and design systems.
        </p>
      </div>
      <div class="flex-1">
        <img src="@/assets/about/ui_ux.jpg" alt="UI/UX Design" class="rounded-lg shadow-lg w-full">
      </div>
    </div>

    <!-- Photo and Video Editing Section -->
    <div class="flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1 space-y-4 animate-fade-in-up">
        <h2 class="text-2xl font-semibold dark:text-white">Photo and Video Editing</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Professional photo and video editing services using industry-standard software.
          Expertise in Adobe Creative Suite, including Photoshop, Premiere Pro, and After Effects.
        </p>
      </div>
      <div class="flex-1">
        <img src="@/assets/about/editing.jpg" alt="Photo and Video Editing" class="rounded-lg shadow-lg w-full">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Carousel from './components/Carousel.vue'

</script>