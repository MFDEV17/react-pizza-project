import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    orderList: [],
    sum: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.orderList.push(action.payload);
      state.sum += action.payload.price;
    },
    deleteItem: (state, action) => {
      state.orderList.splice(action.payload, 1);
    },
  },
});

export const getOrderList = (state) => state.cart.orderList;
export const getSum = (state) => state.cart.sum;
export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;