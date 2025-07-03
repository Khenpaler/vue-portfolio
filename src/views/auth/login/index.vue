<template>
  <div class="flex items-center justify-center min-h-screen relative">
    <ParticlesBackground class="absolute inset-0 -z-10" />
    <div class="w-full max-w-md flex flex-col items-center relative">
      <!-- Back button -->
      <router-link
        to="/"
        class="absolute left-0 -top-14 px-4 py-2 rounded-lg bg-accent text-foreground dark:bg-gray-800 dark:text-gray-100 hover:bg-accent/80 dark:hover:bg-gray-700 transition-colors"
      >
        ← Back
      </router-link>

      <!-- Login container -->
      <form class="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 w-full">
        <h1 class="text-3xl font-bold mb-6 text-center text-primary dark:text-white">
          Login
        </h1>
        <div class="mb-4">
          <label class="block text-gray-700 dark:text-gray-300 mb-2" for="email">
            Email
          </label>
          <input 
            id="email" 
            type="email" 
            required 
            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" 
          />
        </div>
        <div class="mb-6 relative">
          <label class="block text-gray-700 dark:text-gray-300 mb-2" for="password">
            Password
          </label>
          <input 
            id="password" 
            :type="showPassword ? 'text' : 'password'" 
            required 
            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary pr-12" 
          />
          <button
            type="button"
            class="absolute right-3 top-2/3 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none"
            @click="showPassword = !showPassword"
            tabindex="-1"
            aria-label="Toggle password visibility"
          >
            <EyeOff v-if="showPassword" class="h-5 w-5" />
            <Eye v-else class="h-5 w-5" />
          </button>
        </div>
        <button 
          type="submit" 
          class="w-full py-2 px-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors dark:bg-primary dark:text-black dark:hover:bg-primary/80"
          >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ParticlesBackground from '@/components/ParticlesBackground.vue'
import { Eye, EyeOff } from 'lucide-vue-next'

const showPassword = ref(false)
</script>
