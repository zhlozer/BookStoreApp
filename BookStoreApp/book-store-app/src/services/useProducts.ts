import useSWR from "swr";

export interface ProductCategoriesRequest {
  product: Product[];
}

export interface Product {
  author: string;
  cover: string;
  created_at: string;
  description: string;
  id: number;
  name: string;
  price: number;
  sales: number;
  slug: string;
  likes_aggregate: LikesAggregate;
}

export interface LikesAggregate {
  aggregate: Aggregate;
}

export interface Aggregate {
  count: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useProducts = (categoryId: number) => {
  const { data, isLoading } = useSWR<ProductCategoriesRequest>(
    `https://assign-api.piton.com.tr/api/rest/products/${categoryId}`,
    fetcher
  );

  return { data, isLoading };
};
