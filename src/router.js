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
    meta: { hidden: true, requiresAuth: false }
  },
  {
    path: '/profile',
    component (resolve) {
      require(['@/pages/Profile.vue'], resolve)
    },
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
  
  console.log('User: '+user.email )
  console.log('Logged in: '+auth.isLoggedIn )
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
