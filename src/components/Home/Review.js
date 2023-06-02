import React from 'react';

const Review = () => {
    return (
        <section className="py-10 pb-3 pt-10 text-gray-200">
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                <h1 className="text-2xl md:text-3xl font-semibold leading-none text-center text-primary">Best <span className='text-red-500'>Reviews</span></h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                <div className="flex flex-col items-center mx-12 lg:mx-0">
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-6 py-1 text-lg italic">Just had my engagements and bridals done by Ahsan Photography. He is absolutely hands-down the best photographer I have ever dealt with! He works so well with people and was especially kind with my fiancé and I. He knows just the right angles and just the right positioning in his photography as well as perfect timing of the right light needed in photo.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg dark:bg-orange-400"></span>
                    <p>Rakibul Islam</p>
                </div>
                <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                            <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-6 py-1 text-lg italic">The absolute best!! More than willing to work with our schedule. Puts in the extra time to be early and get absolutely every shot you could want! Great at finding nice locations and excellent poses. The pictures couldn’t have been better!! We have already highly recommended him to our friends who will be using him, and we couldn’t recommend him more highly!!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                            <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg dark:bg-orange-400"></span>
                    <p>Sohan Emon</p>
                </div>
            </div>
        </section>
    );
};

export default Review;