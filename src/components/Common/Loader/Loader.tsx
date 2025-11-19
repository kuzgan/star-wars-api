import React from 'react';
import './loader.scss';
import classNames from 'classnames';

interface LoaderProps {
  islarge?: true;
}

export const Loader: React.FC<LoaderProps> = ({ islarge }) => {
  return (
    <div className={classNames('loader', { 'loader--large': islarge })}></div>
  );
};
