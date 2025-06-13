import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';


const MyCarTable = ({ data, deleteCar, setDeleteCar, setSelectedCar }) => {
    const { image, rentalprice, createdAt, carmodel, bookingCount, availability, _id } = data;
    

  

    const handleDataDelete = (_id) => {

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

                fetch(`http://localhost:3000/cars/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your data has benn deleted.",
                                icon: "success"
                            });
                        }
                        const remainingCarData = deleteCar.filter(d => d._id !== _id);
                        setDeleteCar(remainingCarData);
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
                                    alt="car image" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold"> {carmodel} </div>

                        </div>
                    </div>
                </td>
                <td>

                    <span className="badge ">{rentalprice}</span>
                </td>
                <td>{bookingCount}</td>
                <td>{availability}</td>
                <td>{createdAt}</td>

                <th>
                    <button onClick={() => handleDataDelete(_id)} className="mr-5 cursor-pointer"><MdDelete fill='red' size={20} /></button>
                    <button onClick={() => setSelectedCar(data)}  className="cursor-pointer"><FaUserEdit fill='red' size={20} /> </button>
                </th>


            </tr>
          
        

    );
};

export default MyCarTable;