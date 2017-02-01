import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyD0H5GU1N8Ixq6YIsvQAR1RWomZNhXPnj8",
  authDomain: "post-its-77a68.firebaseapp.com",
  databaseURL: "https://post-its-77a68.firebaseio.com",
  storageBucket: "post-its-77a68.appspot.com",
  messagingSenderId: "454763577920"
};
firebase.initializeApp(config);
const database = firebase.database();
window.fbdb = database;
database.ref('/').on('value', snap => console.log(snap.val()));
console.log("postits url key: ", btoa(window.location.href));
var targetElement = document.getElementsByTagName('body')[0].appendChild(document.createElement('div'));
ReactDOM.render(
  <App />,
  targetElement
);
