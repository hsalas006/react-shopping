import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";


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

