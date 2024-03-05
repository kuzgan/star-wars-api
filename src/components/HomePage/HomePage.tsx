import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <nav className="home">
      <Link className="home__button" to="/people">
        People
      </Link>
      <Link className="home__button" to="/planets">
        Planets
      </Link>
      <Link className="home__button" to="/films">
        Films
      </Link>
      <Link className="home__button" to="/starships">
        Starships
      </Link>
      <Link className="home__button" to="/vehicles">
        Vehicles
      </Link>
      <Link className="home__button" to="/species">
        Species
      </Link>
    </nav>
  );
};
