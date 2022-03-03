import { createSlice } from '@reduxjs/toolkit'
export const foodSlice = createSlice({
  name: 'food',
  initialState:{
      addToCart:[],
  },
  reducers: {
   addToCart:(state,{payload})=>{
       state.addToCart.push(payload)
   }
  },
})

export const {addToCart} = foodSlice.actions

export default foodSlice.reducer