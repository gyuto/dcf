import firebase from "firebase"

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
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
