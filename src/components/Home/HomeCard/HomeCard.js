import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({place, handleSelectPlace}) => {
    const {id, name, picture} = place;
    return (
        <Link onClick={() => handleSelectPlace(id)} to="/" aria-label="View Item">
        <div className="mr-4 relative overflow-hidden transition duration-500 transform rounded shadow-xl hover:-translate-y-2 hover:shadow-2xl ">
          <img
            className="object-cover w-full h-44 md:h-64"
            src={picture}
            alt=""
          />
          <div className="absolute inset-0 px-3 py-2 transition-opacity duration-200 bg-black bg-opacity-90 opacity-80 flex justify-center items-center">
            <p className="mb-4 text-2xl font-semibold text-gray-100">
              {name}
            </p>
          </div>
        </div>
      </Link>
    );
};

export default HomeCard;