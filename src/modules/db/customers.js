import * as fb from './fb'

export default {
  getCustomers (user) {
    if (user.customerRef) {
      if (_.isArray(user.customerRef)) {
        return Promise.all(_.map(user.customerRef, cust => {
          return fb.getCollection('customers/' + cust)
        }))
        .then(snaps => {
          return _.reduce(snaps, (res, snap) => {
            res[snap.key] = snap.val()
          }, {})
        })
      } else if (_.isString(user.customerRef)) {
        return fb.getCollection('customers/' + user.customerRef)
        .then(snap => {
          let items = {}
          items[snap.key] = snap.val()
          return items
        })
      } else {
        return fb.getCollection('customers')
        .then(snap => {
          let items = {}
          snap.forEach(item => {
            items[item.key] = item.val()
          })
          return items
        })
      }
    } 
  }
}