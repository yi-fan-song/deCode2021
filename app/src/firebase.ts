import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBKS-7ecWupP7XqeSDvrC7Vn6lM-BtPMmg",
  authDomain: "decode2021-6ea10.firebaseapp.com",
  projectId: "decode2021-6ea10",
  storageBucket: "decode2021-6ea10.appspot.com",
  messagingSenderId: "43286852568",
  appId: "1:43286852568:web:10e944cba926e1adf6f8ad",
  measurementId: "G-ZN2DZF59KQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export { app, analytics };
