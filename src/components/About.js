// About

function About() {
  return (
    <main>
      
      <section class="about-section">
      <h2>Welcome to dbl feature!</h2>
      <h3>About the Project</h3>
      <p>The dbl feature movie database is the world’s most popular source for movie information, designed to help fans explore the movie and decide what to watch. 
        It is a website where users can find popular, trending, upcoming and now playing movie listings. 
        Browse for your favourite genres or movies, check out their ratings and see how they match up!</p>

      <p>The dbl feature movie database was launched in 2020 and is continuously kept up-to-date. 
        As of September 2020, dbl feature has approximately 4.8 million titles in its database as well as 12 million registered users.</p>
      </section>

      <section class="tmdb-section">
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        <img class="tmdb-logo" src={process.env.PUBLIC_URL + '/tmdb-logo.svg'} alt="TMDb logo" />
      </section>
    </main>
  );
}

export default About;
