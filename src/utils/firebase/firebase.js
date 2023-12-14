// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHAI9SRHkPHP5y0ToW0r-SMjLfG5WgXEU",
    authDomain: "ulitmate-firebase.firebaseapp.com",
    projectId: "ulitmate-firebase",
    storageBucket: "ulitmate-firebase.appspot.com",
    messagingSenderId: "231835425695",
    appId: "1:231835425695:web:026c77981e0c47b5b03baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)