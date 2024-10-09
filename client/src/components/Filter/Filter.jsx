import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

const filter_logo = <FontAwesomeIcon icon={faSliders} />

function Filter(){

    return (
            <div className='w-24 relative'>
                <button className="w-24 bg-neutral-100 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Filter</span>
                    <span className='text-sm'>{filter_logo}</span>
                </button>
                <div className={`bg-gray-100 text-left absolute w-44`}>
                    <div className='cursor-pointer'>Price Lowest</div>
                    <div className='cursor-pointer'>Price Highest</div>
                </div>
            </div>
    );
}

export default Filter;