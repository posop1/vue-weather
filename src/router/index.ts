import Home from '@/views/Home.vue'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:cityName/current',
    name: 'current',
    component: () => import('@/views/CurrentWeather.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
