import db from '@/db'

export const makeQuery = (collection, orderBy) => {
  const dbRef = db.ref(collection)
  orderBy = orderBy || '.key'
  let query = null
  if (orderBy == '.key') {
    query = dbRef.orderByKey()
  } else if (orderBy == '.value') {
    query = dbRef.orderByValue()
  } else {
    query = dbRef.orderByChild(orderBy)
  }
  return query
}

export const getCollection = (collection, orderBy) => {
  return makeQuery(collection, orderBy).once('value')
}

export const getCollectionOn = (collection, orderBy, success, reject) => {
  const query = makeQuery(collection, orderBy)
  query.off()
  return query.on('value', success, reject)
}

export const insertInto = (collection, item) => {
  return db.ref(collection).push().set(item)
}