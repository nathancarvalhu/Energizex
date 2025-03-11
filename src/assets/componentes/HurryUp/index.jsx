import React, { useEffect, useState } from 'react';
import './styles.css';

const HurryUp = () => {
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60 * 1000); // 3 dias em milissegundos

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    
    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="container">
      {}
      <div className="left">
        {}
      </div>

      {}
      <div className="right">
        <div className="text text-green">LIMITED EDITION</div>
        <div className="text text-white">Hurry Up! 30% OFF</div>
        <div className="text">The Worlds #1 Sports Nutrition Brand</div>

        <div className="text text-offer">Offer expires in:</div>
        <div className="timer">
          <span className="day">{days}d</span>
          <span className="hour">{hours}h</span>
          <span className="minute">{minutes}m</span>
          <span className="second">{seconds}s</span>
        </div>

        <button className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default HurryUp;
