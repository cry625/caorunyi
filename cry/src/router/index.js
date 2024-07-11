import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: () => import('../views/Knowledge.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('../views/Tools.vue')
    },
    {
      path: '/workexp',
      name: 'workexp',
      component: () => import('../views/WorkExp.vue')
    }
  ]
})

export default router
