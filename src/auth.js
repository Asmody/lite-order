import Vue from 'vue'
import router from '@/router'
import store from '@/store'

import dbAuth from '@/modules/auth'


export default {
  install (Vue, options) {

    if (store.state.user.email && store.state.user.pass) {
      this.login({
        email:store.state.user.email,
        pass: store.state.user.pass,
        redirect: '/'
      })
    }

    Vue.prototype.$auth = Vue.auth = this
  },
  login ({email, pass, redirect}) {
    return store.dispatch('setLoading', true)
    .then(() => {
      return dbAuth.signIn({email, pass})
    })
    .then(dbUser => {
      let user = {
        id: dbUser.uid,
        email,
        pass
      }
      return store.dispatch('signIn', user)
    })
    .then(() => {
      return store.dispatch('setLoading', false)
    })
    .then(() => {
      return router.push(redirect)
    })
    .catch(err => {
      store.dispatch('setError', err.message)
    })
  },
/*
  loginWithToken (token) {
    return dbAuth.signInWithToken(token).then(dbUser => {
      let user = {
        id: dbUser.uid,
        email: dbUser.email
      }
      dbUser.getToken()
      .then(token => {
        user.token = token
        store.dispatch('signIn', user)
      })
    })
    .catch(err => {
      store.dispatch('setError', err.message)
    })
  },
*/
  logout () {
    return dbAuth.signOut().then(r => {
      return store.dispatch('signOut')
    })
  }
}