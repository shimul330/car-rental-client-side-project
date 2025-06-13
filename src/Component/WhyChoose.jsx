import React from 'react';
import { FaCarSide } from 'react-icons/fa';

const WhyChoose = () => {
    return (
        <div >
         
                <h1 className='text-center font-semibold text-2xl mb-5'>Why Choose Us</h1>
        
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 '>
                {/* 1st card */}
                <div className="bg-gradient-to-b from-orange-400 to-orange-500 text-white rounded-xl p-6 w-72 text-center shadow-lg hover:scale-105  transition-transform duration-300">
                    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-md">
                        <FaCarSide className="text-orange-500 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-black">Wide Variety of Cars</h3>
                    <p className="text-sm text-black/80">
                        Choose from a diverse fleet of vehicles, including economy, SUVs, and luxury cars. Perfect for every journey and budget.
                    </p>
                </div>
                {/* 2nd card */}
                <div className="bg-gradient-to-b from-orange-400 to-orange-500 text-white rounded-xl p-6 w-72 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-md">
                        <FaCarSide className="text-orange-500 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-black">Customer Support</h3>
                    <p className="text-sm text-black/80">
                        24/7 assistance for all your queries.

                    </p>
                </div>
                {/* 3rd card */}
                <div className="bg-gradient-to-b from-orange-400 to-orange-500 text-white rounded-xl p-6 w-72 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-md">
                        <FaCarSide className="text-orange-500 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-black">Affordable Prices</h3>
                    <p className="text-sm text-black/80">
                        Competitive daily rates you can count on.

                    </p>
                </div>
                {/* 4th card */}
                <div className="bg-gradient-to-b from-orange-400 to-orange-500 text-white rounded-xl p-6 w-72 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-md">
                        <FaCarSide className="text-orange-500 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-black">Easy Booking Process</h3>
                    <p className="text-sm text-black/80">
                        Seamlessly book your ride in just a few clicks.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default WhyChoose;