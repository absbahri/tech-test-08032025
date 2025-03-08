// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import List from '@pages/List.vue'
import Ship from '@pages/Ship.vue'

const routes = [
  { path: '/:id', component: Ship, name: 'ShipView' },
  { path: '/', component: List, name: 'ListView' },
]

const router = createRouter({
  history: createWebHistory(), // This ensures clean URLs
  routes,
})

export default router
