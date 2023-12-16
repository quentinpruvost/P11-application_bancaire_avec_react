import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = sessionStorage.getItem('token');

  if (!token) {
    // Redirect to the home page if no token is found
    return <Navigate to="/" />;
  }

  // Render the protected component (User) if a token is present
  return children;
}

export default PrivateRoute;
