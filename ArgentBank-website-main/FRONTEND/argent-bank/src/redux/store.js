import { configureStore } from "@reduxjs/toolkit";
//import  authReducer  from './reducers/authSlice';
import {authSlice} from '../redux/reducers/test';

const store = configureStore({
  reducer: { 
    // auth: authReducer,
    auth: authSlice.reducer
  },
});


export default store;
