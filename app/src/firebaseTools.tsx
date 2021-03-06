import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore";

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

// Authentication
export const auth = getAuth();
auth.useDeviceLanguage();

const provider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore();

export const analytics = getAnalytics(app);

// Login
export const signIn = async (email: string, password: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (err) {
    console.error(err);
  }
};

// Register
export const registerEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  // try {
  //   const res = await createUserWithEmailAndPassword(auth, email, password);
  //   const user = res.user;
  //   const query = await where(collection(db, "users"), "email", email);
  //   await db.collection("users").where("uid", "==", user.uid).get();
  //   if (query.docs.length > 0) {
  //     return Error("Please sign in instead");
  //   }
  //   await addDoc(collection(db, "users"), {
  //     name,
  //     authProvider: "local",
  //     email,
  //   });
  //   return user;
  // } catch (error) {
  //   console.error(error);
  //   return error;
  // }
};

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const token = credential?.accessToken;
    const user = res.user;
    
    const q = query(collection(db, "users"), where("email", "==", user.email));
    const snap = await getDocs(q);

    // const query = await db
    //   .collection("users")
    //   .where("uid", "==", user.uid)
    //   .get();

    // if (query.docs.length > 0) {
    //   return Error("Please sign in instead");
    // }

    // await addDoc(collection(db, "users").document, {
    //   phoneNumber: user.phoneNumber,
    //   authProvider: "Google",
    //   email: user.email,
    //   latestToken: token ?? "",
    //   name: user.displayName,
    // });

    return [user, token];
  } catch (error) {
    return null;
  }
};

export const stateChanged = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      return uid;
    } else {
      return null;
    }
  });
};

export const logout = async () => {
  try {
    await signOut(auth);
    return null;
  } catch (e) {
    return e;
  }
};
