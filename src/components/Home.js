// Home

import { NavLink } from 'react-router-dom';


const Home = () => (
    <main>

    <div class="banner">
        <img src={process.env.PUBLIC_URL + '/goodliar1-superJumbo.jpg'} alt="Good Liar backdrop"/>
        <div class="text-overlay" id="rating-overlay">
            <p>8.1</p>
            <button class="banner-button">More Info</button>
        </div>
        
        <div class="movie-info-overlay">
            <h3>Crime · Drama · Thriller</h3>
            <h2>The Good Liar</h2>
            <p>Con man Roy Courtnay has set his sights on his latest mark: 
                the recently widowed Betty McLeish, worth millions. But this time, what should have been a simple swindle escalates into a cat-and-mouse game with the ultimate stakes.</p>
        </div>
    </div>

       
       <div class="top-bar">

        <div class="filter-buttons">
            <button class="filter-button">Popular</button>
            <button class="filter-button">Top Rated</button>
            <button class="filter-button">Upcoming</button>
            <button class="filter-button">Now Playing</button>
        </div>
            <div class="search-bar">
                <form action="/">
                    <input type="text" placeholder="Search..." name="search"></input>
                </form>
            </div>

        </div>

        <section class="movie-cards">
           
            <div class="card">
                
                    <img class="img-box" src={process.env.PUBLIC_URL + '/mulan.jpg'} alt="mulan"/>
                
                <div class="content">
                
                    <h4>Action · Adventure</h4>
                    <h5>Jan 17, 2021</h5>
                    <h2>Mulan</h2>
                    <div class="rating">7.4</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                    <button class="movie-button">
                    <NavLink className="router-link" to={'/single-movie/:id'}>More Info</NavLink>
                    </button>
                    
                </div>
            </div>
            


            <div class="card">
               
                <img class="img-box" src={process.env.PUBLIC_URL + '/enola-holmes.jpg'} alt="enola holmes"/>
                
                <div class="content">
                
                    <h4>Action · Adventure</h4>
                    <h5>Jan 12, 2021</h5>
                    <h2>Enola Holmes</h2>
                    <div class="rating">7.4</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                    <button class="movie-button"><a href="#0">More Info</a></button>
                   
                </div>
            </div>
            

            <div class="card">
                
                <img class="img-box" src={process.env.PUBLIC_URL + '/ava.jpg'} alt="ava"/>
                
                <div class="content">
                
                    <h4>Action · Adventure</h4>
                    <h5>Jan 05, 2021</h5>
                    <h2>Ava</h2>
                    <div class="rating">7.4</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                    <button class="movie-button"><a href="#0">More Info</a></button>
                    
                </div>
            </div>


            <div class="card">
                
                <img class="img-box" src={process.env.PUBLIC_URL + '/artemisfowl.jpg'} alt="atemis fowl"/>
                
                <div class="content">

                    <h4>Action · Adventure</h4>
                    <h5>Dec 27, 2020</h5>
                    <h2>Artemis Fowl</h2>
                    <div class="rating">7.4</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                    <button class="movie-button"><a href="#0">More Info</a></button>
                    
                </div>
            </div>

            
            <div class="card">
                
                <img class="img-box" src={process.env.PUBLIC_URL + '/2067.jpg'} alt="2067"/>
                
                <div class="content">
                
                    <h4>Action · Adventure</h4>
                    <h5>Dec 14, 2020</h5>
                    <h2>2067</h2>
                    <div class="rating">7.4</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                    <button class="movie-button"><a href="#0">More Info</a></button>
                    
                </div>
            </div>
            

            <div class="card">
                
                <img class="img-box" src={process.env.PUBLIC_URL + '/beckman.jpg'} alt="beckman"/>
                
                <div class="content">

                    <h4>Action · Adventure</h4>
                    <h5>Dec 20, 2020</h5>
                    <h2>Beckman</h2>
                    <div class="rating">7.4</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                    <button class="movie-button"><a href="#0">More Info</a></button>
                    
                </div>
            </div>

           
            <div class="card">
                
                 <img class="img-box" src={process.env.PUBLIC_URL + '/projectpower.jpg'} alt="project power"/>
                
                <div class="content">

                    <h4>Action · Adventure</h4>
                    <h5>Dec 08, 2020</h5>
                    <h2>Project Power</h2>
                    <div class="rating">7.4</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                    <button class="movie-button"><a href="#0">More Info</a></button>
                   
                </div>
            </div>
            

            <div class="card">
                
                <img class="img-box" src={process.env.PUBLIC_URL + '/archive.jpg'} alt="archive"/>
                
                <div class="content">
                
                    <h4>Action · Adventure</h4>
                    <h5>Nov 28, 2020</h5>
                    <h2>Archive</h2>
                    <div class="rating">7.4</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                    <button class="movie-button"><a href="#0">More Info</a></button>
                    
                </div>
            </div>

            
           
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
        


        <div class="card">
           
            <img class="img-box" src={process.env.PUBLIC_URL + '/enola-holmes.jpg'} alt="enola holmes"/>
            
            <div class="content">
            
                <h4>Action · Adventure</h4>
                <h5>Jan 12, 2021</h5>
                <h2>Enola Holmes</h2>
                <div class="rating">7.4</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                <button class="movie-button"><a href="#0">More Info</a></button>
               
            </div>
        </div>
        

        <div class="card">
            
            <img class="img-box" src={process.env.PUBLIC_URL + '/ava.jpg'} alt="ava"/>
            
            <div class="content">
            
                <h4>Action · Adventure</h4>
                <h5>Jan 05, 2021</h5>
                <h2>Ava</h2>
                <div class="rating">7.4</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                <button class="movie-button"><a href="#0">More Info</a></button>
                
            </div>
        </div>


        <div class="card">
            
            <img class="img-box" src={process.env.PUBLIC_URL + '/artemisfowl.jpg'} alt="atemis fowl"/>
            
            <div class="content">

                <h4>Action · Adventure</h4>
                <h5>Dec 27, 2020</h5>
                <h2>Artemis Fowl</h2>
                <div class="rating">7.4</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui...</p>
                <button class="movie-button"><a href="#0">More Info</a></button>
                
            </div>
        </div>

          
            
        </section>
    </main>
);

export default Home;