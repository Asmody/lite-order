import Vue from 'vue'

export const SET_ERROR = (state, error) => {
  state.error = error
}
export const CLEAR_ERROR = (state) => {
  state.error = ''
}

export const LOAD_GOODS_LIST = (state, items) => {
  state.goods.list = items
  if (items.length > 0) {
    state.goods.options.lastKey = items.slice(-1)[0][state.goods.options.orderBy]
  } else {
    state.goods.options.lastKey = ''
  }
}
export const SET_ORDER_LIST_LAST_PAGE = (state) => {
  if (!state.goods.options.lastPage) {
    state.goods.options.currentPage++
  }
}
export const SET_ORDER_LIST_NEXT_PAGE = (state) => {
  if (!state.goods.options.lastPage) {
    state.goods.options.currentPage++
  }
}
export const SET_ORDER_LIST_PREV_PAGE = (state) => {
  if (state.goods.options.currentPage > 1) {
    state.goods.options.lastPage = false
    state.goods.options.currentPage--
  }
}
export const SET_ORDER_LIST_FIRST_PAGE = (state) => {
  state.goods.options.lastPage = false
  state.goods.options.currentPage = 1
}

export const ADD_GOOD_TO_ORDER = (state, {good, qty}) => {
  Vue.set(state.order,
    good['.key'],
    {
      good: good,
      price: good.price,
      qty: qty,
    }
  )
}
export const CREAR_ORDER = (state) => {
  state.order = {}
}
export const SIGN_IN = (state, {email, pass, token}) => {
  Vue.set(state, 'auth', { session: token, isLoggedIn: true })
  Vue.set(state, 'user', { email, password: pass })
}
export const SIGN_OUT = (state) => {
  Vue.set(state, 'auth', { session: '', isLoggedIn: false })
  Vue.set(state, 'user', { email: '', password: '' })
}
