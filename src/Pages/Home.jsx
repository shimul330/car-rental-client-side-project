import React from 'react';
import Banner from '../Component/Banner';
import WhyChoose from '../Component/WhyChoose';
import RecentPage from '../Component/RecentPage';
import ExtraSection from '../Component/ExtraSection';
import CarGallary from '../Component/CarGallary';
import DynamicTittle from '../Component/DynamicTittle';

const Home = () => {
    return (
        <div>
         <div className='mt-6'>
            <DynamicTittle title='Home'/>
              <Banner></Banner>
              <div className='mt-6'>
                    <WhyChoose></WhyChoose>
              </div>
              <div className='mt-6'>
                    <RecentPage></RecentPage>
              </div>
              <div className='mt-6'>
                    <ExtraSection></ExtraSection>
              </div>
              <div className='mt-6 mb-5'>
                    <CarGallary></CarGallary>
              </div>

         </div>
        </div>
    );
};

export default Home;