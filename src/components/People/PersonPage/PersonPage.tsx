import React from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { Person } from '../../../types/Person';
import { Link, useLocation, useParams } from 'react-router-dom';
import { RelatedLinks } from '../../RelatedLinks/RelatedLinks';
import { RelatedLinksOptions } from '../../../types/RelatedLinksOptions';
import { Planet } from '../../../types/Planet';
import { apiUrl } from '../../../api/apiUrl';
import { Loader } from '../../Loader/Loader';

export const PersonPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { data, isLoading, isError, refetch } = useFetchData<Person>(pathname);
  const {
    data: homeworld,
    isLoading: isLoadingHomeworld,
    isError: isErrorHomeworld,
    refetch: refetchHomeworld,
  } = useFetchData<Planet>(data?.homeworld);
  const {
    data: species,
    isLoading: isLoadingSpecies,
    isError: isErrorSpecies,
    refetch: refetchSpecies,
  } = useFetchData<Planet>(data?.species[0]);

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
          <span>
            Home planet:
            {homeworld?.name ? (
              <Link to={homeworld.url.replace(apiUrl, '')}>
                {homeworld.name}
              </Link>
            ) : (
              <Loader />
            )}
          </span>
          <span>
            Species:
            {species?.name ? (
              <Link to={species.url.replace(apiUrl, '')}>{species.name}</Link>
            ) : (
              <Loader />
            )}
          </span>
        </div>
      )}

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
