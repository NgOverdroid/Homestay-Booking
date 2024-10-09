import React from 'react';

const backgroundImage = 'url(https://picsum.photos/1920/1080)';

export default function SigninModal({children}){
    return (
        <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage }}>
            <div className="h-screen flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}