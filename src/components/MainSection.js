// Main Section

import React, {useEffect, useState} from 'react';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import TitleFilter from './TitleFilter';
import {API_KEY} from '../globals/variables';

const MainSection = ({ sort }) => {

    const [movies, setMovies] = useState(null);

    useEffect(() => { 
        const fetchMovie = async () => {
            const popularResponse = await fetch(sort + API_KEY)
            let data = await popularResponse.json(); 
            let filmArray = data.results.slice(0,12);
            setMovies(filmArray) 
            }
            fetchMovie();
        }, [sort]);
        
    return (
        <main>
            <section>
                <SearchBar />
                <TitleFilter/>
                { movies != null && <MovieGrid movies = {movies} />}
            </section>
        </main>
    )
};

export default MainSection;