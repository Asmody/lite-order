import Vue from 'vue'

export const ADD_GOOD_TO_ORDER = (state, {good, qty}) => {
  Vue.set(state.order.items,
    good.id,
    {
      good: good,
      price: good.price,
      qty: qty,
    }
  )
  Vue.set(state.order, 'total', Math.round(
    _.reduce(state.order.items, (total, item, key) => {
      return total + Math.round(item.price * 100) / 100 * item.qty
    }, 0) * 100) / 100
  )
}
export const CLEAR_ORDER = (state) => {
  Vue.set(state, 'order', {
    items: {},
    comment: '',
    total: ''
  })
  _.forEach(state.goods.list, el => {el.qty=0})
}
export const SET_ORDER_NUMBER = (state, orderNumber) => {
  state.order.number = orderNumber
}
export const SET_ORDER_CUSTOMER = (state, customer) => {
  state.order.customer = customer
}