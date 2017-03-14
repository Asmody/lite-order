import _ from 'lodash'

import db, { fireApp } from '@/db'

export default {
  signIn ({email, pass}) {
    return firebase.auth().signInWithEmailAndPassword(email, pass).then(user => user.getTocken())
  },
  signOut () {
    return fireapp.auth().signOut()
  }
 }
