import Vue from 'vue'

export const SET_ERROR = (state, error) => {
  state.error = error
}
export const CLEAR_ERROR = (state) => {
  state.error = ''
}

export const LOAD_DB = (state, {goods, prices, groups}) => {
  Vue.set(state.db, 'goods', goods)
  Vue.set(state.db, 'prices', prices)
  Vue.set(state.db, 'goodsGroups', groups)

  // Goods nav
  const perPage = state.goods.options.perPage
  const goodsCount = goods.length
  state.goods.nav.pages = (goodsCount % perPage == 0 ? goodsCount/perPage : Math.floor(goodsCount/perPage)+1)
  if (state.goods.nav.pages > 0) {
    state.goods.nav.currentPage = 1
  }
}
export const LOAD_GOODS_LIST = (state, items) => {
  Vue.set(state.goods, 'list', items)
}

export const LOAD_GROUPS_LIST = (state, items) => {
  Vue.set(state.groups, 'list', items)
}

export const SET_ORDER_LIST_LAST_PAGE = (state) => {
  if (state.goods.nav.currentPage < state.goods.nav.pages) {
    state.goods.nav.currentPage = state.goods.nav.pages
  }
}
export const SET_ORDER_LIST_NEXT_PAGE = (state) => {
  if (state.goods.nav.currentPage < state.goods.nav.pages) {
    state.goods.nav.currentPage++
  }
}
export const SET_ORDER_LIST_PREV_PAGE = (state) => {
  if (state.goods.nav.currentPage > 1) {
    state.goods.nav.currentPage--
  }
}
export const SET_ORDER_LIST_FIRST_PAGE = (state) => {
  state.goods.nav.currentPage = 1
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

export const SET_LOADING = (state, loading) => {
  state.loading = loading
}
