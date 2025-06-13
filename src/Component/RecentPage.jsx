import { formatDistanceToNow } from 'date-fns';
import React, { useEffect, useState } from 'react';
import RecentPageCar from './RecentPageCar';

const RecentPage = () => {
    const [latestCar, setLatestCar] = useState([]);
    
    useEffect(()=>{
        fetch('https://assainment-11-server-side.vercel.app/latest-cars')
        .then(res=>res.json())
        .then(data=>{
            setLatestCar(data)
        })
    },[])
    
   
    return (
        <div>
            <h1 className='text-center font-semibold text-2xl mb-5'>Recent Page</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                   latestCar.map(card=> <RecentPageCar key={card._id} card={card}></RecentPageCar> ) 
                }
            </div>
        </div>
//         Car Gallery with slider

// 📍 Map location with animated pins

// 🎯 “How It Works” step animation
    );
};

export default RecentPage;