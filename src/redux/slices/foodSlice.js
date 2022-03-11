import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { getFoods } from "../actions/foodAction";
=======
>>>>>>> 7e2d50aaf2451032f135af9f9d985cbcb55bb9be
export const foodSlice = createSlice({
  name: "food",
  initialState: {
    addToCart: [],
<<<<<<< HEAD
    loading:false,
    foods:[],
    error:{}
=======
>>>>>>> 7e2d50aaf2451032f135af9f9d985cbcb55bb9be
  },
  reducers: {
    addToCart(state, { payload }) {
      const itemIndex = state.addToCart.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        state.addToCart[itemIndex].cartQuantity += payload.cartQuantity;
      } else {
        const cartItem = { ...payload, cartQuantity: payload.cartQuantity };
        state.addToCart.push(cartItem);
      }
    },
    cartQuantity(state, { payload }) {
      const itemIndex = state.addToCart.findIndex(
        (item) => item._id === payload._id
      );
      state.addToCart[itemIndex].cartQuantity = payload.cartQuantity;
    },
    removeFromCart(state, { payload }) {
      state.addToCart = state.addToCart.filter(
        (food) => food._id !== payload._id
      );
    },
  },
<<<<<<< HEAD
  extraReducers:(builder)=>{
    builder
    .addCase(getFoods.pending, (state, {payload})=>{
        state.loading = true;
    })
    .addCase(getFoods.fulfilled, (state, {payload})=>{
      state.loading = false;
      state.foods = payload;
    })
    .addCase(getFoods.rejected, (state, {payload})=>{
      state.loading = false;
      state.error = payload
    })
  }
});

// export const {addToCart} = foodSlice.actions

export const {addToCart,removeFromCart} = foodSlice.actions

=======
});

export const { addToCart, removeFromCart, cartQuantity } = foodSlice.actions;

>>>>>>> 7e2d50aaf2451032f135af9f9d985cbcb55bb9be
export default foodSlice.reducer;
