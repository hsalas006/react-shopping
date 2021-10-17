import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { doc, getFirestore, collection, getDocs, getDoc, addDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBX0Z5GSm9iew9mgOyAwUWef5KB5zFSDgM",
  authDomain: "crwn-db-70ced.firebaseapp.com",
  projectId: "crwn-db-70ced",
  storageBucket: "crwn-db-70ced.appspot.com",
  messagingSenderId: "588349173010",
  appId: "1:588349173010:web:7ed3a04883d54dfe0817cb",
  measurementId: "G-THX8TH1KM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const db = getFirestore();

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if(!userAuth) return;

  const docRef = doc(db, "users", userAuth.uid)
  const snapShot = await getDoc(docRef)

  if(!snapShot.exists()){
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createAt,
        ...aditionalData
      }) 
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }

  return snapShot;

}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential;

    console.log("token: ", token)
    const user = result;
    console.log(user)

  }).catch((error) => {
    // Handle Errors here.
    console.log("error: ", error)
  });

export default app;

