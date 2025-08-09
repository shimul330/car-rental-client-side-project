import React, { useContext, useEffect, useState } from 'react';
import logoImg from '../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, userLogOut, info } = useContext(AuthContext);

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                toast.success("Logout Successful");
            })
            .catch(() => {
                toast.warning("Please try again");
            });
    };

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = (
        <>
            {user ? (
                <>
                    <NavLink to='/'><li className='text-[15px] font-medium text-white lg:text-amber-700 mr-5'>Home</li></NavLink>
                    <NavLink to='/availableCar'><li className='text-[15px] font-medium text-white lg:text-amber-700 mr-5'>Available Cars</li></NavLink>
                    <NavLink to='/addCar'><li className='text-[15px] font-medium text-white lg:text-amber-700 mr-5'>Add Car</li></NavLink>
                    <NavLink to='/myCars'><li className='text-[15px] font-medium text-white lg:text-amber-700 mr-5'>My Cars</li></NavLink>
                    <NavLink to='/mybookings'><li className='text-[15px] font-medium text-white lg:text-amber-700 mr-5'>My Bookings</li></NavLink>

                    {/* Mobile view logout button */}
                    <li className='block lg:hidden mt-2'>
                        <button onClick={handleLogOut} className="btn btn-warning w-full">LogOut</button>
                    </li>
                </>
            ) : (
                <>
                    <NavLink to='/'><li className='text-[15px] font-medium text-white lg:text-amber-700 mr-5'>Home</li></NavLink>
                    <NavLink to='/availableCar'><li className='text-[15px] font-medium text-white lg:text-amber-700 mr-5'>Available Cars</li></NavLink>
                    <li className='block lg:hidden mt-2'>
                        <Link to='/login'><button className="btn btn-warning w-full">Login</button></Link>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div>
            <div
                className={`navbar transition-all duration-300 ${isScrolled
                    ? 'bg-white/30 backdrop-blur-md shadow-sm'
                    : 'bg-base-100 shadow-md'
                    }`}
            >
                <div className="navbar-start">
                    {/* Mobile Menu Button */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-black"
                        >
                            {menuItems}
                        </ul>
                    </div>

                    {/* Logo + Title */}
                    <div className="flex items-center gap-2">
                        <img className='w-20 h-16' src={logoImg} alt="logo" />
                        <span className="font-semibold text-amber-500 text-lg whitespace-nowrap">Car Renter</span>
                    </div>
                </div>

                {/* Center Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>

                {/* ✅ User info সব ডিভাইসে দেখা যাবে */}
                <div className="navbar-end flex items-center">
                    {info && (
                        <div className='flex items-center gap-3 mr-5'>
                            <h3 className='text-xs md:text-[17px] text-amber-800 font-bold'>{info.displayName}</h3>
                            {info?.photoURL && (
                                <img className='w-[35px] rounded-full' src={info.photoURL} alt="User" />
                            )}
                        </div>
                    )}
                    {user ? (
                        <button onClick={handleLogOut} className="btn btn-outline btn-warning hidden lg:inline-flex">LogOut</button>
                    ) : (
                        <Link to='/login'><button className="btn btn-outline btn-warning hidden lg:inline-flex">Login</button></Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
