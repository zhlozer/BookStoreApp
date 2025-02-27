import useSWR from "swr";

export interface Category {
  id: number;
  name: string;
  created_at: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useCategories = () => {
  const { data, isLoading } = useSWR<{ category: Category[] }>(
    "https://assign-api.piton.com.tr/api/rest/categories",
    fetcher
  );
  return { data, isLoading };
};
