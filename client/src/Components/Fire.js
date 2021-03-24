import firebase from "firebase";

const {REACT_APP_APIKEY,
REACT_APP_AUTHDOMAIN, 
REACT_APP_PROJECTID, 
REACT_APP_STORAGEBUC , 
REACT_APP_MESSAGESENDID, 
REACT_APP_APPID} 
= process.env;

 const firebaseConfig = {
    apiKey: REACT_APP_APIKEY,
    authDomain: REACT_APP_AUTHDOMAIN,
    projectId: REACT_APP_PROJECTID,
    storageBucket: REACT_APP_STORAGEBUC,
    messagingSenderId: REACT_APP_MESSAGESENDID,
    appId: REACT_APP_APPID
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
