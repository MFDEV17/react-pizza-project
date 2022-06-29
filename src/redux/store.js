import { configureStore } from "@reduxjs/toolkit";
import pizzasSlice from "./pizzasSlice";
import cartSlice from "./cartSlice";

export default configureStore({
  reducer: {
    pizzas: pizzasSlice,
    cart: cartSlice,
  },
});