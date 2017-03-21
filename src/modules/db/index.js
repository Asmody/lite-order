import db from '@/db'

const getCollection = (collection, orderBy, makeItem) => {
  return new Promise ( (resolve, reject) => {
    let items=[]
    const goodsRef = db.ref(collection)
    let method = orderBy == '.key' ? 'orderByKey' : 'orderByChild'
    let methParams = orderBy == '.key' ? [] : [orderBy]
    const query = goodsRef[method].apply(goodsRef, methParams)
    query.once('value', 
    (snapshot) => {
      let snapVal = snapshot.val()
      resolve(_.map(snapVal, makeItem))
    },
    (error) => {
      console.error('DBError:' + error)
      reject(error)
    })
  })
}

export default {
  getGoods ({orderBy}) {
    return getCollection('goods', orderBy, (item, key) => {
      return {
        '.key': key,
        ...item
      }
    })
  },
  getPrices () {
    return getCollection('prices', '.key', (item, key) => {
      return {
        '.key': key,
        'price': item
      }
    })
  }
}
