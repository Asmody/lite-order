import * as fb from './fb'

export default {
  getUser (id) {
    return fb.getCollection('users/'+id)
    .then(snap => {
      return snap.val()
    })
  }
}