import React from 'react';
import SigninModal from '../components/SigninModal/SigninModal';
import SigninForm from '../components/SigninModal/SigninForm/SigninForm';

export function action() {
    
}

export default function Signin(){
    return (
        <SigninModal>
            <SigninForm></SigninForm>
        </SigninModal>
    );
}