import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB2A4cdKCjgciIWlCtXEgWkLsy-bst2Dm8",
    authDomain: "chat-room-9112f.firebaseapp.com",
    projectId: "chat-room-9112f",
    storageBucket: "chat-room-9112f.appspot.com",
    messagingSenderId: "527572640600",
    appId: "1:527572640600:web:e26cd4d7a9b5fb075ffb2d"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };