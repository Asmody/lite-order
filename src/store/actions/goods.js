import db from '@/modules/db'

export const loadGoodsDb = ({commit, dispatch, state}, resolve) => {
  dispatch('setLoading', true)
  return Promise.all([
    db.getGoods({orderBy: state.goods.options.orderBy}),
    db.getPrices()
  ])
  .then(result => {
    let [goods, prices] = result
    commit('SET_DB_GOODS', goods)
    commit('SET_DB_PRICES', prices)
    dispatch('setLoading', false)
    resolve()
  })
  .catch(error => {
    dispatch('setLoading', false)
    dispatch('setError', error.message)
  })
}

export const loadGoodsList = ({dispatch, commit, state}) => {
  new Promise((resolve, reject) => {
    if (state.db.goods === null) {
      dispatch('loadGoodsDb', resolve)
    } else {
      resolve()
    }
  })
  .then(() => {
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

export const loadGroupsFromDB = ({dispatch, commit, state}) => {
  return db.getGroups()
    .then(items => commit('SET_DB_GROUPS', items))
    .catch(error => dispatch('setError', error.message))
}

export const loadGroupsList = ({dispatch, commit, state}) => {
  if (state.db.groups === null) {
    dispatch('loadGroupsFromDB')
    .then(() => commit('LOAD_GROUPS_LIST'))
  } else {
    commit('LOAD_GROUPS_LIST')
  }
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