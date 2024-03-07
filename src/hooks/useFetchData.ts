import { useQuery } from 'react-query';
import { axiosInstance } from '../api/axiosSetup';

export const useFetchData = <T>(pagePath: string | undefined) => {
  const fetchData = async () => {
    const response = await axiosInstance.get<T>(pagePath || '');

    return response.data;
  };

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: [pagePath],
    queryFn: fetchData,
  });

  if (!pagePath) {
    return {
      data: undefined,
      isError: false,
      isLoading: true,
      refetch: () => {},
    };
  }
  return { data, isError, isLoading, refetch };
};
