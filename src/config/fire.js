import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBcYOimnyxXi9oQ458BRxL9N4eNC51IAhI",
    authDomain: "myportfolio-13cc0.firebaseapp.com",
    databaseURL: "https://myportfolio-13cc0.firebaseio.com",
    projectId: "myportfolio-13cc0",
    storageBucket: "myportfolio-13cc0.appspot.com",
    messagingSenderId: "559798092869",
    appId: "1:559798092869:web:e7dcd4a44c41342b03cf2c"
  };
  const fire = firebase.initializeApp(firebaseConfig);
export default fire
