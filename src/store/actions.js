
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
    db.getGroups(),
    db.getOrders(state.user),
    db.getCustomers(state.user)
  ])
  .then(result => {
    let [
      goods,
      prices,
      groups,
      orders,
      customers
    ] = result
    dispatch('setLoading', false)
    return commit('LOAD_DB', {goods, prices, groups, orders, customers})
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
        price: _.defaultTo(state.db.prices[el.id], 0),
        qty: _.get(state.order.items, [el.id, 'qty'], 0)
      }
    })
    commit('LOAD_GOODS_LIST', items)
  })
  .catch(error => {
    console.error(error)
    dispatch('setError', error.message)
  })
}

export const setGoodsPerPage = ({dispatch, commit, state}, perPage) => {
  commit('SET_GOODS_PER_PAGE', perPage)
  dispatch('loadGoodsList')
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
  pr.then(some => {
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

export const setGoodsListLastPage = ({dispatch, commit, state}) => {
  commit('SET_GOODS_LIST_LAST_PAGE')
  dispatch('loadGoodsList')
}
export const setGoodsListNextPage = ({dispatch, commit, state}) => {
  commit('SET_GOODS_LIST_NEXT_PAGE')
  dispatch('loadGoodsList')
}
export const setGoodsListPrevPage = ({dispatch, commit, state}) => {
  if (state.goods.nav.currentPage > 1) {
    commit('SET_GOODS_LIST_PREV_PAGE')
    dispatch('loadGoodsList')
  }
}
export const setGoodsListFirstPage = ({dispatch, commit, state}) => {
  if (state.goods.nav.currentPage > 1) {
    commit('SET_GOODS_LIST_FIRST_PAGE')
    dispatch('loadGoodsList')
  }
}

export const initOrder = ({dispatch, commit, state}) => {
  commit('CLEAR_ORDER')
  return db.getOrderNumber(orderNumber => {
    commit('SET_ORDER_NUMBER', orderNumber)
    if (state.user.customers) {
      commit('SET_ORDER_CUSTOMER', state.user.customers[0])
    }
  })
}
export const updateOrder = ({dispatch, commit, state}, {good, qty}) => {
  return new Promise((resolve, reject) => {
    resolve(commit('ADD_GOOD_TO_ORDER', {good, qty}))
  })
}
export const clearOrder = ({commit}) => {
  return new Promise((resolve, reject) => {
    resolve(commit('CLEAR_ORDER'))
  })
}
export const createOrder = ({dispatch, commit, state}) => {
  return db.newOrder({
    date: (new Date).toISOString(),
    user: {
      id: state.user.id,
      email: state.user.email
    },
    ...state.order
  })
  .then(some => {
    return commit('CLEAR_ORDER')
  })
  .catch(error => {
    dispatch('setError', error.message)
  })
}

export const loadOrdersList = ({dispatch, commit, state}) => {
  return new Promise((resolve, reject) => {
    resolve(commit('LOAD_ORDERS_LIST', state.db.orders))
  })
}

export const loadUserCustomers = ({dispatch, commit, state}) => {
  return new Promise((resolve, reject) => {
    resolve(commit('LOAD_USER_CUSTOMERS'))
  })
}

export const signIn = ({dispatch, commit, state}, user) => {
  return db.getUser(user.id)
  .then(dbUser => {
    return commit('SIGN_IN', {
      ...user,
      ...dbUser
    })
  })
  .then(() => {
    return db.getCustomers(state.user)
    .then(customers => {
      commit('LOAD_USER_CUSTOMERS', customers)
    })
  })
  .catch(error => {
    dispatch('setError', error.message)
  })
}
export const signOut = ({commit}) => {
  return new Promise((resolve, reject) => {
    resolve(commit('SIGN_OUT'))
  })
}

export const setLoading = ({commit}, loading) => {
  return new Promise((resolve, reject) => {
    resolve(commit('SET_LOADING', loading))
  })
}
