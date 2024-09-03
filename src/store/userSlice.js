import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../axios/axios";
import axios from "../axios/axios";

const initialState = {
    user:null,
    isLoading:false,
    token:null,
    status:null
}


export const registerUser = createAsyncThunk(
    '/auth/register',
    async({username,password,rejectWithValue})=>{
        try{
            const {data} = await axios.post('auth/register',{
                username,
                password
            })
            if(data.token){
                window.localStorage.setItem('token',data.token)
            }
            return data
        }catch(err){
            console.log(err);
        }
    }
)

export const login = createAsyncThunk(
    '/auth/login',
    async({username,password})=>{
            try{
                    const {data} = await axios.post('auth/login',{
                        username,
                        password
                    })
                    if(data.token){
                        window.localStorage.setItem('token',data.token)
                    }
                    return data
            }catch(err){
                console.log(err)
            }
})

export const getMe = createAsyncThunk(
    'auth/getMe',
    async()=>{
        try{
            const {data} = await axios.get('auth/getMe')
            return data
        }
        catch(err){
            console.log(err)
        }
    }
)

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logOut:(state)=>{
            state.user = null
            state.isLoading=false
        state.token=null
        state.status=null
        localStorage.removeItem('token')
        }
    },
    extraReducers:(build)=>{

        build.addCase(registerUser.pending,(state,action)=>{
            state.isLoading = true
            state.status = null
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading = false
            state.status= action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.status = action.payload.message
            state.isLoading = false
        })
        build.addCase(login.pending,(state,action)=>{
            state.isLoading = true
            state.status = null
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false
            state.status= action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        })
        .addCase(login.rejected,(state,action)=>{
            state.status = action.payload.message
            state.isLoading= false
        })
        build.addCase(getMe.pending,(state,action)=>{
                state.isLoading = true
                state.status= null
        })
        .addCase(getMe.fulfilled,(state,action)=>{
                state.isLoading = false
                state.status = null
                state.user = action.payload?.user
                state.token = action.payload?.token
        })
        .addCase(getMe.rejected,(state,action)=>{
                state.isLoading =false
                state.status = action.payload.message
        })
        
        
    }
})

export const toggleGetMe = (state)=>Boolean(state.user.token)
export const {logOut} = userSlice.actions
export default userSlice.reducer