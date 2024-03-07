import React from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { Person } from '../../../types/Person';
import { useLocation } from 'react-router-dom';
import { RelatedLinks } from '../../RelatedLinks/RelatedLinks';
import { RelatedLinksOptions } from '../../../types/RelatedLinksOptions';
import { Planet } from '../../../types/Planet';

export const PersonPage = () => {
  const { pathname } = useLocation();
  const { data, isLoading, isError, refetch } = useFetchData<Person>(pathname);
  const {
    data: homeworld,
    isLoading: isLoadingHomeworld,
    isError: isErrorHomeworld,
    refetch: refetchHomeworld,
  } = useFetchData<Planet>(data?.homeworld);

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

  {
    isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <span>Name: {data?.name}</span>
        <span>Home planet: {homeworld?.name || 'Loading...'}</span>
      </div>
    );
  }

  return <div>Name: {data?.name}</div>;
};
