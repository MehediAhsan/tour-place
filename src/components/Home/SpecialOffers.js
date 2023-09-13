import React from 'react';

const SpecialOffers = () => {
  const offers = [
    {
      id: '1',
      title: 'Hiron Point (Sundarbans)',
      discount: '20% OFF',
      description: 'Discover Hiron Point with our special offer.',
      imageUrl: 'https://images.unsplash.com/photo-1545063914-a1a6ec821c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/tours/bali',
    },
    {
      id: '2',
      title: 'Inani Beach,Coxs Bazar',
      discount: '15% OFF',
      description: 'Embark on an epic Inani Beach adventure.',
      imageUrl: 'https://images.unsplash.com/photo-1595879468810-210db077599c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      link: '/tours/patagonia',
    },
    {
      id: '3',
      title: 'Lushai Heritage Village, Sajek',
      discount: '10% OFF',
      description: 'Experience the Lushai Heritage Village, Sajek',
      imageUrl: 'https://images.unsplash.com/photo-1548853713-b860e45ca1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      link: '/tours/kyoto',
    },
    {
      id: '4',
      title: 'Jhau bon at Kuakata',
      discount: '25% OFF',
      description: 'Witness the amazing wildlife in Jhau bon',
      imageUrl: 'https://images.unsplash.com/photo-1682408098915-6a63ccd5018c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      link: '/tours/serengeti',
    },
    {
      id: '3',
      title: 'Konglak Hill, Sajek',
      discount: '10% OFF',
      description: 'Experience the LKonglak Hill, Sajek',
      imageUrl: 'https://images.unsplash.com/photo-1589307357647-4e11b161a2b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80',
      link: '/tours/kyoto',
    },
    {
      id: '2',
      title: 'Marine Drive,Coxs Bazar',
      discount: '30% OFF',
      description: 'Relax on the pristine beaches of Marine Drive.',
      imageUrl: 'https://images.unsplash.com/photo-1637397299108-cabe6bc34522?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      link: '/tours/maldives',
    },
    // Add as many offer objects as needed
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-200 mb-10">
          Special Offers and Discounts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="relative overflow-hidden">
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  className="h-64 w-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity opacity-0 hover:opacity-100 duration-300">
                  <a
                    href={`/booking/${offer.id}`}
                    className="text-white font-semibold text-lg hover:underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-semibold">
                    {offer.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
