import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from "./NavPhoneBook.module.css";

const NavPhoneBook = () => {
  const isloggedInUser = useSelector((state) => state.auth.isloggedInUser);
  return (
    <>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink exact to="/" activeClassName={s.activeLink}>
              Home
            </NavLink>
          </li>
          {isloggedInUser && (
            <li>
              <NavLink exact to="/contacts" activeClassName={s.activeLink}>
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavPhoneBook;