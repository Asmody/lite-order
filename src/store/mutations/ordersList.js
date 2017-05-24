import Vue from 'vue'

export const SET_DB_ORDERS_LIST = (state, data) => {
  Vue.set(state.db, 'orders', data)
}

export const SET_ORDERS_FILTER = (state, filter) => {
  _.merge(state.orders.filter, filter)
}