import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./Message";
import authService from "../Services/authService";

const user =    JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
    "auth/register",
    async({userName , email , password})=>{
            
    }

)