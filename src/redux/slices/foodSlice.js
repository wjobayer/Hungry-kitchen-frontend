import { createSlice } from "@reduxjs/toolkit";
import { getFoods } from "../actions/foodAction";
export const foodSlice = createSlice({
  name: "food",
  initialState: {
    addToCart: [],
    loading:false,
    foods:[],
    error:{}
  },
  reducers: {
    addToCart(state, { payload }) {
      const itemIndex = state.addToCart.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        state.addToCart[itemIndex].cartQuantity += payload.cartQuantity;
      } else {
        const cartItem = {
          ...payload,
          cartQuantity: payload.cartQuantity,
          totalPrice: payload.price * payload.cartQuantity,
        };
        state.addToCart.push(cartItem);
      }
    },
    cartQuantity(state, { payload }) {
      const itemIndex = state.addToCart.findIndex(
        (item) => item._id === payload._id
      );
      state.addToCart[itemIndex].cartQuantity = payload.cartQuantity;
      state.addToCart[itemIndex].totalPrice =
        payload.price * payload.cartQuantity;
    },
    removeFromCart(state, { payload }) {
      state.addToCart = state.addToCart.filter(
        (food) => food._id !== payload._id
      );
    },
  },
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



export const { addToCart, removeFromCart, cartQuantity } = foodSlice.actions;

export default foodSlice.reducer;
