import db from '@/modules/db'

export const loadUserCustomers = ({dispatch, commit, state}) => {
  return new Promise((resolve, reject) => {
    resolve(commit('LOAD_USER_CUSTOMERS'))
  })
}

export const signIn = ({dispatch, commit, state}, user) => {
  return db.getUser(user.id)
  .then(dbUser => {
    return commit('SIGN_IN', {
      ...user,
      ...dbUser
    })
  })
  .then(() => {
    return db.getCustomers(state.user)
    .then(customers => {
      commit('LOAD_USER_CUSTOMERS', customers)
    })
  })
  .catch(error => {
    dispatch('setError', error.message)
  })
}
export const signOut = ({commit}) => {
  return new Promise((resolve, reject) => {
    resolve(commit('SIGN_OUT'))
  })
}