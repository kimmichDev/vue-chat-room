// firebase setup
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const fbConfig = {
    apiKey: "AIzaSyB2A4cdKCjgciIWlCtXEgWkLsy-bst2Dm8",
    authDomain: "chat-room-9112f.firebaseapp.com",
    projectId: "chat-room-9112f",
    storageBucket: "chat-room-9112f.appspot.com",
    messagingSenderId: "527572640600",
    appId: "1:527572640600:web:e26cd4d7a9b5fb075ffb2d",
};
let app = initializeApp(fbConfig);
let db = getFirestore(app);
export { db };
