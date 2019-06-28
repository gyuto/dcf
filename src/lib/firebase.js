import firebase from "firebase"
const keys = process.env
const config = {
  apiKey: keys.FIREBASE_API_KEY,
  authDomain: keys.FIREBASE_AUTH_DOMAIN,
  databaseURL: keys.FIREBASE_DATABASE_URL,
  projectId: keys.FIREBASE_PROJECT_ID,
  storageBucket: keys.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: keys.FIREBASE_MESSAGING_SENDER_ID,
  appId: keys.FIREBASE_APP_ID,
}

const init = async () => {
  firebase.initializeApp(config)

  var db = firebase.firestore()

  db.collection("students")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const uuu = doc.data()

        console.log(3030, uuu)
      })
    })
}

export default init
