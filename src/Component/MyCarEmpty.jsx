import React from 'react';
import emptyLottie from '../../src/assets/Lotties/mycarempty.json'
import Lottie from 'lottie-react';

const MyCarEmpty = () => {
    return (
         <div className='flex flex-col items-center justify-center py-9 '>
            <Lottie
                style={{ width: '700px' , height: '350px' }}
                animationData={emptyLottie}
                loop={true}
            />
            <h1 className='text-2xl font-semibold text-gray-500 mt-5'>
                তুমি এখনো কোনো গাড়ি অ্যাড করোনি 😔
            </h1>
        </div>
    );
};

export default MyCarEmpty;