import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Hotel from './Hotel/Hotel';
import LocationMap from './LocationMap/LocationMap';

const Hotels = () => {
    const hotels = useLoaderData();
    useTitle('Hotels');
    return (
        <div className='grid grid-cols-7 container mx-auto gap-10 my-10 px-5'>
            <div className='col-span-7 md:col-span-4'>
                {
                    hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                }
            </div>
            <div className='col-span-7 md:col-span-3'>
                <LocationMap></LocationMap>
            </div>
        </div>
    );
};

export default Hotels;