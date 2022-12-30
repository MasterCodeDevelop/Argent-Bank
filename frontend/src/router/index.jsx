import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import Error from '../pages/Error';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../slices/user';

export default function Router() {
  const dispatch = useDispatch(),
    { token } = useSelector((state) => state.auth),
    { user } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (token && !user) dispatch(getUser({ token }));
  }, [token, user]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {token ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </>
        )}
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
