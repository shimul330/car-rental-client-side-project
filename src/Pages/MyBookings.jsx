import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyCarEmpty from '../Component/MyCarEmpty';
import MyBookingTable from '../Component/MyBookingTable';

const MyBookings = () => {
    const bookingData = useLoaderData();
    const [cancelBooking, setCancelBooking] = useState(bookingData);
    
    return (
        <div className='mt-4 mb-4'>
             <div>
                <h1 className='text-2xl text-center font-bold text-amber-500 mb-7'>My Car</h1>
            </div>

            {
                bookingData.length === 0 ? (
                   <MyCarEmpty></MyCarEmpty>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Car Model</th>
                                    <th>Booking Date</th>
                                    <th>Total Price</th>
                                    <th>Booking Status</th>
                                    <th>Actions</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                               {
                               cancelBooking.map(data=> <MyBookingTable  cancelBooking={cancelBooking} key={data._id} data={data} setCancelBooking={setCancelBooking} ></MyBookingTable> )
                               }
                            </tbody>
                        </table>
                    </div>
                )
            }

        </div>
    );
};

export default MyBookings;