import React from 'react';

const SpecialOffers = () => {
  const offers = [
    {
      title: 'Explore Bali',
      discount: '20% OFF',
      description: 'Discover the beauty of Bali with our special offer.',
      imageUrl: 'https://images.unsplash.com/photo-1636549890729-01529bd9ff40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/tours/bali',
    },
    {
      title: 'Adventure in Patagonia',
      discount: '15% OFF',
      description: 'Embark on an epic Patagonian adventure.',
      imageUrl: 'https://images.unsplash.com/photo-1597787450897-e09bed959fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEFkdmVudHVyZSUyMGluJTIwUGF0YWdvbmlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      link: '/tours/patagonia',
    },
    {
      title: 'Cultural Exploration in Kyoto',
      discount: '10% OFF',
      description: 'Experience the rich culture of Kyoto.',
      imageUrl: 'https://images.unsplash.com/photo-1540476804099-bbfbc20e75d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3VsdHVyYWwlMjBFeHBsb3JhdGlvbiUyMGluJTIwS3lvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      link: '/tours/kyoto',
    },
    {
      title: 'Safari in Serengeti',
      discount: '25% OFF',
      description: 'Witness the amazing wildlife in Serengeti.',
      imageUrl: 'https://images.unsplash.com/photo-1516496903683-a734cd14c519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1383&q=80',
      link: '/tours/serengeti',
    },
    {
      title: 'Beach Getaway in Maldives',
      discount: '30% OFF',
      description: 'Relax on the pristine beaches of Maldives.',
      imageUrl: 'https://images.unsplash.com/photo-1612383899371-9c446e7363a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVhY2glMjBHZXRhd2F5JTIwaW4lMjBNYWxkaXZlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      link: '/tours/maldives',
    },
    // Add as many offer objects as needed
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-10 text-gray-200">Special Offers and Discounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex-1 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={offer.imageUrl}
                alt={offer.title}
                className="mb-6 rounded-lg h-72 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold">{offer.discount}</span>
                <a
                  href={offer.link}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
