import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { data, Link, useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const MyBookingUpdate = () => {
    const updateBookingData = useLoaderData();
    const { carmodel, image, rentalprice, location, availability, _id } = updateBookingData;
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalCost, setTotalCost] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const days = (end - start) / (1000 * 60 * 60 * 24) + 1;
            if (days > 0) {
                setTotalCost(days * parseInt(rentalprice));
            } else {
                setTotalCost(0);
            }
        }
    }, [startDate, endDate]);

    const handleBookingUpdate = () => {
        const updatBookingData = {
            carmodel,
            rentalprice,
            availability,
            location,

            image,
            startDate,
            endDate,
            totalCost,
        };
        fetch(`http://localhost:3000/bookings/${_id}`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatBookingData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    toast.success('Booking Update Succesfull')
                    navigate('/mybookings')
                }
            })
    }

    return (
        <>
             <Link to='/mybookings'> 
                <div  className='mt-4'>
                    <button className='btn btn-accent mb-5 '><FaLongArrowAltLeft /> My Booking</button>
                </div>
                    
            </Link>
            <div className=" flex justify-center items-center mt-10 mb-10">
           
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Booking Confirmation Update</h2>

                <p className="mb-2 text-gray-700">
                    You are booking: <strong>{carmodel}</strong>
                </p>
                <p className="mb-2 text-gray-700">
                    Price Per Day: <strong>${rentalprice}</strong>
                </p>
                <p className="mb-4 text-gray-700">
                    Availability: <strong>{availability}</strong>
                </p>

                <div>
                    <label className="block mb-1 font-medium text-gray-700" >Start Date:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="input"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700" >End Date:</label>
                    <input
                        type="date"
                        value={endDate}
                        min={startDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        placeholder="Select end date"
                        className="input"
                    />
                </div>



                <p className="mb-4 font-semibold text-gray-800">
                    Total Cost: <span className="text-amber-600">${totalCost}</span>
                </p>

                <div>

                    <button
                        onClick={handleBookingUpdate}
                        className="btn bg-amber-600 text-white hover:bg-amber-700"
                    >
                        Update Booking
                    </button>
                </div>
            </div>
        </div>

        </>
        
    );
};

export default MyBookingUpdate;