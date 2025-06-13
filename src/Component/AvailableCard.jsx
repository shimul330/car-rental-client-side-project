import React from 'react';
import { FaCar, FaCheck, FaDollarSign } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const AvailableCard = ({ data, isList }) => {
    const {
        image, rentalprice, carmodel, location,
        description, bookingCount, availability, _id
    } = data;

    return (
        <div className={`bg-amber-100 rounded-2xl shadow-lg ${isList ? 'flex gap-4 items-center p-4' : 'p-4'}`}>
            {/* Image */}
            <div className={`${isList ? 'w-1/3' : ''}`}>
                <img className='rounded-2xl shadow-lg w-full h-[200px] object-cover' src={image} alt={carmodel} />
            </div>

            {/* Content */}
            <div className={`${isList ? 'w-2/3 space-y-2' : 'space-y-2 mt-4'}`}>
                <div className='flex items-center gap-3'>
                    <FaCar className="text-amber-500" size={20} />
                    <h1 className='text-xl font-semibold text-amber-600'>{carmodel}</h1>
                </div>

                <div className='flex items-center gap-3'>
                    <FaDollarSign className='text-yellow-500' size={20} />
                    <h3 className='text-base font-medium'>Rental Price:$ {rentalprice}</h3>
                </div>

                <div className='flex items-center gap-3'>
                    <FaLocationDot className='text-yellow-500' size={20} />
                    <h3 className='text-base font-medium'>Location: {location}</h3>
                </div>

                <div className='flex items-center gap-3'>
                    <FaCheck className="text-green-500" size={20} />
                    <h3 className='text-base font-medium'>Availability: {availability}</h3>
                </div>

                <div className='flex items-center gap-3'>
                    <FaCar className="text-blue-600" size={20} />
                    <h3 className='text-base font-medium'>Booking Count: {bookingCount}</h3>
                </div>

                <p className="text-sm text-gray-800">{description}</p>

                <div className='pt-3'>
                    <Link to={`/availablecardetails/${_id}`}>
                        <button className='btn bg-amber-500 w-full text-white'>Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AvailableCard;
