import Firebase from 'firebase'

const fireApp = Firebase.initializeApp({
  apiKey: "AIzaSyCkxjmh463PvobXORIvhq6rW4BLm1liVow",
  authDomain: "telco-lk.firebaseapp.com",
  databaseURL: "https://telco-lk.firebaseio.com",
  storageBucket: "telco-lk.appspot.com",
  messagingSenderId: "2695510077"
})
const db = fireApp.database()

export default db
