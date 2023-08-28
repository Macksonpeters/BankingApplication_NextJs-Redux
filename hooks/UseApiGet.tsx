import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useApiGet = (queryKey: string, endpoint: string) => {
  const token = "sk_test_fa778e10ad51f1b65356b04d23c9b4f9268ad392";

  const fetchGetReq = () => {
    try {
      return axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    } catch (error) {
      throw error;
    }
  };

  // useQuery api get req

  const { data, isLoading, error, refetch, isFetching } = useQuery(
    [queryKey],
    fetchGetReq
  );

  return { data, isLoading, error, refetch, isFetching };
};

export default useApiGet;
