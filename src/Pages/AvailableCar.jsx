import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AvailableCard from '../Component/AvailableCard';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { HiMiniArrowLeftStartOnRectangle } from 'react-icons/hi2';
import { IoMdSearch } from 'react-icons/io';
import DynamicTittle from '../Component/DynamicTittle';



const AvailableCar = () => {
    const availableData = useLoaderData();
    const [toggle, setToggle] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [sortOrder, setSortOrder] = useState("");
  


    const handleToggle = () => {
        setToggle(prev => !prev);
    };

    const filteredData = availableData.filter(car => {
        const search = searchText.toLowerCase();
        return (
            car.carmodel.toLowerCase().includes(search) ||
            car.location.toLowerCase().includes(search) ||
            car.rentalprice.toLowerCase().includes(search)

        );
    });

    const sortedData = [...filteredData].sort((a, b) => {
        const priceA = parseFloat(a.rentalprice);
        const priceB = parseFloat(b.rentalprice);


        if (sortOrder === 'low') return priceA - priceB;
        if (sortOrder === 'high') return priceB - priceA;
        return 0;
    });

    return (
        <div className='mt-12 mb-12 px-2 md:px-0 ' >
             <DynamicTittle title='Available Cars'/>
            {/*  Search Box */}
            <div className="mb-5 flex flex-col md:flex-row justify-between items-center gap-4">
                {/*  Search Box */}
                <div className="relative w-full md:w-1/3">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <IoMdSearch />
                    </span>
                    <input
                        type="text"
                        placeholder="Search by car model, location, or price"
                        className="input input-bordered w-full pl-10 pr-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>

                {/*  Sort Dropdown */}
                <div className='flex items-center gap-5'>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="select select-bordered h-[44px] shadow-2xl md:h-[44px]"

                    >
                        <option value="">Sort by Price</option>
                        <option value="low">Low Price</option>
                        <option value="high">High price</option>
                    </select>

                    {/*  Toggle Button */}
                    <button
                        onClick={handleToggle}
                        className={`btn h-[44px] md:h-[44px] px-4 flex items-center gap-2 ${toggle ? 'bg-amber-600 text-white' : 'btn-primary'}`}
                    >
                        {toggle ? <FaArrowRightToBracket /> : <HiMiniArrowLeftStartOnRectangle size={18} />}
                        {toggle ? "Switch to Grid View" : "Switch to List View"}
                    </button>
                </div>
            </div>

            <div className={`${toggle ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"}`}>
                {
                    sortedData.map(data => <AvailableCard key={data._id} data={data} isList={toggle}></AvailableCard>)
                }
            </div>
        </div>
    );
};

export default AvailableCar;