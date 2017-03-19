import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export let routes = [
  { path: '/', redirect: '/catalog' },
  {
    path: '/catalog',
    name: 'Каталог',
    component (resolve) {
      require(['@/pages/Catalog.vue'], resolve)
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/orders',
    name: 'Заказы',
    component (resolve) {
      require(['@/pages/Orders.vue'], resolve)
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component (resolve) {
      require(['@/pages/Login.vue'], resolve)
    },
    meta: { hidden: true, auth: false }
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
  linkActiveClass: 'is-active',
  beforeEach: beforeGuard
})

function beforeGuard (to, from, next) {
  const auth = router.app.$options.store.auth
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default router
