import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/portfolio-v2/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projetos/:id',
      name: 'projeto',
      component: () => import('../views/ProjectView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (from.name === 'projeto' && to.name === 'home') {
      return {}
    }
    return { top: 0, left: 0 }
  },
})

export default router
