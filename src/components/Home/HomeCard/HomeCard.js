import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ place, handleSelectPlace, selectedPlace }) => {
  const { id, name, picture } = place;

  return (
    <Link
      onClick={() => handleSelectPlace(id)}
      to="/"
      aria-label="View Item"
      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
    >
      <div className="relative rounded-lg overflow-hidden transition duration-500 transform shadow-lg hover:scale-105 mr-3">
        <img
          className="object-cover w-full h-36 md:h-72"
          src={picture}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 px-4 py-6 flex flex-col justify-end">
          <p className="mb-2 text-2xl font-semibold text-white">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
