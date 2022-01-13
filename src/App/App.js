import { Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../redux/auth/authOperations";
import MyLoader from "../componens/UI/Loader/MyLoader";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import AppBar from "../componens/AppBar/AppBar";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import HomePage from "../pages/HomePage/HomePage";

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
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/register">
                {/* isLoggedIn ? <RegistrationPage />: <Redirect to="/login" /> */}
                <RegistrationPage />
              </Route>
              <Route exact path="/contacts">
                <ContactsPage />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
