<script setup lang="ts">
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { type LucideIcon } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router';

const route = useRoute()

defineProps<{
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }[]
}>()

const isActive = (url: string) => {
  return route.path === url
}
</script>

<template>
  <SidebarGroup>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in items" :key="item.title">
        <SidebarMenuButton 
          :class="{ 'bg-accent': isActive(item.url) }" 
          as-child
        >
          <RouterLink :to="item.url" class="flex items-center gap-3">
            <component :is="item.icon" v-if="item.icon" class="h-5 w-5" />
            <span class="text-base">{{ item.title }}</span>
          </RouterLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
