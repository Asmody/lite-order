import Vue from 'vue'

export const LOAD_ORDERS_LIST = (state, items) => {
  Vue.set(state, 'orders', items)
}

export const SET_DB_ORDERS_LIST = (state, data) => {
  Vue.set(state.db, 'orders', data)
}
