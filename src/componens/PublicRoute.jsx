import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ children, redirectTo = '/', restricted = false, ...routeProps }) => {
  const isloggedInUser = useSelector((state) => state.auth.isloggedInUser);
  const shouldRedirect = isloggedInUser && restricted;
  return (
    <>
      <Route {...routeProps}>
        {shouldRedirect ? <Redirect to={redirectTo}/> : children }
      </Route>
    </>
  );
};

export default PublicRoute;