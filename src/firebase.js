import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyB6xyyIQVjys0vhtX0jPDV2cfL48AR73jY",
  authDomain: "disneyplus-clone-dvh.firebaseapp.com",
  projectId: "disneyplus-clone-dvh",
  storageBucket: "disneyplus-clone-dvh.appspot.com",
  messagingSenderId: "331662895179",
  appId: "1:331662895179:web:50afc6a493e7786de685ce",
  measurementId: "G-9WVPMRX8E1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
