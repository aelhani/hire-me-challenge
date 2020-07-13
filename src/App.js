import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './views/Home';
import Types from './views/Types';
import PokeItem from './views/PokeItem';

const App = () => {
  return (
    <div className="App" title="app-container" >
      <Navbar />
      <div className="container">
        <Router>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/types" render={() => <Types />} />
          <Route path="/pokemon" render={() => <PokeItem />} />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
