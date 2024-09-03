import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import axios from "../axios/axios";


const initialState = {
    comments:[],
    loading:false
}

export const createComment = createAsyncThunk(
    'comment/createComment',
    async({postId,comment})=>{
        try{
            const {data} = await axios.post(`/comment/${postId}`,{
                comment,
                postId
            })
            return data


        }catch(err){
            console.log(err)
        }
    }
)

export const getPostComment = createAsyncThunk(
    'comment/getPostComment',
    async(postId)=>{
        try{    
            const{data} = await axios.get(`/posts/comment/${postId}`)
            return data
        }catch(err){
            console.log(err)
        }
    }
)

export const commentSlice = createSlice({
    name:'comment',
    initialState,
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(createComment.pending,(state)=>{
            state.loading = true
        })
        .addCase(createComment.fulfilled,(state,action)=>{
            state.loading = false
            state.comments.push(action.payload)
        })
        .addCase(createComment.rejected,(state)=>{
            state.loading = false
        })
        build.addCase(getPostComment.pending,(state)=>{
            state.loading=true
        })
        .addCase(getPostComment.fulfilled,(state,action)=>{
            state.loading = false
            state.comments.push(action.payload)
           
        })
    }
})


export default commentSlice.reducer