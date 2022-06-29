import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    orderList: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.orderList.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.orderList.splice(action.payload, 1);
    }
  }
})

export const getOrderList = state => state.cart.orderList;

export default cartSlice.reducer;