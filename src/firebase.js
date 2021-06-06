import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCqgpWUHBWpWz5vtUSx_Wpupu15xVTbyhQ",
  authDomain: "friendchat-93d2c.firebaseapp.com",
  projectId: "friendchat-93d2c",
  storageBucket: "friendchat-93d2c.appspot.com",
  messagingSenderId: "31138795832",
  appId: "1:31138795832:web:f24b402d01934ed63371cd"
}).auth();