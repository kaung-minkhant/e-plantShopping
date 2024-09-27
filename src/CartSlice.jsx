import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },
    updateQuantity: (state, action) => {
      const name = action.payload.name;
      const quantity = action.payload.quantity;
      state.items = state.items.map((item) => {
        if (item.name === name) {
          item.quantity = quantity;
        }
        return item
      });
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
