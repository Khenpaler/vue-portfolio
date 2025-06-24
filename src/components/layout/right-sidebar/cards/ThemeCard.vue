<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = defineProps<{
  themeValue: string
}>()

const emit = defineEmits(['update:theme'])

const setTheme = (val: string) => {
  emit('update:theme', val)
}
</script>

<template>
  <Card class="mt-4">
    <CardHeader>
      <CardTitle class="text-sm">Theme</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col gap-2">
        <div class="flex items-center">
          <input 
            type="radio" 
            id="light" 
            value="light" 
            :checked="themeValue === 'light'"
            @change="setTheme('light')"
            class="mr-2"
          />
          <label for="light" class="flex items-center">
            <Icon icon="radix-icons:sun" class="h-4 w-4 mr-2" />
            Light
          </label>
        </div>
        <div class="flex items-center">
          <input 
            type="radio" 
            id="dark" 
            value="dark" 
            :checked="themeValue === 'dark'"
            @change="setTheme('dark')"
            class="mr-2"
          />
          <label for="dark" class="flex items-center">
            <Icon icon="radix-icons:moon" class="h-4 w-4 mr-2" />
            Dark
          </label>
        </div>
        <div class="flex items-center">
          <input 
            type="radio" 
            id="auto" 
            value="auto" 
            :checked="themeValue === 'auto'"
            @change="setTheme('auto')"
            class="mr-2"
          />
          <label for="auto" class="flex items-center">
            <Icon icon="radix-icons:desktop" class="h-4 w-4 mr-2" />
            System
          </label>
        </div>
      </div>
    </CardContent>
  </Card>
</template> 