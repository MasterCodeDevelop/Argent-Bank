import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';

export default function Profile() {
  const { user } = useSelector((state) => state.user);

  return (
    <main id="profile" className="profile">
      {!user ? (
        <Loading />
      ) : (
        <>
          <Welcome firstName={user.firstName} lastName={user.lastName} />
        </>
      )}
    </main>
  );
}
