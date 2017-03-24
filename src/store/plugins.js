import { STORAGE_KEY } from './state'

const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type == 'SIGN_IN' || mutation.type == 'SIGN_OUT') {
      const syncedData = {
        auth: {
          token: state.auth.token
        },
        user: {
          email: state.user.email,
          pass: state.user.pass
        }
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedData))
    }
  })
}

export default [localStoragePlugin]