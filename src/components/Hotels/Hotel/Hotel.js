import React from 'react';

const Hotel = ({hotel}) => {
    const {name, image, description, price} = hotel;
    return (
        <div className="flex overflow-hidden bg-white rounded shadow-lg mb-8 border border-rose-200">
            <img className='w-52' src={image} alt="" />

            <div className="px-8 py-5">
                <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>

                <p className="mt-2 text-sm text-gray-600">{description}</p>
                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-semibold text-gray-700 md:text-xl">${price}</h1>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-rose-500 rounded hover:bg-rose-600">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Hotel;