import db from '@/modules/db'

export const loadOrdersFromDB = ({dispatch, commit, state}, afterLoad) => {
  return new Promise((resolve, reject) => {
    db.getOrders(state.user,
      items => {
        commit('SET_DB_ORDERS_LIST', items)
        afterLoad()
        resolve()
      },
      error => reject(error)
    )
  })
}

export const loadOrdersList = ({dispatch, commit, state}) => {
  if (state.db.orders === null) {
    return dispatch('loadOrdersFromDB', afterLoadFromDB)
  } else {
    return new Promise((resolve, reject) => {
      afterLoadFromDB()
      resolve()
    })
  }
}

const afterLoadFromDB = () => {
  commit('LOAD_ORDERS_LIST', state.db.orders)
}