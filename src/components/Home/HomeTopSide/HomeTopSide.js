import React from 'react';
import { Link } from 'react-router-dom';

const HomeTopSide = ({selectedPlace}) => {
    const {id, name, details} = selectedPlace;
    return (
        <div className=''>
            {/* <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover  shadow" style={{ backgroundImage: `url(${picture})` }}> */}
            {/* <div className="relative bg-gray-900 bg-opacity-50 w-full h-screen flex items-center justify-center"> */}
            <div className=" text-neutral-content">
                <div className="max-w-full px-4 md:px-20 lg:px-14 mx-auto">
                <h1 className="mb-5 text-2xl md:text-5xl text-rose-500 font-Berkshire" >{name}</h1>
                <p className="mb-5 text-rose-100 text-lg">
                    {
                        details?.length > 200 ?
                        <>
                        <span className='inline sm:hidden'>{
                            details.slice(0 , 50) + '...'
                        }</span>
                        <span className='hidden sm:inline'>{
                            details.slice(0 , 170) + '...'
                        }</span></>:
                        details
                    }
                </p>
                <Link to={`/booking/${id}`}>
                    <button type="button" className="px-2 md:px-3 py-1 md:py-1 bg-gradient-to-r from-rose-500 to-yellow-500 hover:from-yellow-500 hover:to-rose-500 text-white rounded text-lg shadow-lg">Booking</button>
                </Link>
                </div>
                </div>
            </div>
        // </div>
        // </div>
        
    );
};

export default HomeTopSide;