// Search Results

/* NOT NEEDED

import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";


const Results = (props) => {
    
    
    const [results, setResults] = useState([]);
    
    

    

    const sortquery = "&sort_by=" + props.sort;
    
    useEffect(()=> {
        
        const getMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US&${sortquery}&include_adult=false&include_video=false&page=1`);
            let data = await res.json();
            
            let movies = data.results.map((movie)=>{
                if(movie.poster_path == null){

                }
                return(
                    <div className="movie" key={movie.id}>
                        <Link to={`/${movie.id}`}>
                            
                        <img className="poster" src={mov.poster_path == null ? process.env.PUBLIC_URL + '/images/placeholder.png' : "https://image.tmdb.org/t/p/w342" + movie.poster_path} alt="misc" />
                       
                            <div className="overview">
                                
                                <h3 className="movietitle">{movie.title} ({movie.release_date == null ? "..." : movie.release_date.split("-").slice(0,1)})</h3>
                                
                                <p>{movie.overview.substring(0, 300)}{movie.overview.length > 300 ? "..." : ''}</p>
                                
                            </div>
                            <p className="moreinfo">More Info</p>
                        </Link>
                    </div>
                )
                
            })
            setResults(movies);
            
        }

        getMovies();
        

    }, [sortquery])
    
        return(
            <div className="featuredmovies">
                {results}
            </div>   
    );
    }
    
    

export default Results;

*/