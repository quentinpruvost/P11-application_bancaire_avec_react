// Importe Navigate component use to navigate to different routes 
import { Navigate } from 'react-router-dom';

/**
 *  @component PrivateRoute - with (children) as prop
 * 
 *  Action of protecting a route only for authenticated users
 */
function PrivateRoute({ children }) {
  // Check the presence of a token in sessionStorage
  const token = sessionStorage.getItem('token');
  // If there is no token, then the user is redirected to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }
  // Return the children to be able to render the User page if the user is login. 
  // See the Rooter configuration for more detail. 
  return children;
}

export default PrivateRoute;
