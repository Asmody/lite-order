// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import store from '@/store'

import '@/assets/style/app.scss'

import { icon } from 'vue-fontawesome'
Vue.component('vf-icon', icon)

import App from '@/components/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  created () {
    window.Vue = this
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
