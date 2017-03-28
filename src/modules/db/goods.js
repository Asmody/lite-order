import * as fb from './fb'

export default {
  getGoods ({orderBy}) {
    return fb.getCollection('goods', orderBy)
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
    return fb.getCollection('prices')
    .then(snap => {
      let items = {}
      snap.forEach(item => {
        items[item.key] = Math.round(item.val() * 100) / 100
      })
      return items
    })
  },
  getGroups () {
    return fb.getCollection('goods-groups', '.value')
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
  }
}