/**
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginSuccess, loginFailure } from '../redux/reducers/authSlice';


export const loginUser = createAsyncThunk('auth/login', async ({ email, password }, {dispatch}) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.body.token;

      sessionStorage.setItem('token', token);

      const getUserProfile = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (getUserProfile.ok) {
        const profileData = await getUserProfile.json();
        console.log("profileData: ", profileData.body);

        dispatch(loginSuccess(profileData.body));
        window.location.href = '/profile'

        return;
      } else {
        const errorData = await getUserProfile.json();
        throw new Error(errorData.message || 'Failed to fetch profile data');
      }
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }
  } catch (error) {
    dispatch(loginFailure(error.message || 'Login failed'));
    throw error;
  }
});

 */