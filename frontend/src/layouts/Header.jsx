import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faSignIn,
  faUser,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/auth';

export default function Header() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <Link className="header-logo" to="/">
        <img src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <nav className="header-nav">
        {token ? (
          <>
            <NavLink to="./profil">
              <FontAwesomeIcon icon={faUser} /> {user ? user.firstName : ''}
            </NavLink>
            <Link to="/" onClick={() => dispatch(logout())}>
              <FontAwesomeIcon icon={faSignOut} />
              Sign Out
            </Link>
          </>
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
