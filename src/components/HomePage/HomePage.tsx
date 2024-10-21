import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <nav className="home">
      <Link className="home__button" to="/people/?page=1">
        People
      </Link>
      <Link className="home__button" to="/planets/?page=1">
        Planets
      </Link>
      <Link className="home__button" to="/films/?page=1">
        Films
      </Link>
      <Link className="home__button" to="/starships/?page=1">
        Starships
      </Link>
      <Link className="home__button" to="/vehicles/?page=1">
        Vehicles
      </Link>
      <Link className="home__button" to="/species/?page=1">
        Species
      </Link>
    </nav>
  );
};
