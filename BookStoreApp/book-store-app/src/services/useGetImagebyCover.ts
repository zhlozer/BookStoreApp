import useSWR from "swr";

export interface GetImagebyCoverRequest {
  action_product_image: ActionProductImage;
}

export interface ActionProductImage {
  url: string;
}
const fetcher = (url: string, cover: string) =>
  fetch(url, {
    body: JSON.stringify({ fileName: cover }),
    method: "post",
  }).then((res) => res.json());

export const useGetImagebyCover = (cover: string) => {
  const { data, ...rest } = useSWR<GetImagebyCoverRequest>(
    [`https://assign-api.piton.com.tr/api/rest/cover_image`, cover],
    ([url, cover]) => fetcher(url, cover as string)
  );

  return { data: data?.action_product_image, ...rest };
};
