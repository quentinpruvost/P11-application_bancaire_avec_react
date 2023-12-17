import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from '../redux/reducers/authSlice';
import { userEditSlice } from '../redux/reducers/userEditSlice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";  

export const persitConfig = {
  key:'root', 
  storage,
}; 

const rootReducer = combineReducers({
  auth:authSlice.reducer,
  userEdit: userEditSlice.reducer,
})

const persistedReducer = persistReducer(persitConfig, rootReducer); 

const store = configureStore({
  reducer: persistedReducer,
  });


export const persistor = persistStore(store)

export default store;
