import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetProductById } from "@/services/useProduct";
import { useGetImagebyCover } from "@/services/useGetImagebyCover";
import BackArrowIcon from "@/components/BackArrowIcon";
import Heart from "@/components/HeartIcon";

const ProductPage = () => {
  const router = useRouter();
  const { productId, cover } = router.query;
  const id = Number(productId);
  const { data: product, error } = useGetProductById(id);
  const { data: coverImageUrl } = useGetImagebyCover(cover as string);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const likedProducts = JSON.parse(
      localStorage.getItem("likedProducts") || "[]"
    );
    if (likedProducts.includes(id)) {
      setIsFilled(true);
    }
  }, [id]);

  const handleClickLikeButton = () => {
    const likedProducts = JSON.parse(
      localStorage.getItem("likedProducts") || "[]"
    );

    if (likedProducts.includes(id)) {
      const updatedLikedProducts = likedProducts.filter(
        (productId: number) => productId !== id
      );
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(updatedLikedProducts)
      );
      setIsFilled(false);
    } else {
      likedProducts.push(id);
      localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
      setIsFilled(true);
    }
  };

  if (error) return <div>An error occurred.</div>;
  if (!product) return <div>Loading product...</div>;

  const handleClickGoBack = () => {
    router.back();
  };

  return (
    <div className="m-10">
      <div className="flex items-center mb-8">
        <button onClick={handleClickGoBack} className="flex items-center">
          <BackArrowIcon />
          <h1 className="text-xl ml-2 font-bold">Book Details</h1>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-customPurple flex justify-center items-center border">
          <img
            src={coverImageUrl?.url}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:col-span-3 space-y-4 flex-col flex justify-between h-full ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-4xl font-bold items-start">{product.name}</h1>
              <button className="items-end" onClick={handleClickLikeButton}>
                <Heart isFilled={isFilled} />
              </button>
            </div>

            <p className="text-lg text-gray-500">{product.author}</p>
            <br />
            <h1 className="text-xl font-semibold mb-1">Summary</h1>
            <p className="text-lg text-gray-700">{product.description}</p>
          </div>
          <button className="w-1/3 bg-customOrange text-white px-4 py-2 rounded text-md tracking-wider transition flex items-center justify-between self-end mt-auto">
            <p className="text-xl self-start ">{product.price} $</p>
            <p className="text-xl self-end ml-auto ">BUY NOW</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
