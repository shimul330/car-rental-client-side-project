import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import slider1Img from '../assets/images5.jpg';
import slider2Img from '../assets/imageyello.jpg';
import { Link } from 'react-router';

const Banner = () => {

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="shadow-2xl">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={slider1Img}
            alt="Slide 1"
            className="object-cover mx-auto h-[600px] rounded-lg border-b-2 border-green-500 w-full"
            loading="lazy"
          />
          {/* 🔹 Text on top with no background */}
          <div className="absolute space-y-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-4xl font-bold text-amber-400">Welcome to Car Rentar</h2>
            <p className="text-xl mt-2 text-white">A car is every person's dream. </p>
            <Link to='/availableCar'>
              <button className='btn bg-amber-500'>Go Available Car</button>
            </Link>
          </div>
          
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={slider2Img}
            alt="Slide 2"
            className="object-cover mx-auto h-[600px] rounded-lg border-b-2 border-green-500 w-full"
            loading="lazy"
          />
          <div className="absolute space-y-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-4xl font-bold  text-amber-400 shadow">Welcome to Car Rentar</h2>
            <p className=" mt-2 text-white text-xl mb-3">A car is every person's dream.</p>
             <Link to='/availableCar'>
              <button className='btn bg-amber-500'>Go Available Car</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
