import { createSlice } from "@reduxjs/toolkit";
export const foodSlice = createSlice({
  name: "food",
  initialState: {
    addToCart: [],
  },
  reducers: {
<<<<<<< HEAD
    addToCart: (state, { payload }) => {
      state.addToCart.push(payload);
    },
=======
   addToCart:(state,{payload})=>{
       state.addToCart.push(payload)
   },
   removeFromCart:(state,{payload})=>{
     state.addToCart=state.addToCart.filter(food=>food.idMeal !==payload.idMeal)
   }
>>>>>>> 653d9beeb4f954879e6af06447ec9ed92b0ebd9c
  },
});

<<<<<<< HEAD
export const { addToCart } = foodSlice.actions;
=======
// export const {addToCart} = foodSlice.actions

export const {addToCart,removeFromCart} = foodSlice.actions
>>>>>>> 653d9beeb4f954879e6af06447ec9ed92b0ebd9c

export default foodSlice.reducer;
