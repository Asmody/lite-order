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
      id: '',
      email: '',
      pass: ''
    }
  }
}
initialState.db = {
  goods: null,
  prices: null,
  groups: null,
  orders: null,
  customers: null
}
initialState.goods = {
  list: [],
  nav: {
    pages: 0,
    currentPage: 1
  },
  options: {
    perPage: 20,
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
  comment: '',
  customerRef: null,
  number: 0,
  state: 0
}
initialState.error = ''
initialState.loading = false

export const state = initialState
