import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Navbar from './Navbar';
import BeersList from './BeersList';
import BeerDetails from './BeerDetails';
import NewBeer from './NewBeer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path="/all-beers" component={BeersList} />
      <Route path="/beers/:beerId" component={BeerDetails} />
      <Route path="/new-beer" component={NewBeer} />
    </BrowserRouter>
  );
}

export default App;
