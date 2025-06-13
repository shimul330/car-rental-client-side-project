import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { FaCar, FaCheck, FaDollarSign } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdAppRegistration, MdBrowserUpdated} from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';

const MyBookingDetails = () => {
    const detailsData = useLoaderData();
    console.log(detailsData)
    const {
  availability,
  carmodel,
  createdAt,
  endDate,
  image,
  location,
  rentalprice,
  startDate,

  totalCost,
  
} = detailsData;

    return (
        <div className="mt-9 mb-12">
            <Link
                to='/mybookings'
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-amber-500 transition duration-300 ease-out border-2 border-amber-500 rounded-full shadow-md group mb-4"
            >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-amber-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                   Back to My Booking
                </span>
                <span className="relative invisible">Back to My Booking</span>
            </Link>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-amber-50 rounded-2xl shadow-xl p-6 items-center">

                {/*  Car Image */}
                <div className="w-full  h-full flex justify-center items-center">
                    <img
                        src={image}
                        alt={carmodel}
                        className="rounded-xl w-full max-h-[500px] object-cover shadow-lg"
                    />
                </div>

                {/*  Car Info */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-amber-700">{carmodel}</h2>

                    <p className="text-gray-600 flex items-center gap-2">
                        <FaLocationDot size={15} className="text-amber-600" />
                        <span>{location}</span>
                    </p>

                    <p className="text-lg text-gray-700 flex items-center gap-2">
                        <FaDollarSign className='text-yellow-500' size={15} />
                        <span className="font-semibold">Price:</span> ${rentalprice} / day
                    </p>
                    
                    <p className="text-lg text-gray-700 flex items-center gap-2">
                        <CiCalendarDate className='text-yellow-500' size={15}/>
                        <h3 > <span className='font-medium'>Start Date:</span> {startDate} </h3>
                    </p>
                    <p className="text-lg text-gray-700 flex items-center gap-2">
                        <CiCalendarDate className='text-yellow-500' size={15}/>
                        <h3 > <span className='font-medium'>End Date:</span> {endDate} </h3>
                    </p>
                    <p className="text-lg text-gray-700 flex items-center gap-2">
                        <CiCalendarDate className='text-yellow-500' size={15}/>
                        <h3 > <span className='font-medium'>Booking Date:</span> {createdAt} </h3>
                    </p>
                    <p className="text-lg text-gray-700 flex items-center gap-2">
                        
                        <h3 > <span className='font-medium'>$ TotalCost:</span> {totalCost} </h3>
                    </p>

                    

                    <p className="text-gray-800 flex items-center gap-2">
                        <FaCheck className="text-green-500" size={15} />
                        <span className="font-semibold">Availability:</span> {availability}
                    </p>

                    

                    
                    
                    
                </div>
            </div>
            </div>
    );
};

export default MyBookingDetails;