import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const exists = state.items.find((item) => item.id === plant.id);
      if (!exists) {
        state.items.push({ ...plant, quantity: 1 });
        state.total += 1;
      }
    },
    increment: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item) {
        item.quantity++;
        state.total++;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.total--;
      }
    },
    remove: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item) {
        state.total -= item.quantity;
        state.items = state.items.filter((p) => p.id !== action.payload);
      }
    },
  },
});

export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
