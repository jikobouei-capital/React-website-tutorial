import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import {homeObjThree} from './Data';

function Signup() {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjThree} />
        </>
    )
}

export default Signup;
