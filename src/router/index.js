import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComputedView from '@/views/ComputedView.vue'
import ReactiveView from '@/views/ReactiveView.vue'
import PersonView from '@/views/PersonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/computada',
      name: 'computada',
      component: ComputedView,
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: ReactiveView,
    },
    {
      path: '/pessoas',
      component: PersonView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
