// Now Playing

import React from 'react';
import {URL_NOW_PLAYING} from '../globals/variables';
import MainSection from './MainSection';

const Home = () => {
    return (
        <MainSection sort={URL_NOW_PLAYING} />
    )
};

export default Home;