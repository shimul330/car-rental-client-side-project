import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa6';
import { motion } from "framer-motion";

const RecentPageCar = ({ card }) => {
    const {
        image,
        carmodel,
        rentalprice,
        availability,
        createdAt
    } = card;

    const datePosted = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

    return (
         <motion.div
            initial={{ opacity: 0, y: 50 }}     // Start from lower position
            whileInView={{ opacity: 1, y: 0 }}  // Move up and become visible
            transition={{ duration: 0.5 }}      // Smooth speed
            viewport={{ once: true }}           // Animate only once on scroll
            className="bg-orange-100 rounded-xl shadow-md px-3 py-4 w-full hover:shadow-xl transition duration-300"
        >
            {/* Car Image */}
            <img
                src={image}
                alt={carmodel}
                className="rounded-lg w-full h-40 object-cover mb-3"
            />

            {/* Car Model */}
            <h2 className="text-lg font-bold text-red-800 flex items-center gap-1 mb-1">
                <FaCarSide className='text-orange-500' />
                {carmodel}
            </h2>

            {/* Price */}
            <p className="text-sm text-gray-700 flex items-center gap-1 mb-1">
                <FaDollarSign className='text-orange-600' />
                <span className="font-semibold">Per Day Price:</span> ${rentalprice}/day
            </p>

            {/* Availability */}
            <p className="text-sm text-gray-700 flex items-center gap-1 mb-1">
                <FaCheckCircle className='text-green-500' />
                {availability}
            </p>

            {/* Date Posted */}
            <p className="text-sm text-gray-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                Added: {datePosted}
            </p>
        </motion.div>
    );
};

export default RecentPageCar;
