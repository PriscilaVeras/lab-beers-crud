import React from 'react';
import { Link } from 'react-router-dom';

import randomBeer from './assets/random-beer.png';
import beers from './assets/beers.png';
import newBeer from './assets/new-beer.png';

export default function HomePage() {
  return (
    <div>
      <div>
        <Link to="/all-beers">
          <img src={beers} alt="all beers" />
        </Link>
        <h2>All Beers</h2>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não
          altera o pão duris. Leite de capivaris, leite de mula manquis sem
          cabeça. Mé faiz elementum girarzis, nisi eros vermeio. Quem manda na
          minha terra sou euzis!
        </p>
      </div>
      <div>
        <Link to="/beers/random">
          <img src={randomBeer} alt="random beer" />
        </Link>
        <h2>Random Beer</h2>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não
          altera o pão duris. Leite de capivaris, leite de mula manquis sem
          cabeça. Mé faiz elementum girarzis, nisi eros vermeio. Quem manda na
          minha terra sou euzis!
        </p>
      </div>
      <div>
        <Link to="/new-beer">
          <img src={newBeer} alt="newBeer" />
        </Link>
        <h2>New Beer</h2>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não
          altera o pão duris. Leite de capivaris, leite de mula manquis sem
          cabeça. Mé faiz elementum girarzis, nisi eros vermeio. Quem manda na
          minha terra sou euzis!
        </p>
      </div>
    </div>
  );
}
