import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAjeTrxm1hZ7WA0LklACZYeomVeVGzb_kM",
    authDomain: "gympula.firebaseapp.com",
    projectId: "gympula",
    storageBucket: "gympula.appspot.com",
    messagingSenderId: "1006597332416",
    appId: "1:1006597332416:web:342f051fa8f50ea8f57c25"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };
