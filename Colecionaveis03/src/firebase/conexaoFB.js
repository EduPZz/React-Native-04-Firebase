import firebase from 'firebase';
import 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyDCHOVyjvaxQVoN0WhZ6H1FrvuyDMzaIsU",
    authDomain: "colecionaveisfb-7afba.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-7afba.firebaseio.com",
    projectId: "colecionaveisfb-7afba",
    storageBucket: "colecionaveisfb-7afba.appspot.com",
    messagingSenderId: "173862201221",
    appId: "1:173862201221:web:306f347eb812b7c512c6ec",
    measurementId: "G-6YJ30K71NT"
  };

  var app = firebase.initializeApp(firebaseConfig); 

  export const conexaoFS = app.firestore();