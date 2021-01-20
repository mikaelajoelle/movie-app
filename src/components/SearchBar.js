// Search Bar

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from '../images/placeholder.jpg';

  
const Search = () => {

    // Convert release date
    function formatDate(string){
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    const [input, setInput] = useState([]);
    const [results, setResults] = useState([]);
    var empty = '';
    
    const clearSearch = () => {
    
        if(document.getElementById('search-input').value === ''){
            setInput('');
        }
    }

    const searchEnter = () => {

        if((document.getElementById('search-input').value) === ''){
        var newQuery = '';
        
        }else{
        var query = document.getElementById('search-input').value;
        
        var newQuery = query.split(' ');
        }
        
        setInput(newQuery)
    }
  
    useEffect(()=> {
        
        // var queries = input.toString();
        var queries = Array.prototype.join.call(input, " ");
        
        if(queries === ''){
        
        setResults(empty);
        return;
        
        }
    
    const getResults = async () => {
      
      // var legit = queries.join('%20');
      
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=aa9e4fb9176c3cfe803a8ef198c28c23&language=en-US&query=${queries}&page=1&include_adult=false`);
      
      let data = await res.json();
      
      let movies = data.results.slice(0, 5).map((movie)=>{
          
          return(
            <Link to={`/${movie.id}`} onClick={resetInput} >
            
              <li>
                <div className="search-results-list">
                  
                { movie.poster_path == null ?
                        <div className="unavailable-poster">
                            <img className="placeholder-search-poster" src={placeholderImage} alt="Placeholder poster image"/>
                        </div>
                        : 
                        <div className="available-poster">
                        <img className="search-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} poster`} />
                        </div>
                        }
                
                <div className="search-info">
                  <p className="search-title">{movie.title}</p>
                  <p>{formatDate(movie.release_date)}</p>
                  <p>{movie.vote_average}</p>
                </div>
                </div>
                
              </li>
             </Link>
          )
      })
      
        setResults(movies);
    
  }
  getResults();
  },[input])

  
  const resetInput = () => {
    let input = document.getElementById('search-input');

    input.value = '';
    if(document.getElementById('search-input').value === ''){
      setInput('');
      var bar = document.getElementById('search-bar');
      
  }
  }
  return(
    <div className="search-bar-container">
      <div className="search-bar">
          <input type="text" name="search-input" id="search-input"  placeholder="Search..."  onKeyUp={searchEnter} onKeyDown={clearSearch}/>
      </div>
      
      <div className="result-list">
        <ul>
          
          {results}
          
          
        </ul>
      </div>
    
   
    </div>
    
  );
}

export default Search;