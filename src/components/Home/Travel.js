import React from 'react';

const Travel = () => {
  return (
    <section className=" text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col w-full lg:w-1/2 justify-center items-start p-8"
        >
          <h1 className="text-4xl md:text-5xl text-blue-500 tracking-tight font-extrabold leading-tight mb-2">
		  Adventures Await
          </h1>
          <h2 className="text-2xl md:text-3xl leading-snug mb-4">
		  Explore the World with Us
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            Explore your favorite places and register now to showcase your talent
            and win exciting prizes.
          </p>
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore Now
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="p-8 mt-12 md:mt-0 ml-0 md:ml-12 lg:w-1/2 justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img className="h-64 md:h-80 shadow-lg" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" alt='picturetour'></img>
            <img className="h-64 md:h-80 shadow-lg" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" alt='picturetour'></img>
            <img className="h-64 md:h-80 shadow-lg" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" alt='picturetour'></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
