// src/components/TravelTips.js
import React from 'react';
import { IoIosAirplane, IoMdCompass } from 'react-icons/io';

const TravelTips = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-200 mb-8">
          Travel Tips and Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Travel Tip Cards */}
          {travelTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-5 rounded-lg text-left transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="mb-5 text-3xl text-blue-500">
                {tip.icon === 'plane' ? <IoIosAirplane size={48} /> : <IoMdCompass size={48} />}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{tip.title}</h3>
              <p className="text-gray-600 text-lg">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sample travel tips data
const travelTips = [
  {
    title: 'Packing Essentials',
    description:
      'Learn what to pack for your trip, including clothing, toiletries, and travel accessories.',
    icon: 'plane',
  },
  {
    title: 'Travel Insurance Guide',
    description:
      'Discover the importance of travel insurance and how to choose the right coverage for your journey.',
    icon: 'compass',
  },
  {
    title: 'Local Cuisine Tips',
    description:
      'Explore the flavors of your destination with our guide to local cuisine and dining etiquette.',
    icon: 'plane',
  },
];

export default TravelTips;
