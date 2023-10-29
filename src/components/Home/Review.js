import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RiChatQuoteFill } from 'react-icons/ri';

const Review = () => {
  const reviews = [
    {
      name: 'Rakibul Islam',
      content:
        'Just had my engagements and bridals done by Ahsan Photography. He is absolutely hands-down the best photographer I have ever dealt with! He works so well with people and was especially kind with my fiancé and I. He knows just the right angles and just the right positioning in his photography as well as perfect timing of the right light needed in photo.',
    },
    {
      name: 'Sohan Emon',
      content:
        'The absolute best!! More than willing to work with our schedule. Puts in the extra time to be early and get absolutely every shot you could want! Great at finding nice locations and excellent poses. The pictures couldn’t have been better!! We have already highly recommended him to our friends who will be using him, and we couldn’t recommend him more highly!!',
    },
    {
      name: 'Shanto',
      content:
        'The absolute best!! More than willing to work with our schedule. Puts in the extra time to be early and get absolutely every shot you could want! Great at finding nice locations and excellent poses. The pictures couldn’t have been better!! We have already highly recommended him to our friends who will be using him, and we couldn’t recommend him more highly!!',
    },
    {
      name: 'Rabiul',
      content:
        'The absolute best!! More than willing to work with our schedule. Puts in the extra time to be early and get absolutely every shot you could want! Great at finding nice locations and excellent poses. The pictures couldn’t have been better!! We have already highly recommended him to our friends who will be using him, and we couldn’t recommend him more highly!!',
    },
    // Add more reviews here
  ];

  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="py-10 pb-28 pt-10 text-gray-200">
        <h1 className="text-4xl font-semibold text-center text-gray-200 mb-10">
        Traveler Stories
        </h1>
      <div className="container mx-auto px-10">
        <Carousel
          infiniteLoop
          autoPlay
          interval={2000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          className="carousel"
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <li
              className={`inline-block mx-1 ${
                isSelected ? 'bg-red-500' : 'bg-gray-500'
              }`}
              style={{ width: '8px', height: '8px', cursor: 'pointer' }}
              onClick={onClickHandler}
              key={index}
              title={label}
            />
          )}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center -translate-y-1/2 transform translate-x-1/2 top-1/2 focus:outline-none"
              >
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-0 w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center -translate-y-1/2 transform -translate-x-1/2 top-1/2 focus:outline-none"
              >
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
              </button>
            )
          }
        >
          {reviews.map((review, index) => (
            <div key={index} className="carousel-item">
              <div className="relative shadow-md shadow-white border-y rounded-lg p-8 mx-2">
                <div className="text-center">
                  <RiChatQuoteFill className="text-primary text-2xl mb-4" />
                  <p className="text-gray-200 text-lg italic">{review.content}</p>
                  <RiChatQuoteFill className="text-primary text-2xl mt-4" />
                </div>
                <div className="flex items-center justify-center mt-6">
                  <span className="w-12 h-px bg-gray-400 mx-2"></span>
                  <p className="text-primary font-medium">{review.name}</p>
                  <span className="w-12 h-px bg-gray-400 mx-2"></span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Review;
