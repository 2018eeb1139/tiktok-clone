// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDplwD4Z9UhuvaDCOZp96PRJXKB21po7lA",
  authDomain: "tiktok-clone-12249.firebaseapp.com",
  projectId: "tiktok-clone-12249",
  storageBucket: "tiktok-clone-12249.appspot.com",
  messagingSenderId: "105393452698",
  appId: "1:105393452698:web:3857f1f357db21c6365123",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
