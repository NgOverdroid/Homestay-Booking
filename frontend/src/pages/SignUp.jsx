import React from 'react';
import SigninModal from '../components/SigninModal/SigninModal';
import SignupForm from '../components/SigninModal/SignupForm/SignupForm';

export function action(){

}

export default function Signin(){
    return (
        <SigninModal>
            <SignupForm></SignupForm>
        </SigninModal>
    );
}