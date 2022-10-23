import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard/HomeCard';
import HomeTopSide from './HomeTopSide/HomeTopSide';

const Home = () => {
    const places = useLoaderData();
    const [selectedPlace, setSelectedPlace] = useState(places[0]);
    console.log(places);
    const handleSelectPlace = (id) => {
        const selectPlace = places.find( place => place.id === id);
        setSelectedPlace(selectPlace);
    }
    return (
        <div>
            <div>
                <HomeTopSide key={selectedPlace.id} selectedPlace={selectedPlace}></HomeTopSide>
            </div>
            <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 px-16'>
                {
                    places.map( place => <HomeCard key={place.id} place={place} handleSelectPlace={handleSelectPlace}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Home;