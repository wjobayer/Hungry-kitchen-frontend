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
   addToCart:(state,{payload})=>{
       state.addToCart.push(payload)
   },
   removeFromCart:(state,{payload})=>{
     state.addToCart=state.addToCart.filter(food=>food.idMeal !==payload.idMeal)
   }
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

// export const {addToCart} = foodSlice.actions

export const {addToCart,removeFromCart} = foodSlice.actions

export default foodSlice.reducer;
