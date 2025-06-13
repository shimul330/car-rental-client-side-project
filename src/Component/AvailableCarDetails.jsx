import React, { useState } from 'react';
import { FaCar, FaCheck, FaDollarSign, FaHandPointLeft, FaLocationDot } from 'react-icons/fa6';
import { MdAppRegistration, MdBrowserUpdated, MdDescription } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';
import ConfirmModal from './ConfirmModal';
// import availImg from '../assets/availablecar.jpg';


const AvailableCarDetails = () => {
    const carDetails = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const {
        image,
        rentalprice,
        carmodel,
        location,
        registration,
        features,
        description,
        bookingCount,
        availability,
    } = carDetails;

    const handleConfirmBooking = () => {
        setShowModal(false);
        // navigate('/myBooking');
    };

    return (
        <div className="mt-9 mb-12">
            <Link
                to='/availableCar'
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-amber-500 transition duration-300 ease-out border-2 border-amber-500 rounded-full shadow-md group mb-4"
            >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-amber-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Back to Available Car
                </span>
                <span className="relative invisible">Back to Available Car</span>
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

                    <p className="text-gray-800 leading-relaxed flex items-center gap-2">
                        <MdDescription className='text-yellow-400' size={15} />
                        <span className="font-semibold">Description:</span> {description}
                    </p>

                    <p className="text-gray-800 flex items-center gap-2">
                        <FaCheck className="text-green-500" size={15} />
                        <span className="font-semibold">Availability:</span> {availability}
                    </p>

                    <p className="text-gray-800 flex items-center gap-2">
                        <MdAppRegistration size={15} />
                        <span className="font-semibold">Registration:</span> {registration}
                    </p>

                    <p className="text-gray-800 flex items-center gap-2">
                        <FaCar className="text-blue-600" size={15} />
                        <span className="font-semibold">Total Bookings:</span> {bookingCount}
                    </p>
                    <p className="text-gray-800 flex items-center gap-2">
                        <MdBrowserUpdated size={15} />
                        <span className="font-semibold">Features:</span> {features}
                    </p>

                    <button onClick={() => setShowModal(true)} className="btn bg-amber-600 w-full text-white hover:bg-amber-700 transition-all duration-300">
                        Book Now
                    </button>
                </div>
            </div>

            {showModal && (
                <ConfirmModal
                    car={carDetails}
                    onCancel={() => setShowModal(false)}
                    onConfirm={handleConfirmBooking}
                >

                </ConfirmModal>
            )}
        </div>
    );
};

export default AvailableCarDetails;