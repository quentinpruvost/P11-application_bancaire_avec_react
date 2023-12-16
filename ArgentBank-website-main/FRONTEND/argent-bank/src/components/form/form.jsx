import React, { useState } from "react";
// import Button from "../button/button";
// import { login } from "../../api/fetch"

import { useDispatch } from "react-redux";
// import { loginUser } from '../../api/authThunk';
import { getloginUser } from '../../redux/reducers/test';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate(); 

  // Send actions to the redux store. 
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    //dispatch(loginUser({email, password}));
    dispatch(getloginUser({email, password}))
      .then(() => {
        navigate('/profile')
      })
      .catch((error) => {})
    

  }
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
