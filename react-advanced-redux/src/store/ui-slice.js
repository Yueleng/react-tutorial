import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  cartIsVisible: false,
  notification: null,
  changed: false,
};

const uiSlice = createSlice({
  name: "ui_state",
  initialState: initialUIState,
  reducers: {
    replaceUi(state, action) {
      console.log(action);
      state.cartIsVisible = action.payload;
    },
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
      state.changed = true;
    },
    showNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
