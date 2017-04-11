import Vue from 'vue'

export const LOAD_USER_CUSTOMERS = (state, items) => {
  Vue.set(state.user, 'customers', _.map(items ? items : state.db.customers, (el, key) => {
    return {
      id: key,
      ...el
    }
  }))
}

export const SIGN_IN = (state, {token, ...user}) => {
  Vue.set(state, 'auth', { token, isLoggedIn: true })
  Vue.set(state, 'user', user)
}
export const SIGN_OUT = (state) => {
  Vue.set(state, 'auth', { token: '', isLoggedIn: false })
  Vue.set(state, 'user', { id: '', email: '', pass: '' })
}
