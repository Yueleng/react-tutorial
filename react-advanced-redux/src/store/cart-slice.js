import { createSlice } from "@reduxjs/toolkit";

const initialCartSlice = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart_slice",
  initialState: initialCartSlice,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
      state.items = action.payload.items;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      state.changed = true;
      if (!existingItem) {
        throw new Error("Remove item error. Item id not found in item list");
      } else {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== itemId);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }

      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
