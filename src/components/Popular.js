// Popular

import React from 'react';
import {URL_POPULAR} from '../globals/variables';
import MainSection from './MainSection';

const Home = () => {
    return (
        <MainSection sort={URL_POPULAR} />
    )
};

export default Home;