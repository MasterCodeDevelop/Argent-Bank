import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function SignIn() {
  return (
    <main id="signin" className="auth">
      <section className="auth-content">
        <h1 className="auth-title">
          <FontAwesomeIcon icon={faUserCircle} className="auth-icon" />
          Sign In
        </h1>
        <form className="auth-form">
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
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
