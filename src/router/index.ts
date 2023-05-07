import Home from '@/views/Home.vue'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/weather',
    name: 'weather',
    component: () => import('@/views/weather/Weather.vue'),
    children: [
      {
        path: ':cityName/current',
        name: 'current',
        component: () => import('@/views/weather/CurrentWeather.vue')
      },
      {
        path: ':cityName/fourDays',
        name: 'fourDays',
        component: () => import('@/views/weather/FourDays.vue')
      },
      {
        path: ':cityName/sixteenDays',
        name: 'sixteenDays',
        component: () => import('@/views/weather/SixteenDays.vue')
      },
      {
        path: ':cityName/month',
        name: 'month',
        component: () => import('@/views/weather/ThirtyDays.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFoundError.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
