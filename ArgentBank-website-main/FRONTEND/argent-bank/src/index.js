import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.scss';
import reportWebVitals from './reportWebVitals';

// Permet de connecter React with Redux en rendant le store disponible
 import {Provider} from 'react-redux';  
 import store from './redux/store'; 

 import Rooter from './rooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Rooter /> 
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
