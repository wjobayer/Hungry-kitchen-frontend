import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// get all food 
export const getFoods = createAsyncThunk("foods", async ()=>{
    const response = await axios.get("https://hungry-kitchen-app.herokuapp.com/foods");
    return response.data;
})

// get single food action
export const getFood = createAsyncThunk("food", async(id)=>{
    const response = await axios.get(`https://hungry-kitchen-app.herokuapp.com/foods/${id}`);
    return response.data;
})

