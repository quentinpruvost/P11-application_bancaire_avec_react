
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getloginUser = createAsyncThunk('auth/login', async ({ email, password }, { dispatch }) => {
  try {
    const loginResponse = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (loginResponse.ok) {
      const data = await loginResponse.json();
      const token = data.body.token;

      sessionStorage.setItem('token', token);

      const getUserProfileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (getUserProfileResponse.ok) {
        const profileData = await getUserProfileResponse.json();
        console.log("profileData: ", profileData.body);

        dispatch(loginSuccess(profileData.body));
       
        return
      } else {
        
      }
    } else {
      
      const errorMessage = document.getElementById("textErrorMessage")
      const signIn = document.getElementById("formWindow");
      const errorData = await loginResponse.json();
      signIn.classList.add("expanded")
      errorMessage.textContent = errorData.message || 'Login failed';
         
    }
  } catch (error) {
    dispatch(loginFailure(error.message || 'Login failed'));
    throw error;
  }
});


// ------------------------

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    profileData: {},
    error: null,
    isLoading: true,
    userName:"mathy", 
    lastName:"",  //---------
    firstName:'', //---------
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.profileData = action.payload;
      state.error = null;

      state.userName = action.payload.userName 
      state.lastName = action.payload.lastName    //---
      state.firstName = action.payload.firstName  //---

      
      console.log('***********authSlice*************' +  action.payload.userName)
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.profileData = null;
      state.error = action.payload;
    },
  },
  extraReducers:(builder) => {
    builder
      .addCase(getloginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getloginUser.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false
        state.profileData = action.payload
      })
      .addCase(getloginUser.rejected, (state) => {
        state.isLoading = false
      })
  }
});

export const { loginSuccess, loginFailure } = authSlice.actions;

export const sliceReducer = authSlice.actions;
