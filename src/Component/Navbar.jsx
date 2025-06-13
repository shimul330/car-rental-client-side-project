import React, { use, useEffect, useState } from 'react';
import logoImg from '../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const { user, userLogOut, info } = use(AuthContext);

    const handleLogOut = () => {
        userLogOut().then(() => {
            console.log("sign out")
        }).catch((error) => {
            // An error happened.
        });
    }

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScorll = () => {
            setIsScrolled(window.scrollY > 10)
        };

        window.addEventListener('scroll', handleScorll)
        return () => window.removeEventListener('scroll', handleScorll)
    }, [])

    return (
        <div >
            <div className={`navbar  transition-all duration-300 ${isScrolled
                ? 'bg-white/30 backdrop-blur-md shadow-sm'
                : 'bg-base-100 shadow-md'
                }   `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content   rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                user ? <><NavLink to='/'>
                                    <li className='text-[15px] font-medium text-amber-700 mr-5 '>Home</li>
                                </NavLink>
                                    <NavLink to='/availableCar'>
                                        <li className='text-[15px] font-medium text-amber-700 mr-5'>Available Cars</li>
                                    </NavLink>
                                    <NavLink to='/addCar'>
                                        <li className='text-[15px] font-medium text-amber-700 mr-5'>Add Car</li>
                                    </NavLink>
                                    <NavLink to='/myCars'>
                                        <li className='text-[15px] font-medium text-amber-700 mr-5'> My Cars</li>
                                    </NavLink>
                                    <NavLink to='/mybookings'>
                                        <li className='text-[15px] font-medium text-amber-700 mr-5'> My Bookings</li>
                                    </NavLink>

                                </> : <><NavLink to='/'><li className='text-[15px] font-medium text-amber-700 mr-5 '>Home</li></NavLink>
                                    <NavLink to='/availableCar'><li className='text-[15px] font-medium text-amber-700 mr-5'>Available Cars</li></NavLink></>
                            }
                        </ul>
                    </div>
                    <div>
                        <img className='w-20 h-16' src={logoImg} alt="" />
                    </div>
                    <a className="font-semibold text-amber-500 text-lg">Car Renter </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user ? <><NavLink to='/'>
                                <li className='text-[15px] font-medium text-amber-700 mr-5 '>Home</li>
                            </NavLink>
                                <NavLink to='/availableCar'>
                                    <li className='text-[15px] font-medium text-amber-700 mr-5'>Available Cars</li>
                                </NavLink>
                                <NavLink to='/addCar'>
                                    <li className='text-[15px] font-medium text-amber-700 mr-5'>Add Car</li>
                                </NavLink>
                                <NavLink to='/myCars'>
                                    <li className='text-[15px] font-medium text-amber-700 mr-5'> My Cars</li>
                                </NavLink>
                                <NavLink to='/mybookings'>
                                    <li className='text-[15px] font-medium text-amber-700 mr-5'> My Bookings</li>
                                </NavLink>

                            </> : <><NavLink to='/'><li className='text-[15px] font-medium text-amber-700 mr-5 '>Home</li></NavLink>
                                <NavLink to='/availableCar'><li className='text-[15px] font-medium text-amber-700 mr-5'>Available Cars</li></NavLink></>
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className='mr-5'  >
                        {
                            info && <div className='flex items-center gap-3'>
                                <h3 className='text-[17px] text-amber-800 font-bold'> {info.displayName} </h3>
                                {info?.photoURL ? (
                                    <img className='w-[35px] rounded-full' src={info.photoURL} alt="User" />
                                ) : (
                                    <p></p>
                                )}

                            </div>
                        }
                    </div>
                    <div>

                        {
                            user ? <Link to='/login'><button onClick={handleLogOut} className="btn btn-outline btn-warning">LogOut</button></Link> : <Link to='/login'><button className="btn btn-outline btn-warning">Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;