import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
// import { URL_POPULAR, URL_TOP_RATED, URL_UPCOMING, URL_NOW_PLAYING } from '../globals/variables';

/*const setValue = null;

const changeFilter = (e) =>{
    e.preventDefault();
    if( e.target.value === 'popular' ){
        setValue(URL_POPULAR );
    }else if(e.target.value === 'top-rated'){
        setValue(URL_TOP_RATED);
    }else if( e.target.value === 'upcoming'){
        setValue(URL_UPCOMING)
    }else if( e.target.value === 'now-playing'){
        setValue(URL_NOW_PLAYING);
    }
}

*/

class TitleFilter extends React.Component  {

    
    render() {
        return (
            <div className="top-bar">
                <div className="filter-buttons">
                    <li className="filter-button"><NavLink to="/" activeClassName="current-filter" exact={true}>Popular</NavLink></li>
                    <li className="filter-button"><NavLink to="/top-rated" activeClassName="current-filter">Top Rated</NavLink></li>
                    <li className="filter-button"><NavLink to="/upcoming" activeClassName="current-filter">Upcoming</NavLink></li>
                    <li className="filter-button"><NavLink to="/now-playing" activeClassName="current-filter">Now Playing</NavLink></li>
                </div>

               
            </div>
        )

    }  
};

export default TitleFilter;

/*

 <div className="dropdown-menu">
                    <label>Sort By:</label>
                    <select onChange={changeFilter} id="select-sort-by">
                        <option value="popular">Popular</option>
                        <option value="top-rated">Top Rated</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="now-playing">Now Playing</option>
                    </select>
                </div>

*/