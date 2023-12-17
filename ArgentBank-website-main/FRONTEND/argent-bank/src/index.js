import React from 'react';
import ReactDOM from 'react-dom/client';

// Import my file that gather all the style in scss
import './main.scss';

// Allow to connect React with Redux by making the store available
import {Provider} from 'react-redux';  

// Persitor, allow to keep informations in the store even if the page is refreash  
import store, { persistor } from './redux/store'; 

// PersistGate help to process the persisting and rehydrating state
import { PersistGate } from 'redux-persist/integration/react'; 

// Import my rooter
import Rooter from './rooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <Rooter /> 
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


