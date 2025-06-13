import React, {   useState } from 'react';
import { useLoaderData } from 'react-router';
import MyCarTable from '../Component/MyCarTable';
import MyCarEmpty from '../Component/MyCarEmpty';
import EditCarModal from '../Component/EditCarModal';



const MyCars = () => {

    const carData = useLoaderData();
    
    
    const [deleteCar, setDeleteCar] = useState(carData);
    const [selectedCar, setSelectedCar] = useState(null);
   

    return (
         <div className='p-12'>
            <div>
                <h1 className='text-2xl text-center font-bold text-amber-500 mb-7'>My Car</h1>
            </div>

            {
                deleteCar.length === 0 ? (
                   <MyCarEmpty></MyCarEmpty>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Car Model</th>
                                    <th>Daily Rental Price</th>
                                    <th>BookingCount</th>
                                    <th>Availability</th>
                                    <th>Date Added</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    deleteCar.map(data => (
                                        <MyCarTable
                                            key={data._id}
                                            data={data}
                                            
                                            deleteCar={deleteCar}
                                            setDeleteCar={setDeleteCar}
                                            setSelectedCar={setSelectedCar}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }

            {selectedCar && (
                <EditCarModal
                    car={selectedCar}
                    closeModal={() => setSelectedCar(null)}
                    setDeleteCar={setDeleteCar}
                />
            )}

        </div>
    );
};

export default MyCars;