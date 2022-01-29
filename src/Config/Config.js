import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE1wCCr90ES_sezi-zrNIfIb5GlddjZiM",
  authDomain: "sheemo-d75af.firebaseapp.com",
  projectId: "sheemo-d75af",
  storageBucket: "sheemo-d75af.appspot.com",
  messagingSenderId: "531782521652",
  appId: "1:531782521652:web:18f9edc3ea79cdab3a0b61"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage }
