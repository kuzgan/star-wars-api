import React from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { Film } from '../../../types/Film';
import { useLocation, useParams } from 'react-router-dom';
import { RelatedLinks } from '../../RelatedLinks/RelatedLinks';
import { RelatedLinksOptions } from '../../../types/RelatedLinksOptions';

export const FilmPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { data, isLoading, isError, refetch } = useFetchData<Film>(pathname);

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

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img
            src={`/images/characters/${id}.jpg`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = '/images/big-placeholder.jpg';
            }}
          />
          <span>Name: {data?.title}</span>
        </div>
      )}

      <RelatedLinks
        urls={data?.characters}
        linkType={RelatedLinksOptions.Characters}
      />
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
