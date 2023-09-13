import React from 'react';
import Chatbot from './Chatbot';
import { FaGlobe, FaPlane, FaUsers } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            <div className="flex justify-center items-center py-28">
        <div className="max-w-7xl p-6 rounded-lg shadow-lg transform  transition-transform duration-300">
          <h1 className="text-4xl font-semibold text-center text-gray-200 pb-10">
            About Our Website
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Welcome to our tour booking website! We are dedicated to providing you
            with unforgettable travel experiences.
          </p>
  
          <div className="mt-8 flex justify-center">
            <div className="flex items-center mr-6">
              <FaGlobe className="text-3xl text-blue-500 mr-2" />
              <span className="text-xl">Global Reach</span>
            </div>
            <div className="flex items-center mr-6">
              <FaPlane className="text-3xl text-green-500 mr-2" />
              <span className="text-xl">Travel Experts</span>
            </div>
            <div className="flex items-center">
              <FaUsers className="text-3xl text-indigo-500 mr-2" />
              <span className="text-xl">Community</span>
            </div>
          </div>
  
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-200">Our Mission</h2>
            <p className="mt-2 text-gray-300">
              At Tour Place Website, our mission is to connect travelers with
              incredible destinations, experiences, and cultures. We believe that
              travel enriches lives and builds bridges between people.
            </p>
          </div>
  
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-200">Meet Our Team</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center">
                <img
                  src="https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg"
                  alt="Team Member 1"
                  className="w-12 h-12 rounded-full"
                />
                <span className="ml-2 font-semibold text-gray-200">John Doe</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_a5NHreojXWpM9_VEIFrm8q92m-UorIkH_suQzFurC6hUeL8ETv-9l6rCvl92kePxaCQ&usqp=CAU"
                  alt="Team Member 2"
                  className="w-12 h-12 rounded-full"
                />
                <span className="ml-2 font-semibold text-gray-200">Jane Smith</span>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
  
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-200">Our Partners</h2>
            <div className="mt-4">
              <p className="text-gray-200">
                We are proud to partner with leading airlines, hotels, and travel
                agencies to bring you the best travel experiences. Our partners
                share our commitment to quality and customer satisfaction.
              </p>
            </div>
          </div>
  
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-200">Contact Us</h2>
            <div className="mt-4">
              <p className="text-gray-200">
                Have questions or need assistance? Feel free to reach out to our
                support team at <a href="mailto:support@example.com">support@example.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-semibold text-center text-gray-200 pb-10" >Any Query Message Here! 🤔</h1>
      <Chatbot></Chatbot>
        </div>
    );
};

export default About;