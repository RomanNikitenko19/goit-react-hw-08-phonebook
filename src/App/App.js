import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import MyLoader from "../componens/UI/Loader/MyLoader";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import Navigation from "../componens/Navigation"

const App = () => {
  return (
    <>
      <header>
        <Navigation/>
      </header>

      <Suspense fallback={<MyLoader />}>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            {/* isLoggedIn ? <RegistrationPage />: <Redirect to="/login" /> */}
            <RegistrationPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
