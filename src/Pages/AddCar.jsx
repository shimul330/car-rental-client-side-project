import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const AddCar = () => {
   const { user } = use(AuthContext);
  
    const handleAddCar = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const carData = Object.fromEntries(formData.entries());

        carData.userEmail = user.email;

        // send data in database

        fetch('https://assainment-11-server-side.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset();
            })
    }
    return (
        <div className='mt-10 mb-10 max-w-6xl mx-auto px-4 py-6 shadow-xl rounded-2xl'>
            <h1 className='text-center text-xl text-amber-600 mb-4 font-bold'>Add Car</h1>
            <form onSubmit={handleAddCar} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <fieldset className="fieldset ">
                        <legend className="text-[14px] font-medium">Car Model</legend>
                        <input type="text" name='carmodel' className="input w-full" placeholder="Car Model" />

                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="text-[14px] font-medium">Daily Rental Price</legend>
                        <input type="text" name='rentalprice' className="input w-full" placeholder="TDaily Rental Price" />

                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="text-[14px] font-medium">Vehicle Registration Number</legend>
                        <input type="text" name='registration' className="input w-full" placeholder="Vehicle Registration Number" />

                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="text-[14px] font-medium">Features (e.g., GPS, AC, etc.)</legend>
                        <input type="text" name='features' className="input w-full" placeholder="Features (e.g., GPS, AC, etc.)" />

                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="text-[14px] font-medium">Description</legend>
                        <input type="text" name='description' className="input w-full" placeholder="Description" />
                    </fieldset>


                    <fieldset className="fieldset">
                        <legend className="text-[14px] font-medium">Availability</legend>
                        <select name="availability" className="input w-full">
                            <option value="Available">Available</option>
                            <option value="unAvailable">unAvailable</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="text-[14px] font-medium">Booking Count</legend>
                        <input
                            type="text"
                            name="bookingCount"
                            placeholder='0'

                            className="input w-full bg-gray-100"
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="text-[14px] font-medium">Image url </legend>
                        <input type="text" name='image' className="input w-full" placeholder="Image url " />
                    </fieldset>
                </div>
                <fieldset className="fieldset">
                    <legend className="text-[14px] font-medium">Location </legend>
                    <input type="text" name='location' className="input w-full" placeholder="Location " />
                </fieldset>
                <button type='submit' className='btn w-full mt-4 bg-amber-500 text-white'>Submit</button>


            </form>
        </div >
    );
};

export default AddCar;