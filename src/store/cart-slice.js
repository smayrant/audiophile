import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartTotal: 0,
    totalQuantity: 0,
    qtyToAdd: 1,
  },
  reducers: {
    increaseQty(state) {
      state.qtyToAdd++;
    },
    decreaseQty(state) {
      if (state.qtyToAdd > 1) {
        state.qtyToAdd--;
      }
      return;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity += state.qtyToAdd;

      //   If there's no item currently in the cart, create and add item to cart
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: state.qtyToAdd,
          name: newItem.name,
          total: newItem.price,
          cartImg: newItem.cartImg,
        });

        // update the cart's total by multiplying the price of the item by the quantity to be added
        state.cartTotal += newItem.price * state.qtyToAdd;
      }
      //   Otherwise, if the item is in the cart, update its quantity and total and the total for the cart
      else {
        existingItem.quantity += state.qtyToAdd;
        existingItem.total += existingItem.total;
        state.cartTotal = state.cartTotal + existingItem.price * state.qtyToAdd;
      }
      // reset the quantity of items to add to cart to 1
      state.qtyToAdd = 1;
      toast.success("Item added to cart");
    },
    removeItemFromCart(state, action) {
      // retrieve the item's id from payload
      const id = action.payload;

      // find items in state where id is equal to the id from the payload
      const existingItem = state.items.find((item) => item.id === id);

      // reduce the state's total quantity by 1
      state.totalQuantity--;

      // if item is currently in state and has a quantity of 1, remove the item from state. Otherwise, reduce quantity by 1 and update the cart's and item's total
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.cartTotal -= existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
        state.cartTotal -= existingItem.price;
      }
      toast.warning("Item removed from cart");
    },
    // empty the cart, resetting the cart's total and total quantity to 0
    emptyCart(state) {
      if (state.items.length > 0) {
        state.items.splice(0, state.items.length);
        state.cartTotal = 0;
        state.totalQuantity = 0;
      }
      return;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
