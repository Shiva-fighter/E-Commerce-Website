import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    userName : "",
    password : ""
}

export const SignupSlice = createSlice({
    name :"signup",
    initialState,
    reducers:{
        addUser(state , action){
            
        }
    }
})