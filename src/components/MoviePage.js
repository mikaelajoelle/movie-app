// Movie Page

import React, {useEffect, useState} from 'react';
import {URL_MOVIE, API_KEY} from '../globals/variables';
import {useParams} from 'react-router-dom';
import {isItemInStorage, setStorage, removeFromStorage} from '../utilities/storageMaker';

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
            const response = await fetch(URL_MOVIE + movieid + API_KEY)
            let data = await response.json(); 
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
            genres: obj.genres
        }
        
        return movieObj;
    }

    const movieDiv = (movieObj) => {
        return (
            <div className="single-movie-card">
                <div className="single-movie-container">
                    
                
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
                                "N/A"
                                :
                                <span>
                                    {movieObj.genres.map(genre => (
                                        <span key={genre.id} className="tag">{genre.name}</span>
                                    ))}
                                </span> 
                            }
                            </h5>
                        </div>

                    {isItemInStorage(movie) ? <button className="movie-button" onClick={removeMovie}>Remove from Favourites</button> : 
                        <button className="movie-button" onClick={addMovie}>Add to Favourites</button>}

                </div>

                <div class="single-movie-poster">
                    <img className="img-poster" src={`https://image.tmdb.org/t/p/w500/${movieObj.img}`} alt={`${movieObj.title} poster`} />
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