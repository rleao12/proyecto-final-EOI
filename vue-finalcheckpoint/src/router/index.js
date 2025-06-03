import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Games from '@/views/Games.vue'
import Login from '@/views/Login.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/games', component: Games, name: 'games' },
  { path: '/login', component: Login, name: 'login' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  document.body.className = ''; 
  if (to.name === 'home') {
    document.body.classList.add('home-page');
  } else if (to.name === 'games') {
    document.body.classList.add('games-page');
  } else if (to.name === 'login') {
    document.body.classList.add('login-page');
  }
});