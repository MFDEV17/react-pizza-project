import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk("pizzas/fetchPizzas", async () => {
  return (await axios.get("http://localhost:3000/db.json")).data["pizzas"];
});

const pizzasSlice = createSlice({
  name: "order",
  initialState: {
    pizzas: [],
  },
  extraReducers: {
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizzas = action.payload;
    },
  },
});

export const getPizzas = (state) => state.pizzas.pizzas;

export default pizzasSlice.reducer;