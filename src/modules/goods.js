import db from '@/db'


 const goodsApi = {
  getGoodsList ({orderBy, startAt, perPage}) {
    return new Promise ( (resolve, reject) => {
      let items=[]
      const goodsRef = db.ref('goods')
      let method = orderBy == '.key' ? 'orderByKey' : 'orderByChild'
      let methParams = orderBy == '.key' ? [] : [orderBy]
      //console.log(method)
      let pr=[]
      const query = goodsRef[method].apply(goodsRef, methParams).limitToFirst(perPage).startAt(startAt)
      query.once('value')
        .then(snapshot => {
          snapshot.forEach( snap => {
            pr.push(goodsApi.getPrice(snap.key))
          })
          Promise.all(pr)
          .then(vals => {
            let idx=0
            snapshot.forEach( snap => {
              items.push( {
                '.key': snap.key,
                'price': vals[idx++],
                'qty': 0,
                ...snap.val()
              })
            })
            resolve(items)
          })
          .catch(err => {
            console.log(err)
            reject(err.message)
          })
        })
        .catch(err => {
          console.log(err)
          reject(err.message)
        })
    })
  },
  getPrice (itemKey) {
      return db.ref('prices').child(itemKey).once('value').then(snapshot => snapshot.val())
  }
}
export default goodsApi
