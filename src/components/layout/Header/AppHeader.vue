<script setup lang="ts">
import { computed } from 'vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useRoute } from 'vue-router'
import DarkMode from '@/components/layout/Header/DarkMode.vue'

const route = useRoute()

// Convert route path to breadcrumb items
const getBreadcrumbPath = () => {
  const paths = route.path.split('/').filter(Boolean)
  // If we're at a root-level route (like /about), return just that path
  if (paths.length === 1) {
    return [{
      label: paths[0].charAt(0).toUpperCase() + paths[0].slice(1),
      href: `/${paths[0]}`,
      current: true
    }]
  }
  // Otherwise, build the nested path
  return paths.map((path, index) => {
    const href = '/' + paths.slice(0, index + 1).join('/')
    return {
      label: path.charAt(0).toUpperCase() + path.slice(1),
      href,
      current: index === paths.length - 1
    }
  })
}

const path = computed(() => {
  const items = getBreadcrumbPath()
  // Only add Home if we're on the home page or if we're in a nested route
  if (route.path === '/' || route.path.split('/').length > 2) {
    return [{
      label: 'Home',
      href: '/',
      current: route.path === '/'
    }, ...items]
  }
  return items
})
</script>

<template>
  <header class="flex h-16 shrink-0 items-center justify-between transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    <div class="flex items-center gap-2 px-4">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem v-for="(item, index) in path" :key="index" class="hidden md:block">
            <router-link 
              v-if="!item.current" 
              :to="item.href"
              class="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {{ item.label }}
            </router-link>
            <BreadcrumbPage v-else>{{ item.label }}</BreadcrumbPage>
            <BreadcrumbSeparator v-if="index < path.length - 1" class="hidden md:block" />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <div class="px-4">
      <DarkMode />
    </div>
  </header>
</template> 