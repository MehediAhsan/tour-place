import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard/HomeCard';
import HomeTopSide from './HomeTopSide/HomeTopSide';

const Home = () => {
    const places = useLoaderData();
    console.log(places);
    return (
        <div>
            <div>
                <HomeTopSide></HomeTopSide>
            </div>
            <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 px-16'>
                {
                    places.map( place => <HomeCard key={place.id} place={place}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Home;