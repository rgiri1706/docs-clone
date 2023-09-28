/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDocuments } from '../../API/Firestore';
import { useEffect, useState } from 'react';
import './Index.scss';

const DocsList = ({openDoc}: any) => {
    const [docs, setDocs] = useState([{
        username: '',
        id: '',
        value: '',
    }]);
    const getInfo=async ()=>{
        await getDocuments(setDocs);
    }
    useEffect(()=>{
       getInfo();
    },[])
    return (
        <div className='docs-main'>
            {docs.map(doc=>{
                return <div className='doc-card' onClick={()=> openDoc(doc.id)}><p dangerouslySetInnerHTML={{__html: doc.value}}></p></div>
            })}
        </div>
    );
}

export default DocsList;