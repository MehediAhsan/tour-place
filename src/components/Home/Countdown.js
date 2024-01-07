// Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-01-31 00:00:00'); // Replace with your tour date
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(interval);
        // Handle tour date reached
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-14 my-14">
      <div className="container mx-auto text-center -skew-y-2">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">Upcoming Tour Countdown</h2>
        <div className="flex justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="countdown-item">
            <span className="text-2xl md:text-4xl font-bold">{countdown.days}</span>
            <span className="text-xl">Days</span>
          </div>
          <div className="countdown-item">
            <span className="text-2xl md:text-4xl font-bold">{countdown.hours}</span>
            <span className="text-xl">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="text-2xl md:text-4xl font-bold">{countdown.minutes}</span>
            <span className="text-xl">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="text-2xl md:text-4xl font-bold">{countdown.seconds}</span>
            <span className="text-xl">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
