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

  const db = firebase.firestore()

  db.collection("students")
    .get()
    .then(students => {
      students.forEach(student => {
        const studentProfile = student.data()

        console.log(3030, studentProfile)
      })
    })
}

export default init
