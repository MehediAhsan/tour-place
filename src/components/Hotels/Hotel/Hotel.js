import React from 'react';
import { Link } from 'react-router-dom';

const Hotel = ({hotel}) => {
    const {name, image, description, price,place_name,id} = hotel;
    console.log(hotel)
    return (
        <div className="flex overflow-hidden rounded shadow-lg mb-8 border border-rose-400">
            <img className='w-60' src={image} alt="" />

            <div className="px-8 py-5">
                <h1 className="text-2xl font-semibold text-gray-200">{name}</h1>

                <p className="mt-3 text-sm text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, molestias ex. Reprehenderit excepturi vitae consequatur error quis sequi cupiditate recusandae non, eos doloremque, unde sapiente quasi assumenda a similique corporis.</p>
                    <div className="flex justify-between mt-5 item-center">
                        <h1 className="text-lg font-semibold text-gray-400 md:text-xl">${price}</h1>
                        <Link to={`/hotel/${id}`}>
                        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-rose-500 rounded hover:bg-rose-600">Checkout</button>
                        </Link>
                    </div>
               
            </div>
        </div>
    );
};

export default Hotel;