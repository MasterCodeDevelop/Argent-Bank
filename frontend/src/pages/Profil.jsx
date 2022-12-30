import React from 'react';
import { updateUser } from '../slices/user';
import { useSelector, useDispatch } from 'react-redux';

export default function Profil() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (token) {
      dispatch(updateUser({ token })).unwrap().then().catch();
    }
  }, [token, user]);
  return (
    <main id="profil" className="profil">
      Profil page
      {user ? <>USER:{user.firstName}</> : <>Loading</>}
    </main>
  );
}
