import React from "react";
import Collage from "../components/Collage/Collage";
import Description from '../components/Description/Description';

export async function loader({params}) {
    // const get_places = await fetch(`someurl/${params.room_id}`);
    // const places = await get_places.json();
    // return places;
}

export async function action() {
    // const book_room = await fetch("google.com", {
    //     headers: {
    //         method: "post"
    //     }
    // });
    // const book_status = book_room.json();
    // return book_status;
}

function Room(){

    return (
        <>
        <Collage/>
        <Description>
            <ReservationForm/>
        </Description>
        </>
    );
}

export default Room;