import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.scss';
import '../../sass/layouts/list-of.scss';
import { Tile } from '../Common/Tile/Tile';

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
    <nav className="u-list-of">
      {categories.map((category) => {
        return (
          <Tile
            name={category}
            link={`/${category}/?page=1`}
            pageType="home"
            key={category}
          />
        );
      })}
    </nav>
  );
};
