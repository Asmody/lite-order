import db from '@/db'

const getCollection = (collection, orderBy) => {
  return new Promise ( (resolve, reject) => {
    let items=[]
    const goodsRef = db.ref(collection)
    let method = orderBy == '.key' ? 'orderByKey' : 'orderByChild'
    let methParams = orderBy == '.key' ? [] : [orderBy]
    const query = goodsRef[method].apply(goodsRef, methParams)
    query.off()
    query.on('value', 
    (snapshot) => {
      snapshot.forEach( snap => {
        items.push( {
          '.key': snap.key,
          ...snap.val()
        })
      })
      resolve(items)
    },
    (error) => {
      console.error(error)
      reject(error)
    })
  })
}

export default {
  getGoods ({orderBy}) {
    return getCollection('goods', orderBy)
  },
  getPrices () {
    return getCollection('prices', '.key')
  }
}
