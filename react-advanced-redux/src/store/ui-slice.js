import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  cartIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui_state",
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
