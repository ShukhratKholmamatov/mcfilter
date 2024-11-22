import './index';
import Starting from './Starting';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import './style/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <>
      {/* <Starting /> */}
      <Router>
        <Switch>
        

          <Route path = "/starting">
            <Starting />
          </Route>

          <Route exact path = "/">
            <Navbar />
              <Home />
            <Footer />
          </Route>

          <Route path = "/about">
            <Navbar/>
              <About />
            <Footer />  
          </Route>

        </Switch>
      </Router>

    </>
  );
}

export default App;
