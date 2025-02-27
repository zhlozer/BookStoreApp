import React from "react";
import { useCategories, Category } from "../services/useCategories";
import { useProducts, Product } from "../services/useProducts";
import { useRouter } from "next/router";

const CategoryList = () => {
  const { data: categories } = useCategories();

  return (
    <div className="space-y-8 m-12">
      {categories?.category.map((category: Category) => (
        <CategoryProducts key={category.id} category={category} />
      ))}
    </div>
  );
};

const CategoryProducts = ({ category }: { category: Category }) => {
  const { data: products } = useProducts(category.id);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/products?categoryId=${category.id}`);
  };

  const handleClickButton = (product: Product) => {
    router.push({
      pathname: `/home/product/${product.id}`,
      query: { cover: product.cover },
    });
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
        <button onClick={handleClick} className="text-customOrange">
          View all
        </button>
      </div>
      <hr className="shadow" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {products?.product.slice(0, 4).map((item: Product) => (
          <button key={item.id} onClick={() => handleClickButton(item)}>
            <div className="p-4 bg-customPurple rounded-lg shadow-md border h-44">
              <div className="flex">
                <img
                  className="h-fit flex-shrink-0"
                  src="/Books.jpg"
                  alt={item.name}
                  width={120}
                />
                <div className="ml-2 w-full flex flex-col items-start text-left">
                  <h2 className="text-sm font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.author}</p>

                  <p className="text-md text-customBlue font-semibold mt-auto self-end">
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

export default CategoryList;
