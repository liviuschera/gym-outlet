import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: "gym-outlet-db.firebaseapp.com",

  projectId: "gym-outlet-db",

  storageBucket: "gym-outlet-db.appspot.com",

  messagingSenderId: "559724489681",

  appId: "1:559724489681:web:e31a33e4392dd09b6c8ef0",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(
    "🚀 ~ file: firebase.utils.js ~ line 28 ~ createUserDocumentFromAuth ~ userDocRef",
    userDocRef
  );

  const userSnapshot = await getDoc(userDocRef);

  console.log(
    "🚀 ~ file: firebase.utils.js ~ line 30 ~ createUserDocumentFromAuth ~ userSnapshot",
    userSnapshot
  );

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
