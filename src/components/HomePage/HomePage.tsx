import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.scss';

export const HomePage = () => {
  const categories = [
    'people',
    'planets',
    'films',
    'starships',
    'vehicles',
    'species',
  ];

  return (
    <nav className="home">
      {categories.map((category) => {
        return (
          <Link
            key={category}
            className="home__link"
            to={`/${category}/?page=1`}
            style={{
              backgroundImage: `url("http://localhost:3000/images/categories/${category}.jpg")`,
            }}
          >
            <span className="home__title">{category}</span>
          </Link>
        );
      })}
    </nav>
  );
};
