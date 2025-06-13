import React, { use, useRef } from 'react';
import Lottie from "lottie-react";
import loginLottie from '../../src/assets/Lotties/login.json'
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { GiBleedingEye } from 'react-icons/gi';
import Swal from 'sweetalert2';

const Login = () => {
    const { userLogin, signInWithGoogle, setInfo, resetPassword } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';
    const emailRef = useRef();

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                toast.success('login successfull');
                setInfo(result.user)
                navigate(from)


            })
            .catch((error) => {

                toast.error('Error');
            });

    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        // User Login
        userLogin(email, password)
            .then(result => {
                toast.success('successfull');
                navigate(from)
            })
            .catch((error) => {
                toast.error('Error');
            });
        form.reset();
    }

    const handleForgatePssword = () => {

        const email = emailRef.current.value;

        resetPassword(email)
            .then(() => {
                Swal.fire({
                    title: "A password reset email is send. Please check your email",
                    showClass: {
                        popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
    `
                    },
                    hideClass: {
                        popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
    `
                    }
                });
            })
            .catch((error)=>{
                toast.warning('error', error)
            })

    }


    return (
        <div className='m-10 rounded-2xl'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={loginLottie} loop={true}></Lottie>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-amber-600 text-center">Login now!</h1>
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input pr-10"
                                    placeholder="Password"
                                />



                                <div onClick={handleForgatePssword}><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn text-white mt-4 bg-amber-500">Login</button>
                            </form>
                            <h3 className='text-center text-base'>Don't have an account.<span className='text-amber-500 underline '> <Link to='/register'>Register</Link> </span> </h3>
                            <div className='divider'>OR</div>
                            <button onClick={handleGoogleSignin} className="btn bg-white pt-2  text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;