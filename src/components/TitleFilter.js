import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

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