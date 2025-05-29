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
  const [listName, PageName] = crumbs;

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
      {crumbs.length === 1 && <span>{listName}</span>}
      {crumbs.length === 2 && (
        <Link to={`/${listName}`} className="breadcrumbs__link">
          {listName}
        </Link>
      )}
      {crumbs.length === 2 && <span className="breadcrumbs__separator">/</span>}
      {crumbs.length === 2 && (
        <span className="breadcrumbs__item">{PageName}</span>
      )}
    </nav>
  );
};
