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
  prises: []
}
initialState.goods = {
  list: [],
  nav: {
    pages: 0,
    currentPage: 0
  },
  options: {
    perPage: 10,
    lastKey: '',
    lastPage: false,
//      orderBy: '.key'
    orderBy: 'code'
  }
}

initialState.orders = {
  list: []
}
initialState.order = {}
initialState.error = ''

console.log(initialState)

export const state = initialState