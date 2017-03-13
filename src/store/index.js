import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import db from '@/db'

import dbGoods from '@/modules/goods'

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
    cart: [],
    orders: [],
    error: ''
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
      if (state.goodsOptions.currentPage > 1)
        state.goodsOptions.lastPage = false
        state.goodsOptions.currentPage--
    },
    setOrderListFirstPage (state) {
      state.goodsOptions.lastPage = false
      state.goodsOptions.currentPage = 1
    },
    ...VuexFire.mutations
  },
  actions: {
    setError ({commit}, error) {
      commit('setError', error)
    },
    clearError ({commit}) {
      commit('clearError')
    },
    loadGoodsList ({commit, state}) {
      dbGoods.getGoodsList({
        orderBy: state.goodsOptions.orderBy,
        startAt: state.goodsOptions.lastKey,
        perPage: state.goodsOptions.perPage
      })
      .then(items => {
        commit('loadGoodsList', items)
      })
      .catch(err => {
        console.log(err)
        commit('setError', err)
      })
/*
      let items=[]
      const goodsRef = db.ref('goods')
      const query = goodsRef.orderByKey().limitToFirst(state.goodsOptions.perPage).startAt(state.goodsOptions.lastKey)
      query.once('value')
      .then(snapshot => {
        snapshot.forEach( snap => {
          let r = {
            '.key': snap.key,
            ...snap.val()
          }
          items.push(r)
        })
        commit('loadGoodsList', items)
      })
      .catch(err => {
        commit('setError', err)
      })
*/
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
    }
  },
  getters: {
    error: state => state.error,
    goods: state => state.goodsList,
    goodsOptions: state => state.goodsOptions
  }
})

export default store
