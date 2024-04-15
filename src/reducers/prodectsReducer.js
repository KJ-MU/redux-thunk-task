let initialState = {
  products: [],
};

export function getProducts() {
  return function (dispatch) {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "products/get", payload: data });
        // console.log(data);
      });
  };
}

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "products/get":
      return { ...state, products: action.payload };
    default:
      break;
  }

  return state;
}
