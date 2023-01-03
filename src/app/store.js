import { configureStore } from "@reduxjs/toolkit";
import productReducer, {
  productFetching,
} from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    //multiple reducers into here
    products: productReducer,
  },
});

store.dispatch(productFetching());
