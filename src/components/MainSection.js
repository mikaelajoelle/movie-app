// Main Section

import React, {useEffect, useState} from 'react';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import Banner from './Banner';
import MovieFilter from './MovieFilter';
import {API_KEY} from '../globals/variables';

const MainSection = ({ sort }) => {

    const [movies, setMovies] = useState(null);
    const [banner, setBanner] = useState(null);
    
  

    useEffect(() => { 
        const fetchMovie = async () => {
            const res = await fetch(sort + API_KEY)
            let data = await res.json(); 
            let movieArray = data.results.slice(0,12);
            setMovies(movieArray) 
            }
            fetchMovie();
        }, [sort]);

    useEffect(() => { 
        const fetchBanner = async () => {
            const res = await fetch(sort + API_KEY)
            let data = await res.json(); 
            let movieArray = data.results.slice(0,1);
            setBanner(movieArray) 
            }
            fetchBanner();
        }, [sort]);
    
    return (
        <main>
            <section>
            { banner != null && <Banner banner = {banner} />}
                <SearchBar />
                <MovieFilter/>
                
                { movies != null && <MovieGrid movies = {movies} />}
            </section>
        </main>
    )
};

export default MainSection;