import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'

import { state } from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import plugins from './plugins'

import db from '@/db'

import dbGoods from '@/modules/goods'
import dbAuth from '@/modules/auth'

//import goods from './goods.js'

Vue.use(Vuex)
Vue.use(VuexFire)
Vue.config.debug = true

let store = new Vuex.Store({
  state,
  mutations: {
    ...mutations,
    ...VuexFire.mutations
  },
  actions,
  getters,
  plugins
})

export default store
