import db from '@/modules/db'

export const loadOrdersFromDB = ({dispatch, commit, state}, afterLoad) => {
  return db.getOrders({
    user: state.user,
    success (items) {
      commit('SET_DB_ORDERS_LIST', items)
      afterLoad()
    }
  })
}

export const loadOrdersList = ({dispatch, commit, state}) => {
  if (state.db.orders === null) {
    dispatch('loadOrdersFromDB', 
      () => commit('LOAD_ORDERS_LIST')
    )
  } else {
    commit('LOAD_ORDERS_LIST')
  }
}
