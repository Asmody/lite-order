import db from '@/db'

const getCollection = (collection, orderBy) => {
  orderBy = orderBy || '.key'
  return new Promise ( (resolve, reject) => {
    let items=[]
    const dbRef = db.ref(collection)
    let query = null
    if (orderBy == '.key') {
      query = dbRef.orderByKey()
    } else if (orderBy == '.value') {
      query = dbRef.orderByValue()
    } else {
      query = dbRef.orderByChild(orderBy)
    }
    query.once('value', 
    (snapshot) => {
      resolve(snapshot)
    },
    (error) => {
      console.error('DBError:' + error)
      reject(error)
    })
  })
}

const pushInto = (collection, item) => {
  return new Promise ( (resolve, reject) => {
    const dbRef = db.ref(collection)
    dbRef.push(item, response => {
      resolve(response)
    })
  })
}

export default {
  getGoods ({orderBy}) {
    return getCollection('goods', orderBy)
    .then(snap => {
      let items = []
      snap.forEach(item => {
        items.push({
          '.key': item.key,
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
          '.key': item.key,
          'name': item.val()
        })
      })
      return items
    })
  },
  newOrder(order) {

  }
}
