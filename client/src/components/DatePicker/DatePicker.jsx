import React, {useState, useRef} from 'react';
import dayjs from 'dayjs';
import Dates from './Dates/Dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const rightArrow = <FontAwesomeIcon icon={faArrowRight} />
const leftArrow = <FontAwesomeIcon icon={faArrowLeft} />

function DatePicker(){
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');
    const [month_number, setMonthNumber] = useState(1);

    const base_month = dayjs.month();
    const left_month = base_month.add(month_number, "month");
    const right_month = left_month.add(month_number, 'month');
    
    function navigateMonth(direction){
        if(direction == "previous"){
            if (month_number > 1)
                setMonthNumber(month_number - 1);
        }
        else if (direction == "next"){
            if (month_number < 24)
                setMonthNumber(month_number + 1);
        }
    }
    
    function setCheckDate(e){
        let clicked_date = e.target.getAttribute('data-testid');
        if (checkinDate == "")
            setCheckinDate(clicked_date);
        else if (clicked_date < checkinDate)
            setCheckinDate(clicked_date);
        else if (clicked_date > checkinDate)
            setCheckoutDate(clicked_date);
    }
    
    function clearDates() {
        setCheckinDate("");
        setCheckoutDate("");
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
                        <button type="button" className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" aria-label="Previous" onClick={() => navigateMonth("previous")}>
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
                    <Dates currentTime={left_month}/>
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
                    <button type="button" className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100" aria-label="Next" onClick={() => navigateMonth("next")}>
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
                    <Dates currentTime={right_month}/>
                </div>
                {/* <!-- Days --> */}
            </div>
            <input type="date" name='checkin_date' hidden value={checkinDate}/>
            <input type="date" name='checkout_date' hidden value={checkoutDate}/>
        </div>

    );
}

export default DatePicker;