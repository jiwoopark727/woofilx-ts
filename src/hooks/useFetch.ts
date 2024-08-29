import { useEffect, useState } from "react";

type FetchOptions = {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
};

export const useFetch = <T>(
  initialUrl: string,
  initialData: T,
  initialOptions: FetchOptions = { method: "GET" }
) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        const response = await fetch(initialUrl, {
          ...initialOptions,
          signal,
        });

        if (!response.ok) {
          throw new Error("데이터를 불러오는데 실패했습니다.");
        }

        const data: T = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        setError(error instanceof Error ? error.message : "unknown error");
        setIsError(true);
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [initialUrl]);

  return { data, isLoading, isError, error };
};
