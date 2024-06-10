import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState=[
    {
        id:'p1',
        title:'Let learn redux',
        content:'Hello guy, learn redux for global variable instead of context',
        date: sub(new Date(),{minutes:10}).toISOString(),
        userId : 'u1',
        reactions:{
            thumbUp:0,
            funny:0,
            wow:0,
            sad:0,
            heart:0,
            angry:0
        }

    },
    {
        id:'p2',
        title:'Let learn Java',
        content:'Hello guy, learn Java for OOP Development',
        date: sub(new Date(),{hours:1}).toISOString(),
        userId : 'u2',
        reactions:{
            thumbUp:0,
            funny:0,
            wow:0,
            sad:0,
            heart:0,
            angry:0
        }


    },
    {
        id:'p3',
        title:'Let learn React',
        content:'Hello guy, learn React for web design',
        date: sub(new Date(),{days:2}).toISOString(),
        userId : 'u3',
        reactions:{
            thumbUp:0,
            funny:0,
            wow:0,
            sad:0,
            heart:0,
            angry:0
        }


    }
]
 
const postSlice = createSlice({
    name:'postSlice',
    initialState,
    reducers:{
        addPost:{
            reducer(state,action){
                console.log(`Payload id = ${action.payload.id}`)
                state.push(action.payload)

                
            },
            prepare(title,content,userId){
                return{
                    payload : {
                        id:nanoid(),
                        title,
                        content,
                        userId,
                        date:new Date().toISOString(),
                        reactions:{
                            thumbUp:0,
                            funny:0,
                            wow:0,
                            sad:0,
                            heart:0,
                            angry:0
                        }
                    }
                }

            }
        },
        addReaction :(state,action) => {
            const {postId,reactionName}= action.payload
            const exitedPost=state.find((post)=>post.id === postId)
            if(exitedPost){
                exitedPost.reactions[reactionName]++
            }else{
                console.log(`post with id =${postId} does no exit`)
            }
            
        }

          
    }
})
export default postSlice.reducer
export const {addPost,addReaction} =postSlice.actions
export const getAllPost= state => state.posts