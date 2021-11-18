import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    meta: {
      title: 'Главная страница'
    },
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/info',
    name: 'InfoPage',
    meta: {
      title: 'Информация'
    },
    component: () => import('@/pages/Info.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router