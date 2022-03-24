import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all food 
export const getFoods = createAsyncThunk("foods", async ()=>{
    const response = await axios.get("http://localhost:5000/foods");
    return response.data;
})

// get single food action
export const getFood = createAsyncThunk("food", async(id)=>{
    const response = await axios.get(`http://localhost:5000/foods/${id}`);
    return response.data;
})

