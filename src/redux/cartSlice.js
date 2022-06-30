import { createSlice } from "@reduxjs/toolkit";

const findSameProduct = (list, targetName, targetSize, targetDough) => {
  return list.findIndex(
    ({ name, size, dough }) =>
      name === targetName && targetSize === size && targetDough === dough
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    orderList: [],
    count: 0,
    sum: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const indexOfFind = findSameProduct(
        state.orderList,
        action.payload.name,
        action.payload.size,
        action.payload.dough
      );

      if (indexOfFind === -1) {
        state.orderList.push(action.payload);
        state.sum += action.payload.price;
        state.count += 1;
      } else {
        state.orderList[indexOfFind].count += 1;
        state.orderList[indexOfFind].currentSum =
          state.orderList[indexOfFind].count *
          state.orderList[indexOfFind].price;
        state.count += 1;
        state.sum += state.orderList[indexOfFind].price;
      }
    },
    deleteItem: (state, action) => {
      state.count -= state.orderList[action.payload].count;
      state.sum -= state.orderList[action.payload].currentSum;
      state.orderList.splice(action.payload, 1);
    },
    clearCart: (state, _) => {
      state.orderList = [];
      state.count = 0;
      state.sum = 0;
    },
    incrementItem: (state, action) => {
      state.orderList[action.payload].count += 1;
      state.count += 1;

      state.orderList[action.payload].currentSum =
        state.orderList[action.payload].count *
        state.orderList[action.payload].price;

      state.sum += state.orderList[action.payload].price;
    },
    decrementItem: (state, action) => {
      state.orderList[action.payload].count -= 1;
      state.count -= 1;

      state.orderList[action.payload].currentSum -=
        state.orderList[action.payload].price;

      state.sum -= state.orderList[action.payload].price;

      if (state.orderList[action.payload].count === 0) {
        state.orderList.splice(action.payload, 1);
      }
    },
  },
});

export const getOrderList = (state) => state.cart.orderList;
export const getSum = (state) => state.cart.sum;
export const getCount = (state) => state.cart.count;

export const { addItem, deleteItem, incrementItem, clearCart, decrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;