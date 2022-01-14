import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children,  redirectTo = '/', ...routeProps }) => {
  const isloggedInUser = useSelector((state) => state.auth.isloggedInUser);
  return (
    <>
      <Route {...routeProps}>
        {isloggedInUser ? children : <Redirect to={redirectTo} />}
      </Route>
    </>
  );
};

export default PrivateRoute;