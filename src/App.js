import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './_components/Navbar';

import Home from './_views/Home';
import Types from './_views/Types';
import Pokemon from './_views/Pokemon';

const App = () => {
  return (
    <div className="App" title="app-container" >
      <Navbar />
      <Router>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/types" render={() => <Types />} />
        <Route path="/pokemon" render={() => <Pokemon />} />
      </Router>
    </div>
  );
}

export default App;
