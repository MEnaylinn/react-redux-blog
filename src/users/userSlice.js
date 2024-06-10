import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const GET_USERS='https://jsonplaceholder.typicode.com/users'

export const fetchAllUsers=createAsyncThunk('fetchAllUsers',async () =>{
    const response= await axios.get(GET_USERS)
    return [...response.data]
})

const initialState={
    users:[],
    status:'idle',
    error:null
}
const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {},
    extraReducers(builder){
            builder
                .addCase(fetchAllUsers.fulfilled,(state,action)=>{
                    const loadedUsers=action.payload
                    state.users=[...loadedUsers]
                    state.status='success'
                    console.log(loadedUsers)
                })
                .addCase(fetchAllUsers.rejected,(state,action)=>{
                    state.status='failed'
                    state.error=action.error

                })
        
    }
})
export default userSlice.reducer
export const getAllUser = state => state.users.users
export const getUserById = (state,userId) => state.users.users.find(user => user.id === Number(userId))
export const getStatus = state => state.users.status
export const getError = state => state.users.error
