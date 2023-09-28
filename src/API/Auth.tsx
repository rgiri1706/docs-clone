import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const loginWithGoogle = () =>{
    signInWithPopup(auth, provider);
}
