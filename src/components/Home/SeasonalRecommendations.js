import React from 'react';

const seasonalRecommendationsData = [
  {
    id: 1,
    season: 'Winter',
    title: 'Top Winter Getaways',
    description: 'Escape to a winter wonderland with our curated selection of snowy destinations. Experience thrilling activities and cozy retreats.',
    imageUrl: 'https://img.traveltriangle.com/blog/wp-content/uploads/2021/09/Top-Winter-Destinations-For-Families.jpg',
    link: '/winter-getaways',
  },
  {
    id: 2,
    season: 'Summer',
    title: 'Summer Adventure Picks',
    description: 'Explore exciting adventures in beautiful summer destinations around the world. From beach vacations to hiking expeditions, we have you covered.',
    imageUrl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/tahiti1.jpg',
    link: '/summer-adventures',
  },
  {
    id: 3,
    season: 'Spring',
    title: 'Spring Blossom Tours',
    description: 'Witness the beauty of springtime with our guided tours through blooming landscapes and gardens. Don\'t miss out on this colorful experience.',
    imageUrl: 'https://img2.chinadaily.com.cn/images/202303/10/640ae33ca31057c4b4b6d617.jpeg',
    link: '/spring-tours',
  },
  {
    id: 4,
    season: 'Autumn',
    title: 'Autumn Foliage Retreats',
    description: 'Embrace the fall season with our serene retreats amidst breathtaking autumn foliage. Explore the rustic charm of autumn destinations.',
    imageUrl: 'https://www.momondo.com/discover/wp-content/uploads/sites/260/2019/08/GettyImages_174796165_utrecht_canals_autumn.jpg',
    link: '/autumn-retreats',
  },
];

const SeasonalRecommendations = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-16 text-gray-200">Seasonal Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
          {seasonalRecommendationsData.map((recommendation) => (
            <div key={recommendation.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={recommendation.imageUrl}
                alt={recommendation.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{recommendation.title}</h3>
              <p className="text-gray-600 mb-4">{recommendation.description}</p>
              <div className="flex items-center justify-center">
                <a href={recommendation.link} className="text-blue-500 hover:underline">
                  Explore {recommendation.season}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalRecommendations;
