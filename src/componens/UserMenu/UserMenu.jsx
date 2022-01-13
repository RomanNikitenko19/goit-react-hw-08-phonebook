import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import Title from '../Title';


const UserMenu = () => {
  const token = useSelector(state => state.auth.token);
  const name = useSelector(state => state.auth.user.name);
  const dispath = useDispatch();

  return (
    <div>
      <Title title={`Welcome  ${name}`} /> <button type='button' onClick={() => dispath(logout(token))}>Exit</button>
    </div>
  );
};

export default UserMenu;