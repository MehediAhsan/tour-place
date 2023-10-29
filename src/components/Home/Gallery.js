import React, { useState } from 'react';
import { FacebookIcon, FacebookShareButton } from 'react-share';

const Gallery = () => {
  const [count, setCount] = useState(3);

  const places = [
    {
      id: "1",
      name: "Rangamati",
      img: "https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image007.jpg",
    },
    {
      id: "2",
      name: "Bandarban",
      img: "https://thesimpletravel.com/wp-content/uploads/2022/02/Tourist-Places-in-Bangladesh.jpg",
    },
    {
      id: "3",
      name: "Sajek",
      img: "https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2020/09/27/sajek_valley_d.jpg",
    },
    {
      id: "4",
      name: "Sitakundu",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZHJIRxAanu1cYkZ3pWuoOZFwicl_wk9Lkg&usqp=CAU",
    },
    {
      id: "5",
      name: "Chittagang",
      img: "https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image007.jpg",
    },
    {
      id: "6",
      name: "Sylet",
      img: "https://thesimpletravel.com/wp-content/uploads/2022/02/Tourist-Places-in-Bangladesh.jpg",
    },
  ];

  return (
    <div className="py-16">
      <h1
        data-aos="fade-in"
        data-aos-duration="1000"
        className="text-2xl md:text-4xl font-semibold text-center text-gray-200 mb-5"
      >
        Places We Love
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-8 mx-auto max-w-screen-xl">
        {places.map((place) => (
          <div
            key={place.id}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              alt={place.name}
              className="w-full h-52 object-cover"
              src={place.img}
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {place.name}
                </h2>
                <div className="flex space-x-2">
                  <FacebookShareButton url={place.img}>
                    <button className="text-gray-400 hover:text-blue-500 focus:outline-none">
                      <FacebookIcon
                        size={24}
                        round
                        className="text-blue-500"
                      />
                    </button>
                  </FacebookShareButton>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="text-gray-400 hover:text-red-500 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                  <span className="text-gray-400">{count}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
