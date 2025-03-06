import React, {useState, useRef, useEffect} from "react";
import Card from '../components/Card/Card.jsx';
import Filter from "../components/Filter/Filter";

export default function Index() {
  const [places, setPlaces] = useState(null);
  const [cards, setCards] = useState(12);
  const intersect_card = useRef(null);

  const list_cards = places.map((place, index) => {
    if (index < cards)
      return <Card 
              key={place.room_id}
              state={place.state}
              city={place.city}
              cost={place.cost}
              img_src={place.img_src}
              ></Card>
  })

  useEffect(() => {
    async function loader() {
      try {
        const response = await fetch("http://127.0.0.1:3000");
        if (!response.ok)
          throw new Error("Failed to fetch");
        const json_data =  await response.json();
        setPlaces(json_data);
      } 
      catch(error) {
        throw error;
      }
    }
    loader();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries =>{
      if (entries[0].isIntersecting)
        setCards( cards + 12 );
    });

    if (cards <= 36)
      observer.observe(intersect_card.current);
    else 
      observer.unobserve();
    return () => {
      observer.disconnect();
    }
  }, [cards, intersect_card]);

  return (
      <>
          <div width={1400} className='mx-auto text-right mb-7'>
            <Filter/>
          </div>
          <div className='flex flex-row justify-between flex-wrap mx-auto' width={1400}>
            {list_cards}
          </div>
          <div ref={intersect_card} id="intersectcard"></div> 
      </>
  );
}