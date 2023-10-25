import { createSlice } from "@reduxjs/toolkit";

const uiState = {
  showCart: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        status: action.payload.status,
        title: action.payload.title,
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
