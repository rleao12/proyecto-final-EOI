import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home  },
  { path: '/games', name: 'games', component: () => import('@/views/Games.vue')  },
  { path: '/login', name: 'login', component: () => import('@/views/Login.vue')  }
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