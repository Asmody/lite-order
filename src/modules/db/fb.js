import db from '@/db'

export const getCollection = (collection, orderBy) => {
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

export const insertInto = (collection, item) => {
  return db.ref(collection).push().set(item)
}