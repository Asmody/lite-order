import db from '@/db'
import * as fb from './fb'

export default {
  getOrderNumber (todo) {
    db.ref('options/orderNumber').off()
    return db.ref('options/orderNumber').on('value', snap => {
      const orderNumber = _.defaultTo(1 * snap.val(), 1)
      return todo(orderNumber)
    })
  },
  incOrderNumber () {
    return db.ref('options/orderNumber').once('value')
    .then(snap => {
      const newNumber = 1 + snap.val()
      db.ref('options/orderNumber').set(newNumber)
    })
  },
  newOrder (order) {
    return fb.insertInto('orders', order)
    .then(snap => {
      return this.incOrderNumber()
    })
  },
  getOrders ({user, success}) {
    return new Promise((resolve, reject) => {
      fb.getCollectionOn('orders', 'date', 
        snapshot => {
          let items = []
          snapshot.forEach(snap => {
            items.push({
              id: snap.key,
              ...snap.val()
            })
          })
          success(items)
          resolve()
        },
        reject
      )
    })
  },
  deleteOrder (orderId) {
    return db.ref('orders/' + orderId).remove()
  }
}