import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfwvVG1MKKU020W4iulR6s-N-9ccuY6b8",
  authDomain: "chat-app-cf8dc.firebaseapp.com",
  projectId: "chat-app-cf8dc",
  storageBucket: "chat-app-cf8dc.firebasestorage.app",
  messagingSenderId: "870276143596",
  appId: "1:870276143596:web:dbb316e83aa5c6df5f08c9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Init Firestore DB
export const firestore = getFirestore(app);
