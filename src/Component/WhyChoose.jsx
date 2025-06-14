import React from 'react';
import { FaCarSide } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardData = [
  {
    title: 'Wide Variety of Cars',
    description:
      'Choose from a diverse fleet of vehicles, including economy, SUVs, and luxury cars. Perfect for every journey and budget.',
  },
  {
    title: 'Customer Support',
    description: '24/7 assistance for all your queries.',
  },
  {
    title: 'Affordable Prices',
    description: 'Competitive daily rates you can count on.',
  },
  {
    title: 'Easy Booking Process',
    description: 'Seamlessly book your ride in just a few clicks.',
  },
];

const WhyChoose = () => {
  return (
    <div className="py-10 px-4">
      <h1 className="text-center font-semibold text-3xl mb-10  text-orange-500 ">
        Why Choose Us

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gradient-to-b  from-orange-400 to-orange-500 text-white rounded-xl p-6 w-full text-center hover:shadow-amber-300 shadow-lg cursor-pointer"
          >
            <div >
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaCarSide className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">{card.title}</h3>
              <p className="text-sm text-black/80">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
