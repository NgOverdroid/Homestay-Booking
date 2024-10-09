import React, {useState} from "react";
import Searchbar from '../Searchbar/Searchbar';
import ProfileChip from "../ProfileChip/ProfileChip";
import ThemeButton from '../ThemeButton/ThemeButton';

export default function Header() {
    const [toggleDatePicker, setToggleDatePicker] = useState(false);
    return (
        <div className="flex flex-row mt-10 mb-10 justify-between">
            <Searchbar 
                toggleDatePicker={toggleDatePicker}
                setToggleDatePicker={setToggleDatePicker}
            />
            <div className="flex flex-row gap-4">
                <ThemeButton/>
                <ProfileChip/>
            </div>
        </div>
    );
}