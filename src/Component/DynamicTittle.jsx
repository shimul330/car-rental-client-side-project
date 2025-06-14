import React from 'react';
import { Helmet } from 'react-helmet-async';

const DynamicTittle = ({title}) => {
    return (
       <Helmet>
            <title> {title} | Car Rental </title>
       </Helmet>
    );
};

export default DynamicTittle;