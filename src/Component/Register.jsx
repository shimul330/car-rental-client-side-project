import React, { use } from 'react';
import registerLottie from '../../src/assets/Lotties/register.json'
import Lottie from "lottie-react";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.init';
import { updateProfile } from 'firebase/auth';
const Register = () => {
    const navigate = useNavigate();

    const { createUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.image.value;

        // creat User
        createUser(email, password)
            .then(reuslt => {

                navigate('/')
                

                // update user profile
                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        toast.success('Registration successfull');
                        
                    })
                    .catch(error => toast.warning(error));

            })
            .catch((error) => {
                toast.warning('Sorry not a properly Registration');
            });




    }
    return (
        <div className='m-10 rounded-2xl'>
            <div className=" min-h-screen">
                <div className="hero-content  flex-col gap-10 ">

                    <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <div className='mx-auto'>
                                <Lottie style={{ width: '100px' }} animationData={registerLottie} loop={true}></Lottie>
                            </div>
                            <h1 className="text-4xl text-center font-bold text-amber-600">Register now!</h1>
                            <form onSubmit={handleRegister} className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input " placeholder="Name" required />
                                <label className="label">Photo URL</label>
                                <input type="text" name='image' className="input" placeholder="URL" required />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" required />
                                <button type='submit' className="btn text-white mt-4 bg-amber-500">Register</button>
                            </form>
                            <h3 className='text-center text-base'>Don't have an account.<span className='text-amber-500 underline '> <Link to='/login'>Login</Link> </span> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;