import db from '@/modules/db'

export const loadGoodsDb = ({commit, dispatch, state}) => {
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
  })
  .catch(error => {
    dispatch('setLoading', false)
    dispatch('setError', error.message)
  })
}

export const loadGoodsList = ({dispatch, commit, state}) => {
  if (state.db.goods === null) {
    dispatch('loadGoodsDb')
  }
}

export const setGoodsFilter = ({dispatch, commit, state}, filter) => {
  commit('SET_GOODS_FILTER', filter)
}

export const clearGoodsFilter = ({dispatch, commit, state}) => {
  commit('SET_GOODS_FILTER', '')
}

export const loadGroupsFromDB = ({dispatch, commit, state}) => {
  return db.getGroups()
    .then(items => commit('SET_DB_GROUPS', items))
    .catch(error => dispatch('setError', error.message))
}

export const loadGroupsList = ({dispatch, commit, state}) => {
  if (state.db.groups === null) {
    dispatch('loadGroupsFromDB')
  }
}

export const setGroupsFilter = ({dispatch, commit, state}, filter) => {
  commit('SET_GROUPS_FILTER', filter)
}

export const clearGroupsFilter = ({dispatch, commit, state}) => {
  commit('SET_GROUPS_FILTER', '')
}

export const addSelectedGroup = ({dispatch, commit, state}, group) => {
  commit('ADD_SELECTED_GROUP', group)
}

export const removeSelectedGroup = ({dispatch, commit, state}, group) => {
  commit('REMOVE_SELECTED_GROUP', group)
}

export const goodsListChangePage = ({ commit }, page) => {
  commit('SET_GOODS_LIST_PAGE', page)
}

export const goodsListChangePerPage = ({ commit }, perPage) => {
  commit('SET_GOODS_LIST_PER_PAGE', perPage)
}
