import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTJzSTCOB645Hzqf5QHEe3rQVJq9O9Qgw",
    authDomain: "react-utn2022.firebaseapp.com",
    projectId: "react-utn2022",
    storageBucket: "react-utn2022.appspot.com",
    messagingSenderId: "66910208817",
    appId: "1:66910208817:web:7c88d6a56a80489ae0e610",
    measurementId: "G-4F6EBRVEXX"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase