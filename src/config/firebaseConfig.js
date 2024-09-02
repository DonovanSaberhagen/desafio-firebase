// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC07o-ZCu8TK04VpbYSup-Nj4N4KgCnmFU",
  authDomain: "miprimerproyecto-a24c4.firebaseapp.com",
  projectId: "miprimerproyecto-a24c4",
  storageBucket: "miprimerproyecto-a24c4.appspot.com",
  messagingSenderId: "771230367863",
  appId: "1:771230367863:web:d910c2308819a638558672",
  measurementId: "G-KZTHW1GRGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;