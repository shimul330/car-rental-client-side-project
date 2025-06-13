import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
const carImages = [
    'https://i.ibb.co/BH50DYkt/download1.jpg',
    'https://i.ibb.co/Z6GjHwvS/download2.jpg',
    'https://i.ibb.co/ccgKzC4t/download3.jpg',
    'https://i.ibb.co/DHYV0snV/download4.jpg',
    'https://i.ibb.co/B2X2HBWH/download5.jpg',
];

const CarGallary = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-5'>Car Gallary</h1>
            <div className="w-full max-w-xs mx-auto mt-10">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {carImages.map((img, index) => (
                        <SwiperSlide key={index} className="bg-white rounded-xl shadow-xl">
                            <img
                                src={img}
                                alt={`car-${index}`}
                                className="w-full h-72 object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CarGallary;