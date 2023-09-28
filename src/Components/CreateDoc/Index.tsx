/* eslint-disable @typescript-eslint/no-explicit-any */
import './Index.scss';
import EditDoc from '../EditDoc/Index';
import { createDoc } from '../../API/Firestore';

const CreateDoc = ({handleEdit, isEdit, id}: any) => {
    const createDocument = () => {
        const payload = {
            value: ""
        }
        createDoc(payload);
    }
    if(isEdit) {
        return <EditDoc handleEdit = {handleEdit} id={id}/>
    }
    return (
        <div className='new-doc'>
            <div className='new-doc-container'>
                <p>Start a new document</p>
                <div className='create-doc'>
                    <img 
                        src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png" 
                        alt="" className='create-card' 
                        onClick={()=>{
                            handleEdit();
                            createDocument();
                        }}
                    />
                    <p>Blank</p>
                </div>
            </div>
        </div>
    )
}

export default CreateDoc;