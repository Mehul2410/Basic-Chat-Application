import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCItfB2rNhxbXzj9vagWHCZbymmcNY5LmA",
        authDomain: "facebook-messanger-clone-39dd4.firebaseapp.com",
        databaseURL: "https://facebook-messanger-clone-39dd4.firebaseio.com",
        projectId: "facebook-messanger-clone-39dd4",
        storageBucket: "facebook-messanger-clone-39dd4.appspot.com",
        messagingSenderId: "269455842575",
        appId: "1:269455842575:web:d7f5080e2394f3dbde727a",
        measurementId: "G-HETMS9ZM7Z"

});


const db = firebaseApp.firestore();

export default db;