import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const getFoods = createAsyncThunk("foods", async ()=>{
    const response = await axios.get("/food");
    return response.data;
})
