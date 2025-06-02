import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Games from '@/components/Games.vue'
import Login from '@/components/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/games', component: Games },
  { path: '/login', component: Login }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})