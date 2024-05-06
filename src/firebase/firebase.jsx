// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBD1J_gz6Bi2Q-D57MS7sSVuawxwXTrAg",
  authDomain: "my-school-ffeb1.firebaseapp.com",
  projectId: "my-school-ffeb1",
  storageBucket: "my-school-ffeb1.appspot.com",
  messagingSenderId: "710938076815",
  appId: "1:710938076815:web:221e311770f7cc78e4b2fa",
  measurementId: "G-ERTVW8YZJR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFireStore(app)

