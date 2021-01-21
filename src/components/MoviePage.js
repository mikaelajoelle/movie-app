// Movie Page

import React, {useEffect, useState} from 'react';
import {URL_MOVIE, API_KEY} from '../globals/variables';
import {useParams} from 'react-router-dom';
import {isItemInStorage, setStorage, removeFromStorage} from '../utilities/storageMaker';
import { Link } from 'react-router-dom';
import placeholderImage from '../images/placeholder.jpg';

const MoviePage = () => {
    
    
    let {movieid} = useParams();
    const [movie, setMovie]  = useState(null);
    const [ifFaved, setIfFaved] = useState([]);

    
    // Convert release date
    function formatDate(string){
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    
    const addMovie = () => {
        if(!isItemInStorage(movie)){
            setStorage(movie);
        setIfFaved(true);

        }else{
        setIfFaved(false);
        }
        
    }
    const removeMovie = () => {
        removeFromStorage(movie);
        setIfFaved(false);
    }

    useEffect(() => { 
        const fetchMovie = async () => {
            const res = await fetch(URL_MOVIE + movieid + API_KEY)
            let data = await res.json(); 
            setMovie(movieMaker(data));
        }
            fetchMovie();
        }, [movieid]);

    
    const movieMaker = (obj) => {
        const movieObj = {
            title: obj.title,
            runtime: obj.runtime,
            date: obj.release_date,
            rating: obj.vote_average,
            summary: obj.overview,
            img: obj.poster_path,
            id: obj.id,
            genres: obj.genres,
        }
        
        return movieObj;
    }

    const movieDiv = (movieObj) => {
        return (
            
            <div className="single-movie-card">
                <div className="single-movie-container">
                    
                <Link to='/'>
                            <svg className="back-button" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"/>
                            </svg>
                </Link>
                
                    <div className="single-movie-info">
                        <h5>{formatDate(movieObj.date)}</h5>
                        <h5>{movieObj.runtime} minutes</h5>
                    </div>
                        <h2>{movieObj.title}</h2>
                        <div className="single-movie-rating"><h3>{movieObj.rating}</h3></div>
                        <p className="movie-description-full">{movieObj.summary}</p>  

                        <div className="details-info">
                            <h5>Genres:
                            {movieObj.genres.length === 0  ?
                                <span className="no-genre">N/A</span>
                                :
                                <span>
                                    {movieObj.genres.map(genre => (
                                        <span key={genre.id} className="genre-tag">{genre.name}</span>
                                    ))}
                                </span> 
                            }
                            </h5>
                        </div>

                    {isItemInStorage(movie) ? <button className="movie-button" onClick={removeMovie}>Remove from Favourites</button> : 
                        <button className="movie-button" onClick={addMovie}>Add to Favourites</button>}
                        

                </div>

                <div class="single-movie-poster">
                    { movieObj.img == null ?
                        <div className="unavailable-poster">
                            <img className="placeholder-poster" src={placeholderImage} alt="Placeholder poster image"/>
                        </div>
                        : 
                        <div className="available-poster">
                       <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${movieObj.img}`} alt={`${movieObj.title} poster`} />
                        </div>
                    }
                </div>
                
            </div>
        );
    }

    return (
        <main>
            <section>
                {movie && movieDiv(movie)}
            </section> 
        </main>
    );
}
        
export default MoviePage;