import React from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { Person } from '../../../types/Person';
import { useLocation } from 'react-router-dom';

export const PersonPage = () => {
  const { pathname } = useLocation();
  const { data, isLoading, error, refetch } = useFetchData<Person>(pathname);

  if (error) {
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

  return <div>Name: {data?.name}</div>;
};
