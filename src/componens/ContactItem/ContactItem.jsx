import React from 'react';
import PropTypes from "prop-types";
import MyButton from '../UI/Button/MyButton';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, delContact }) => {
  return (
    <>
      <li className={s.Item}>
        {`${name}: ${number}`}
        <MyButton onClick={() => delContact(id)}>delete</MyButton>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  delContact: PropTypes.func.isRequired,
};

export default ContactItem;