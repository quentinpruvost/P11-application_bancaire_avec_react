// Import hooks from react and redux librairy
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getloginUser } from '../../redux/reducers-And-Fetchs/authSlice';

// Import the store 
import store from '../../redux/store'

// This is the Form component that is used to the Login page 
function Form() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  /**
   * @variable email set with value ''
   * @function setEmail - responsible to change the value
   */
  const [email, setEmail] = useState('');
  /**
   * @variable password set with value ''
   * @function setPassword - responsible to change the value
   */
  const [password, setPassword] = useState('');

  /**
   * @function handleLogin with 'e' as parameter
   * 
   */
  const handleLogin = (e) => {
    // Prevent the page refreash when form is submitted
    e.preventDefault();
    // Send the email and password information with the getloginUser action
    dispatch(getloginUser({ email, password }))

    .then(() => {
      // use getState to access the state in the store
      const isAuthenticated = store.getState().auth.isAuthenticated;
      // check if the user is Authenticated
      if (isAuthenticated) {
        // Redirect to the profile page if successful login
        navigate('/profile');
      } 
    })   
  };

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
