import React, { Suspense, useEffect, lazy } from "react";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../redux/auth/authOperations";
import PrivateRoute from "../componens/PrivateRoute";
import PublicRoute from "../componens/PublicRoute";
import AppBar from "../componens/AppBar/AppBar";
import MyLoader from "../componens/UI/Loader/MyLoader";

const HomePage = lazy(() => import("../pages/HomePage/HomePage") /* webpackChunkName: "Home___Page" */);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage") /* webpackChunkName: "Login___Page" */);
const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage") /* webpackChunkName: "Registration___Page" */);
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage") /* webpackChunkName: "Contacts___Page" */);

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isFetchCurrentUser = useSelector((state) => state.auth.isFetchCurrentUser);

  useEffect(() => {
    if (!token) return;

    dispatch(getCurrent());
  }, [dispatch, token]);

  return (
    <>
      {!isFetchCurrentUser && (
        <>
          <AppBar />

          <Suspense fallback={<MyLoader />}>
            <Switch>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>

              <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>

              <PublicRoute exact path="/register" restricted>
                <RegistrationPage />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
