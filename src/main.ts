import './assets/main.css'

import "primeicons/primeicons.css";
import Toast from "vue-toastification";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Ensure router is configured with the correct base URL
router.beforeEach((to, from, next) => {
  if (import.meta.env.PROD) {
    to.path = '/khen-portfolio-vue-version' + to.path
  }
  next()
})

app.use(createPinia())
app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine);
  },
});
app.use(router)
app.use(Toast)
app.mount('#app')
