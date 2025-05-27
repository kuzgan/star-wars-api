import React from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { ListOf } from '../../types/ListOf';
import { Person } from '../../types/Person';
import { Link, useLocation } from 'react-router-dom';
import { apiUrl } from '../../api/apiUrl';
import { Pagination } from '../Pagination/Pagination';

export const People = () => {
  const { pathname, search } = useLocation();
  const { data, isLoading, isError, refetch } = useFetchData<ListOf<Person>>(
    pathname + search
  );

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
            {data?.results?.map((person) => {
              return (
                <Link to={person.url.replace(apiUrl, '')} key={person.url}>
                  {person.name}
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
