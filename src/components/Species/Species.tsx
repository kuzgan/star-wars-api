import React from 'react';
import { SpeciesType } from '../../types/Species';
import { useFetchData } from '../../hooks/useFetchData';
import { Link, useLocation } from 'react-router-dom';
import { Pagination } from '../Pagination/Pagination';
import { apiUrl } from '../../api/apiUrl';
import { ListOf } from '../../types/ListOf';

export const Species = () => {
  const { pathname, search } = useLocation();
  const { data, isLoading, isError, refetch } = useFetchData<
    ListOf<SpeciesType>
  >(pathname + search);

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
    <>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {data?.results?.map((species) => {
              return (
                <Link to={species.url.replace(apiUrl, '')} key={species.url}>
                  {species.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <Pagination
        count={data?.count}
        next={data?.next || null}
        previous={data?.previous || null}
      />
    </>
  );
};
