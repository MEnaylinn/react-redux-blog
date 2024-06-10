import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:'u1',
        name : 'mgmg'
    },
    {
        id:'u2',
        name : 'agag'
    },
    {
        id:'u3',
        name : 'sabal'
    },
]
const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {

    }
})
export default userSlice.reducer
export const getAllUser = state => state.users
export const getUserById = (state,userId) => state.users.find(user => user.id === userId)