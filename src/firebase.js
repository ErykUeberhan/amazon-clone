import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZALmICyAESKkfZvGmEFWokj2BUujgl6A",
    authDomain: "clone-26bc6.firebaseapp.com",
    databaseURL: "https://clone-26bc6.firebaseio.com",
    projectId: "clone-26bc6",
    storageBucket: "clone-26bc6.appspot.com",
    messagingSenderId: "11169335114",
    appId: "1:11169335114:web:e44ad8dfaf74b4f714e3b3",
    measurementId: "G-GRQBJJWWXV"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };