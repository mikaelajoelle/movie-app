// Favourites

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {isItemInStorage, setStorage, removeFromStorage} from '../utilities/storageMaker';
import placeholderImage from '../images/placeholder.jpg';


const Favourites = () => {

    let movies      = localStorage.getItem('your-fav-movies');
    const faveArray = JSON.parse(movies);
    const [ifFaved, setIfFaved] = useState([]);

     // Convert release date
     function formatDate(string){
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }


    const addMovie = () => {
        if(!isItemInStorage(movies)){
            setStorage(movies);
        setIfFaved(true);

        }else{
        setIfFaved(false);
        }
        
    }
    const removeMovie = () => {
        removeFromStorage(movies);
        setIfFaved(false);
    }

    function faveDivs() {
        return faveArray.map((fave, i) => {
            return (
                <div className={`movie movie-0${i}`} key={i}>
                    <div className="card">
                        { fave.img == null ?
                            <div className="unavailable-poster">
                                <img className="placeholder-poster" src={placeholderImage} alt="Placeholder poster image"/>
                            </div>
                            : 
                            <div className="available-poster">
                                <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${fave.img}`} alt={`${fave.title} poster`} />
                            </div>
                        }
                        <div className="content">
                            <h2>{fave.title}</h2>
                            <h4>{formatDate(fave.date)}</h4>
                            <div className="rating"><h3>{fave.rating}</h3></div>
                            <p className="movie-description">{fave.summary}</p>
                            <div className="button-container">
                                <Link to={`/${fave.id}`}><button className="movie-button">More Info</button></Link>
                                
                            </div>

                        {isItemInStorage(fave) ? <button className="unfave-button" onClick={removeMovie}>Remove from Favourites</button> : 
                        <button className="unfave-button" onClick={addMovie}>Add to Favourites</button>}
                        </div>
                    </div>
                </div>      
            ); 
        });
    }

    function YesFaves() {
        return (
            <div className="movie-cards-favourites">
                {faveDivs()}
            </div>
        )
    }

    function NoFaves() {
        return (
            <div className="text-box">
                <h2>No movies have been added to favourites.</h2>
                <div className="instructions-box">
                    <p>To add a movie to your favourites, click on the Movie Title or hover over a movie poster to go to that specific movie's description page.</p>
                </div>
            </div>
        )
    }
    
    return (
        <main>
            <section>
                {faveArray && faveArray.length ? <YesFaves /> : <NoFaves />}
            </section>
        </main>
    )
}

export default Favourites;