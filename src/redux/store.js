import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./pizzasSlice";
import pizzasSlice from "./pizzasSlice";

export default configureStore({
  reducer: {
    pizzas: pizzasSlice,
  },
});