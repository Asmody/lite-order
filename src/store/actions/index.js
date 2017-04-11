

export * from './errors.js'
export * from './goods.js'
export * from './order.js'
export * from './user.js'
export * from './ordersList.js'

export const setLoading = ({commit}, loading) => {
  return new Promise((resolve, reject) => {
    commit('SET_LOADING', loading)
    resolve()
  })
}
