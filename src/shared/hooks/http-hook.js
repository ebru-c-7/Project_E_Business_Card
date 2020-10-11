import { useState, useRef, useCallback, useEffect } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  //clean up work after unmount if req is cancelled before loading
  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((el) => el.abort());
    };
  }, []);

  const sendHttpRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const abortController = new AbortController();
      activeHttpRequests.current.push(abortController);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: abortController.signal,
        });
        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (controller) => controller !== abortController
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        console.log(err);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  return { isLoading, error, sendHttpRequest, clearError };
};

export default useHttp;
