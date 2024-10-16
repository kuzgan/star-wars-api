import React, { useEffect } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { ListOf } from '../../types/ListOf';
import { Person } from '../../types/Person';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { apiUrl } from '../../api/apiUrl';
import { Pagination } from '../Pagination/Pagination';

export const People = () => {
  const { pathname, search } = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { data, isLoading, isError, refetch } = useFetchData<ListOf<Person>>(
    pathname + search
  );

  useEffect(() => {
    if (!searchParams.has('page')) {
      searchParams.set('page', '1');

      navigate(pathname + `?${searchParams.toString()}`, { replace: true });
    }
  }, [searchParams]);

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
        {data?.results?.map((person) => {
          return (
            <Link to={person.url.replace(apiUrl, '')} key={person.url}>
              {person.name}
            </Link>
          );
        })}
      </div>

      {data && (
        <Pagination
          count={data?.count}
          next={data?.next}
          previous={data?.previous}
        />
      )}
    </>
  );
};
