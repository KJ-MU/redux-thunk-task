import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/cartProductsReducer";
export const ProductDetails = ({ item }) => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.products);

  const handleAddToCart = (item) => {
    dispatch({
      type: "cart/add",
      payload: { productsList, item },
    });
  };
  return (
    <div className="bg-stone-200 rounded w-72 h-2/1 justify-center items-center p-3">
      <div className="h-52  flex gap-4 justify-center border-2 rounded  ">
        <img src={item.images[0]} alt="" />{" "}
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="font-bold">{item.title}</h2>
        {/* <p className="text-xs">{item.description}</p> */}
        <div className="flex justify-between w-full items-center">
          <p>{item.price}$</p>
          <button
            className="bg-blue-400 rounded p-2 text-sm font-bold text-white m-2 "
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
