import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import Title from '../UI/Title';
import s from "./UserMenu.module.css";


const UserMenu = () => {
  const token = useSelector(state => state.auth.token);
  const name = useSelector(state => state.auth.user.name);
  const dispath = useDispatch();

  return (
    <div className={s.container}>
      <Title
        title={`Welcome  ${name}`} /> <button className={s.button}type='button' onClick={() => dispath(logout(token))}>Exit</button>
    </div>
  );
};

export default UserMenu;