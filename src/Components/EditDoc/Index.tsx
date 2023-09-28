/* eslint-disable @typescript-eslint/no-explicit-any */
import './Index.scss';
import { BiArrowBack } from 'react-icons/bi';
import { useState, useRef, useEffect } from 'react';
import EditorToolBar,{ modules, formats } from '../../Toolbar/Index';
import ReactQuill from 'react-quill';
import { editDoc } from '../../API/Firestore';

type EditProps = {
    handleEdit: () => void,
    id: ''
}

const EditDoc = ({handleEdit, id}:EditProps) => {
    const [value, setVal] = useState('');
    const editRef = useRef<any>(null);
    const editDocument = () =>{
        const payload = {
            value,
        };
        editDoc(payload, id);
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            editDocument();
        },1000);
        return ()=>{
            clearTimeout(timer);
        }
    },[value])
    useEffect(()=>{
        editRef.current.focus()
    },[])
    return (
        <div className='edit-box'>
            <BiArrowBack size={30} className = 'react-icons' onClick={handleEdit}/>
            <div className='edit-container'>
                <EditorToolBar />
                <ReactQuill ref={editRef} theme='snow' value={value} onChange={setVal} className='react-quill' modules={modules} formats={formats}/>
            </div>
        </div>
    );
}

export default EditDoc