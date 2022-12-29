import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({place, handleSelectPlace}) => {
    const {id, name, picture} = place;
    return (
        <Link onClick={() => handleSelectPlace(id)} to="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-500 transform rounded shadow-xl hover:-translate-y-2 hover:shadow-2xl border-rose-500 border">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-72"
            src={picture}
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-80 flex justify-center items-center">
            <p className="mb-4 text-3xl font-bold text-gray-100">
              {name}
            </p>
          </div>
        </div>
      </Link>
    );
};

export default HomeCard;