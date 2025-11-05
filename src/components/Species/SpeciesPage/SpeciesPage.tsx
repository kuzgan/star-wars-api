import React from 'react';
import { useFetchData } from '../../../hooks/useFetchData';
import { Link, useLocation, useParams } from 'react-router-dom';
import { RelatedLinks } from '../../RelatedLinks/RelatedLinks';
import { RelatedLinksOptions } from '../../../types/RelatedLinksOptions';
import { Planet } from '../../../types/Planet';
import { apiUrl } from '../../../api/apiUrl';
import { Loader } from '../../Common/Loader/Loader';
import { SpeciesType } from '../../../types/Species';

export const SpeciesPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { data, isLoading, isError, refetch } =
    useFetchData<SpeciesType>(pathname);
  const {
    data: homeworld,
    isLoading: isLoadingHomeworld,
    isError: isErrorHomeworld,
    refetch: refetchHomeworld,
  } = useFetchData<Planet>(data?.homeworld);

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
            src={`/images/species/${id}.jpg`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = '/images/big-placeholder.jpg';
            }}
          />
          <span>Name: {data?.name}</span>
          <span>
            Home planet:
            {!data?.homeworld ? (
              'Unkown'
            ) : homeworld?.name ? (
              <Link to={homeworld.url.replace(apiUrl, '')}>
                {homeworld.name}
              </Link>
            ) : (
              <Loader />
            )}
          </span>
        </div>
      )}

      <RelatedLinks urls={data?.films} linkType={RelatedLinksOptions.Film} />
      <RelatedLinks
        urls={data?.people}
        linkType={RelatedLinksOptions.Vehicles}
      />
    </>
  );
};
