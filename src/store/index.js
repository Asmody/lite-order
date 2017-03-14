import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import db from '@/db'

import _ from 'lodash'

import dbGoods from '@/modules/goods'
import dbAuth from '@/modules/auth'

//import goods from './goods.js'

Vue.use(Vuex)
Vue.use(VuexFire)
Vue.config.debug = true



let store = new Vuex.Store({
  state: {
    goodsList: [],
    goodsOptions: {
      perPage: 10,
      currentPage: 1,
      lastKey: '',
      lastPage: false,
//      orderBy: '.key'
      orderBy: 'code'
    },
    order: {},
    orders: [],
    error: '',
    auth: {
      user: '',
      sess: null
    },
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = ''
    },
    loadGoodsList (state, items) {
      state.goodsList = items
      if (items.length > 0) {
        state.goodsOptions.lastKey = items.slice(-1)[0][state.goodsOptions.orderBy]
      } else {
        state.goodsOptions.lastKey = ''
      }

    },
    setOrderListLastPage (state) {
      if (!state.goodsOptions.lastPage) {
        state.goodsOptions.currentPage++
      }
    },
    setOrderListNextPage (state) {
      if (!state.goodsOptions.lastPage) {
        state.goodsOptions.currentPage++
      }
    },
    setOrderListPrevPage (state) {
      if (state.goodsOptions.currentPage > 1) {
        state.goodsOptions.lastPage = false
        state.goodsOptions.currentPage--
      }
    },
    setOrderListFirstPage (state) {
      state.goodsOptions.lastPage = false
      state.goodsOptions.currentPage = 1
    },
    updateOrder (state, {good, qty}) {
      Vue.set(state.order,
        good['.key'],
        {
          good: good,
          price: good.price,
          qty: qty,
        }
      )
    },
    clearOrder (state) {
      state.order = {}
    },
    signIn (state) {

    },
    signOut (state) {
      Vue.set(state, 'auth', { user: '', sess: null})
    },
    ...VuexFire.mutations
  },
  actions: {
    setError ({commit}, error) {
      commit('setError', error)
      setTimeout(() => {commit('clearError')}, 2000)
    },
    clearError ({commit}) {
      commit('clearError')
    },
    loadGoodsList ({commit, state}) {
      dbGoods.getGoodsList({
        orderBy: state.goodsOptions.orderBy,
        startAt: state.goodsOptions.lastKey,
        perPage: state.goodsOptions.perPage,
        order: state.order
      })
      .then(items => {
        commit('loadGoodsList', items)
      })
      .catch(err => {
        console.log(err)
        commit('setError', err)
      })
    },
    setOrderListNextPage ({dispatch, commit, state}) {
      commit('setOrderListNextPage')
      dispatch('loadGoodsList')
    },
    setOrderListPrevPage ({dispatch, commit, state}) {
      if (state.goodsOptions.currentPage > 1) {
        commit('setOrderListPrevPage')
        dispatch('loadGoodsList')
      }
    },
    setOrderListFirstPage ({dispatch, commit, state}) {
      if (state.goodsOptions.currentPage > 1) {
        commit('setOrderListFirstPage')
        dispatch('loadGoodsList')
      }
    },
    updateOrder ({dispatch, commit, state}, {good, qty}) {
      // console.log(good, qty)
      commit('updateOrder', {good, qty})
    },
    clearOrder ({commit}) {
      commit('clearOrder')
    },
    signIn ({commit}, {email, pass}) {
      dbAuth.signIn({email, pass}).then(r => {
        console.log(r)
        commit('signIn', r )
      })
      .catch(err => {
        dispatch('setError', err)
      })
    },
    signOut ({commit}) {
      dbAuth.signOut().then(r => {
        commit('signOut')
      })
    }
  },
  getters: {
    error: state => state.error,
    goods: state => state.goodsList,
    goodsOptions: state => state.goodsOptions,
    order: state => state.order,
    orderTotal: state => {
      return Math.round(
        _.reduce(state.order, (total, item, key) => {
          return total + Math.round(item.price * item.qty * 100) / 100
        }, 0) * 100) / 100
    },
    auth: state => state.auth,
    signedIn: state => true && state.auth.sess,
  }
})

export default store
