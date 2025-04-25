import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

const useFetchAdvertise = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchAdvertise = async () => {
      setIsLoading(true);
      const url = `/advertisements`;
      try {
        const response = await apiClient.get(url);
        const data = await response.data;
        setAdvertisements(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAdvertise();
  }, []);
  return {
    advertisements,
    isLoading,
    error,
  };
};

export default useFetchAdvertise;
