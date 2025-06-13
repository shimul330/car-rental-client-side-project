import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyBookingTable = ({ data, setCancelBooking, cancelBooking }) => {

    const {
        
        carmodel,
       
        image,

        status,
        
        
        totalCost,
        createdAt,
        _id
    } = data;

    const handleCancelBooking = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:3000/bookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCoun) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Booking has been cancel.",
                                icon: "success"
                            });
                        }
                        const cancelBookingData = cancelBooking.filter(d => d._id !== _id);
                        setCancelBooking(cancelBookingData);
                    })

            }
        });
    }



    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt={carmodel} />
                        </div>
                    </div>
                    <div>

                        <div className="text-sm opacity-50">{carmodel}</div>
                    </div>
                </div>
            </td>
            <td>

                <span className="">{createdAt}</span>
            </td>
            <td> {totalCost} </td>
            <td> {status} </td>
            <th className='flex items-center gap-2'>
               <div>
                     <button title='cancel' onClick={() => handleCancelBooking(_id)} className="  cursor-pointer"><MdDelete className='hover:text-gray-600 text-amber-500' size={20} /></button>
               </div>
                <Link to={`/mybookingupdate/${_id}`}>
                    <button title='Booking Update' className="cursor-pointer"><FaUserEdit className='hover:text-gray-600 text-amber-500' size={20} /> </button>
                </Link>
               <Link to={`/mybookingsDetails/${_id}`}> 
                 <button title='View Detais' className="cursor-pointer"><FaRegEye className='hover:text-gray-600 text-amber-500' size={20} /> </button>
               </Link>
            </th>
        </tr>
    );
};

export default MyBookingTable;