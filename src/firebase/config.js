import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpxgDiuqJ2d1Jl75DCW_0kqC6C3sQ3Uss",
  authDomain: "weam-a7b1a.firebaseapp.com",
  projectId: "weam-a7b1a",
  storageBucket: "weam-a7b1a.appspot.com",
  messagingSenderId: "143662027682",
  appId: "1:143662027682:web:d88da51520ccdc709d98fb"
};

// INIT FIREBASE
initializeApp(firebaseConfig)

// INIT FIRESTORE
const firestore = getFirestore()

// INIT FIREBASE AUTH
const auth = getAuth()

export { firestore, auth }