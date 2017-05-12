export const error = state => state.error
export const loading = state => state.loading

export const auth = state => state.auth
export const isLoggedIn = state => !!state.user.id

export const user = state => state.user

export const goods = state => state.goods.list
export const goodsNav = state => state.goods.nav
export const goodsOptions = state => state.goods.options
export const goodsPerPage = state => state.goods.options.perPage

export const groups = state => state.groups.list
export const groupsSelected = state => state.groups.selected

export const order = state => state.order
export const orderItems = state => state.order.items
export const orderTotal = state => state.order.total
export const orderSize = state => _.size(state.order.items)

export const orders = state => state.orders.list
export const ordersFilter = state => state.orders.filter

export const customers = state => state.db.customers
export const userCustomers = state => state.user.customers
