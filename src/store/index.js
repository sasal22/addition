import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import postSlice from './postSlice'
import commentSlice from './commentSlice'

export const store = configureStore({
    reducer:{
        user:userSlice,
        post:postSlice,
        comment:commentSlice
    }
})
