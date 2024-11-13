import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbsProps {
  previous?: string;
  next?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');
  const [listName, PageName] = crumbs;

  return (
    <nav>
      {crumbs.length === 0 ? <span>home</span> : <Link to="/">home</Link>}
      {crumbs.length > 0 && <span>/</span>}
      {crumbs.length === 1 && <span>{listName}</span>}
      {crumbs.length === 2 && <Link to={`/${listName}`}>{listName}</Link>}
      {crumbs.length === 2 && <span>/</span>}
      {crumbs.length === 2 && <span>{PageName}</span>}
    </nav>
  );
};
