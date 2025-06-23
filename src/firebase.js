// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlGUZVa1fUW7BkvUTC7lFaY5-tlnv0cnw",
  authDomain: "real-state-app-d8361.firebaseapp.com",
  projectId: "real-state-app-d8361",
  storageBucket: "real-state-app-d8361.firebasestorage.app",
  messagingSenderId: "744623444916",
  appId: "1:744623444916:web:dfcbcc58ee78823f9bd8e1",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
