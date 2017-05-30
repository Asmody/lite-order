import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '@/pages/Login.vue'

const Catalog = resolve => require(['@/pages/Catalog.vue'], resolve)
const Orders = resolve => require(['@/pages/Orders.vue'], resolve)
const Customers = resolve => require(['@/pages/Customers.vue'], resolve)
const Profile = resolve => require(['@/pages/Profile.vue'], resolve)

export let routes = [
  { path: '/', redirect: '/catalog' },
  {
    path: '/catalog',
    name: 'Каталог',
    component: Catalog,
    meta: { requiresAuth: true }
  },
  {
    path: '/orders',
    name: 'Заказы',
    component: Orders,
    meta: { requiresAuth: true }
  },
  {
    path: '/customers',
    name: 'Клиенты',
    component: Customers,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { hidden: true, requiresAuth: false }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { hidden: true, requiresAuth: true }
  },
]

routes.forEach( (route) => {
  if (!route.meta) {
    route.meta = {}
  }
})

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})

router.beforeEach( (to, from, next) => {
  const auth = router.app.$options.store.state.auth
  const user = router.app.$options.store.state.user

  if (to.meta.requiresAuth && !user.id) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
