import React from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { ListOf } from '../../types/ListOf';
import { Film } from '../../types/Film';
import { Link, useLocation } from 'react-router-dom';
import { apiUrl } from '../../api/apiUrl';

export const Films = () => {
  const { pathname } = useLocation();
  const { data, isLoading, isError, refetch } =
    useFetchData<ListOf<Film>>(pathname);

  if (isError) {
    return (
      <div>
        Error
        <button
          onClick={() => {
            refetch();
          }}
          type="button"
        >
          Try again
        </button>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.results?.map((film) => {
        return (
          <Link to={film.url.replace(apiUrl, '')} key={film.url}>
            {film.title}
          </Link>
        );
      })}
    </div>
  );
};
