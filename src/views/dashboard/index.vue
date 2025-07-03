<template>
  <div class="flex flex-1 flex-col gap-4 p-4 pt-0 mt-32">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <div class="col-span-full md:col-span-2 aspect-auto rounded-xl">
        <DashboardIntro />
        <GithubContributions />
      </div>
      <div class="col-span-full md:col-span-1 aspect-square rounded-xl">
        <DashboardProfileImage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardIntro from '@/views/dashboard/components/DashboardIntro.vue';
import GithubContributions from '@/views/dashboard/components/GithubContributions.vue';
import DashboardProfileImage from '@/views/dashboard/components/DashboardProfileImage.vue';
</script>

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
