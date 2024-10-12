import React from 'react';
import { useFetchListOfUrls } from '../../hooks/useFetchListOfUrls';
import { RelatedLinksOptions } from '../../types/RelatedLinksOptions';


interface NameProperties {
  name?: string;
  title?: string;
}

interface RelatedLinksProps {
  urls: string[] | undefined;
  linkType: RelatedLinksOptions;
}

export const RelatedLinks: React.FC<RelatedLinksProps> = ({
  urls,
  linkType: info,
}) => {
  const {
    data: responseData,
    isError,
    isLoading,
    refetch,
  } = useFetchListOfUrls(urls);

  return (
    <div>
      <h3>Related {info}</h3>

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

      {isLoading && <div>Loading...</div>}

      {responseData?.length && <p>There are no {info}</p>}

      {responseData?.map((element: NameProperties) => (
        <div key={element.name || element.title}>
          {element.name || element.title}
        </div>
      ))}
    </div>
  );
};
