import db from '@/modules/db'

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
    status: 1,
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