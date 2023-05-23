// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDkMlIVySEU2Jd8Z__RwamhngUg47GwuwU",
  authDomain: "doctors-portal-5c4fe.firebaseapp.com",
  projectId: "doctors-portal-5c4fe",
  storageBucket: "doctors-portal-5c4fe.appspot.com",
  messagingSenderId: "668594488804",
  appId: "1:668594488804:web:737be65873410f744473f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;