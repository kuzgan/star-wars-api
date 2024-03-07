import React from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { ListOf } from '../../types/ListOf';
import { Person } from '../../types/Person';
import { Link, useLocation } from 'react-router-dom';

export const People = () => {
  const { pathname } = useLocation();
  const { data, isLoading, isError, refetch } =
    useFetchData<ListOf<Person>>(pathname);

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
      {data?.results?.map((person) => {
        return (
          <Link
            to={person.url.replace('https://swapi.dev/api', '')}
            key={person.url}
          >
            {person.name}
          </Link>
        );
      })}
    </div>
  );
};
