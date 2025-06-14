import React from 'react';
import Banner from '../Component/Banner';
import WhyChoose from '../Component/WhyChoose';
import RecentPage from '../Component/RecentPage';
import ExtraSection from '../Component/ExtraSection';
import CarGallary from '../Component/CarGallary';
import DynamicTittle from '../Component/DynamicTittle';
import bgLottie from '../assets/Lotties/bgLottie.json'
import Lottie from 'lottie-react';

const Home = () => {
      return (
            <div className="relative min-h-screen overflow-hidden">
                  <Lottie animationData={bgLottie} loop autoplay className="absolute inset-0 w-full h-[900px] object-cover opacity-8 z-0">

                  </Lottie>
                  <div className='mt-6'>
                        <DynamicTittle title='Home' />
                       <div>
                               <Banner></Banner>
                       </div>
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