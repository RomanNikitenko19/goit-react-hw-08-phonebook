import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import NavPhoneBook from '../NavPhoneBook/NavPhoneBook';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isloggedInUser = useSelector((state) => state.auth.isloggedInUser);
  return (
    <>
      <header>
        <NavPhoneBook />
        {isloggedInUser ? <UserMenu /> : <Navigation />}
      </header>
    </>
  );
};

export default AppBar;