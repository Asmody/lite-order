export const STORAGE_KEY = 'lite-order'

let initialState = {}

if (localStorage.getItem(STORAGE_KEY)) {
  initialState = JSON.parse(localStorage.getItem(STORAGE_KEY))
}

initialState = _.extend(initialState, {
  auth: {
    isLoggedIn: true,
    session: null
  },
  user: {
    email: '',
    password: ''
  },
  goods: {
    list: [],
    options: {
      perPage: 10,
      currentPage: 1,
      lastKey: '',
      lastPage: false,
//      orderBy: '.key'
      orderBy: 'code'
    }
  },
  orders: {
    list: []
  },
  order: {},
  error: ''
})


export const state = initialState