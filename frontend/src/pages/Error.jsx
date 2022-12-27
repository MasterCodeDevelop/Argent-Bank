import React from 'react';
import { Link } from 'react-router-dom';
import iconInfinity from '../assets/svg/icon-infinity.svg';
export default function Error() {
  return (
    <main className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <img src={iconInfinity} alt="Infinity animation" />
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </main>
  );
}
