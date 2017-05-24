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
   nav: {
    currentPage: 1
  },
  options: {
    perPage: 20,
    orderBy: 'code'
  },
  filter: '',
}
initialState.groups = {
  selected: [],
  filter: ''
}
initialState.orders = {
  filter: {
    date: null,
    state: null
  }
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
