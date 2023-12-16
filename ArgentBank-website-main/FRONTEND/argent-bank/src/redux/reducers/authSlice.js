
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    profileData: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.profileData = action.payload;
      state.error = null;
      console.log('************************' +  action.payload.email)
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.profileData = null;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;


/**
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    profileData: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.profileData = action.payload;
      state.error = null;
      console.log('************************' +  action.payload.email)
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.profileData = null;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;
 */