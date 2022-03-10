import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// get all food 
export const getFoods = createAsyncThunk("foods", async ()=>{
    const response = await axios.get("/food");
    return response.data;
})

// get single food action
export const getFood = createAsyncThunk("food", async(id)=>{
    const response = await axios.get(`/food/${id}`);
    return response.data;
})

// // add food action
// export const addFood = createAsyncThunk("/addFood", async(data)=>{
//     const response = await axios.post(`/food`, data)
//     console.log(response.data)
//     return response.data
// })

