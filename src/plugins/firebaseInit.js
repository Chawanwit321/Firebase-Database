// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyC017IrtJBwFH7SLpXyp-RWF3pvgXf1fYw",
    authDomain: "database101-4c34f.firebaseapp.com",
    projectId: "database101-4c34f",
    storageBucket: "database101-4c34f.appspot.com",
    messagingSenderId: "1066831759659",
    appId: "1:1066831759659:web:ba9d68671dacef2cc79d6e",
    measurementId: "G-YV1Z41QCKL"
});

const db = getFirestore(firebaseApp);
export default db;