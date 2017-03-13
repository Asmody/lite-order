// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import '@/styles/bulma-setup.sass'
import 'bulma/bulma.sass'

import './assets/fa.scss'
import { icon } from 'vue-fontawesome'
Vue.component('vf-icon', icon)

import router from '@/router'
import store from '@/store'

import App from '@/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
