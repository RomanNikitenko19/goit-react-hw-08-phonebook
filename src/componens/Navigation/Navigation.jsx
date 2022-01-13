import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav className={s.section}>
        <div className={s.container}>
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink to="/login" activeClassName={s.activeLink}>
                Login
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink to="/register" activeClassName={s.activeLink}>
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;