/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebaseConfig";

const useCheckAuth = () => {
  const [ isAuthenticated, setAuth] = useState(false);
  const [ userData, setData ] = useState({
    photoURL: ''
  });
  useEffect(()=>{
    onAuthStateChanged(auth, (res:any)=>{
        if(res){
            setData(res);
            setAuth(true);
        } else {
            setAuth(false);
        }
    })
  },[])
  return {isAuthenticated, userData};
}

export default useCheckAuth