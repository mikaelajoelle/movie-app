// App Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import SingleMovie from '../components/SingleMovie';
import Favourites from '../components/Favourites';

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
          <Switch>
              <Route path={'/'} exact><Home /></Route>
              <Route path={'/about'}><About /></Route>
              <Route path={'/single-movie/:id'}><SingleMovie /></Route>
              <Route path={'/favourites'}><Favourites /></Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
