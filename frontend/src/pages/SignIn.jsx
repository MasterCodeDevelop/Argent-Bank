import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function SignIn() {
  return (
    <main id="signin" className="signin">
      <section className="signin-content">
        <h1 className="signin-title">
          <FontAwesomeIcon icon={faUserCircle} className="signin-icon" />
          Sign In
        </h1>
        <form className="signin-form">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="signin-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}
