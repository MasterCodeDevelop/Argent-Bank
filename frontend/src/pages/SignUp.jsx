import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

export default function SignUp() {
  return (
    <main id="signup" className="auth">
      <section className="auth-content">
        <h1 className="auth-title">
          <FontAwesomeIcon icon={faSignIn} className="auth-icon" />
          Sign Up
        </h1>
        <form className="auth-form">
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Last Name</label>
            <input type="email" id="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="auth-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}
