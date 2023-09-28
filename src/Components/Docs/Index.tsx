/* eslint-disable @typescript-eslint/no-explicit-any */
import './Index.scss';
import { useState } from 'react';
import Topbar from '../TopBar/Index';
import CreateDoc from '../CreateDoc/Index';
import DocsList from '../DocsList/Index';

const Document = ({photo}: UserProps) => {
    const [ isEdit, setEdit] = useState(false);
    const [id, setId] = useState('');
    const handleEdit = () =>{
        setEdit(!isEdit);
    }
    const openDoc = (id: any) =>{
        setEdit(!isEdit);
        setId(id);
    }
    return (
        <div>
            <Topbar photo= { photo }/>
            <CreateDoc id={id} handleEdit = {handleEdit} isEdit={isEdit} />
            {!isEdit && <DocsList openDoc={openDoc}/>}
        </div>
    )
}

export default Document;