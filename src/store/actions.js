
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
  dispatch('setLoading', true)
  return Promise.all([
    db.getGoods({orderBy: state.goods.options.orderBy}),
    db.getPrices(),
    db.getGroups()
  ])
  .then(result => {
    let [goods, prices, groups] = result
    dispatch('setLoading', false)
    return commit('LOAD_DB', {goods, prices, groups})
  })
  .catch(error => {
    dispatch('setLoading', false)
    dispatch('setError', error.message)
  })
}

export const loadGoodsList = ({dispatch, commit, state}) => {
  let pr = new Promise((resolve, reject) => {
    if (state.db.goods.length == 0) {
      resolve(dispatch('loadDb'))
    } else {
      resolve(true)
    }
  })
  pr.then((some) => {
    let perPage = state.goods.options.perPage
    let currentPage = state.goods.nav.currentPage
    let goodsDbList = (state.goods.filtered.length ? state.goods.filtered : state.db.goods )
    let _goods = _.slice(goodsDbList, (currentPage-1)*perPage, currentPage*perPage)
    let items= _.map(_goods, el => {
      return {
        ...el,
        price: _.get(state.db.prices, el['.key'], 0),
        qty: _.get(state.order.items, [el['.key'], 'qty'], 0)
      }
    })
    commit('LOAD_GOODS_LIST', items)
  })
  .catch(error => {
    console.error(error)
    dispatch('setError', error.message)
  })
}

export const setGoodsFilter = ({dispatch, commit, state}, filter) => {
  commit('SET_GOODS_FILTER', filter)
  dispatch('loadGoodsList')
}

export const clearGoodsFilter = ({dispatch, commit, state}) => {
  commit('SET_GOODS_FILTER', '')
  dispatch('loadGoodsList')
}

export const loadGroupsList = ({dispatch, commit, state}) => {
  let pr = new Promise((resolve, reject) => {
    if (state.db.goods.length == 0) {
      resolve(dispatch('loadDb'))
    } else {
      resolve(true)
    }
  })
  pr.then((some) => {
    let _groups = state.db.goodsGroups
    let items = _groups
    commit('LOAD_GROUPS_LIST', items)
  })
  .catch(error => {
    console.error(error)
    dispatch('setError', error.message)
  })
}

export const setGroupsFilter = ({dispatch, commit, state}, filter) => {
  commit('SET_GROUPS_FILTER', filter)
  dispatch('loadGroupsList')
}

export const clearGroupsFilter = ({dispatch, commit, state}) => {
  commit('SET_GROUPS_FILTER', '')
  dispatch('loadGroupsList')
}

export const addSelectedGroup = ({dispatch, commit, state}, group) => {
  commit('ADD_SELECTED_GROUP', group)
  dispatch('loadGoodsList')
}

export const removeSelectedGroup = ({dispatch, commit, state}, group) => {
  commit('REMOVE_SELECTED_GROUP', group)
  dispatch('loadGoodsList')
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
  if (state.goods.nav.currentPage > 1) {
    commit('SET_ORDER_LIST_PREV_PAGE')
    dispatch('loadGoodsList')
  }
}
export const setOrderListFirstPage = ({dispatch, commit, state}) => {
  if (state.goods.nav.currentPage > 1) {
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
export const saveOrder = ({dispatch, commit, state}) => {

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

export const setLoading = ({commit}, loading) => {
  commit('SET_LOADING', loading)
}
