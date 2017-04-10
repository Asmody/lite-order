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
  getOrders (user, todo) {
    return fb.getCollection('orders')
    .then(snap => {
      let items = []
      snap.forEach(item => {
        items.push({
          id: item.key,
          ...item.val()
        })
      })
      return todo(items)
    })
  }
}