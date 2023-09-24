import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCart: JSON.parse(localStorage.getItem("CART_DATA")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { id, title, poster_path } = action.payload;
      const newItem = { id, title, poster_path, price: 399, quantity: 1 };
      const existingItem = state.currentCart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        newItem.total = newItem.quantity * newItem.price;
        state.currentCart.push(newItem);
      }
      localStorage.setItem("CART_DATA", JSON.stringify(state.currentCart));
    },

    deleteCart: (state, action) => {
      const idToDelete = action.payload.id;
      const indexToDelete = state.currentCart.findIndex(
        (item) => item.id === idToDelete
      );

      if (indexToDelete !== -1) {
        state.currentCart.splice(indexToDelete, 1);
        localStorage.setItem("CART_DATA", JSON.stringify(state.currentCart));
      }
    },

    clearCart: (state) => {
      state.currentCart = [];
      localStorage.removeItem("CART_DATA");
    },
  },
});

export const { addCart, deleteCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
