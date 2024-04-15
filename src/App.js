import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductList } from "./compounents/ProductList";
import { getProducts } from "./reducers/prodectsReducer";
import { ShoppingCart } from "./compounents/ShoppingCart";
function App() {
  const dispatch = useDispatch();
  const tesst = useSelector((state) => console.log(state));

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="flex flex-wrap">
      <ProductList />
      <ShoppingCart />
    </div>
  );
}

export default App;
