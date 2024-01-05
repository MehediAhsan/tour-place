import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Hotel from './Hotel/Hotel';
import LocationMap from './LocationMap/LocationMap';

const Hotels = () => {
    const hotels = useLoaderData();
    useTitle('Hotels');
    const location = hotels[0];
    return (
        <div className='grid grid-cols-7 container mx-auto gap-10 py-40 px-5'>
            <div data-aos="fade-right" data-aos-duration="1000" className='col-span-7 md:col-span-4'>
                {
                    hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                }
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className='col-span-7 md:col-span-3'>
                <LocationMap location={location}></LocationMap>
            </div>
        </div>
    );
};

export default Hotels;