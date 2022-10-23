import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingForm from './BookingForm/BookingForm';

const Booking = () => {
    const place = useLoaderData();
    const {picture, details, name} = place;
    return (
        <div>
            <div className="relative">
            <img
                src={picture}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                        {name}
                    </h2>
                    <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                        {details}
                    </p>
                    
                    </div>
                    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                        <BookingForm place={place}></BookingForm>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Booking;