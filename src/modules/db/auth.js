import _ from 'lodash'

import db, { fireApp } from '@/db'

export default {
  signIn ({email, pass}) {
    return fireApp.auth().signInWithEmailAndPassword(email, pass)
  },
  signInWithToken (token) {
    return fireApp.auth().signInWithCustomToken(token)
  },
  signOut () {
    return fireApp.auth().signOut()
  }
 }
