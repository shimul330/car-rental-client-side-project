import React from 'react';
import Swal from 'sweetalert2';

const EditCarModal = ({ car, closeModal, setDeleteCar }) => {
    const {
        image, rentalprice, carmodel, features, location,
        description, registration, bookingCount, availability, _id
    } = car;

    const handleUpdateCar = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCar = Object.fromEntries(formData.entries());
        

        fetch(`http://localhost:3000/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setDeleteCar(prevCars =>
                        prevCars.map(c => c._id === _id ? { ...c, ...updateCar } : c)
                    );
                    closeModal();
                }
            });
    };

    return (
        <dialog id="edit_modal" className="modal modal-open">
            <div className="modal-box max-w-4xl transition-all ease-in-out bg-base-100" data-theme="dark">
                <h3 className="font-bold text-xl text-center text-amber-600 mb-4">Update Car</h3>

                <form onSubmit={handleUpdateCar} className="space-y-4">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <fieldset>
                            <legend className="text-sm font-medium">Car Model</legend>
                            <input type="text" name='carmodel' defaultValue={carmodel} className="input input-bordered w-full" required />
                        </fieldset>

                        <fieldset>
                            <legend className="text-sm font-medium">Daily Rental Price</legend>
                            <input type="text" name='rentalprice' defaultValue={rentalprice} className="input input-bordered w-full" required />
                        </fieldset>

                        <fieldset>
                            <legend className="text-sm font-medium">Registration Number</legend>
                            <input type="text" name='registration' defaultValue={registration} className="input input-bordered w-full" required />
                        </fieldset>

                        <fieldset>
                            <legend className="text-sm font-medium">Features</legend>
                            <input type="text" name='features' defaultValue={features} className="input input-bordered w-full" />
                        </fieldset>

                        <fieldset>
                            <legend className="text-sm font-medium">Description</legend>
                            <input type="text" name='description' defaultValue={description} className="input input-bordered w-full" />
                        </fieldset>

                        <fieldset>
                            <legend className="text-sm font-medium">Availability</legend>
                            <select name="availability" defaultValue={availability} className="select select-bordered w-full">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <legend className="text-sm font-medium">Booking Count</legend>
                            <input type="text" name="bookingCount" defaultValue={bookingCount} className="input input-bordered w-full" />
                        </fieldset>

                        <fieldset>
                            <legend className="text-sm font-medium">Image URL</legend>
                            <input type="text" name='image' defaultValue={image} className="input input-bordered w-full" />
                        </fieldset>
                    </div>

                    <fieldset>
                        <legend className="text-sm font-medium">Location</legend>
                        <input type="text" name='location' defaultValue={location} className="input input-bordered w-full" />
                    </fieldset>

                    <div className="modal-action">
                        <button type="submit" className='btn btn-primary'>Save Changes</button>
                        <button type="button" onClick={closeModal} className='btn'>Cancel</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default EditCarModal;
