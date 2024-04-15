import React from "react";
import { useSelector } from "react-redux";
export const ShoppingCart = () => {
  const productList = useSelector((state) => state.cart.items);

  return (
    <div className="flex flex-wrap justify-evenly gap-10 items-center p-5">
      {productList.products?.map((item, id) => (
        <div className="bg-stone-200 rounded w-full flex gap-2 p-3">
          <div className="h-32  flex gap-4 justify-center border-2 rounded  ">
            <img src={item.images[0]} alt="" />{" "}
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="font-bold">{item.title}</h2>
            <p className="text-xs">{item.description}</p>
            <div className="flex justify-between w-full items-center">
              <p>{item.price}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
