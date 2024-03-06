import React from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { Person } from '../../../types/Person';
import { useLocation } from 'react-router-dom';
import { RelatedLinks } from '../../RelatedLinks/RelatedLinks';
import { RelatedLinksOptions } from '../../../types/RelatedLinksOptions';

export const PersonPage = () => {
  const { pathname } = useLocation();
  const { data, isLoading, isError, refetch } = useFetchData<Person>(pathname);

  return (
    <>
      {isError && (
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
      )}

      {isLoading ? <div>Loading...</div> : <div>Name: {data?.name}</div>}

      <RelatedLinks urls={data?.films} linkType={RelatedLinksOptions.Film} />
      <RelatedLinks
        urls={data?.vehicles}
        linkType={RelatedLinksOptions.Vehicles}
      />
      <RelatedLinks
        urls={data?.starships}
        linkType={RelatedLinksOptions.Starships}
      />
    </>
  );
};
