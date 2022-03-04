import { createSlice } from '@reduxjs/toolkit'
export const foodSlice = createSlice({
  name: 'food',
  initialState:{
      addToCart:[],
  },
  reducers: {
   addToCart:(state,{payload})=>{
       state.addToCart.push(payload)
   },
   removeFromCart:(state,{payload})=>{
     state.addToCart=state.addToCart.filter(food=>food.idMeal !==payload.idMeal)
   }
  },
})


export const {addToCart,removeFromCart} = foodSlice.actions

export default foodSlice.reducer