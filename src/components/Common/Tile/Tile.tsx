import React from 'react';
import './tile.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Type = 'home' | 'people';

interface TileProps {
  name: string;
  link: string;
  pageType?: Type;
}

export const Tile: React.FC<TileProps> = ({ name, link, pageType }) => {
  const linkTrimmed = link
    .split('/')
    .filter((e) => !['', '?page=1'].includes(e))
    .join('/');

  return (
    <Link className="tile" to={link}>
      <img
        className="tile__img"
        src={
          pageType == 'home'
            ? `/images/categories/${linkTrimmed}.jpg`
            : `/images/${linkTrimmed}.jpg`
        }
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = '/images/placeholder.jpg';
        }}
        alt=""
      />
      <span
        className={classNames('tile__title', {
          'tile__title--big': pageType === 'home',
        })}
      >
        {name}
      </span>
    </Link>
  );
};
