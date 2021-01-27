// App Router
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {APP_FOLDER_NAME} from '../globals/variables';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Favourites from '../components/Favourites';
import MoviePage from '../components/MoviePage';
import PageNotFound from '../components/PageNotFound';
// Movie Filter Sort
import Popular from '../components/Popular';
import TopRated from '../components/TopRated';
import NowPlaying from '../components/NowPlaying';
import Upcoming from '../components/Upcoming';

class AppRouter extends React.Component {
  render(){
      return (
        <Router basename = {APP_FOLDER_NAME}>
          <div className="wrapper">
            <Header />
              <Switch>
                  <Route path={'/'} exact><Home /></Route>
                  <Route path={'/about'} exact><About /></Route>
                  <Route path="/favourites" exact><Favourites /></Route>
              <Route path="/popular" exact><Popular /></Route>
              <Route path="/top-rated" exact><TopRated /></Route>
              <Route path="/now-playing" exact><NowPlaying /></Route>
              <Route path="/upcoming" exact><Upcoming /></Route>
              <Route path="/:movieid"><MoviePage /></Route>
              <Route><PageNotFound /></Route>
              </Switch>
            <Footer />
          </div>
        </Router>
      )
    }
}

export default AppRouter;
