import React from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { ListOf } from '../../types/ListOf';
import { Person } from '../../types/Person';
import { useLocation } from 'react-router-dom';
import { apiUrl } from '../../api/apiUrl';
import { Pagination } from '../Pagination/Pagination';
import './people.scss';
import { Tile } from '../Common/Tile/Tile';

export const People = () => {
  const { pathname, search } = useLocation();
  const { data, isLoading, isError, refetch } = useFetchData<ListOf<Person>>(
    pathname + search
  );

  if (isError) {
    return (
      <div className="people">
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
    return <div className="people">Loading...</div>;
  }

  return (
    <div className="people">
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="people__list">
            {data?.results?.map((person) => {
              return (
                <Tile
                  name={person.name}
                  link={person.url.replace(apiUrl, '')}
                  pageType="people"
                  key={person.url}
                />
              );
            })}
          </ul>
        )}
      </div>

      <Pagination
        count={data?.count}
        next={data?.next || null}
        previous={data?.previous || null}
      />
    </div>
  );
};
