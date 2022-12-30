import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

export default function Profil() {
  const { user } = useSelector((state) => state.user);

  return (
    <main id="profil" className="profil">
      {!user ? <Loading /> : <>USER:{user.firstName}</>}
    </main>
  );
}
