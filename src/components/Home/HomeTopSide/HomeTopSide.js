import React from 'react';

const HomeTopSide = ({selectedPlace}) => {
    const {name, picture, details} = selectedPlace;
    return (
        <div className='p-16'>
            <div className="min-h-screen pt-40 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${picture})` }}>
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
                <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Booking</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeTopSide;