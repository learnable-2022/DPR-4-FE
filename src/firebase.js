// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmsjkssYpnp_1hIcSOcewZweQfeSulvqQ",
  authDomain: "medbloc-b6fb9.firebaseapp.com",
  projectId: "medbloc-b6fb9",
  storageBucket: "medbloc-b6fb9.appspot.com",
  messagingSenderId: "165566498423",
  appId: "1:165566498423:web:a723377dbcce2d633e6872",
};
export const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase
export const firestore = getFirestore(firebaseApp);
export const db = getFirestore(firebaseApp);
