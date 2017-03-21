export const error = state => state.error
export const loading = state => state.loading

export const auth = state => state.auth
export const isLoggedIn = state => state.auth.isLoggedIn

export const user = state => state.user

export const goods = state => state.goods.list
export const goodsNav = state => state.goods.nav
export const goodsOptions = state => state.goods.options

export const groups = state => state.groups.list

export const order = state => state.order
export const orderTotal = state => {
  return Math.round(
    _.reduce(state.order, (total, item, key) => {
      return total + Math.round(item.price * item.qty * 100) / 100
    }, 0) * 100) / 100
}

