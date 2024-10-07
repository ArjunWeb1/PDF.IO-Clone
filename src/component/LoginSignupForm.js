// src/component/LoginSignupForm.js

import React, { useState } from 'react';
import '../Css/LoginSignupForm.css'; // Ensure this path is correct

const LoginSignupForm = ({ closeForm }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
  };

  const showForgotPassword = () => {
    setIsForgotPassword(true);
  };

  return (
    <div className="login-signup-form">
      <button className="close-button" onClick={closeForm}>X</button>
      <img 
        src="https://clipartcraft.com/images/google-logo-transparent-cute.png" 
        alt="Login/Sign Up" 
        className="form-image" 
      />
      {!isForgotPassword ? (
        <>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
          {isLogin && (
            <p className="forgot-password">
              <button className="forgot-password-button" onClick={showForgotPassword}>
                Forgot Password?
              </button>
            </p>
          )}
          <p>
            {isLogin ? 'New user?' : 'Already have an account?'}{' '}
            <button className="toggle-button" onClick={toggleForm}>
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </>
      ) : (
        <>
          <h2>Reset Password</h2>
          <form>
            <div className="form-group">
              <label htmlFor="reset-email">Email:</label>
              <input type="email" id="reset-email" name="reset-email" required />
            </div>
            <button type="submit">Reset Password</button>
          </form>
          <p>
            Remembered your password?{' '}
            <button className="toggle-button" onClick={() => setIsForgotPassword(false)}>
              Login
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default LoginSignupForm;
