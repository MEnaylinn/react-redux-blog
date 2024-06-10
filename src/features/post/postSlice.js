import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const GET_POSTS='https://jsonplaceholder.typicode.com/posts'

export const fetchAllPosts=createAsyncThunk('fetchAllPosts',async () =>{
    const response= await axios.get(GET_POSTS)
    return [...response.data]
})

export const createPost = createAsyncThunk('createPost',async (post)=>{
    console.log(post)
    const response = await axios.post(GET_POSTS,post,{
        headers : {
            'Content-Type':'application/json'
        }
    })
    return response

})

const initialState={
    posts:[],
    status:'idle',
    error: null 

}
 
const postSlice = createSlice({
    name:'postSlice',
    initialState,

    
    extraReducers(builder){
        builder
            .addCase(fetchAllPosts.fulfilled,(state,action)=>{
                const loadedPosts=action.payload
                console.log(loadedPosts)

                let i=0;
                const posts = loadedPosts.map(post =>{
                    return{
                        id:post.id,
                        title:post.title,
                        content:post.body,
                        userId:post.userId,
                        date:sub(new Date(),{minutes : i++ }).toISOString(),
                        reactions:{
                            thumbUp:0,
                            funny:0,
                            wow:0,
                            sad:0,
                            heart:0,
                            angry:0
                        }
                        
                    }
                })
                state.posts= [...posts]
                state.status='success'
            
            })
            .addCase(fetchAllPosts.pending,(state)=>{
                state.status='loading'
            })
            .addCase(fetchAllPosts.rejected,(state,action)=>{
                state.status='failed'
                state.error=action.error
                console.log(action.error)
            })
            .addCase(createPost.fulfilled,(state,action)=>{
                const response = action.payload
                const status=response.status
                const loadedPost=response.data
                const post={
                    content:loadedPost.body,
                    ...loadedPost
                }
                if(status === 201){
                    console.log('post created')
                    state.posts=[post,...state.posts]
                }else{
                    state.status='error'
                    console.log('post : fail to create!')
                }
            })
    }
})
export default postSlice.reducer
export const {addPost,addReaction} =postSlice.actions
export const getAllPost= state => state.posts.posts
export const getStatus=state => state.posts.status
export const getError=state => state.posts.error