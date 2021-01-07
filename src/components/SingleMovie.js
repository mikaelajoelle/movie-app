// Single Movie

function SingleMovie() {
  return (
    
    <main>

    <section class="single-movie-section">

      <div class="single-movie-card">

        <div class="single-movie-container">
        
          <h4>Action · Adventure</h4>
          <div class="single-movie-info">
            <h5>Jan 17, 2021</h5>
            <h5>135 minutes</h5>
          </div>
          <h2>Mulan</h2>
          <div class="single-movie-rating">7.4</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta optio error totam. 
            Consectetur sequi repellat odio facilis rem optio pariatur enim magnam qui.</p>
          <button class="movie-button"><a href="#0">Add to Favourites</a></button>

        </div>

      <div class="single-movie-poster">
        <img class="img-poster" src={process.env.PUBLIC_URL + '/mulan.jpg'} alt="mulan"/>

      </div>
      

      
      </div>

    </section>
      
    </main>
  );
}

export default SingleMovie;
