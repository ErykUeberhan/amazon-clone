import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBmlGk-lQwmkyEQXT00q-JFlgxaY0Cy7A",
    authDomain: "clone-93d9e.firebaseapp.com",
    databaseURL: "https://clone-93d9e.firebaseio.com",
    projectId: "clone-93d9e",
    storageBucket: "clone-93d9e.appspot.com",
    messagingSenderId: "674420043716",
    appId: "1:674420043716:web:e6bbcd3518bbcf650c3e91",
    measurementId: "G-BPG7QG38QS"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };