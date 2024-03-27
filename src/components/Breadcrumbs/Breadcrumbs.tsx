import React from 'react';
import { apiUrl } from '../../api/apiUrl';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  previous: string;
  next: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ previous, next }) => {
  return (
    <nav>
      <Link to={previous.replace(apiUrl, '')}>{'<'}</Link>
      <Link to={next.replace(apiUrl, '')}>{'>'}</Link>
    </nav>
  );
};
