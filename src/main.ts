import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import ListView from './pages/List.vue'
import ShipView from './pages/Ship.vue'

const routes = [
  { path: '/', component: ListView },
  { path: '/ship/:id', component: ShipView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
