import Vue from 'vue'

export * from './errors.js'
export * from './goods.js'
export * from './order.js'
export * from './ordersList.js'
export * from './user.js'


export const SET_LOADING = (state, loading) => {
  state.loading = loading
}
