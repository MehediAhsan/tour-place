import React from 'react';
import { Link } from 'react-router-dom';

const HomeTopSide = ({selectedPlace}) => {
    const {id, name, picture, details} = selectedPlace;
    return (
        <div className='container mx-auto p-16'>
            <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover rounded-2xl shadow border-2 border-rose-500" style={{ backgroundImage: `url(${picture})` }}>
            <div className="bg-black bg-opacity-100"></div>
            <div className="text-center text-neutral-content">
                <div className="max-w-md mx-auto">
                <h1 className="mb-5 text-5xl font-bold text-white">{name}</h1>
                <p className="mb-5 text-white">
                    {
                        details?.length > 200 ?
                        details.slice(0 , 200) + '...':
                        details
                    }
                </p>
                <Link to={`/booking/${id}`}>
                    <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800 border-2 border-rose-500">Booking</button>
                </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeTopSide;