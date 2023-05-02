import HomeViewVue from '@/views/HomeView.vue'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeViewVue
  }
]

const router = createRouter({
  history: createWebHistory('http://localhost:5173/'),
  routes
})

export default router
