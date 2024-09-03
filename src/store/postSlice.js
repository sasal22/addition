import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios/axios";


const initialState = {
    posts:[],
    popularPosts:[],
    loading:false,
    status:null
}


export const createPost = createAsyncThunk(  
    'post/createPost',
    async (arg)=>{
        try{
            const {data}= await axios.post('/posts',arg)
            return data
        }catch(err){
            console.log(err)
        }
    }
)

export const getPosts = createAsyncThunk(
    'post/getPosts',
    async()=>{
        try{
            const {data} = await axios.get('/posts')
            return data

        }catch(err){
            console.log(err)
        }
    }
)

export const getMyPosts = createAsyncThunk(
    'post/getMyPosts',
    async()=>{
        try{
            const {data} = await axios.get('posts/user/me')
            return data
        }
        catch(err){
            console.log(err)
        }
    }
)

export const removePost= createAsyncThunk(
    'post/removePost',
    async(id)=>{
        try{
            const {data} = await axios.delete(`/posts/${id}`,id)
            return data
        }catch(err)
        {console.log(err)}
    }
)


export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:(build)=>{
            build.addCase(createPost.pending,(state,action)=>{
                state.loading = true
            })
            .addCase(createPost.fulfilled,(state,action)=>{
                state.loading=false
                state.posts.push(action.payload)
            })
            .addCase(createPost.rejected,(state,action)=>{
                state.loading=false
            })
            build.addCase(getPosts.pending,(state)=>{
                state.loading = true
            })
            .addCase(getPosts.fulfilled,(state,action)=>{
                state.loading = false
                state.posts = action.payload.posts
                state.popularPosts = action.payload.popularPosts
            })
            .addCase(getPosts.rejected,(state)=>{
                state.loading = false
            })
            build.addCase(getMyPosts.pending,(state)=>{
                state.loading = true
            })
            .addCase(getMyPosts.fulfilled,(state,action)=>{
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getMyPosts.rejected,(state,action)=>{
                state.loading=false
            })
            build.addCase(removePost.pending,(state)=>{
                state.loading = true
            })
            .addCase(removePost.fulfilled,(state,action)=>{
                state.loading = false
                state.posts = state.posts.filter((el)=>{
                    return el._id !== action.payload._id
                })
            })
    }
})


export default postSlice.reducer