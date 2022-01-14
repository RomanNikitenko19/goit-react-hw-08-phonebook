import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import NavPhoneBook from '../NavPhoneBook/NavPhoneBook';
import UserMenu from '../UserMenu/UserMenu';
import s from "./AppBar.module.css";

const AppBar = () => {
  const isloggedInUser = useSelector((state) => state.auth.isloggedInUser);
  return (
    <>
      <header className={s.section}>
        <div className={s.container}>
          <NavPhoneBook />
          {isloggedInUser ? <UserMenu /> : <Navigation />}
        </div>
      </header>
    </>
  );
};

export default AppBar;