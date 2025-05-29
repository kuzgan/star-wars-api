import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.scss';

interface BreadcrumbsProps {
  previous?: string;
  next?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');

  return (
    <nav className="breadcrumbs">
      {crumbs.length === 0 ? (
        <span className="breadcrumbs__item">home</span>
      ) : (
        <Link to="/" className="breadcrumbs__link">
          home
        </Link>
      )}
      {crumbs.length > 0 && <span className="breadcrumbs__separator">/</span>}
      {crumbs.length === 1 && <span>{crumbs[0]}</span>}
      {crumbs.length === 2 && (
        <Link to={`/${crumbs[0]}`} className="breadcrumbs__link">
          {crumbs[0]}
        </Link>
      )}
      {crumbs.length === 2 && <span className="breadcrumbs__separator">/</span>}
      {crumbs.length === 2 && (
        <span className="breadcrumbs__item">{crumbs[1]}</span>
      )}
    </nav>
  );
};
