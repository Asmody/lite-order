import db from '@/db'

export default {
  getGoodsList ({orderBy, startAt, perPage}) {
    return new Promise ( (resolve, reject) => {
      let items=[]
      const goodsRef = db.ref('goods')
      let method = orderBy == '.key' ? 'orderByKey' : 'orderByChild'
      let methParams = orderBy == '.key' ? [] : [orderBy]
      //console.log(method)
      const query = goodsRef[method].apply(goodsRef, methParams).limitToFirst(perPage).startAt(startAt)
      query.once('value')
        .then(snapshot => {
          snapshot.forEach( snap => {
            let r = {
              '.key': snap.key,
              ...snap.val()
            }
            items.push(r)
          })
          resolve(items)
        })
        .catch(err => {
          console.log(err)
          reject(err.message)
        })
    })
  }
}
