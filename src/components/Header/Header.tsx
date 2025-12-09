import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <span className="header__text">star</span>
        <span className="header__text">wars</span>
      </Link>
    </header>
  );
};
