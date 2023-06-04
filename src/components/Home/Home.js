import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTitle from '../../hooks/useTitle';
import Footer from '../Footer/Footer';
import Contact from './Contact';
import HomeCard from './HomeCard/HomeCard';
import HomeTopSide from './HomeTopSide/HomeTopSide';
import Review from './Review';
import Starts from './Starts';
import Gallery from './Gallery';
import Team from './Team';

const Home = () => {
    const places = useLoaderData();
    const [selectedPlace, setSelectedPlace] = useState(places[3]);
    console.log(places);
    useTitle('Home');
    const handleSelectPlace = (id) => {
        const selectPlace = places.find( place => place.id === id);
        setSelectedPlace(selectPlace);
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
       autoplaySpeed: 2000,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div className='bg-black overflow-hidden '>
        <div className="" >
          {/*min-h-screen bg-no-repeat bg-cover shadow  style={{ backgroundImage: `url(${selectedPlace.picture})` }} */}
          <div className=" bg-opacity-50 w-full h-screen flex items-end justify-end">
            <div className='grid grid-cols-1 md:grid-cols-2'>
            <div data-aos="fade-right" data-aos-duration="1000" className='flex items-end justify-center pb-20'>
                <HomeTopSide key={selectedPlace.id} selectedPlace={selectedPlace}></HomeTopSide>
            </div>
            {/* <div className='container mx-auto px-10 grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'> */}
            {/* <h1 className="text-2xl md:text-3xl font-semibold leading-none text-center text-primary mt-20">Select <span className='text-red-500'>Your Favourite Place</span></h1> */}
            <div data-aos="fade-down" data-aos-duration="1000" className=' md:p-20 lg:p-10 mt-10'>
            <Slider {...settings}>
                {
                    places.map( place => <HomeCard key={place.id} place={place} handleSelectPlace={handleSelectPlace}></HomeCard>)
                }
            </Slider>
            </div>
            </div>
            </div>
            </div>
            {/* </div> */}
            <Gallery></Gallery>
            <Team></Team>
            <Review></Review>
            <Starts></Starts>
            <Contact></Contact>
            <Footer></Footer>
        
        </div>
    );
};

export default Home;