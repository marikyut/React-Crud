import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import { store } from './redux/store'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default store;
