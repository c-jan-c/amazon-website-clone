import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCf3NeoDw9FY1ZODFPMEQBAJwJ71-OdexY",
  authDomain: "website-clone-91c00.firebaseapp.com",
  projectId: "website-clone-91c00",
  storageBucket: "website-clone-91c00.appspot.com",
  messagingSenderId: "168426744478",
  appId: "1:168426744478:web:0509612bf1a046a5a8e98f",
  measurementId: "G-PCSBY1VDL9"
};

const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = app.firestore();
const auth = firebase.auth();

export {db, auth};