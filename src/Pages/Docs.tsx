import React, { useEffect } from 'react'
import ModalComponent from '../Components/Modal/Index';
import '../SCSS/Docs.scss';
import { loginWithGoogle } from '../API/Auth';
import useCheckAuth from '../Hooks/useCheckAuth';
import Document from '../Components/Docs/Index';

const Docs: React.FC = () => {

    const handleLogin = () =>{
        loginWithGoogle();
    } 
    const { isAuthenticated, userData } =  useCheckAuth();
    return (
        <div className='docs-container'>
            { !isAuthenticated ? 
            <ModalComponent title="Login with google" handleLogin={handleLogin}>
            </ModalComponent> : (
                <>
                    <Document  photo= { userData?.photoURL }/>
                </>
            )}
        </div>
    )
}

export default Docs;