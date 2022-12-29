import React from 'react';
import { Link } from 'react-router-dom';

const HomeTopSide = ({selectedPlace}) => {
    const {id, name, picture, details} = selectedPlace;
    return (
        <div className='container mx-auto p-28 '>
            {/* <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover rounded-2xl shadow border-2 border-rose-500" style={{ backgroundImage: `url(${picture})` }}> */}
            <div className="bg-black bg-opacity-100"></div>
            <div className="text-center text-neutral-content">
                <div className="max-w-md mx-auto">
                <h1 className="mb-5 font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-rose-500 to-yellow-500 font-Berkshire " style={{"text-shadow":"2px 2px #FF007F"}}>{name}</h1>
                <p className="mb-5 text-rose-600 font-semibold text-base">
                    {
                        details?.length > 200 ?
                        details.slice(0 , 200) + '...':
                        details
                    }
                </p>
                <Link to={`/booking/${id}`}>
                    <button type="button" className="px-4 py-2 bg-gradient-to-r from-rose-500 to-yellow-500 hover:from-yellow-500 hover:to-rose-500 text-white rounded text-lg shadow-lg">Booking</button>
                </Link>
                </div>
            </div>
        </div>
        
    );
};

export default HomeTopSide;