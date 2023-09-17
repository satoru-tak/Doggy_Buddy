import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TopPage',
    component: () => import('../components/TopPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: () => import('../components/SignUp.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
