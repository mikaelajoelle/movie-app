// Favourites

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
                    <img class="favourite-icon" src={process.env.PUBLIC_URL + '/favourite-icon-fill.png'} alt="favourite icon fill" />
                </div>
            </div>
        </section>
    </main>
  );
}

export default Favourites;
