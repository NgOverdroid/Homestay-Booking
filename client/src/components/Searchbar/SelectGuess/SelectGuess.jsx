import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const plusLogo = <FontAwesomeIcon icon={faPlus}/>;
const minusLogo = <FontAwesomeIcon icon={faMinus} />;

function SelectGuess(){
    const [guest, setGuest] = useState({
        "adult": 0,
        "kid": 0
    });
    
    function numberOfAdult(num){
        setGuest({...guest, "adult": guest.adult + num})
    }
    function numberOfKid(num){
        setGuest({...guest, "kid": guest.kid + num})
    }
    return(
        <div className='border rounded-lg border-gray-300 p-8 absolute top-20 bg-white' >
                    <div className='flex flex-row mb-1.5'>
                        <section>
                            <p className='font-bold text-left'>Adults</p>
                            <p className='text-left'>Ages 13 And above</p>
                        </section>
                        <div className='flex flex-row justify-between items-center'>
                            <button type="button" className='w-9 h-9 rounded-full flex items-center justify-center' onClick={() => numberOfAdult(-1)}>{minusLogo}</button>
                            <button disabled className='rounded-full w-9 h-9'>{guest.adult}</button>
                            <button type="button" className='w-9 h-9 rounded-full flex items-center justify-center' onClick={() => numberOfAdult(+1)}>{plusLogo}</button>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-row mt-1.5'>
                        <section>
                            <p className='text-left font-bold'>Children</p>
                            <p className='text-left'>Ages 12 And below</p>
                        </section>
                        <div className='flex flex-row justify-between items-center'>
                            <button className='rounded-full w-9 h-9' onClick={() => numberOfKid(-1)}>{minusLogo}</button>
                            <button className='rounded-full w-9 h-9' disabled>{guest.kid}</button>
                            <button className='rounded-full w-9 h-9' onClick={() => numberOfKid(+1)}>{plusLogo}</button>
                        </div>
                    </div>
                    <input type="number" name="adults" className="hidden" />
                    <input type="number" name="kids" className="hidden"/>
        </div>
    )
}

export default SelectGuess