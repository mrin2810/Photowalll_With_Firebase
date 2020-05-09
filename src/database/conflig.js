import * as  firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyBiFYzLz65ShggaHKIG5DeAW5_jw6ED8z8",
  authDomain: "photowall-b2451.firebaseapp.com",
  databaseURL: "https://photowall-b2451.firebaseio.com",
  projectId: "photowall-b2451",
  storageBucket: "photowall-b2451.appspot.com",
  messagingSenderId: "173441676084",
  appId: "1:173441676084:web:4b0827640ab5798e92eb61",
  measurementId: "G-T2E9E5Y3GF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export {database}