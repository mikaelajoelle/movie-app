// Search Bar

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


  
const Search = () => {
    const [input, setInput] = useState([]);
    const [results, setResults] = useState([]);
    var empty = '';
    const clearSearch = () => {

    

    
        if(document.getElementById('searchField').value === ''){
            setInput('');
        }

        
    }
  const searchFast = () => {
    
    
    

    if((document.getElementById('searchField').value) === ''){
      var newQuery = '';
      
    }else{
      var query = document.getElementById('searchField').value;
      
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
                 <img className="search-poster" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="Movie poster" /> 
                
                <div className="search-info">
                  <p>{movie.title}</p>
                  <p>{movie.release_date}</p>
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
    let input = document.getElementById('searchField');

    input.value = '';
    if(document.getElementById('searchField').value === ''){
      setInput('');
      var bar = document.getElementById('search-bar');
      
  }
  }
  return(
    <div className="search-bar-container">
      <div className="search-bar">
          <input type="text" name="searchField" id="searchField"  placeholder="Search..."  onKeyUp={searchFast} onKeyDown={clearSearch}/>
      </div>
      
      <div className="resultlist">
        <ul>
          
          {results}
          
          
        </ul>
      </div>
    
   
    </div>
    
  );
}

export default Search;



/*

import React from 'react';

class SearchBar extends React.Component {
    render(){
        return (
            <div className="search-bar">
                <input type="text"placeholder="Search" />

            </div>
        )
    }
}

export default SearchBar;

*/