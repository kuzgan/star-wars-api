import React from 'react';
import './tile.scss';
import { Link } from 'react-router-dom';

interface TileProps {
  name: string;
  link: string;
}

export const Tile: React.FC<TileProps> = ({ name, link }) => {
  const linkTrimmed = link
    .split('/')
    .filter((e) => e != '')
    .join('/');

  return (
    <Link className="tile" to={link}>
      <img
        className="tile__img"
        src={`/images/${linkTrimmed}.jpg`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = '/images/placeholder.jpg';
        }}
        alt=""
      />
      <span className="tile__title">{name}</span>
    </Link>
  );
};
