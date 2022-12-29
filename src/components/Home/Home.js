import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Footer from '../Footer/Footer';
import Contact from './Contact';
import HomeCard from './HomeCard/HomeCard';
import HomeTopSide from './HomeTopSide/HomeTopSide';
import Review from './Review';
import Starts from './Starts';

const Home = () => {
    const places = useLoaderData();
    const [selectedPlace, setSelectedPlace] = useState(places[0]);
    console.log(places);
    useTitle('Home');
    const handleSelectPlace = (id) => {
        const selectPlace = places.find( place => place.id === id);
        setSelectedPlace(selectPlace);
    }
    return (
        <div>
            <div>
                <HomeTopSide key={selectedPlace.id} selectedPlace={selectedPlace}></HomeTopSide>
            </div>
            <div className='container mx-auto px-10 grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
                {
                    places.map( place => <HomeCard key={place.id} place={place} handleSelectPlace={handleSelectPlace}></HomeCard>)
                }
            </div>
            <Review></Review>
            <Starts></Starts>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;