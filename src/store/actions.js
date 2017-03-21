
import router from '@/router'

import db from '@/modules/db'

export const setError = ({commit}, error) => {
  commit('SET_ERROR', error)
  setTimeout(() => {commit('CLEAR_ERROR')}, 5000)
}
export const clearError = ({commit}) => {
  commit('CLEAR_ERROR')
}

export const loadDb = ({commit, dispatch, state}) => {
  return Promise.all([
    db.getGoods({orderBy: state.goods.options.orderBy}),
    db.getPrices()
  ])
  .then(result => {
    let goods = result[0]
    let prices = result[1]
    return commit('LOAD_DB', {goods, prices})
  })
  .catch(error => {
    dispatch('setError', error.message)
  })
}

export const loadGoodsList = ({commit, dispatch, state}) => {
  let perPage = state.goods.options.perPage || 20
  let currentPage = state.goods.options.currentPage || 1

  let pr = new Promise((resolve, reject) => {
    if (state.db.goods.length == 0) {
      resolve(dispatch('loadDb'))
    } else {
      resolve(true)
    }
  })
  pr.then((some) => {
    let _goods = _.slice(state.db.goods, (currentPage-1)*perPage, perPage)
    let items= _.map(_goods, el => {
      return {
        ...el,
        price: _.get(_.find(state.db.prices, pr => pr['.key']===el['.key']), 'price', 0),
        qty: _.get(state.order, [el['.key'], 'qty'], 0)
      }
    })
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
