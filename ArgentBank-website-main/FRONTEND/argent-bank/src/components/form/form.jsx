import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { getloginUser } from '../../redux/reducers/authSlice';
import { useNavigate } from 'react-router-dom';
import store from '../../redux/store'

function Form() {
  const navigate = useNavigate(); 

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  //

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
  
    dispatch(getloginUser({ email, password }))
      .then(() => {
        // to use getState need to access the store
        const isAuthenticated = store.getState().auth.isAuthenticated;
        if (isAuthenticated) {
          // Redirect to /profile if successful login
          navigate('/profile');
        } else {
          // Handle unsuccessful login
          setError("Login failed at form.jsx, "); 
          console.log('error : ' , error)
        }
      })
      .catch((error) => {
        setError(error.message || 'Login failed');
      });
  };

  //
  /** 
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(getloginUser({email, password}))
      
    
     setTimeout(() => {
      navigate('/profile')
     }, 1500) ;
    
  }
  */

  return (
    <section className="sign-in-content" id="formWindow">
      <i className="fa fa-user-circle"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="useremail"> Email </label>
          <input
            type="email"
            id="useremail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p className="errorMessage" id="textErrorMessage"></p>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <input type="submit" value="Sign In" className="sign-in-button" />
        
        
      </form>
    </section>
  );
}

export default Form;
