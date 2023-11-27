import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyCD5WfSDwujaeOvIeJv0pnMbyzLfyiOpoA",
    authDomain: "sskdt-6c7fc.firebaseapp.com",
    projectId: "sskdt-6c7fc",
    storageBucket: "sskdt-6c7fc.appspot.com",
    messagingSenderId: "528164999923",
    appId: "1:528164999923:web:8a813cb77cb241666e9d86",
    measurementId: "G-5WLWN2KNQ5"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }