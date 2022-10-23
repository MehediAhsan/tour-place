import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from './Hotel/Hotel';

const Hotels = () => {
    const hotels = useLoaderData();
    return (
        <div>
            <div className='mb-10'>
                {
                    hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                }
            </div>
        </div>
    );
};

export default Hotels;