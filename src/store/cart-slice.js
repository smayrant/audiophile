import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      //   If there's no item currently in the cart, add item to cart
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.name,
          total: newItem.price,
          img: newItem.img,
        });
      }
      //   Otherwise, if the item is in the cart, update its quantity and the total
      else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + newItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
