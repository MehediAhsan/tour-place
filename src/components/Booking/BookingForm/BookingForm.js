import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';

const BookingForm = ({place}) => {
    const {name} = place;
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    return (
        <form>
            <div className="mb-1 sm:mb-2">
                <label
                htmlFor="firstName"
                className="inline-block mb-1 font-medium"
                >
                Origin
                </label>
                <input
                placeholder="Dhaka"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                />
            </div>
            <div className="mb-1 sm:mb-2">
                <label
                htmlFor="lastName"
                className="inline-block mb-1 font-medium"
                >
                Destination
                </label>
                <input
                placeholder="Doe"
                required
                type="text"
                value={name}
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastName"
                />
            </div>
            <div className="mb-1 sm:mb-2 flex justify-between">
                <div>
                    <span
                    className="block mb-1 font-medium"
                    >
                    From
                    </span>
                    <DatePicker className="h-12 border" onChange={setStart} value={start} />
                </div>
                <div>
                    <span
                    className="block mb-1 font-medium"
                    >
                    To
                    </span>
                    <DatePicker className="h-12 border" onChange={setEnd} value={end} />
                </div>
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
                <Link to={`/hotels/${name}`}>
                    <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                    Start Booking
                    </button>
                </Link>
            </div>
        </form>
    );
};

export default BookingForm;