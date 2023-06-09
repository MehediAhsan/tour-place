import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Checkout = () => {
    const hotel = useLoaderData();
    console.log(hotel);
    useTitle('Hotels');

    return (
        <div className='min-h-screen p-40'>
           <h1 className='text-white text-center text-4xl font-semibold animate-pulse'>😎 Welcome to {hotel.place_name} 😎</h1>
           <div className='text-green-500 pt-20 pl-72 font-semibold text-2xl'>
            <h2>Hotel Name: <span className='text-gray-300'>{hotel.name}</span></h2>
            <h2 className='mt-2'>Hotel Price: <span className='text-gray-300'>${hotel.price}</span></h2>
            <button className="ml-96 mt-8 px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-rose-500 rounded hover:bg-rose-600">Buy Now</button>
           </div>
        </div>
    );
};

export default Checkout;