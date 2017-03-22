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
  goodsGroups: [],
  orders: []
}
initialState.goods = {
  list: [],
  nav: {
    pages: 0,
    currentPage: 1
  },
  options: {
    perPage: 12,
    lastKey: '',
    lastPage: false,
//      orderBy: '.key'
    orderBy: 'code'
  },
  filter: '',
  filtered: []
}
initialState.groups = {
  list: [],
  selected: [],
  filter: ''
}
initialState.orders = {
  list: []
}
initialState.order = {
  items: {},
  comment: ''
}
initialState.error = ''
initialState.loading = false

export const state = initialState
