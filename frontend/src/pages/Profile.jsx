import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

export default function Profile() {
  const { user } = useSelector((state) => state.user);

  return (
    <main id="profile" className="profile">
      {!user ? <Loading /> : <>USER:{user.firstName}</>}
    </main>
  );
}
