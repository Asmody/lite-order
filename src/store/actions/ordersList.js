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

export const deleteOrder = ({dispatch, commit, state}, order) => {
  if (order && order.id) {
    return db.deleteOrder(order.id)
  }
}

export const filterOrdersByDate = ({dispatch, commit, state}, date) => {
  commit('SET_ORDERS_FILTER', { date })
}
