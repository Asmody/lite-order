
import router from '@/router'

import dbGoods from '@/modules/goods'
import dbAuth from '@/modules/auth'


export const setError = ({commit}, error) => {
  commit('SET_ERROR', error)
  setTimeout(() => {commit('CLEAR_ERROR')}, 5000)
}
export const clearError = ({commit}) => {
  commit('CLEAR_ERROR')
}

export const loadGoodsList = ({commit, state}) => {
  dbGoods.getGoodsList({
    orderBy: state.goods.options.orderBy,
    startAt: state.goods.options.lastKey,
    perPage: state.goods.options.perPage,
    order: state.order
  })
  .then(items => {
    commit('LOAD_GOODS_LIST', items)
  })
  .catch(error => {
    console.error(error)
    commit('SET_ERROR', error)
  })
}
export const setOrderListLastPage = ({dispatch, commit, state}) => {
  commit('SET_ORDER_LIST_LAST_PAGE')
  dispatch('loadGoodsList')
}
export const setOrderListNextPage = ({dispatch, commit, state}) => {
  commit('SET_ORDER_LIST_NEXT_PAGE')
  dispatch('loadGoodsList')
}
export const setOrderListPrevPage = ({dispatch, commit, state}) => {
  if (state.goodsOptions.currentPage > 1) {
    commit('SET_ORDER_LIST_PREV_PAGE')
    dispatch('loadGoodsList')
  }
}
export const setOrderListFirstPage = ({dispatch, commit, state}) => {
  if (state.goodsOptions.currentPage > 1) {
    commit('SET_ORDER_LIST_FIRST_PAGE')
    dispatch('loadGoodsList')
  }
}

export const updateOrder = ({dispatch, commit, state}, {good, qty}) => {
  // console.log(good, qty)
  commit('ADD_GOOD_TO_ORDER', {good, qty})
}
export const clearOrder = ({commit}) => {
  commit('CLEAR_ORDER')
}

export const signIn = ({dispatch, commit}, {email, pass, redirect}) => {
  dbAuth.signIn({email, pass}).then(token => {
    commit('SIGN_IN', {email, pass, token})
    router.push(redirect)
  })
  .catch(err => {
    dispatch('setError', err.message)
  })
}
export const signOut = ({commit}) => {
  dbAuth.signOut().then(r => {
    commit('SIGN_OUT')
    router.push({ path: '/' })
  })
}
