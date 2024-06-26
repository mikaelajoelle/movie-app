// Movie Grid

import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from '../images/placeholder.jpg';

const MovieGrid = (props) => {

    // Convert release date
    function formatDate(string){
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    const movieDivs = () => {
        

        return props.movies.map((movie, i) => {

            return (
                <div className={`movie movie-0${i}`} key={i}>
                    <div className="card">
                        { movie.poster_path == null ?
                        <div className="unavailable-poster">
                            <img className="placeholder-poster" src={placeholderImage} alt="Placeholder poster image"/>
                        </div>
                        : 
                        <div className="available-poster">
                        <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} poster`} />
                        </div>
                        }
                        <div className="content">
                            <h2>{movie.title}</h2>
                          
                            <div className="rating"><h3>{movie.vote_average.toFixed(1)}</h3></div>
                            <h4>{formatDate(movie.release_date)}</h4>
                            <p className="movie-description">{movie.overview}</p>
                               
                            <div className="button-container">
                                <Link to={`/${movie.id}`}><button className="movie-button">More Info</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        )});
    }
    
    return (
        <div className="movie-cards">
            {movieDivs(props)}
        </div>
    )
};

export default MovieGrid;