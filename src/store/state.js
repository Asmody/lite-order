export const STORAGE_KEY = 'lite-order'

let initialState = {}

if (localStorage.getItem(STORAGE_KEY)) {
  initialState = JSON.parse(localStorage.getItem(STORAGE_KEY))
} else {
  initialState = {
    auth: {
      isLoggedIn: false,
      session: null
    },
    user: {
      email: '',
      password: ''
    }
  }
}
initialState.db = {
  goods: [],
  prices: {},
  goodsGroups: {}
}
initialState.goods = {
  list: [],
  nav: {
    pages: 0,
    currentPage: 1
  },
  options: {
    perPage: 13,
    lastKey: '',
    lastPage: false,
//      orderBy: '.key'
    orderBy: 'code'
  }
}
initialState.groups = {
  list: []
}
initialState.orders = {
  list: []
}
initialState.order = {}
initialState.error = ''
initialState.loading = true

export const state = initialState