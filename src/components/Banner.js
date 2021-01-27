import React from 'react';
import { Link } from 'react-router-dom';
import placeholderBannerImage from '../images/placeholder-banner.jpg';

const Banner = (props) => {

    
    // Convert release date
    function formatDate(string){
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    const movieDivs = () => {
        

        return props.banner.map((banner, i) => {

            return (
                <div className={`banner banner-0${i}`} key={i}>
                    <div className="banner">
                        { banner.backdrop_path == null ?
                            <div className="unavailable-banner">
                                <img className="placeholder-banner" src={placeholderBannerImage} alt="Placeholder banner image"/>
                            </div>
                            : 
                            <div className="available-banner">
                                <img className="banner-img" src={`https://image.tmdb.org/t/p/w1280/${banner.backdrop_path}`} alt={`${banner.title} backdrop`} />
                            </div>
                        }
                        <div className="text-overlay" id="right-text-overlay">
                            <p>{banner.vote_average}</p>
                            <div className="button-container">
                                    <Link to={`/${banner.id}`}><button className="banner-button">More Info</button></Link>
                            </div>
                        </div>
                        <div className="movie-info-overlay" id="left-text-overlay">
                            <h4>{formatDate(banner.release_date)}</h4>
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