import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8VdXGTpXVk6OAFDZYg7ABweTQsiI65oI",
  authDomain: "whatsapp-5c811.firebaseapp.com",
  projectId: "whatsapp-5c811",
  storageBucket: "whatsapp-5c811.appspot.com",
  messagingSenderId: "642211407096",
  appId: "1:642211407096:web:db84ea3bec36946143c70d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
