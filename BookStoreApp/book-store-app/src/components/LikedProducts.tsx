import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getLikedProductIds } from "@/services/likeService";
import { useGetProductById } from "@/services/useProduct";

const LikedProducts = () => {
  const [likedProductIds, setLikedProductIds] = useState<number[]>([]);

  useEffect(() => {
    const ids = getLikedProductIds();
    setLikedProductIds(ids);
  }, []);

  if (likedProductIds.length === 0) {
    return <div>No liked products found.</div>;
  }

  return (
    <div className="m-14">
      <h1 className="text-2xl font-bold mb-4">Liked Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {likedProductIds.map((productId) => (
          <ProductCard key={productId} productId={productId} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ productId }: { productId: number }) => {
  const { data: product, error, isLoading } = useGetProductById(productId);
  const router = useRouter();
  if (isLoading) return <div>Loading product...</div>;
  if (error || !product) return <div>Product not found.</div>;

  return (
    <div
      className="p-4 bg-customPurple rounded-lg shadow-md border h-44 cursor-pointer"
      onClick={() =>
        router.push({
          pathname: `/home/product/${product.id}`,
          query: { cover: product.cover },
        })
      }
    >
      <div className="flex">
        <img
          className="align-center"
          src="/Books.jpg"
          alt={product.name}
          width={100}
          height={150}
        />
        <div className="ml-4 w-full flex flex-col justify-between items-start text-left">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-md text-customBlue font-semibold self-end">
            {product.price} $
          </p>
        </div>
      </div>
    </div>
  );
};

export default LikedProducts;
