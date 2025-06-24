<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const props = defineProps<{
  navStyles: { id: string; label: string }[]
  currentNavStyle: string
}>()

const emit = defineEmits(['update:navStyle'])

const changeNavStyle = (style: string) => {
  emit('update:navStyle', style)
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="text-sm">Navigation Style</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col gap-2">
        <div 
          v-for="style in navStyles" 
          :key="style.id"
          class="flex items-center"
        >
          <input 
            type="radio" 
            :id="style.id" 
            :value="style.id" 
            :checked="currentNavStyle === style.id"
            @change="changeNavStyle(style.id)"
            class="mr-2"
          />
          <label :for="style.id">{{ style.label }}</label>
        </div>
      </div>
    </CardContent>
  </Card>
</template> 