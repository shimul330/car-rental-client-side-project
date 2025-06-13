import React, { use, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';

const ConfirmModal = ({ car, onCancel, onConfirm }) => {
    const { carmodel, image, rentalprice, location, availability } = car;
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [totalCost, setTotalCost] = useState(0);
     const { user } = use(AuthContext);
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

    const handleConfirmBooking = () => {
        const bookingData = {
            carmodel,
            rentalprice,
            availability,
            location,
            image,
            startDate,
            endDate,
            totalCost,
            userEmail: user.email,
        };
       bookingData.userEmail = user.email;

        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success('Booking Successful')
                    navigate('/availableCar');
                    onConfirm();
                }
            })

    }



    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Booking Confirmation</h2>

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
                        placeholderText="Select end date"
                        className="input"
                    />
                </div>



                <p className="mb-4 font-semibold text-gray-800">
                    Total Cost: <span className="text-amber-600">${totalCost}</span>
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="btn btn-outline border-gray-400 text-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirmBooking}
                        className="btn bg-amber-600 text-white hover:bg-amber-700"
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;