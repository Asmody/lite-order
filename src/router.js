import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '@/pages/Catalog'
import Orders from '@/pages/Orders'
import Login from '@/pages/Login'

Vue.use(VueRouter)

export let routes = [
  { path: '/catalog', name: 'Каталог', component: Catalog, meta: { requiresAuth: true } },
  { path: '/orders', name: 'Заказы', component: Orders, meta: { requiresAuth: true }  },
  { path: '/login', component: Login, meta: { hidden: true, auth: false } },
  { path: '/', redirect: '/catalog'}
]

routes.forEach( (route) => {
  if (!route.meta) {
    route.meta = {}
  }
})

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'is-active',
})

export default router
