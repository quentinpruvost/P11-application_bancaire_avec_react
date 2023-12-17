/**
 * "createAsyncThunk" est une fonction provenant de toolkit qui simplifie le processus de 
 * création d'actions asynchrone dans Redux. 
 * 
 * 3 actions ("pending", 'fulfilled', "rejected")
 */ 
 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Export @variable getLoginUser avec createAsyncThunk 
 * 
 * @param(email, password), (dispatch)
 * "dispatch" is in the parameter to have direct access to the dispatch function 
 */
export const getloginUser = createAsyncThunk('auth/login', async ({ email, password }, { dispatch }) => {
  try {
    // Première requête "POST" pour authentifier un utilisateur avec email et password. 
    const loginResponse = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (loginResponse.ok) {
      // La réponse à la requête est stocké dans data
      const data = await loginResponse.json();

      // Récupère le token de connection de data pour l'enregistrer dans sessionStorage
      const token = data.body.token;
      sessionStorage.setItem('token', token);

      // Envoye la deuxième requête "POST" pour récupérer les informations de l'utilisateur avec le token
      const getUserProfileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (getUserProfileResponse.ok) {
        // Récupère les données de l'utilisateur dans profileData
        const profileData = await getUserProfileResponse.json();

        // Envoye les données dans le store avec l'action loginSuccess. 
        dispatch(loginSuccess(profileData.body)); 
        return
      } else {
        // Récupère un paragraphe avec id "textErrorMessage"
        const errorMessage = document.getElementById("textErrorMessage")
        // Récupère la fenêtre du form
        const signIn = document.getElementById("formWindow");

        // Envoye le messages d'erreur dans le store
        dispatch(fetchUserDataFailure("Error: Failed to load user data"))

        // Ajoute la classe "expended" à la fenêtre pour augmenter la longueur et afficher le message d'erreur
        signIn.classList.add("expanded")
        // Affiche le text du message d'erreur. 
        errorMessage.textContent = "Error: Failed to load user data";
      }
    } else {
      // Récupère un paragraphe avec id "textErrorMessage"
      const errorMessage = document.getElementById("textErrorMessage")
      // Récupère la fenêtre du form
      const signIn = document.getElementById("formWindow");

      // Extrait les données d'échec d'authentification 
      const errorData = await loginResponse.json();

      // Envoye les messages d'erreur dans le store 
      dispatch(loginFailure(errorData.message || 'login failed'))

      // Ajoute la classe "expended" à la fenêtre pour augmenter la longueur et afficher le message d'erreur
      signIn.classList.add("expanded")
      // Affiche le text du message d'erreur. 
      errorMessage.textContent = errorData.message || 'Login failed';
    }
  } 
  catch{
    // Récupère un paragraphe avec id "textErrorMessage"
    const errorMessage = document.getElementById("textErrorMessage")
    // Récupère la fenêtre du form
    const signIn = document.getElementById("formWindow");

    // Envoye les messages d'erreur dans le store 
    dispatch(generalFailure('An unexpected error occurred'));

    signIn.classList.add("expanded")
    // Affiche le text du message d'erreur. 
    errorMessage.textContent = 'An unexpected error occurred';
  } 
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    userName:"", 
    lastName:"",  
    firstName:'', 
    error:false,
    errorMessage: '',
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;

      state.userName = action.payload.userName 
      state.lastName = action.payload.lastName    
      state.firstName = action.payload.firstName  
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    fetchUserDataFailure:(state, action) => {
      state.isAuthenticated = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    generalFailure:(state, action) => {
      state.error = true;
      state.errorMessage = action.payload
    },
    logout:(state) => {
      state.isAuthenticated = false;
      state.userName = "";
      state.firstName = "";
      state.lastName = "";
    },
  },
});

export const { loginSuccess, loginFailure, logout, fetchUserDataFailure, generalFailure } = authSlice.actions;

export const sliceReducer = authSlice.actions;
