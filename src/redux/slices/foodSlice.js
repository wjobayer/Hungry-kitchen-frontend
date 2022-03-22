import { createSlice } from "@reduxjs/toolkit";
import { getFood, getFoods } from "../actions/foodAction";
export const foodSlice = createSlice({
  name: "food",
  initialState: {
    addToCart: [],
    loading: false,
    foods: [],
    error: {},
    food: {},
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
          oldId: payload._id,
          cartQuantity: payload.cartQuantity,
          totalPrice: payload.price * payload.cartQuantity,
          orderStatus: "pending",
        };
        delete cartItem._id;
        state.addToCart.push(cartItem);
      }
    },
    cartQuantity(state, { payload }) {
      const itemIndex = state.addToCart.findIndex(
        (item) => item.oldId === payload.oldId
      );
      state.addToCart[itemIndex].cartQuantity = payload.cartQuantity;
      state.addToCart[itemIndex].totalPrice =
        payload.price * payload.cartQuantity;
    },
    removeFromCart(state, { payload }) {
      state.addToCart = state.addToCart.filter(
        (food) => food.oldId !== payload.oldId
      );
    },
    removeAllFromCart(state, { payload }) {
      state.addToCart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFoods.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getFoods.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.foods = payload;
      })
      .addCase(getFoods.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getFood.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getFood.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.food = payload;
      })
      .addCase(getFood.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { addToCart, removeFromCart, cartQuantity, removeAllFromCart } =
  foodSlice.actions;

export default foodSlice.reducer;
