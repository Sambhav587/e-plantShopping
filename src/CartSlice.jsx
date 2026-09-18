import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;