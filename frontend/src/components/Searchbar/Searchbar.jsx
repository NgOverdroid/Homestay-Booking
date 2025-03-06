import React, {useState, lazy, Suspense, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Form } from 'react-router-dom';

const magnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />;

const SelectGuess = lazy(() => import('./SelectGuess/SelectGuess.jsx'));
const DatePicker = lazy(() => import('../DatePicker/DatePicker.jsx'));

function Searchbar({toggleDatePicker, setToggleDatePicker}) {
    const [toggleGuest, setToggleGuest] = useState(false);
    const navigate = useNavigate();

    function handleSearch(){
        navigate('/search');
    }

    return(
        <>
        <Form className="flex flex-box border border-solid border-neutral-300 rounded-full w-fit px-4 relative">
            <div className="p-2.5">
                <div className="text-left text-sm font-semibold">Where</div>
                <input name="where" placeholder="Search destination" className="block" required/>
            </div>
            <div className="p-2.5 cursor-pointer" onClick={()=> setToggleDatePicker(true)}>
                <div className="text-left text-sm font-semibold">Check in</div>
                <div className="text-gray-500 text-left text-base">Add dates</div>
                { toggleDatePicker && 
                <Suspense>
                    <DatePicker className={toggleDatePicker ? '' : 'hidden'}/>
                </Suspense>
                }
            </div>
            <div className="p-2.5 cursor-pointer" onClick={()=> setToggleDatePicker(true)}>
                <p className="text-left text-sm font-semibold">Check out</p>
                <p className="text-gray-500 text-left text-base">Add dates</p>
            </div>
            <div className="p-2.5 w-56 flex flex-row justify-between cursor-pointer relative" onClick={() => setToggleGuest(!toggleGuest)}>
                <div>
                    <p className="text-left text-sm font-semibold">Who</p>
                    <p className="text-gray-500 text-left text-base select-none" >Add Guests</p>
                </div>
                { toggleGuest && 
                <Suspense>
                    <SelectGuess className={toggleGuest ? '' : 'hidden'}/>
                </Suspense>
                }
            </div>
            <div className='flex items-center'>
                <button className={`h-10 bg-red-500 rounded-full mx-auto flex items-center justify-center ${toggleGuest ? " w-24" : " w-10"}`} type='button' onClick={handleSearch}>{magnifyingGlass}</button>
            </div>
        </Form>
        </>
    );
}
  

export default Searchbar