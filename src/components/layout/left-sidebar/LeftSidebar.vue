<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'
import NavMain from '@/components/layout/left-sidebar/NavMain.vue'
import SideBarLogo from '@/components/layout/left-sidebar/SideBarLogo.vue'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

import {
  Home,
  User,
  FolderGit2,
  Mail
} from 'lucide-vue-next'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})

const navMain = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
    isActive: true,
  },
  {
    title: 'About',
    url: '/about',
    icon: User,
  },
  {
    title: 'Projects',
    url: '/projects',
    icon: FolderGit2,
  },
  {
    title: 'Contact',
    url: '/contact',
    icon: Mail,
  },
]
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SideBarLogo />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="navMain" />
    </SidebarContent>
    <SidebarFooter>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
