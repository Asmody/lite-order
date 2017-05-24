import Vue from 'vue'
import Vuex from 'vuex'

import { state } from './state'
import * as mutations from './mutations/index.js'
import * as actions from './actions/index.js'
import * as getters from './getters'
import plugins from './plugins'

export { mutations }

Vue.use(Vuex)
Vue.config.debug = true

let store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins
})

export default store
