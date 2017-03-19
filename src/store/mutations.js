export const SET_ERROR = (state, error) => {
  state.error = error
}
export const CLEAR_ERROR = (state) => {
  state.error = ''
}

export const LOAD_GOODS_LIST = (state, items) => {
  state.goods.list = items
  if (items.length > 0) {
    state.goods.options.lastKey = items.slice(-1)[0][state.goodsOptions.orderBy]
  } else {
    state.goods.options.lastKey = ''
  }
}
export const SET_ORDER_LIST_LAST_PAGE = (state) => {
  if (!state.goodsOptions.lastPage) {
    state.goodsOptions.currentPage++
  }
}
export const SET_ORDER_LIST_NEXT_PAGE = (state) => {
  if (!state.goodsOptions.lastPage) {
    state.goodsOptions.currentPage++
  }
}
export const SET_ORDER_LIST_PREV_PAGE = (state) => {
  if (state.goodsOptions.currentPage > 1) {
    state.goodsOptions.lastPage = false
    state.goodsOptions.currentPage--
  }
}
export const SET_ORDER_LIST_FIRST_PAGE = (state) => {
  state.goodsOptions.lastPage = false
  state.goodsOptions.currentPage = 1
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
export const SIGN_IN = (state) => {

}
export const SIGN_OUT = (state) => {
  Vue.set(state, 'auth', { user: '', sess: null})
}
