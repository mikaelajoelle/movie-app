// Top Rated

import React from 'react';
import {URL_TOP_RATED} from '../globals/variables';
import MainSection from './MainSection';

const Home = () => {
    return (
        <MainSection sort={URL_TOP_RATED} />
    )
};

export default Home;