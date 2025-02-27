import useSWR from "swr";

export interface GetProductByIdRequest {
  product_by_pk: ProductByPk;
}

export interface ProductByPk {
  author: string;
  category_id: number;
  cover: string;
  description: string;
  id: number;
  name: string;
  price: number;
  sales: number;
  slug: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetProductById = (productId: number) => {
  const { data, ...rest } = useSWR<GetProductByIdRequest>(
    `https://assign-api.piton.com.tr/api/rest/product/${productId}`,
    fetcher
  );

  return { data: data?.product_by_pk, ...rest };
};
