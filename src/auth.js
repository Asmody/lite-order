import Vue from 'vue'
import router from '@/router'
import store from '@/store'

import dbAuth from '@/modules/auth'


export default {
  install (Vue, options) {
    if (store.state.auth.token) {
      loginWithToken(store.state.auth.token)
    }
    Vue.prototype.$auth = Vue.auth = this
  },
  login ({email, pass, redirect}) {
    dbAuth.signIn({email, pass}).then(token => {
      store.commit('SIGN_IN', {email, pass, token})
      router.push(redirect)
    })
    .catch(err => {
      store.dispatch('setError', err.message)
    })
  },
  loginWithToken (token) {
    dbAuth.signInWithToken(token).then(user => {
      let email = user.email
      let pass = ''
      let token = user.getToken()
      store.commit('SIGN_IN', {email, pass, token})
    })
    .catch(err => {
      store.dispatch('setError', err.message)
    })
  },
  logout () {
    dbAuth.signOut().then(r => {
      store.commit('SIGN_OUT')
      router.push({ path: '/login', query: { redirect: '/catalog'} })
    })
  }
}