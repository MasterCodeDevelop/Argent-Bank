import React from 'react';
import { updateUser } from '../slices/user';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';

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
      {!user ? <Loading /> : <>USER:{user.firstName}</>}
    </main>
  );
}
