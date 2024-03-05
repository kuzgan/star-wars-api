import { useQuery } from 'react-query';
import { axiosInstance } from '../api/axiosSetup';

export const useFetchData = <T>(pagePath: string) => {
  const fetchData = async () => {
    const response = await axiosInstance.get<T>(pagePath + '?format=json');

    return response.data;
  };

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [pagePath],
    queryFn: fetchData,
    staleTime: Infinity,
  });

  return { data, error, isLoading, refetch };
};
