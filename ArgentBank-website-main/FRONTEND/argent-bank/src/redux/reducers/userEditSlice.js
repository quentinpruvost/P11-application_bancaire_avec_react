import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const changeUserName = createAsyncThunk('user/changeUserName', async (newUserName, { dispatch }) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUserName }),
    });

    const data = await response.json();
    console.log(data)
    console.log("username :", data.body.userName)
    dispatch(changeName(data.body))

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const userEditSlice = createSlice({
  name: 'userEdit',
  initialState: {
    isAuthenticated: false,
    profileData: {},
    error: null,
    isLoading: true,
    userName: '', 
  },
  reducers: {
    changeName: (state, action) => {
      state.isAuthenticated = true;
      state.profileData = action.payload;
      state.error = null;
      state.userName = action.payload.userName; 
      console.log('***********editSlice*************' +  action.payload.userName)
    },
  },
  
  extraReducers:(builder) => {
    builder
    .addCase(changeUserName.pending, (state) => {
      
      state.isLoading = true;
    })
    .addCase(changeUserName.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.isAuthenticated = true;
      state.profileData = action.payload;
      state.error = null;
      state.userName = action.payload.userName; 
    })
    .addCase(changeUserName.rejected, (state) => {
      
      state.isLoading = false;
      state.error = 'An error occurred while changing the user name.';
    });
  }
   
});

export const { changeName } =  userEditSlice.actions;

export default userEditSlice.reducer;
