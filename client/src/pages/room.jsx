import Collage from "../components/Collage/Collage";
import Description from '../components/Description/Description';
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Room(){
    const [room_data, setRoomData]= useState(null);
    const { room_id } = useParams();

    useEffect(() =>{
        const fetchRoomData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3000/room/${room_id}`);

                if (!response.ok) 
                    throw new Error("Failed to fetch room data");

                const data = await response.json();
                
                setRoomData(data);
            } catch (error) {
                console.error("Error fetching room data:", error);
            }
        };

        fetchRoomData();
    }, [room_id]);

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