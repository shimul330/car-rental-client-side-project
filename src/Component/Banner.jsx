import React from 'react';


import slider1Img from '../assets/images5.jpg';
import slider2Img from '../assets/imageyello.jpg';
import slider3Img from '../assets/sider 4.jpg';
import slider4Img from '../assets/slider5.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router';


const Banner = () => {

  

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[400px]">
          <img
            src={slider1Img}
            alt="Slide 1"
            className="rounded-xl object-cover w-full h-[400px] border-b-4 border-green-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 rounded-xl flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">Welcome to Car Rentar</h2>
            <p className="text-lg sm:text-xl mb-4">A car is every person's dream.</p>
            <Link to="/availableCar">
              <button className="btn bg-amber-500 text-white px-6 py-2 rounded shadow hover:bg-amber-600 transition">Go Available Car</button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[400px]">
          <img
            src={slider2Img}
            alt="Slide 2"
            className="rounded-xl object-cover w-full h-[400px] border-b-4 border-green-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 rounded-xl flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">Welcome to Car Rentar</h2>
            <p className="text-lg sm:text-xl mb-4">A car is every person's dream.</p>
            <Link to="/availableCar">
              <button className="btn bg-amber-500 text-white px-6 py-2 rounded shadow hover:bg-amber-600 transition">Go Available Car</button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[400px]">
          <img
            src={slider3Img}
            alt="Slide 2"
            className="rounded-xl object-cover w-full h-[400px] border-b-4 border-green-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 rounded-xl flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">Welcome to Car Rentar</h2>
            <p className="text-lg sm:text-xl mb-4">A car is every person's dream.</p>
            <Link to="/availableCar">
              <button className="btn bg-amber-500 text-white px-6 py-2 rounded shadow hover:bg-amber-600 transition">Go Available Car</button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[400px]">
          <img
            src={slider4Img}
            alt="Slide 2"
            className="rounded-xl object-cover w-full h-[400px] border-b-4 border-green-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 rounded-xl flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">Welcome to Car Rentar</h2>
            <p className="text-lg sm:text-xl mb-4">A car is every person's dream.</p>
            <Link to="/availableCar">
              <button className="btn bg-amber-500 text-white px-6 py-2 rounded shadow hover:bg-amber-600 transition">Go Available Car</button>
            </Link>
          </div>
        </SwiperSlide>

     
      </Swiper>
    </div>
    
  );
};

export default Banner;
