import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAm3Y7TQrRYQEH1RxkHiYnNQUUvqylrkYg",
    authDomain: "hiring-f8e2a.firebaseapp.com",
    projectId: "hiring-f8e2a",
    storageBucket: "hiring-f8e2a.appspot.com",
    messagingSenderId: "877584125135",
    appId: "1:877584125135:web:1d911efe605ccf6ed0bbba",
    measurementId: "G-DKH03K73ME"
  };

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;