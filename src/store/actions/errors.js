export const setError = ({commit}, error) => {
  commit('SET_ERROR', error)
  setTimeout(() => {commit('CLEAR_ERROR')}, 5000)
}
export const clearError = ({commit}) => {
  commit('CLEAR_ERROR')
}