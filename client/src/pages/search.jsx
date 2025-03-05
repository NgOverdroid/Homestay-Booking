import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('s'); // Assuming you have a query parameter 's'
  
    return (
        <div></div>
    );
}
  