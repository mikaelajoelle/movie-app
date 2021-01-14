import React from 'react';
import { Link } from 'react-router-dom';

const Banner = (props) => {

    const movieDivs = () => {
        

        return props.banner.map((banner, i) => {

            return (
                <div className={`banner banner-0${i}`} key={i}>
                    <div className="banner">
                        <img className="banner-img" src={`https://image.tmdb.org/t/p/w1280/${banner.backdrop_path}`} alt={`${banner.title} poster`} />
                        <div className="text-overlay" id="rating-overlay">
                            <p>{banner.vote_average}</p>
                            <div className="button-container">
                                    <Link to={`/${banner.id}`}><button className="banner-button">More Info</button></Link>
                            </div>
                        </div>
                        <div className="movie-info-overlay">
                            <h4>{banner.release_date}</h4>
                            <h2 className="banner-title">{banner.title}</h2>     
                            <p className="movie-description">{banner.overview}</p>
                            
                        </div>
                    </div>
                   
                </div>
        )});
    }
    
    return (
        <div className="banner">
            {movieDivs(props)}
        </div>
    )
};

export default Banner;