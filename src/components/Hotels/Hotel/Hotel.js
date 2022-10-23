import React from 'react';

const Hotel = ({hotel}) => {
    const {name, image, description, price} = hotel;
    return (
        <div className="flex overflow-hidden bg-white rounded-lg shadow-lg max-w-4xl mx-auto gap-3 mt-10">
            <img className='w-96' src={image} alt="" />

            <div className="p-8">
                <h1 className="text-2xl font-bold text-gray-800">{name}</h1>

                <p className="mt-2 text-sm text-gray-600 ">{description}</p>
                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 md:text-xl">${price}</h1>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Book</button>
                </div>
            </div>
        </div>
    );
};

export default Hotel;