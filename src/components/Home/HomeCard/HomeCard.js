import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({place, handleSelectPlace, selectedPlace}) => {
    const {id, name, picture} = place;
    console.log(selectedPlace);
    return (
        <Link onClick={() => handleSelectPlace(id)} to="/" aria-label="View Item">
        <div className={selectedPlace.name === name ? "mr-4 relative overflow-hidden transition duration-500 transform rounded shadow-xl hover:shadow-2xl border-2 border-green-500": "mr-4 relative overflow-hidden transition duration-500 transform rounded shadow-xl hover:shadow-2xl border-2 border-green-500"}>
          <img
            className="object-cover w-full h-36 md:h-64"
            src={picture}
            alt=""
          />
          <div className={selectedPlace.name === name ? "absolute inset-0 px-3 py-2 transition-opacity duration-200 bg-black bg-opacity-60 opacity-80 flex justify-center items-center" : "absolute inset-0 px-3 py-2 transition-opacity duration-200 bg-black bg-opacity-80 opacity-80 flex justify-center items-center"}>
            <p className="mb-4 text-3xl font-semibold text-white">
              {name}
            </p>
          </div>
        </div>
      </Link>
    );
};

export default HomeCard;