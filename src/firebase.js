import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCx4kU74-avplj4HFnpedvNe-MIufNjigA",
  authDomain: "react-todo2-ebb45.firebaseapp.com",
  databaseURL: "https://react-todo2-ebb45.firebaseio.com",
  projectId: "react-todo2-ebb45",
  storageBucket: "react-todo2-ebb45.appspot.com",
  messagingSenderId: "637358120848",
  appId: "1:637358120848:web:3d6d73dc37ea37f3189d15",
});

const db = firebaseApp.firestore(); //store it in a variable called db

export default db;
