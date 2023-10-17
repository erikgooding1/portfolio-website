// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBrG78L3oWEMSOWQmWkI9C1oxXG2mQGDMQ",

  authDomain: "portfolio-website-8c34b.firebaseapp.com",

  projectId: "portfolio-website-8c34b",

  storageBucket: "portfolio-website-8c34b.appspot.com",

  messagingSenderId: "866939956848",

  appId: "1:866939956848:web:357a67fe9c7569206e8eb5",

  measurementId: "G-S68MTEK343"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);