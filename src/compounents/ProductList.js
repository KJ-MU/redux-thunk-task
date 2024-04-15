import React from "react";
import { ProductDetails } from "./ProductDetails";
import { useSelector } from "react-redux";
export const ProductList = () => {
  const productList = useSelector((state) => state.products.products);

  return (
    <div className="flex flex-wrap justify-evenly gap-10 items-center p-5">
      {productList.products?.map((item, id) => (
        <ProductDetails key={id} item={item} />
      ))}
    </div>
  );
};
