import React from 'react';
import errorImg from '../assets/errorcar.jpg';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className='pt-16'>
            <div className='shadow-xl w-[800px] mx-auto pb-8 '>
                <figure>
                    <img className='w-[400px] mx-auto' src={errorImg} alt="" />
                </figure>
                <h1 className='text-3xl font-bold text-center mb-3'>404 Not Found!</h1>
                <h1 className='text-center text-2xl text-red-600 font-bold mb-3'>Don't match the any data.</h1>
                <div className='text-center'>
                    <Link to='/'>
                        <button className='btn bg-amber-600 text-white rounded-2xl'>Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;