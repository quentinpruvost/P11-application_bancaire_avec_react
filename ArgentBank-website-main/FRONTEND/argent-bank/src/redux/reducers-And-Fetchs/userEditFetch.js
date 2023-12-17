
import { createAsyncThunk } from "@reduxjs/toolkit";
// "newUserName" as parameter 
export const changeUserName = createAsyncThunk('user/changeUserName', async (newUserName) => {
  // Extract the token from sessionStorage 
  const token = sessionStorage.getItem('token');
  try {
    // Send a "PUT" request to change the user name 
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUserName }),
    });
 
    const data = await response.json();

    // Return the updated userName
    return data;
  } catch {
    console.error("Error : An error occured whith the Put request");
  }
});