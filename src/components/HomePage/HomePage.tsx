import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.scss';

export const HomePage = () => {
  return (
    <nav className="home">
      <Link className="home__button" to="/people/?page=1">
        <span className="home__title">People</span>
        <img
          className="home__img"
          src={`/images/categories/character.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </Link>
      <Link className="home__button" to="/planets/?page=1">
        <span className="home__title">Planets</span>
        <img
          className="home__img"
          src={`/images/categories/planets.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </Link>
      <Link className="home__button" to="/films/?page=1">
        <span className="home__title">Films</span>
        <img
          className="home__img"
          src={`/images/categories/films.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </Link>
      <Link className="home__button" to="/starships/?page=1">
        <span className="home__title">Starships</span>
        <img
          className="home__img"
          src={`/images/categories/starships.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </Link>
      <Link className="home__button" to="/vehicles/?page=1">
        <span className="home__title">Vehicles</span>
        <img
          className="home__img"
          src={`/images/categories/vehicles.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </Link>
      <Link className="home__button" to="/species/?page=1">
        <span className="home__title">Species</span>
        <img
          className="home__img"
          src={`/images/categories/species.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/images/placeholder.jpg';
          }}
        />
      </Link>
    </nav>
  );
};
