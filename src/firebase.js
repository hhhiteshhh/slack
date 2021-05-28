import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAmakfbQva-2xE4czeBNNPi0hVvYeX_750",
  authDomain: "slack-29ccd.firebaseapp.com",
  projectId: "slack-29ccd",
  storageBucket: "slack-29ccd.appspot.com",
  messagingSenderId: "663718299103",
  appId: "1:663718299103:web:668ad13806dbdc7c54f06a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
