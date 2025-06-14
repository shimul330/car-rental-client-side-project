import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';


const MainLayout = () => {
    return (
        <div >
          
           <div className='sticky top-0 z-50 '>
                 <Navbar></Navbar>
           </div>
            <div className='min-h-[calc(100vh-284px)] max-w-6xl mx-auto '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;