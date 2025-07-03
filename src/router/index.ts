import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/auth/login/index.vue'
import DashboardView from '@/views/dashboard/index.vue'
import AboutView from '../views/about/index.vue'
import ProjectsView from '../views/portfolio/index.vue'
import ContactView from '../views/contact/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    }
  ],
})

export default router
