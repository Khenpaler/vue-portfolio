<template>
  <header class="flex h-16 shrink-0 items-center justify-between transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    <div :class="[
      'flex items-center gap-2 px-4',
      showNav ? 'max-w-7xl mx-auto w-full' : ''
    ]">
      <SidebarTrigger v-if="!showNav" class="-ml-1" />
      <Separator v-if="!showNav" orientation="vertical" class="mr-2 h-4" />
      <Breadcrumb v-if="!showNav">
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
      
      <!-- Desktop Header Navigation -->
      <nav v-if="showNav" class="hidden md:flex items-center space-x-4">
        <router-link 
          v-for="item in navItems" 
          :key="item.url"
          :to="item.url"
          class="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
          :class="isActive(item.url) ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-accent'"
        >
          <component :is="item.icon" class="h-4 w-4 mr-2" />
          {{ item.title }}
        </router-link>
      </nav>

      <!-- Mobile Burger Menu Button -->
      <button 
        v-if="showNav" 
        @click="toggleMobileMenu"
        class="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
      >
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="items-center gap-2 px-4 hidden">
      <router-link 
      to="/auth/login" 
      class="px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors dark:bg-primary dark:text-black dark:hover:bg-primary/80">
        Login
      </router-link>
    </div>

    <!-- Mobile Navigation Menu -->
    <div 
      v-if="showNav && isMobileMenuOpen" 
      class="absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg z-50 md:hidden"
    >
      <nav class="flex flex-col p-4 space-y-2">
        <router-link 
          v-for="item in navItems" 
          :key="item.url"
          :to="item.url"
          @click="closeMobileMenu"
          class="flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors"
          :class="isActive(item.url) ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-accent'"
        >
          <component :is="item.icon" class="h-4 w-4 mr-3" />
          {{ item.title }}
        </router-link>
      </nav>
    </div>
  </header>
</template> 

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useRoute } from 'vue-router'
import {
  Home,
  User,
  FolderGit2,
  Mail
} from 'lucide-vue-next'

const props = defineProps({
  showNav: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Navigation items
const navItems = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'About',
    url: '/about',
    icon: User,
  },
  {
    title: 'Portfolio',
    url: '/portfolio',
    icon: FolderGit2,
  },
  {
    title: 'Contact',
    url: '/contact',
    icon: Mail,
  },
]

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

// Check if a nav item is active
const isActive = (url: string) => {
  return route.path === url
}
</script>