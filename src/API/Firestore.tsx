/* eslint-disable @typescript-eslint/no-explicit-any */
import { firestore, auth } from "../firebaseConfig";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";

const docs = collection(firestore, "docs");

export const createDoc = (payload: any) =>{
    addDoc(docs, {...payload, userName: auth.currentUser?.displayName});
}

export const getDocuments = (setDocs: any) => {
    getDocs(docs).then(res=>{
        setDocs(res.docs.map((doc)=>{
            return {...doc.data(),id: doc.id};
        }));
    });
}

export const editDoc = (payload: any, id: any) =>{
    const docToEdit = doc(docs,String(id));
    updateDoc(docToEdit, {...payload }, id);
}