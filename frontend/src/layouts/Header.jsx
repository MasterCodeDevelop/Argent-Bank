import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faSignIn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

export default function Header() {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className="header">
      <Link className="header-logo" to="/">
        <img src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <nav className="header-nav">
        {user ? (
          <NavLink to="./profil">
            <FontAwesomeIcon icon={faUser} /> Profile
          </NavLink>
        ) : (
          <>
            <NavLink to="./sign-up">
              <FontAwesomeIcon icon={faSignIn} /> Sign Up
            </NavLink>
            <NavLink to="./sign-in">
              <FontAwesomeIcon icon={faUserCircle} /> Sign In
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
