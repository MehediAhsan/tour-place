import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Header from '../Header/Header';
import BookingForm from './BookingForm/BookingForm';

const Booking = () => {
    const place = useLoaderData();
    const {picture, details, name} = place;
    useTitle('Booking')
    return (
        <div>

            <div className="relative overflow-hidden">
            <img
                src={picture}
                className="absolute inset-0 object-cover w-full min-h-screen"
                alt=""
            />
            <div className="relative bg-black bg-opacity-90 min-h-screen">
                <Header></Header>
                <div className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-32">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div data-aos="fade-right" data-aos-duration="1000" className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 lg:w-7/12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-rose-500 sm:text-4xl sm:leading-none font-Berkshire">
                        {name}
                    </h2>
                    <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                        {details}
                    </p>
                    
                    </div>
                    <div className="w-full max-w-xl xl:px-8 lg:w-5/12">
                    <div data-aos="fade-left" data-aos-duration="1000" className="bg-white rounded shadow-2xl p-7 sm:p-10">
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