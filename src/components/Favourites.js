// Favourites

import React, {useParams, useState} from 'react';
import { Link } from 'react-router-dom';
import {isItemInStorage, setStorage, removeFromStorage} from '../utilities/storageMaker';


const Favourites = () => {

    let films       = localStorage.getItem('your-fav-movies');
    const faveArray = JSON.parse(films);
    const [ifFaved, setIfFaved] = useState([]);


    const addMovie = () => {
        if(!isItemInStorage(films)){
            setStorage(films);
        setIfFaved(true);

        }else{
        setIfFaved(false);
        }
        
    }
    const removeMovie = () => {
        removeFromStorage(films);
        setIfFaved(false);
    }

    function faveDivs() {
        return faveArray.map((fave, i) => {
            return (
                <div className={`movie movie-0${i}`} key={i}>
                    <div className="card">
                        <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${fave.img}`} alt={`${fave.title} poster`} />
                        <div className="content">
                            <h2>{fave.title}</h2>
                            <h5>{fave.date}</h5>
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
                <div className="directions-box">
                    {/* <div className="directions-left">
                        <p>To add a movie to your favourites, please hover over any movie with your mouse and click on 'Add to favourites'.</p>
                        <img src={moneyPlane} alt="Adding movie to favorites"></img>
                    </div> */}
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

/*

function Favourites() {
  return (
    <main>
      
      <section class="movie-cards-favourites">
           
            <div class="card">
                
                    <img class="img-box" src={process.env.PUBLIC_URL + '/mulan.jpg'} alt="mulan"/>
                
                <div class="content">
                
                    <h4>Action · Adventure</h4>
                    <h5>Jan 17, 2021</h5>
                    <h2>Mulan</h2>
                    <div class="rating">7.4</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                    <button class="movie-button"><a href="#0">More Info</a></button>
                    
                </div>
            </div>
        </section>
    </main>
  );
}

export default Favourites;

*/