import { configureStore } from '@reduxjs/toolkit'
import alumniReducer from './slices/alumniSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    alumni: alumniReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

