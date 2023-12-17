import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

// Import the page components
import Login from './pages/login/login';
import Home from './pages/home/home';
import User from './pages/user/user';

// Import the PrivateRoute that is responsible for making the page "User" only 
// accessible for successful authenticated user
import PrivateRoute from './PrivateRoute/privateRoute';

function Rooter(){
  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} /> 
          <Route path="/profile" element={<PrivateRoute> <User /> </PrivateRoute>} />
        </Routes>
      </Router>
    </React.StrictMode>
  )
} 

export default Rooter