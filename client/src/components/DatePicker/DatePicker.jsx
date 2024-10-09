import React, {useState, useRef} from 'react';
import dayjs from 'dayjs';
import Dates from './Dates/Dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const rightArrow = <FontAwesomeIcon icon={faArrowRight} />
const leftArrow = <FontAwesomeIcon icon={faArrowLeft} />

function DatePicker({checkinDate, setCheckinDate, checkoutDate, setCheckoutDate}){
    const monthsList = useRef(null);
    const [calendarPage, setCalendarPage] = useState(0);

    if(monthsList.current === null){
        monthsList.current = addMonths();
    }

    function addMonths(){
        const months = new Array(22);
        let time = dayjs();
        for (let i = 0; i < months.length; i++){
            months[i] = time;
            time = time.add(1, 'month');
        }
        return months;
    }
    
    function setCheckDate(e){
        if (checkinDate == "")
            setCheckinDate(e.target.getAttribute('data-testid'));
        else if (checkoutDate == ""){
            if (e.target.getAttribute('data-testid') > checkinDate)
                setCheckoutDate(e.target.getAttribute('data-testid'));
        }
    }
        
    function goLeftPage(){
        if (calendarPage > 0){
            setCalendarPage(c => c - 1);
        }
    }

    function goRightPage(){
        if (calendarPage < 21){
            setCalendarPage(c => c + 1);
        }
    }

    return (
            <div className="sm:flex absolute cursor-auto bg-white top-full w- left-0 z-10 rounded-lg border-gray-300 border">
            {/* <!-- Calendar --> */}
            <div className="p-3 space-y-0.5">
                {/* <!-- Months --> */}
                <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                {/* <!-- Prev Button --> */}
                    <div className="col-span-1">
                        <button type="button" className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" aria-label="Previous" onClick={goLeftPage}>
                        {leftArrow}
                        </button>
                    </div>
                {/* <!-- End Prev Button -->

                <!-- Month / Year --> */}
                    <div className="col-span-3 flex justify-center items-center gap-x-1">
                        <div className="relative">
                            <b>{monthsList.current[calendarPage].format('MMMM')} / {monthsList.current[calendarPage].year()}</b>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <button type="button" className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" disabled>
                        </button>
                    </div>
                {/* <!-- End Month / Year --*/}
                </div>
                {/*<!-- Weeks --> */}
                <div className="flex pb-1.5">
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Su
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Mo
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Tu
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        We
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Th
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Fr
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Sa
                    </span>
                </div>
                {/* <!-- Weeks -->

                <!-- Days --> */}
                <div className="flex w-80 flex-wrap" onClick={(e) => setCheckDate(e)}>
                    <Dates currentTime={monthsList.current[calendarPage]}/>
                </div>
                {/* <!-- End of Days --> */}
            </div>

            {/* <!-- Calendar 2--> */}
            <div className="p-3 space-y-0.5">
                {/* <!-- Months --> */}
                <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                {/* <!-- Prev Button --> */}
                <div className="col-span-1">
                    <button type="button" className="opacity-0 pointer-events-none size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" disabled>
                    </button>
                </div>
                {/*        <!-- Month / Year --> */}
                <div className="col-span-3 flex justify-center items-center gap-x-1">
                    <div className="relative">
                       <b> {monthsList.current[calendarPage + 1].format('MMMM')} / {monthsList.current[calendarPage + 1].year()} </b>
                    </div>

                </div>
                {/* <!-- End Month / Year -->

                <!-- Next Button --> */}
                <div className="col-span-1 flex justify-start">
                    <button type="button" className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" aria-label="Next" onClick={goRightPage}>
                        {rightArrow}
                    </button>
                </div>
                {/* <!-- End Next Button --> */}
                </div>
                {/* <!-- Months -->

                <!-- Weeks --> */}
                <div className="flex pb-1.5">
                <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Su
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Mo
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Tu
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        We
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Th
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Fr
                    </span>
                    <span className="m-px w-10 block text-center text-sm text-gray-500">
                        Sa
                    </span>
                </div>
                {/* <!-- Weeks -->

                <!-- Days --> */}
                <div className="flex w-80 flex-wrap" onClick={(e) => setCheckDate(e)}>
                <Dates currentTime={monthsList.current[calendarPage + 1]}/>
                    
                </div>
                {/* <!-- Days --> */}
            </div>
        </div>

    );
}

export default DatePicker;