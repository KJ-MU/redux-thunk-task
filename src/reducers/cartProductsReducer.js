let initialState = {
  items: [],
};

// Define the cart reducer function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/add":
      const productslistfind = action.payload.productsList.products;

      // Check if item is already in cart
      const existingItem = state.productslistfind.find(
        (item) => item.id === action.payload.item.id
      );

      if (existingItem) {
        // If item exists, update quantity
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If item doesn't exist, add it to cart
        return {
          ...state,
          items: [...state.items, { ...action.payload.item, quantity: 1 }],
        };
      }

    // case "cart/remove":
    //   return {
    //     ...state,
    //     items: state.items.filter((item) => item.id !== action.payload.id),
    //   };

    // case "cart/quantity":
    //   return {
    //     ...state,
    //     items: state.items.map((item) =>
    //       item.id === action.payload.id
    //         ? { ...item, quantity: action.payload.quantity }
    //         : item
    //     ),
    //   };

    default:
      return state;
  }
};

// Define action creators
// export const addToCart = (item) => ({
//   type: "cart/add",
//   payload: item,
// });

// export const removeFromCart = (itemId) => ({
//   type: "cart/remove",
//   payload: { id: itemId },
// });

// export const editQuantity = (itemId, quantity) => ({
//   type: "cart/quantity",
//   payload: { id: itemId, quantity },
// });

export default cartReducer;

// export function cartProductsReducer(state = initialState, action) {
//   switch (action.type) {
//     case "cartProducts/Add":
//       return { ...state, cartProducts: action.payload };
//     default:
//       break;
//   }

//   return state;
// }
