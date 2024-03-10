import firebase from "firebase/compat/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAdqxq7o1QZtkgx88mSU5fZPDyGQSaari0",
  databaseURL:
    "https://icedishventure-default-rtdb.asia-southeast1.firebasedatabase.app",
  authDomain: "icedishventure.firebaseapp.com",
  projectId: "icedishventure",
  storageBucket: "icedishventure.appspot.com",
  messagingSenderId: "516417678706",
  appId: "1:516417678706:web:1864573773dfa0b09841eb",
  measurementId: "G-F6J723Y48Z",
};

firebase.initializeApp(firebaseConfig);

const db = getDatabase();
const dbRef = ref(getDatabase());
export { db, dbRef };
