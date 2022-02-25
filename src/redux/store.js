import { configureStore } from '@reduxjs/toolkit'
import foodReducer from './slices/foodSlice'
export const store = configureStore({
  reducer: foodReducer,
})