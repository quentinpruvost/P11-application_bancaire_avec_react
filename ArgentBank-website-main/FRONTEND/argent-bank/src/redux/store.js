// Import functions to create and combine reducer 
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

// My redux slices 
import { authSlice } from './reducers-And-Fetchs/authSlice';

// Import 2 functions to manage the store persistence
import { persistStore, persistReducer } from "redux-persist";

// Import storage engine for redux Persist
import storage from "redux-persist/lib/storage";  

// Redux Persist configuration
export const persitConfig = {
  key:'root', 
  storage,
 
}; 

// Combine my slices into a rootReducer
const rootReducer = combineReducers({
  auth:authSlice.reducer,
})

// Create the persisted reducer with my slices and the configuration
const persistedReducer = persistReducer(persitConfig, rootReducer); 

// Store configuration
const store = configureStore({
  reducer: persistedReducer,
});

// Manage the persisting of the store
export const persistor = persistStore(store)

export default store;
