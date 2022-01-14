import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/auth/authOperations";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) return;

    const newUser = { name, email, password };
    dispatch(signup(newUser));
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input onChange={handleChange} value={name} type="text" name="name" placeholder="Enter Name" required />
        </label>
        <label>
          <span>Email</span>
          <input onChange={handleChange} value={email} type="email" name="email" placeholder="Enter email" required />
        </label>
        <label>
          <span>Password</span>
          <input
            onChange={handleChange}
            value={password}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;