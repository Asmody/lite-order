import { STORAGE_KEY } from './state'

const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type == 'SIGN_IN' || mutation.type == 'SIGN_OUT') {
      const syncedData = {
        auth: state.auth,
        user: state.user
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedData))
    }
  })
}

export default [localStoragePlugin]