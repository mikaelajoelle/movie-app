// About

import React from 'react';
import {Link} from 'react-router-dom';

function About() {
  return (
    <main>
      
      <section class="about-section">
      <h2>Welcome to Double Feature!</h2>
      <p>The Double Feature movie database is a website where users can find popular, top rated, now playing and upcoming movie listings. 
        Browse for your favourite genres or movies, check out their ratings and see how they match up! </p>
        <p>Found something you like? Add them to your <Link className="favourites-link" to="/Favourites"> favourites</Link> and remove any item anytime.</p>
      </section>

      <section class="tmdb-section">
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        <img class="tmdb-logo" src={process.env.PUBLIC_URL + '/tmdb-logo.svg'} alt="TMDb logo" />
      </section>
    </main>
  );
}

export default About;
