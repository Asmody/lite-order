import Vue from 'vue'

export const LOAD_ORDERS_LIST = (state, items) => {
  items = items || state.db.orders
  Vue.set(state.orders, 'list', items)
}

export const SET_DB_ORDERS_LIST = (state, data) => {
  Vue.set(state.db, 'orders', data)
}


export const SET_ORDERS_FILTER = (state, filter) => {
  _.merge(state.orders.filter, filter)
  console.log(state.orders.filter)
}