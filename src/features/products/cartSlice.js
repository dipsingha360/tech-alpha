import { createSlice } from "@reduxjs/toolkit";

// states
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

// Slices
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {
    // add to cart
    addToCart(state, action) {
      // existed item check
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // if existed
      if (existedItemIndex >= 0) {
        // quantity increase
        state.cartItems[existedItemIndex].cartQuantity += 1;
      } else {
        // add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);

        // add to local storage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    // remove from cart
    removeFromCart(state, action) {
      // remove item
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      // update cart item
      state.cartItems = updatedCartItems;

      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
