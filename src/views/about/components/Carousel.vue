<template>
  <div class="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] w-full gap-8">
    <div class="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
      <Carousel class="relative w-full max-w-2xl" @init-api="onInit">
        <CarouselContent>
          <CarouselItem v-for="(slide, index) in slides" :key="index">
            <div class="flex flex-col items-center justify-center w-full">
              <Card class="w-full">
                <CardContent class="flex flex-col items-center justify-center p-8">
                  <img :src="slide.img" :alt="slide.title" class="w-[30rem] h-[30rem] object-cover rounded-lg shadow-lg mb-6" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div v-if="slides[currentIndex]" class="ml-10 mt-8 lg:mt-0 text-center lg:text-left max-w-2xl">
      <h2 class="text-3xl font-bold mb-2 dark:text-white">{{ slides[currentIndex].title }}</h2>
      <p class="text-lg text-gray-600 dark:text-gray-300">{{ slides[currentIndex].desc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';

import webDevelopmentImg from '@/assets/about/web_development.jpg';
import mobileDevelopmentImg from '@/assets/about/mobile_development.jpg';
import backendDevelopmentImg from '@/assets/about/backend_development.jpg';
import uiUxImg from '@/assets/about/ui_ux.jpg';
import editingImg from '@/assets/about/editing.jpg';

const slides = [
  {
    img: webDevelopmentImg,
    title: 'Web Development',
    desc: `Creating responsive and dynamic web applications using modern frameworks and technologies. Specialized in Vue.js, React, and other cutting-edge tools to deliver exceptional user experiences.`
  },
  {
    img: mobileDevelopmentImg,
    title: 'Mobile Development',
    desc: `Building native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices. Expertise in React Native and Flutter development.`
  },
  {
    img: backendDevelopmentImg,
    title: 'Backend Development',
    desc: `Developing robust and scalable server-side solutions using Node.js, Python, and various database technologies. Experienced in creating RESTful APIs and microservices architecture.`
  },
  {
    img: uiUxImg,
    title: 'UI/UX Design',
    desc: `Creating intuitive and beautiful user interfaces with a focus on user experience. Proficient in design tools like Figma and Adobe XD for prototyping and design systems.`
  },
  {
    img: editingImg,
    title: 'Photo and Video Editing',
    desc: `Professional photo and video editing services using industry-standard software. Expertise in Adobe Creative Suite, including Photoshop, Premiere Pro, and After Effects.`
  }
];

const currentIndex = ref(0);
let intervalId: number | undefined;
const carouselApi = ref<CarouselApi | null>(null);

function onInit(api: CarouselApi | undefined) {
  if (!api) return;
  carouselApi.value = api;
  currentIndex.value = api.selectedScrollSnap();
  api.on('select', () => {
    if (api) currentIndex.value = api.selectedScrollSnap();
  });
}

onMounted(() => {
  intervalId = window.setInterval(() => {
    if (carouselApi.value) {
      const next = (carouselApi.value.selectedScrollSnap() + 1) % slides.length;
      carouselApi.value.scrollTo(next);
    }
  }, 5000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>