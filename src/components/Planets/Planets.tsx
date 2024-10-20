import React from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { ListOf } from '../../types/ListOf';
import { Planet } from '../../types/Planet';
import { Link, useLocation } from 'react-router-dom';
import { apiUrl } from '../../api/apiUrl';

export const Planets = () => {
  const { pathname } = useLocation();
  const { data, isLoading, isError, refetch } =
    useFetchData<ListOf<Planet>>(pathname);

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
      {data?.results?.map((planet) => {
        return (
          <Link to={planet.url.replace(apiUrl, '')} key={planet.url}>
            {planet.name}
          </Link>
        );
      })}
    </div>
  );
};
