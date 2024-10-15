import React from 'react';
import { apiUrl } from '../../api/apiUrl';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbsProps {
  previous?: string;
  next?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');

  return (
    <nav>
      {crumbs.length === 0 ? <span>home</span> : <Link to="/">home</Link>}
      {crumbs.length > 0 && <span>/</span>}
      {crumbs.length === 1 && <span>{crumbs[0]}</span>}
      {crumbs.length === 2 && <Link to={`/${crumbs[0]}`}>{crumbs[0]}</Link>}
      {crumbs.length === 2 && <span>/</span>}
      {crumbs.length === 2 && <span>{crumbs[1]}</span>}
    </nav>
  );
};
