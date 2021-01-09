import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
console.log('FIREBASE');
var firebaseConfig = {
    apiKey: "AIzaSyDvsH1V5NPdg7yoCUIyxQGmxqrJZm0f7QQ",
    authDomain: "empleados-focus-react.firebaseapp.com",
    projectId: "empleados-focus-react",
    storageBucket: "empleados-focus-react.appspot.com",
    messagingSenderId: "681920987064",
    appId: "1:681920987064:web:4c9d7058edf23f8a59d94d"
  };
  // Initialize Firebase
  const fb= firebase.initializeApp(firebaseConfig);
  export const db= fb.firestore();