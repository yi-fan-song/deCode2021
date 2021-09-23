import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKS-7ecWupP7XqeSDvrC7Vn6lM-BtPMmg",
  authDomain: "decode2021-6ea10.firebaseapp.com",
  projectId: "decode2021-6ea10",
  storageBucket: "decode2021-6ea10.appspot.com",
  messagingSenderId: "43286852568",
  appId: "1:43286852568:web:10e944cba926e1adf6f8ad",
  measurementId: "G-ZN2DZF59KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
