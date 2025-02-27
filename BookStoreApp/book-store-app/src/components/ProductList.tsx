import React from "react";
import { useRouter } from "next/router";
import { useProducts, Product } from "../services/useProducts";

const Products = () => {
  const router = useRouter();
  const { categoryId } = router.query;

  const categoryIdNumber = categoryId
    ? parseInt(categoryId[0], 10)
    : parseInt(categoryId ?? "", 10);

  const { data: products } = useProducts(categoryIdNumber);

  const handleClickButton = (product: Product) => {
    router.push({
      pathname: `/home/product/${product.id}`,
      query: { cover: product.cover },
    });
  };

  return (
    <div className=" m-14">
      <h1 className="text-2xl font-bold mb-4">***</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {products?.product.map((item: Product) => (
          <button key={item.id} onClick={() => handleClickButton(item)}>
            <div
              key={item.id}
              className="p-4 bg-customPurple rounded-lg shadow-md border h-44   "
            >
              <div className="flex">
                <img
                  className="align-center"
                  src="/Books.jpg"
                  alt={item.name}
                  width={100}
                  height={150}
                />
                <div className="ml-4 w-full flex flex-col justify-between items-start text-left">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-md text-customBlue font-semibold self-end">
                    {item.price} $
                  </p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
