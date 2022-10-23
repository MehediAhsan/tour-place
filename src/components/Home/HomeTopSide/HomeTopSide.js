import React from 'react';

const HomeTopSide = () => {
    return (
        <div className='p-16'>
            <div className="h-96 p-20 bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1601560496330-b654cca141d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")` }}>
            <div className="bg-opacity-60"></div>
            <div className="text-center text-neutral-content">
                <div className="max-w-md mx-auto">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Booking</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeTopSide;