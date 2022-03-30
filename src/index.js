import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZ2VHV7mtCjNEnMffj0G1kBjAZH-H1qDw",
    authDomain: "my-blog-board.firebaseapp.com",
    projectId: "my-blog-board",
    storageBucket: "my-blog-board.appspot.com",
    messagingSenderId: "243472127967",
    appId: "1:243472127967:web:5b163459281e28927b966a",
    measurementId: "G-Z0MYGZWFRH"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
