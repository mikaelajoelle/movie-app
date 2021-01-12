import React from 'react';
import {NavLink} from 'react-router-dom';

class TitleFilter extends React.Component  {
    render() {
        return (
            <div className="top-bar">
                <div className="filter-buttons">
                    <li className="filter-button"><NavLink to="/popular">Popular</NavLink></li>
                    <li className="filter-button"><NavLink to="/top-rated">Top Rated</NavLink></li>
                    <li className="filter-button"><NavLink to="/upcoming">Upcoming</NavLink></li>
                    <li className="filter-button"><NavLink to="/now-playing">Now Playing</NavLink></li>
                </div>
            </div>
        )

    }  
};

export default TitleFilter;