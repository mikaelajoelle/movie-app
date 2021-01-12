// Upcoming

import React from 'react';
import {URL_UPCOMING} from '../globals/variables';
import MainSection from './MainSection';

const Home = () => {
    return (
        <MainSection sort={URL_UPCOMING} />
    )
};

export default Home;