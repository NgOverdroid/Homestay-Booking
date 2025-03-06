import React from 'react';
import SigninModal from '../components/SigninModal/SigninModal';
import SigninForm from '../components/SigninModal/SigninForm/SigninForm';
import { useLoaderData } from 'react-router-dom';
import store from '../features/store';
import root_url from '../misc/stuff';

export async function loader() {
    const results = await fetch(`${root_url}/signin`);
    const response = await response.json();
    
    if(response.status == '201')
        return null;
    else if (response.status == '403')
        return null;

    return results;
}
export function action() {
    
}

export default function Signin(){
    const data = useLoaderData();
    return (
        <SigninModal>
            <SigninForm></SigninForm>
        </SigninModal>
    );
}