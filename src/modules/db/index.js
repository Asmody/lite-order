import db from '@/db'

const getCollection = (collection, orderBy) => {
  orderBy = orderBy || '.key'
  const dbRef = db.ref(collection)
  let query = null
  if (orderBy == '.key') {
    query = dbRef.orderByKey()
  } else if (orderBy == '.value') {
    query = dbRef.orderByValue()
  } else {
    query = dbRef.orderByChild(orderBy)
  }
  return query.once('value')
}

const insertInto = (collection, item) => {
  return db.ref(collection).push().set(item)
}

export default {
  getGoods ({orderBy}) {
    return getCollection('goods', orderBy)
    .then(snap => {
      let items = []
      snap.forEach(item => {
        items.push({
          id: item.key,
          ...item.val()
        })
      })
      return items
    })
  },
  getPrices () {
    return getCollection('prices')
    .then(snap => {
      let items = {}
      snap.forEach(item => {
        items[item.key] = Math.round(item.val() * 100) / 100
      })
      return items
    })
  },
  getGroups () {
    return getCollection('goods-groups', '.value')
    .then(snap => {
      let items = []
      snap.forEach(item => {
        items.push({
          id: item.key,
          name: item.val()
        })
      })
      return items
    })
  },
  getOrderNumber (todo) {
    db.ref('options/orderNumber').off()
    return db.ref('options/orderNumber').on('value', snap => {
      const orderNumber = _.defaultTo(1 * snap.val(), 1)
      console.log('Order num: ' + orderNumber)
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
    return insertInto('orders', order)
    .then(snap => {
      return this.incOrderNumber()
    })
  },
  getOrders () {
    return getCollection('orders')
    .then(snap => {
      let items = []
      snap.forEach(item => {
        items.push({
          id: item.key,
          ...item.val()
        })
      })
      return items
    })
  }
}
