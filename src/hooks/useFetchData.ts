import { useQuery } from 'react-query';
import { axiosInstance } from '../api/axiosSetup';

export const useFetchData = <T>(pagePath: string) => {
  const fetchData = async () => {
    const response = await axiosInstance.get<T>(pagePath);

    return response.data;
  };

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: [pagePath],
    queryFn: fetchData,
  });

  return { data, isError, isLoading, refetch };
};
