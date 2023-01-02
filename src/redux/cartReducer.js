import { createSlice } from "@reduxjs/toolkit";
// let productId;
// let productQuantity;

const productStored = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [];
// localStorage.getItem("cartItem") !== null
//   ? JSON.parse(localStorage.getItem("cartItemId"))
//   : [productId, productQuantity];
const initialState = {
  products: productStored
  // [  
  // {
    //   itemId: productStored.productId? ,
    //   quantity: productStored.productQuantity,
    // },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemPresent = state.products.findIndex(
        (itemPresent) => itemPresent.itemId === action.payload.itemId
      );
      if (itemPresent >= 0) {
        state.products[itemPresent].quantity += action.payload.quantity;
        // (itemPresent) => (itemPresent.quantity = action.payload.quantity)
        // );
      } else {
        state.products.push(action.payload);
      }
      localStorage.setItem("cartItem", JSON.stringify(state.products));
    },
    removeItem(state, action) {
      // const itemClicked = 
      console.log(action.payload);
      state.products = state.products.filter(
        (itemClicked) => itemClicked.itemId !== action.payload
      );
      localStorage.setItem("cartItem", JSON.stringify(state.products));
    },
    resetCart(state) {
      state.products = [];
      localStorage.setItem("cartItem", state.products);
    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
