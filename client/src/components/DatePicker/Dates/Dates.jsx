import React from "react";
import dayjs from "dayjs";

export default function Dates({currentTime, checkin_date, checkout_date}){
    const blankSlots = [];
    const daysInMonth = [];
    const date01 = dayjs(`${currentTime.year()}-${currentTime.month()+1}-01`); //2024-08-01
    const dayOfWeek = date01.day(); // determine the day of week of day object 2024-08-01

    for (let i = 0; i < dayOfWeek; i++){ 
    // day of week reveals how many blank slots there are before date 1st
    // for example if day is 2, there are 2 blank slots before which are Monday and Sunday
        blankSlots.push(
            <div key={"Blank"+ i}>
                <button type="button" className="m-px size-10 cursor-default flex border border-transparent disabled:opacity-50 pointer-events-none">
                </button>
            </div>
        );
    }

    for (let i = 1; i <= currentTime.daysInMonth(); i++){
        let full_date = `${currentTime.year()}-${currentTime.format('MM')}-${(i < 10) ? ("0" + i) : i}`;
        daysInMonth.push(
            <div key={"day" + i}>
                {
                (full_date == checkin_date || full_date == checkout_date) 
                ? 
                    <button 
                    type="button" 
                    className="m-px size-10 flex justify-center items-center border border-transparent text-sm rounded-full bg-blue-600 text-white disabled:opacity-50 disabled:pointer-events-none" 
                    data-testid= { full_date }>
                    {i}
                    </button>
                :
                    <button 
                    type="button" 
                    className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none focus:outline-none" 
                    data-testid={ full_date }>
                    {i}
                    </button>   
                }
            </div>
        )
    }
    return(
        <>
            <div className="flex flex-row flex-wrap">
                {blankSlots}
                {daysInMonth}
            </div>
        </>

    );
}

//original button color class className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600"
