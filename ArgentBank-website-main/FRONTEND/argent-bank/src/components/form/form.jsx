import React, { useState } from "react";
// import Button from "../button/button";
import { login } from "../../redux/reducers/userReducer"
import { useDispatch } from 'react-redux';

function Form() {
  // Send actions to the redux store. 
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({email, password}))
    
  }

  return (
    <section className="sign-in-content">
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
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <input type="submit" onClick={handleLogin} value="Sign In" className="sign-in-button" />
        
        
      </form>
    </section>
  );
}

export default Form;

/**
 * 
 * <Button
          type="submit"
          text="Sign In"
          classStyle="sign-in-button"
        />
 * 
 */