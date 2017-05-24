export const error = state => state.error
export const loading = state => state.loading

export const auth = state => state.auth
export const isLoggedIn = state => !!state.user.id

export const user = state => state.user

export const goodsList = state => {
  let perPage = state.goods.options.perPage
  let currentPage = state.goods.nav.currentPage
  let _goods = _.slice(goods(state), (currentPage-1)*perPage, currentPage*perPage)
  return _.map(_goods, el => {
    return {
      ...el,
      price: _.get(state.db.prices, [el.id], 0),
      qty: _.get(state.order.items, [el.id, 'qty'], 0)
    }
  })
}

export const goods = state => {
  return (state.goods.filter || state.groups.selected.length) ? 
    state.db.goods.filter(el => {
      return (!state.goods.filter
          || el.description.toLowerCase().indexOf(state.goods.filter) != -1
          || el.code.toLowerCase().indexOf(state.goods.filter) != -1)
      && (!state.groups.selected.length
          || _.some(state.groups.selected, gr => gr.id == el.groupRef ))
    }) :
    _.defaultTo(state.db.goods, [])
}

export const goodsNav = state => {
  let goodsCount = goods(state).length
  let perPage = state.goods.options.perPage
  let pages = (goodsCount % perPage == 0 ? goodsCount/perPage : Math.floor(goodsCount/perPage)+1)
  let currentPage = state.goods.nav.currentPage <= pages ? state.goods.nav.currentPage : 1
  
  return {
    perPage,
    currentPage,
    pages
  }
}

export const goodsOptions = state => state.goods.options
export const goodsPerPage = state => state.goods.options.perPage
export const goodsFilter = state => state.goods.filter

export const groups = state => {
  return state.groups.filter ?
    state.db.groups.filter(el => el.name.toLowerCase().indexOf(state.groups.filter) != -1) :
    _.defaultTo(state.db.groups, [])
}
export const groupsSelected = state => state.groups.selected

export const order = state => state.order
export const orderItems = state => state.order.items
export const orderTotal = state => state.order.total
export const orderSize = state => _.size(state.order.items)

export const ordersList = state => {
  return (state.db.orders && (state.orders.filter.date || state.orders.filter.state)) ?
    state.db.orders.filter(el => {
      return state.orders.filter.date && Math.abs(new Date(el.date) - state.orders.filter.date) < 86400000
    }) :
    _.defaultTo(state.db.orders, [])
}
export const ordersFilter = state => state.orders.filter

export const customers = state => state.db.customers
export const userCustomers = state => state.user.customers
