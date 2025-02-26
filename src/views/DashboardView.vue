<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref, onMounted } from 'vue';

const displayText = ref('');
const fullText = 'Khen Harold Paler';

onMounted(() => {
  let currentIndex = 0;
  const interval = setInterval(() => {
    if (currentIndex < fullText.length) {
      displayText.value += fullText[currentIndex];
      currentIndex++;
    } else {
      clearInterval(interval);
    }
  }, 150); // Adjust speed here (milliseconds)
});
</script>

<template>
  <div class="flex flex-1 flex-col gap-4 p-4 pt-0 mt-32">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <div class="col-span-full md:col-span-2 aspect-auto rounded-xl">
        <div class="flex flex-col mt-10 md:mt-20 gap-4 md:gap-6 p-4 md:p-8">
            <div>
                <h1 class="text-4xl md:text-7xl font-bold text-primary typing-cursor">{{ displayText }}</h1>
            </div>
            <p class="text-base md:text-lg leading-relaxed text-primary">
                Hi, I'm a 4th-year BSIT student and a full-stack developer passionate about creating efficient and scalable applications. 
                I specialize in Laravel, React Native, and Next.js to deliver seamless web and mobile solutions.
            </p>
            <div>
                <a 
                  href="https://drive.google.com/file/d/1Vu-rHKTjfpo3JQ2bSX4rL2OXj0iLWhv4/view?usp=sharing"
                  class="px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold border-2 border-primary rounded-xl hover:bg-primary hover:text-secondary bg-transparent text-primary"
                >Download Resume
                </a>
            </div>
            <div class="flex py-2 gap-4 md:gap-7 ml-2 md:ml-5">
                <a href="https://web.facebook.com/khenpro123" class="text-xl md:text-4xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <i class="pi pi-facebook" />
                </a>
                <a href="https://www.tiktok.com/@khen732" class="text-xl md:text-4xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <i class="pi pi-tiktok" />
                </a>
                <a href="https://github.com/Khenpaler" class="text-xl md:text-4xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <i class="pi pi-github" />
                </a>
            </div>
        </div>
      </div>
      <div class="col-span-full md:col-span-1 aspect-square rounded-xl">
        <img 
          src="@/assets/home/khen_pic.jpg" 
          alt="Khen" 
          class="w-full h-full object-cover object-[center_25%] rounded-full border-4 border-primary dark:border-primary/20 shadow-lg dark:shadow-primary/5"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.typing-cursor {
  border-right: 4px solid;
  animation: cursor-blink 1s step-end infinite;
}

@keyframes cursor-blink {
  from, to { border-color: transparent }
  50% { border-color: currentColor }
}
</style>
