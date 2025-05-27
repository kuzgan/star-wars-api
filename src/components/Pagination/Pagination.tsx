import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { apiUrl } from '../../api/apiUrl';

interface PaginationParams {
  count: number | undefined;
  next: string | null;
  previous: string | null;
}

export const Pagination: React.FC<PaginationParams> = ({
  count,
  next,
  previous,
}) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const nextPage = () => {
    if (next === null) {
      return;
    }

    navigate(next?.replace(apiUrl, ''), { replace: false });
  };

  const previousPage = () => {
    if (previous === null) {
      return;
    }

    navigate(previous?.replace(apiUrl, ''), { replace: false });
  };

  return (
    <div>
      <button
        onClick={previousPage}
        disabled={searchParams.get('page') === '1' || previous === null}
      >
        {'<'}
      </button>
      <button
        onClick={nextPage}
        disabled={
          count === undefined ||
          searchParams.get('page') === String(Math.ceil(count / 10)) ||
          next === null
        }
      >
        {'>'}
      </button>
    </div>
  );
};
