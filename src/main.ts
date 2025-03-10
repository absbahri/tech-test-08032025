// main.ts
import { createApp } from 'vue'
import App from '@/App.vue'
import { createHead } from '@vueuse/head'
import '@/style.css'

import { createPinia } from 'pinia'
import router from '@/router'

const app = createApp(App)
const pinia = createPinia()

app.use(createHead())
app.use(pinia)
app.use(router)
app.mount('#app')
