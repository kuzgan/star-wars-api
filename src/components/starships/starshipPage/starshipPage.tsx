import React from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { Starship } from '../../../types/Starship';
import { Link, useLocation, useParams } from 'react-router-dom';
import { RelatedLinks } from '../../RelatedLinks/RelatedLinks';
import { RelatedLinksOptions } from '../../../types/RelatedLinksOptions';
import { apiUrl } from '../../../api/apiUrl';
import { Loader } from '../../Loader/Loader';

export const StarshipPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { data, isLoading, isError, refetch } =
    useFetchData<Starship>(pathname);

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
          <span>Name: {data?.name}</span>
        </div>
      )}

      <RelatedLinks urls={data?.films} linkType={RelatedLinksOptions.Film} />
      <RelatedLinks
        urls={data?.pilots}
        linkType={RelatedLinksOptions.Characters}
      />
    </>
  );
};
