// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPSx0YakNLIqF25rEin-85PsAQXs7HcX0",
  authDomain: "fir-auth-9bb1d.firebaseapp.com",
  projectId: "fir-auth-9bb1d",
  storageBucket: "fir-auth-9bb1d.appspot.com",
  messagingSenderId: "874002954642",
  appId: "1:874002954642:web:ae79f33059a9c3eed3294b",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) app = firebase.initializeApp(firebaseConfig);
else app = firebase.app();

const auth = firebase.auth();
export { auth };
